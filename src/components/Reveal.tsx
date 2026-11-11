"use client";

import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Content stays visible always — no opacity:0 animations that can break in Chrome. */
export function Reveal({ children, className }: RevealProps) {
  return <div className={className}>{children}</div>;
}
