"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  getPublishedFallback,
  type PublishedContent,
} from "@/lib/published-local";

const CmsContext = createContext<PublishedContent | null>(null);

export function CmsProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<PublishedContent>(() => getPublishedFallback());

  useEffect(() => {
    let cancelled = false;
    fetch("/api/published", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`CMS publish endpoint returned ${response.status}`);
        }
        return response.json() as Promise<PublishedContent>;
      })
      .then((published) => {
        if (cancelled || !published) return;
        const blogs =
          published.blogs?.length
            ? published.blogs
            : published.insights?.length
              ? published.insights
              : null;
        setValue((prev) => ({
          testimonials: published.testimonials?.length
            ? published.testimonials
            : prev.testimonials,
          blogs: blogs ?? prev.blogs,
          insights: blogs ?? prev.insights,
        }));
      })
      .catch((error) => {
        console.error("Safe Wheels CMS hydrate:", error);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
}

export function useCms() {
  const value = useContext(CmsContext);
  if (!value) {
    throw new Error("useCms must be used inside CmsProvider");
  }
  return value;
}
