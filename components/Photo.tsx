"use client";

import { useState, useRef, useEffect } from "react";
import { img } from "@/lib/content";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  style?: React.CSSProperties;
  tone?: "light" | "dark";
};

// Photos are served straight from the city's upload folder. Weebly keeps an
// "_orig" full-size copy beside most images; if one is missing we fall back to
// the display-size file, and finally to a tinted plate so layouts never collapse.
export default function Photo({ src, alt, className = "", imgClassName = "", priority, style, tone = "light" }: Props) {
  const full = src.startsWith("http") ? src : img(src);
  const [current, setCurrent] = useState(full);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [current]);

  const onError = () => {
    if (current.includes("_orig")) setCurrent(current.replace("_orig", ""));
    else setFailed(true);
  };

  return (
    <div className={`${/\babsolute\b/.test(className) ? "" : "relative"} overflow-hidden ${loaded || priority ? (tone === "dark" ? "bg-ink" : "bg-paper-2") : tone === "dark" ? "img-shimmer-dark" : "img-shimmer"} ${className}`} style={style}>
      {failed ? (
        <div className="absolute inset-0 flex items-end bg-[radial-gradient(120%_90%_at_20%_10%,#e7b48f_0%,#c98b6a_28%,#2f6c78_70%,#12201d_100%)] p-4">
          <span className="eyebrow text-paper/80">{alt}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={current}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={onError}
          className={`h-full w-full object-cover transition-[opacity,filter] duration-[800ms] ease-out ${
            loaded || priority ? "opacity-100 blur-0" : "opacity-0 blur-md"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
