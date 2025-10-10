'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, List } from 'lucide-react';
import { Button } from 'website/components/ui/button';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  minHeadings?: number;
}

export default function TableOfContents({
  content,
  minHeadings = 3,
}: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  // Extract headings from markdown content
  useEffect(() => {
    const extractedHeadings: Heading[] = [];
    const lines = content.split('\n');

    lines.forEach(line => {
      const match = line.match(/^(#{2,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '');

        extractedHeadings.push({ id, text, level });
      }
    });

    setHeadings(extractedHeadings);
  }, [content]);

  // Scroll spy functionality
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        // Find the entry with the highest intersection ratio
        let maxRatio = 0;
        let activeId = '';

        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeId = entry.target.id;
          }
        });

        if (activeId) {
          setActiveId(activeId);
        }
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    headings.forEach(heading => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach(heading => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  // Don't render if not enough headings
  if (headings.length < minHeadings) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update URL hash
      window.history.pushState(null, '', `#${id}`);
      setActiveId(id);

      // Close mobile menu after click
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Mobile: Collapsible TOC */}
      <div className="lg:hidden mb-8">
        <div
          className="relative rounded-3xl border-2 border-purple-200 bg-white p-6 shadow-lg"
          style={{
            borderRadius: '20px 25px 18px 28px',
          }}
        >
          {/* Decorative thumb tack */}
          <div className="absolute -top-2 right-8 h-4 w-4 -translate-x-1/2 transform">
            <div className="h-full w-full rounded-full bg-purple-400 shadow-sm" />
            <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          </div>

          <div className="pt-2">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="w-full flex items-center justify-between font-quicksand font-semibold text-lg hover:bg-purple-50"
              aria-expanded={isOpen}
              aria-controls="toc-content"
            >
              <div className="flex items-center gap-2">
                <List className="w-5 h-5 text-purple-600" />
                <span>Table of Contents</span>
              </div>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-purple-600" />
              ) : (
                <ChevronDown className="w-5 h-5 text-purple-600" />
              )}
            </Button>

            {isOpen && (
              <nav
                id="toc-content"
                className="mt-4 space-y-2"
                aria-label="Table of contents"
              >
                {headings.map(heading => (
                  <a
                    key={heading.id}
                    href={`#${heading.id}`}
                    onClick={e => handleClick(e, heading.id)}
                    className={`
                      block py-2 px-3 rounded-lg transition-all font-nunito text-sm
                      ${heading.level === 2 ? 'pl-3' : 'pl-6'}
                      ${
                        activeId === heading.id
                          ? 'bg-purple-100 text-purple-900 font-semibold'
                          : 'text-gray-600 hover:bg-purple-50 hover:text-purple-700'
                      }
                    `}
                    style={{
                      borderRadius: '8px 10px 7px 12px',
                    }}
                  >
                    {heading.text}
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>

      {/* Desktop: Sidebar TOC */}
      <div className="hidden lg:block">
        <div
          className="rounded-3xl border-2 border-purple-200 bg-white p-6 shadow-lg"
          style={{
            borderRadius: '20px 25px 18px 28px',
          }}
        >
          {/* Decorative thumb tack */}
          <div className="absolute -top-2 right-8 h-4 w-4 -translate-x-1/2 transform">
            <div className="h-full w-full rounded-full bg-purple-400 shadow-sm" />
            <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          </div>

          <div className="pt-2">
            <div className="flex items-center gap-2 mb-4">
              <List className="w-5 h-5 text-purple-600" />
              <h2 className="font-quicksand font-bold text-lg text-gray-900">
                Table of Contents
              </h2>
            </div>

            <nav className="space-y-2" aria-label="Table of contents">
              {headings.map(heading => (
                <a
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={e => handleClick(e, heading.id)}
                  className={`
                    block py-2 px-3 rounded-lg transition-all font-nunito text-sm
                    ${heading.level === 2 ? 'pl-3' : 'pl-6'}
                    ${
                      activeId === heading.id
                        ? 'bg-purple-100 text-purple-900 font-semibold border-l-2 border-purple-600'
                        : 'text-gray-600 hover:bg-purple-50 hover:text-purple-700'
                    }
                  `}
                  style={{
                    borderRadius: '8px 10px 7px 12px',
                  }}
                >
                  {heading.text}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
