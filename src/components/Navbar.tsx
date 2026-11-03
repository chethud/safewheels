"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? "border-b border-black/5 bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            : "bg-white/95"
        }`}
      >
        <div className="section-pad">
          <div className="container-wide grid h-[72px] grid-cols-[1fr_auto] items-center gap-4 md:h-[80px] lg:grid-cols-[1fr_auto_1fr]">
            <Link
              href="/"
              className="relative z-10 flex shrink-0 items-center justify-self-start"
            >
              <Image
                src="/images/logo.webp"
                alt="Safe Wheels Tours & Travels"
                width={148}
                height={86}
                className="h-11 w-auto rounded-xl object-contain md:h-12"
                priority
              />
            </Link>

            <nav
              className="hidden items-center justify-center gap-x-5 lg:flex xl:gap-x-7"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-black/75 hover:text-brand-black"
                  data-active={isActive(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block" aria-hidden />

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-xl border border-black/10 text-brand-black lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 bg-white transition-transform duration-300 md:top-[80px] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav
          className="section-pad flex h-full flex-col gap-1 overflow-y-auto py-8"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-black/5 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-black"
              data-active={isActive(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
