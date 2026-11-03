"use client";

import { FormEvent, useState } from "react";
import { vehiclePreferences } from "@/lib/data";
import { openWhatsApp } from "@/lib/whatsapp";

const initial = {
  pickup: "",
  drop: "",
  date: "",
  time: "",
  vehicle: vehiclePreferences[0],
  passengers: "1",
  name: "",
  phone: "",
};

export function BookingWidget({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState(initial);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.pickup.trim()) {
      setError("Please share your name, phone and pickup location.");
      return;
    }
    setError("");
    const message = [
      "Hello Safe Wheels, I would like to request a vehicle booking.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Pickup: ${form.pickup}`,
      `Drop: ${form.drop || "—"}`,
      `Travel Date: ${form.date || "—"}`,
      `Pickup Time: ${form.time || "—"}`,
      `Vehicle Preference: ${form.vehicle}`,
      `Passengers: ${form.passengers}`,
    ].join("\n");
    openWhatsApp(message);
  };

  const set =
    (key: keyof typeof initial) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <form
      id={compact ? undefined : "booking"}
      onSubmit={onSubmit}
      className={`rounded-3xl bg-white text-brand-black shadow-[0_20px_60px_rgba(0,0,0,0.12)] ${
        compact ? "p-5 md:p-6" : "p-6 md:p-8"
      }`}
      aria-label="Vehicle booking enquiry"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
            Booking Enquiry
          </p>
          <h3 className="mt-1 font-display text-2xl text-brand-black md:text-[1.75rem]">
            Plan Your Journey
          </h3>
        </div>
        <div className="ribbon-accent hidden sm:block" aria-hidden />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-1">
          <label className="field-label" htmlFor="pickup">
            Pickup Location
          </label>
          <input
            id="pickup"
            className="field"
            placeholder="Mysuru / Airport / Hotel"
            value={form.pickup}
            onChange={set("pickup")}
            required
          />
        </div>
        <div>
          <label className="field-label" htmlFor="drop">
            Drop Location
          </label>
          <input
            id="drop"
            className="field"
            placeholder="Destination"
            value={form.drop}
            onChange={set("drop")}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="date">
            Travel Date
          </label>
          <input
            id="date"
            type="date"
            className="field"
            value={form.date}
            onChange={set("date")}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="time">
            Pickup Time
          </label>
          <input
            id="time"
            type="time"
            className="field"
            value={form.time}
            onChange={set("time")}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="vehicle">
            Vehicle Preference
          </label>
          <select
            id="vehicle"
            className="field"
            value={form.vehicle}
            onChange={set("vehicle")}
          >
            {vehiclePreferences.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="passengers">
            Passengers
          </label>
          <input
            id="passengers"
            type="number"
            min={1}
            max={40}
            className="field"
            value={form.passengers}
            onChange={set("passengers")}
          />
        </div>
        <div>
          <label className="field-label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="field"
            placeholder="Your name"
            value={form.name}
            onChange={set("name")}
            required
          />
        </div>
        <div>
          <label className="field-label" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            className="field"
            placeholder="+91..."
            value={form.phone}
            onChange={set("phone")}
            required
          />
        </div>
      </div>

      {error ? (
        <p className="mt-3 text-sm text-brand-red" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-relaxed text-brand-grey">
          Submitting opens WhatsApp with your enquiry. Our team will confirm
          availability and details—no live payment on this form.
        </p>
        <button type="submit" className="btn-primary shrink-0">
          Request a Booking
        </button>
      </div>
    </form>
  );
}
