// Inspired by react-hot-toast library
import * as React from "react";

import type {
  ToastActionElement,
  ToastProps,
} from "website/components/ui/toast";

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000 * 5;

export type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  variant?: "default" | "destructive" | "success"
};

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

type ActionType = "add" | "remove" | "update";

type ToastActionType = {
  type: ActionType;
  toast: ToasterToast;
};

type ToastState = {
  toasts: ToasterToast[];
};

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

// Utility to handle toast removal (not directly used)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "remove",
      toast: { id: toastId },
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: ToastState, action: ToastActionType): ToastState => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        toasts: [
          ...state.toasts,
          { ...action.toast, id: action.toast.id || genId() },
        ].slice(-TOAST_LIMIT),
      };

    case "remove":
      if (action.toast.id === undefined) {
        return { ...state };
      }

      return {
        ...state,
        toasts: state.toasts.filter(
          (t) => t.id !== action.toast.id,
        ),
      };

    case "update":
      if (action.toast.id === undefined) {
        return { ...state };
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id
            ? { ...t, ...action.toast }
            : t
        ),
      };

    default:
      return state;
  }
};

const listeners: Array<(state: ToastState) => void> = [];

let memoryState: ToastState = { toasts: [] };

function dispatch(action: ToastActionType) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toast({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      type: "update",
      toast: { ...props, id },
    });

  const dismiss = () => dispatch({ type: "remove", toast: { id } });

  dispatch({
    type: "add",
    toast: {
      ...props,
      id,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
}

function useToast() {
  const [state, setState] = React.useState<ToastState>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => {
      if (toastId) {
        dispatch({ type: "remove", toast: { id: toastId } });
      }
    },
  };
}

export { useToast, toast };
