"use client";

import { useSyncExternalStore } from "react";

// Intro done by default so page loads immediately without blocking
let done = true;
const subs = new Set<() => void>();

export function markIntroDone() {
  if (done) return;
  done = true;
  subs.forEach((f) => f());
}

export function useIntroDone() {
  return useSyncExternalStore(
    (cb) => {
      subs.add(cb);
      return () => subs.delete(cb);
    },
    () => done,
    () => true
  );
}
