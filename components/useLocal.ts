"use client";

import { useEffect, useState } from "react";

const TZ = "America/Detroit";

export function useSaugatuckClock() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000 * 15);
    return () => clearInterval(id);
  }, []);

  if (!now) return { time: "--:--", open: null as boolean | null, weekday: "" };

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    hour: "numeric",
    minute: "2-digit",
    weekday: "short",
    hour12: true,
  }).formatToParts(now);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const time = `${get("hour")}:${get("minute")} ${get("dayPeriod")}`;
  const weekday = get("weekday");

  const h24 = Number(new Intl.DateTimeFormat("en-US", { timeZone: TZ, hour: "numeric", hour12: false }).format(now)) % 24;
  const m = Number(new Intl.DateTimeFormat("en-US", { timeZone: TZ, minute: "numeric" }).format(now));
  const mins = h24 * 60 + m;
  // City Hall: Mon–Fri, 8:30 am – 5:00 pm
  const open = !["Sat", "Sun"].includes(weekday) && mins >= 8 * 60 + 30 && mins < 17 * 60;

  return { time, open, weekday };
}

export type Conditions = {
  temp: number;
  wind: number;
  code: number;
  sunset: string;
};

const WMO: Record<number, string> = {
  0: "Clear", 1: "Mostly clear", 2: "Partly cloudy", 3: "Overcast",
  45: "Fog", 48: "Fog", 51: "Drizzle", 53: "Drizzle", 55: "Drizzle",
  61: "Light rain", 63: "Rain", 65: "Heavy rain", 71: "Light snow", 73: "Snow", 75: "Heavy snow",
  77: "Snow grains", 80: "Showers", 81: "Showers", 82: "Heavy showers",
  85: "Snow showers", 86: "Snow showers", 95: "Thunderstorm", 96: "Thunderstorm", 99: "Thunderstorm",
};
export const describe = (code: number) => WMO[code] ?? "—";

export function useConditions() {
  const [c, setC] = useState<Conditions | null>(null);
  useEffect(() => {
    const ctrl = new AbortController();
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=42.6556&longitude=-86.2034&current=temperature_2m,wind_speed_10m,weather_code&daily=sunset&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FDetroit&forecast_days=1",
      { signal: ctrl.signal }
    )
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        const sunsetIso: string = d.daily?.sunset?.[0] ?? "";
        const [hh, mm] = sunsetIso.split("T")[1]?.split(":") ?? [];
        const h = Number(hh);
        setC({
          temp: Math.round(d.current.temperature_2m),
          wind: Math.round(d.current.wind_speed_10m),
          code: d.current.weather_code,
          sunset: hh ? `${((h + 11) % 12) + 1}:${mm} ${h >= 12 ? "PM" : "AM"}` : "—",
        });
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, []);
  return c;
}
