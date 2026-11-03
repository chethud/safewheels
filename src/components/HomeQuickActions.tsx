"use client";

import Link from "next/link";
import { CalendarDays, CarFront, MapPinned } from "lucide-react";
import { Reveal } from "./Reveal";

const actions = [
  {
    href: "/book",
    label: "Book Vehicle",
    detail: "Reserve cars, taxis and transfers",
    icon: CarFront,
  },
  {
    href: "/services",
    label: "Domestic & International Tours",
    detail: "Planned journeys across India and beyond",
    icon: CalendarDays,
  },
  {
    href: "/tourist-places",
    label: "In & Around Mysuru Packages",
    detail: "Local sightseeing and nearby escapes",
    icon: MapPinned,
  },
] as const;

export function HomeQuickActions() {
  return (
    <section className="relative z-10 -mt-10 bg-transparent pb-2 md:-mt-12 md:pb-3">
      <div className="section-pad">
        <div className="container-wide">
          <div className="grid gap-4 md:grid-cols-3">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Reveal key={action.href} delay={index * 0.08}>
                  <Link
                    href={action.href}
                    className="group flex h-full items-center gap-4 rounded-3xl border border-black/6 bg-white px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-brand-red/20"
                  >
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-grey-light text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
                      <Icon size={24} strokeWidth={1.75} />
                    </span>
                    <span>
                      <span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-brand-black">
                        {action.label}
                      </span>
                      <span className="mt-1 block text-sm leading-snug text-brand-grey">
                        {action.detail}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
