import Image from "next/image";
import Link from "next/link";
import { navLinks, services, siteConfig } from "@/lib/data";

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14 8h3V4.5C16.3 4.35 15.2 4.25 14.1 4.25 11.4 4.25 9.5 5.9 9.5 9v2H6.5v4H9.5V22h4V15h3.1l.5-4H13.5V9.4c0-1.1.3-1.4 1.5-1.4Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white text-brand-black">
      <div className="section-pad py-12 md:py-16">
        <div className="container-wide grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.webp"
              alt="Safe Wheels Tours & Travels"
              width={170}
              height={98}
              className="h-16 w-auto rounded-2xl object-contain"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-grey">
              Safe, reliable and hassle-free travel from Mysuru since 1999—
              serving families, guests and corporate travellers with care.
            </p>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 text-brand-black/70 transition hover:border-brand-red hover:text-brand-red"
              aria-label="Safe Wheels on Facebook"
            >
              <FacebookIcon />
            </a>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-grey">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-black/70 transition hover:text-brand-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-grey">
              Our Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-sm text-brand-black/70 transition hover:text-brand-red"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-grey">
              Contact
            </h3>
            <div className="mt-5 space-y-3 text-sm text-brand-black/70">
              <p>
                {siteConfig.address.title}
                <br />
                {siteConfig.address.lines.join(" ")}
              </p>
              <a
                href={`tel:${siteConfig.phoneMainTel}`}
                className="block transition hover:text-brand-red"
              >
                {siteConfig.phoneMain}
              </a>
              <a
                href={`mailto:${siteConfig.emails.rentals}`}
                className="block transition hover:text-brand-red"
              >
                {siteConfig.emails.rentals}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-black/8">
        <div className="section-pad py-5">
          <div className="container-wide flex flex-col gap-2 text-xs text-brand-grey sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Safe Wheels Tours & Travels. All Rights Reserved.</p>
            <p className="tracking-[0.12em] uppercase">Mysuru · Est. 1999</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
