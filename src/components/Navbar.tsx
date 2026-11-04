"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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

  const solid = scrolled || open || !isHome;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid
            ? "border-b border-black/5 bg-white/85 shadow-[0_10px_40px_rgba(23,23,23,0.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="section-pad">
          <div className="container-wide flex h-[72px] items-center justify-between gap-4 md:h-[84px]">
            <Link href="/" className="relative z-10 flex shrink-0 items-center">
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
              className="hidden items-center gap-x-6 lg:flex xl:gap-x-8"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link whitespace-nowrap text-[12px] font-medium tracking-[0.04em] text-brand-black/70 hover:text-brand-black"
                  data-active={isActive(link.href)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <a
                href={`tel:${siteConfig.phoneMainTel}`}
                className="inline-flex items-center gap-2 text-[13px] font-medium text-brand-black/75 transition hover:text-brand-black"
              >
                <Phone size={15} className="text-brand-red" />
                {siteConfig.phoneMain}
              </a>
              <Link href="/book" className="btn-primary !py-2.5 !text-[12px]">
                Book Now <ArrowUpRight size={15} />
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 text-brand-black backdrop-blur lg:hidden"
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
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 bg-brand-cream transition-transform duration-300 md:top-[84px] lg:hidden ${
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
              className="border-b border-black/5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-brand-black"
              data-active={isActive(link.href)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${siteConfig.phoneMainTel}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-black"
          >
            <Phone size={16} className="text-brand-red" />
            {siteConfig.phoneMain}
          </a>
          <Link href="/book" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Book Now <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </>
  );
}
