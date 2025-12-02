"use client";
import React, { useMemo, useRef } from "react";
import { clsx } from "clsx";
import { brand } from "@/lib/brand";

export type LogoVariant = "teal" | "black" | "white" | "coral";

export function LogoMark({
  color = "teal",
  bg,
  className,
}: {
  color?: LogoVariant;
  bg?: string;
  className?: string;
}) {
  const fill =
    color === "teal"
      ? brand.colors.teal
      : color === "coral"
      ? brand.colors.coral
      : color === "white"
      ? brand.colors.white
      : brand.colors.black;
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      role="img"
      aria-label="Floka logo mark"
      xmlns="http://www.w3.org/2000/svg"
    >
      {bg ? <rect width="256" height="256" rx="48" fill={bg} /> : null}
      {/* Fluid F */}
      <path
        d="M170 54c0 30.4-36 33.6-36 67.2 0 16.8 14 25.2 28 25.2 0 24.7-20.5 44.8-45.8 44.8S70.4 171.1 70.4 145.2C70.4 90.2 170 84.4 170 54Z"
        fill={fill}
      />
    </svg>
  );
}

export function Wordmark({
  color = "slate",
  className,
}: {
  color?: keyof typeof brand.colors;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 144"
      role="img"
      aria-label="Floka wordmark"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={brand.colors[color]}>
        {/* F */}
        <path d="M24 120V24h80v24H56v16h40v24H56v32H24Z" />
        {/* l */}
        <path d="M126 120V48h32v72h-32Z" />
        {/* o */}
        <path d="M242 84c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40Zm-32 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z" />
        {/* k */}
        <path d="M268 120V48h32v28l28-28h42l-44 44 46 28h-44l-28-18v18h-32Z" />
        {/* a */}
        <path d="M468 88.4C468 108 452.8 124 430.7 124c-13.3 0-26.4-5.4-34.7-16.1l18-18c3.6 5.1 9.1 8.1 16.3 8.1 8.8 0 14.7-5.1 14.7-13.9V48h32v40.4Z" />
      </g>
    </svg>
  );
}

export function Lockup({
  variant = "teal",
  className,
}: {
  variant?: LogoVariant;
  className?: string;
}) {
  const isWhite = variant === "white";
  const fg = variant === "teal" ? brand.colors.slate : variant === "coral" ? brand.colors.slate : isWhite ? brand.colors.white : brand.colors.black;
  return (
    <div className={clsx("inline-flex items-center gap-4", className)}>
      <LogoMark color={variant} className="h-12 w-12" />
      <Wordmark color={isWhite ? "white" : "slate"} className="h-8 w-auto" />
    </div>
  );
}

export function Palette() {
  const entries = [
    ["Floka Teal", brand.colors.teal, "floka-teal"],
    ["Deep Slate", brand.colors.slate, "floka-slate"],
    ["Warm Sand", brand.colors.sand, "floka-sand"],
    ["Coral Pop", brand.colors.coral, "floka-coral"],
    ["Ice Mint", brand.colors.mint, "floka-mint"],
  ] as const;
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
      {entries.map(([name, hex]) => (
        <div key={name} className="card p-4">
          <div className="h-20 w-full rounded-lg" style={{ backgroundColor: hex }} />
          <div className="mt-3">
            <div className="text-sm font-medium">{name}</div>
            <div className="text-xs text-slate-500">{hex}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Typography() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="card p-6">
        <div className="text-xs uppercase tracking-wide text-slate-500">Display</div>
        <div className="mt-2 text-4xl font-semibold" style={{ fontFamily: "var(--font-sora)" }}>
          Floka ? Hydration, refined.
        </div>
        <div className="mt-4 text-sm text-slate-500">Sora, 700/600</div>
      </div>
      <div className="card p-6">
        <div className="text-xs uppercase tracking-wide text-slate-500">Body</div>
        <p className="mt-2 text-base leading-7" style={{ fontFamily: "var(--font-inter)" }}>
          Precision-engineered bottles and tumblers designed for everyday performance and effortless style.
          Durable, leak-proof, and temperature-true?because your day deserves better gear.
        </p>
        <div className="mt-4 text-sm text-slate-500">Inter, 400/500</div>
      </div>
    </div>
  );
}

export function DownloadButtons({
  getSvg,
  filename,
  bg = null,
}: {
  getSvg: () => string;
  filename: string;
  bg?: string | null;
}) {
  const downloadSvg = () => {
    const svg = getSvg();
    const blob = new Blob([svg], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const downloadPng = async (scale = 3) => {
    const svg = getSvg();
    const svg64 = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    const img = new Image();
    img.crossOrigin = "anonymous";
    await new Promise((res, rej) => {
      img.onload = res;
      img.onerror = rej;
      img.src = svg64;
    });
    const canvas = document.createElement("canvas");
    canvas.width = img.width * scale || 1024;
    canvas.height = img.height * scale || 1024;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (bg) {
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    const ratio = Math.min(canvas.width / img.width, canvas.height / img.height);
    const w = img.width * ratio;
    const h = img.height * ratio;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;
    ctx.drawImage(img, x, y, w, h);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename}.png`;
      a.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  };

  return (
    <div className="flex gap-3">
      <button className="btn btn-primary" onClick={downloadSvg}>Download SVG</button>
      <button className="btn btn-ghost" onClick={() => downloadPng(3)}>Download PNG</button>
    </div>
  );
}

export function MarkSvgString(variant: LogoVariant = "teal") {
  const fill =
    variant === "teal"
      ? brand.colors.teal
      : variant === "coral"
      ? brand.colors.coral
      : variant === "white"
      ? brand.colors.white
      : brand.colors.black;
  return `
<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Floka logo mark">
  <path d="M170 54c0 30.4-36 33.6-36 67.2 0 16.8 14 25.2 28 25.2 0 24.7-20.5 44.8-45.8 44.8S70.4 171.1 70.4 145.2C70.4 90.2 170 84.4 170 54Z" fill="${fill}"/>
</svg>
`.trim();
}

export function LockupSvgString(variant: LogoVariant = "teal") {
  const mark = MarkSvgString(variant);
  const word = `
<svg viewBox="0 0 640 144" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Floka wordmark">
  <g fill="${variant === "white" ? brand.colors.white : brand.colors.slate}">
    <path d="M24 120V24h80v24H56v16h40v24H56v32H24Z" />
    <path d="M126 120V48h32v72h-32Z" />
    <path d="M242 84c0 22.1-17.9 40-40 40s-40-17.9-40-40 17.9-40 40-40 40 17.9 40 40Zm-32 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z" />
    <path d="M268 120V48h32v28l28-28h42l-44 44 46 28h-44l-28-18v18h-32Z" />
    <path d="M468 88.4C468 108 452.8 124 430.7 124c-13.3 0-26.4-5.4-34.7-16.1l18-18c3.6 5.1 9.1 8.1 16.3 8.1 8.8 0 14.7-5.1 14.7-13.9V48h32v40.4Z" />
  </g>
</svg>`.trim();
  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 916 160" role="img" aria-label="Floka horizontal lockup">
  <g transform="translate(8,8)">
    <g transform="translate(0,0) scale(0.5625)">${mark}</g>
    <g transform="translate(160,8)">${word}</g>
  </g>
</svg>
`.trim();
}

export function TumblerMock({
  color = "#e5e7eb",
  logo = "teal" as LogoVariant,
}: {
  color?: string;
  logo?: LogoVariant;
}) {
  const mark = MarkSvgString(logo);
  return (
    <svg viewBox="0 0 240 360" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.2"/>
        </filter>
      </defs>
      <rect x="40" y="20" width="160" height="20" rx="6" fill="#cbd5e1"/>
      <rect x="56" y="40" width="128" height="260" rx="24" fill={color} filter="url(#shadow)"/>
      <image x="86" y="120" width="72" height="72" href={"data:image/svg+xml;charset=utf-8," + encodeURIComponent(mark)} />
      <rect x="56" y="300" width="128" height="20" rx="10" fill="#94a3b8"/>
    </svg>
  );
}

export function FlaskMock({
  color = "#e5e7eb",
  logo = "teal" as LogoVariant,
}: {
  color?: string;
  logo?: LogoVariant;
}) {
  const mark = MarkSvgString(logo);
  return (
    <svg viewBox="0 0 240 360" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow2" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.2"/>
        </filter>
      </defs>
      <rect x="96" y="20" width="48" height="24" rx="6" fill="#cbd5e1"/>
      <rect x="88" y="44" width="64" height="16" rx="8" fill="#e2e8f0"/>
      <rect x="64" y="60" width="112" height="240" rx="40" fill={color} filter="url(#shadow2)"/>
      <image x="96" y="140" width="48" height="48" href={"data:image/svg+xml;charset=utf-8," + encodeURIComponent(mark)} />
      <rect x="80" y="300" width="80" height="16" rx="8" fill="#94a3b8"/>
    </svg>
  );
}

export function Section({ title, children, actions }: { title: string; children: React.ReactNode; actions?: React.ReactNode }) {
  return (
    <section className="container-lg mt-12">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        {actions}
      </div>
      {children}
    </section>
  );
}

