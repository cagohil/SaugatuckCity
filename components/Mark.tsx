// Emblem: the dune, the river mouth and the low sun — drawn as one mark.
export default function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden fill="none">
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="26" cy="15" r="4.2" fill="var(--color-ember)" />
      <path d="M4.5 26c5-7.5 10-10 15.5-6.5S29 26 35.5 23" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 30.5c3-.9 5.5.9 8.5 0s5.5-.9 8.5 0 5.5.9 8.5 0" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
