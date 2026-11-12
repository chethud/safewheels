"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  ArrowLeftRight,
  ArrowRight,
  CalendarDays,
  MapPin,
  Users,
} from "lucide-react";
import { vehiclePreferences } from "@/lib/data";
import { openWhatsApp } from "@/lib/whatsapp";

const tabs = [
  "Book a Cab",
  "Airport Transfer",
  "Tour Package",
  "Vehicle Rental",
] as const;

type Tab = (typeof tabs)[number];

const passengerOptions = ["1 - 4", "5 - 7", "8 - 12", "13+"];

export function BookingWidget({ compact = false }: { compact?: boolean }) {
  const [tab, setTab] = useState<Tab>("Book a Cab");
  const [from, setFrom] = useState("Mysuru");
  const [to, setTo] = useState("Bengaluru");
  const [date, setDate] = useState("");
  const [passengers, setPassengers] = useState(passengerOptions[0]);
  const [vehicle, setVehicle] = useState<string>(vehiclePreferences[0]);
  const [days, setDays] = useState("3");
  const [error, setError] = useState("");

  const labels = useMemo(() => {
    if (tab === "Airport Transfer") {
      return { from: "Pickup", to: "Airport / City", date: "Transfer Date" };
    }
    if (tab === "Tour Package") {
      return { from: "Starting City", to: "Destination", date: "Travel Date" };
    }
    if (tab === "Vehicle Rental") {
      return { from: "Pickup Location", to: "Drop Location", date: "Pickup Date" };
    }
    return { from: "From", to: "To", date: "Travel Date" };
  }, [tab]);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!from.trim() || !to.trim() || !date) {
      setError("Please fill From, To and Travel Date.");
      return;
    }
    setError("");
    const message = [
      `Hello Safe Wheels, I would like to enquire about: ${tab}.`,
      "",
      `${labels.from}: ${from}`,
      `${labels.to}: ${to}`,
      `${labels.date}: ${date}`,
      tab === "Tour Package" ? `Days: ${days}` : null,
      tab === "Vehicle Rental" ? `Vehicle Preference: ${vehicle}` : null,
      `Passengers: ${passengers}`,
    ]
      .filter(Boolean)
      .join("\n");
    openWhatsApp(message);
  };

  return (
    <form
      id={compact ? undefined : "booking"}
      onSubmit={onSubmit}
      className="rounded-[1.5rem] border border-black/[0.04] bg-white p-4 shadow-[0_28px_80px_rgba(23,23,23,0.14)] md:rounded-[1.65rem] md:p-5 lg:p-6"
      aria-label="Vehicle booking enquiry"
    >
      <div
        className="mb-4 flex gap-1 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Booking type"
      >
        {tabs.map((item) => {
          const active = item === tab;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => {
                setTab(item);
                setError("");
              }}
              className={`shrink-0 rounded-full px-4 py-2 text-[12px] font-semibold transition ${
                active
                  ? "bg-brand-red text-white shadow-[0_8px_20px_rgba(197,30,36,0.28)]"
                  : "bg-transparent text-brand-black/50 hover:bg-brand-cream-deep hover:text-brand-black"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="grid items-end gap-3 lg:grid-cols-[minmax(0,1.15fr)_auto_minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,0.95fr)_auto]">
        <div>
          <label className="field-label" htmlFor="booking-from">
            {labels.from}
          </label>
          <div className="relative">
            <MapPin
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-red"
            />
            <input
              id="booking-from"
              className="field !rounded-2xl !border-[#ebe6e2] !bg-[#fbfaf9] !pl-10 !py-3.5"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Mysuru"
              required
            />
          </div>
        </div>

        <button
          type="button"
          onClick={swap}
          className="mb-1 hidden h-12 w-12 items-center justify-center self-end rounded-full border border-[#ebe6e2] bg-white text-brand-black transition hover:border-brand-red hover:text-brand-red lg:inline-flex"
          aria-label="Swap locations"
        >
          <ArrowLeftRight size={16} />
        </button>

        <div>
          <label className="field-label" htmlFor="booking-to">
            {labels.to}
          </label>
          <div className="relative">
            <MapPin
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-red"
            />
            <input
              id="booking-to"
              className="field !rounded-2xl !border-[#ebe6e2] !bg-[#fbfaf9] !pl-10 !py-3.5"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Bengaluru"
              required
            />
          </div>
        </div>

        <div>
          <label className="field-label" htmlFor="booking-date">
            {labels.date}
          </label>
          <div className="relative">
            <CalendarDays
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-red"
            />
            <input
              id="booking-date"
              type="date"
              className="field !rounded-2xl !border-[#ebe6e2] !bg-[#fbfaf9] !pl-10 !py-3.5"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
        </div>

        {tab === "Tour Package" ? (
          <div>
            <label className="field-label" htmlFor="booking-days">
              Days
            </label>
            <input
              id="booking-days"
              type="number"
              min={1}
              max={30}
              className="field !rounded-2xl !border-[#ebe6e2] !bg-[#fbfaf9] !py-3.5"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
          </div>
        ) : tab === "Vehicle Rental" ? (
          <div>
            <label className="field-label" htmlFor="booking-vehicle">
              Vehicle
            </label>
            <select
              id="booking-vehicle"
              className="field !rounded-2xl !border-[#ebe6e2] !bg-[#fbfaf9] !py-3.5"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            >
              {vehiclePreferences.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div>
            <label className="field-label" htmlFor="booking-passengers">
              Passengers
            </label>
            <div className="relative">
              <Users
                size={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-red"
              />
              <select
                id="booking-passengers"
                className="field !rounded-2xl !border-[#ebe6e2] !bg-[#fbfaf9] !pl-10 !py-3.5"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              >
                {passengerOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="btn-primary h-[52px] w-full whitespace-nowrap !rounded-2xl !px-6 lg:mb-0.5 lg:min-w-[200px] lg:w-auto"
        >
          Enquiry <ArrowRight size={16} />
        </button>
      </div>

      {(tab === "Tour Package" || tab === "Vehicle Rental") && (
        <div className="mt-3 max-w-xs">
          <label className="field-label" htmlFor="booking-passengers-extra">
            Passengers
          </label>
          <select
            id="booking-passengers-extra"
            className="field !rounded-2xl !border-[#ebe6e2] !bg-[#fbfaf9] !py-3.5"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          >
            {passengerOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      )}

      {error ? (
        <p className="mt-3 text-sm text-brand-red" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
