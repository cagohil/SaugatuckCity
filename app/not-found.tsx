import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-gutter flex min-h-[80vh] flex-col justify-center pt-32">
      <p className="eyebrow text-ink/50">404</p>
      <h1 className="display mt-4 text-[clamp(3rem,10vw,9rem)]">
        Lost in the <span className="display-italic text-sun">dunes.</span>
      </h1>
      <Link href="/" className="mt-8 eyebrow link-underline self-start">Back to town →</Link>
    </section>
  );
}
