'use client';

import React, { useState } from 'react';
import { Button } from './button';
import {
  Twitter,
  Facebook,
  Linkedin,
  MessageCircle,
  Link,
  Share2,
  CheckCircle2,
  X,
} from 'lucide-react';
import { cn } from 'website/lib/utils';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
  hashtags?: string[];
  className?: string;
}

interface SharePlatform {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  borderColor: string;
  hoverBorderColor: string;
  iconColor: string;
  shareUrl: (
    url: string,
    title: string,
    description?: string,
    hashtags?: string[]
  ) => string;
  isMobile?: boolean;
}

const platforms: SharePlatform[] = [
  {
    name: 'Twitter',
    icon: Twitter,
    borderColor: 'border-blue-400',
    hoverBorderColor: 'hover:border-blue-500',
    iconColor: 'text-blue-400',
    shareUrl: (url, title, description, hashtags = []) => {
      const text = encodeURIComponent(
        `${title}${description ? `\n\n${description}` : ''}`
      );
      const hashtagsStr =
        hashtags.length > 0 ? `&hashtags=${hashtags.join(',')}` : '';
      return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${text}${hashtagsStr}`;
    },
  },
  {
    name: 'Facebook',
    icon: Facebook,
    borderColor: 'border-blue-600',
    hoverBorderColor: 'hover:border-blue-700',
    iconColor: 'text-blue-600',
    shareUrl: url =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    borderColor: 'border-blue-700',
    hoverBorderColor: 'hover:border-blue-800',
    iconColor: 'text-blue-700',
    shareUrl: (url, title, description) => {
      const params = new URLSearchParams({
        url: url,
        title: title,
        summary: description || '',
      });
      return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`;
    },
  },
  {
    name: 'WhatsApp',
    icon: MessageCircle,
    borderColor: 'border-green-400',
    hoverBorderColor: 'hover:border-green-500',
    iconColor: 'text-green-400',
    isMobile: true,
    shareUrl: (url, title) => {
      const text = encodeURIComponent(`${title}\n\n${url}`);
      return `https://wa.me/?text=${text}`;
    },
  },
];

export const SocialShare: React.FC<SocialShareProps> = ({
  url,
  title,
  description,
  hashtags = [],
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = (platform: SharePlatform) => {
    const shareUrl = platform.shareUrl(url, title, description, hashtags);

    // Check if Web Share API is available (mobile)
    if (navigator.share && platform.isMobile) {
      navigator
        .share({
          title: title,
          text: description,
          url: url,
        })
        .catch(() => {
          // Fallback to opening URL
          window.open(shareUrl, '_blank', 'noopener,noreferrer');
        });
    } else {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }

    // Track analytics
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window !== 'undefined' && (window as any).gtag) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).gtag('event', 'share', {
        method: platform.name.toLowerCase(),
        content_type: 'article',
        item_id: url,
      });
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);

      // Track analytics
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== 'undefined' && (window as any).gtag) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).gtag('event', 'share', {
          method: 'copy_link',
          content_type: 'article',
          item_id: url,
        });
      }
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className={cn('relative', className)}>
      {/* Main Share Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="ghost"
        size="sm"
        className={cn(
          'gap-2 text-gray-600 hover:text-gray-800 font-quicksand border-transparent hover:border-blue-200',
          isOpen && 'bg-blue-50 border-blue-200 text-blue-600'
        )}
        style={{
          borderRadius: '10px 14px 12px 16px',
        }}
        aria-label="Share this article"
        aria-expanded={isOpen}
      >
        <Share2 className="h-4 w-4" />
        Share Article
      </Button>

      {/* Share Options Modal/Dropdown */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Share Options */}
          <div
            className="absolute bottom-full right-0 mb-2 z-50 w-72 rounded-3xl border-2 border-blue-200 bg-white p-6 shadow-xl"
            style={{
              borderRadius: '20px 25px 18px 30px',
            }}
          >
            {/* Thumb tack */}
            <div className="absolute -bottom-2 right-8 h-4 w-4 rotate-180 transform">
              <div className="h-full w-full rounded-full bg-blue-400 shadow-sm" />
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close share options"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>

            {/* Title */}
            <h3
              className="text-lg font-bold mb-4 text-gray-900 font-quicksand pr-8"
              style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              Share this article
            </h3>

            {/* Platform buttons */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {platforms.map(platform => {
                const Icon = platform.icon;
                return (
                  <button
                    key={platform.name}
                    onClick={() => handleShare(platform)}
                    className={cn(
                      'flex items-center gap-2 p-3 rounded-xl bg-white border-2 font-semibold transition-all hover:shadow-md hover:-translate-y-0.5 font-quicksand text-sm hover:bg-gray-50',
                      platform.borderColor,
                      platform.hoverBorderColor,
                      platform.iconColor
                    )}
                    style={{
                      borderRadius: '12px 14px 12px 16px',
                    }}
                    aria-label={`Share on ${platform.name}`}
                  >
                    <Icon className={cn('h-4 w-4', platform.iconColor)} />
                    {platform.name}
                  </button>
                );
              })}
            </div>

            {/* Copy Link Button */}
            <Button
              onClick={handleCopyLink}
              variant="outline"
              className={cn(
                'w-full gap-2 border-gray-200 hover:bg-gray-50 font-quicksand',
                copied && 'bg-green-50 border-green-200 text-green-700'
              )}
              style={{
                borderRadius: '12px 16px 14px 18px',
              }}
            >
              {copied ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Link Copied!
                </>
              ) : (
                <>
                  <Link className="h-4 w-4" />
                  Copy Link
                </>
              )}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default SocialShare;
