/* eslint-disable react/no-unescaped-entities */
"use client";
import { Section, MarkSvgString, LockupSvgString, LogoVariant } from "../components";
import { brand } from "@/lib/brand";
import { useMemo, useState } from "react";

 

function DownloadBlock({
  title,
  renderSvgString,
  filename,
  bg = null,
}: {
  title: string;
  renderSvgString: () => string;
  filename: string;
  bg?: string | null;
}) {
  const svg = useMemo(renderSvgString, [renderSvgString]);
  const download = (ext: "svg" | "png") => {
    if (ext === "svg") {
      const blob = new Blob([svg], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename}.svg`;
      a.click();
      URL.revokeObjectURL(url);
    } else {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const scale = 3;
        canvas.width = img.width * scale || 1024;
        canvas.height = img.height * scale || 1024;
        const ctx = canvas.getContext("2d")!;
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
      img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
    }
  };
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">{title}</div>
        <div className="flex gap-2">
          <button className="btn btn-ghost" onClick={() => download("svg")}>SVG</button>
          <button className="btn btn-primary" onClick={() => download("png")}>PNG</button>
        </div>
      </div>
      <div className="mt-4 overflow-hidden rounded-lg ring-1 ring-slate-900/10">
        <div
          className="grid place-items-center bg-white p-6"
          dangerouslySetInnerHTML={{ __html: svg }}
        />
      </div>
    </div>
  );
}

export default function AssetsPage() {
  const [variant, setVariant] = useState<LogoVariant>("teal");
  const [bg, setBg] = useState("#ffffff");
  return (
    <>
      <section className="container-lg py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Brand Assets</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Download ready-to-use Floka marks. Use teal on light backgrounds,
          white on dark, and black when single-color reproduction is required.
        </p>
      </section>
      <Section
        title="Configurator"
        actions={
          <div className="flex gap-3">
            <select
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              value={variant}
              onChange={(e) => setVariant(e.target.value as LogoVariant)}
            >
              <option value="teal">Teal (Primary)</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="coral">Coral</option>
            </select>
            <input
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              type="color"
              value={bg}
              onChange={(e) => setBg(e.target.value)}
              title="Background for PNG export"
            />
          </div>
        }
      >
        <div className="grid-auto">
          <DownloadBlock
            title="Logo Mark"
            filename={`floka-mark-${variant}`}
            bg={bg}
            renderSvgString={() => MarkSvgString(variant)}
          />
          <DownloadBlock
            title="Horizontal Lockup"
            filename={`floka-lockup-${variant}`}
            bg={bg}
            renderSvgString={() => LockupSvgString(variant)}
          />
        </div>
      </Section>
      <Section title="Colors">
        <div className="grid-auto">
          <div className="card p-6">
            <div className="text-sm font-medium">Primary ? Floka Teal</div>
            <div className="mt-3 h-20 rounded-lg" style={{ background: brand.colors.teal }} />
            <div className="mt-3 text-xs text-slate-500">{brand.colors.teal}</div>
          </div>
          <div className="card p-6">
            <div className="text-sm font-medium">Neutral ? Deep Slate</div>
            <div className="mt-3 h-20 rounded-lg" style={{ background: brand.colors.slate }} />
            <div className="mt-3 text-xs text-slate-500">{brand.colors.slate}</div>
          </div>
          <div className="card p-6">
            <div className="text-sm font-medium">Accent ? Coral</div>
            <div className="mt-3 h-20 rounded-lg" style={{ background: brand.colors.coral }} />
            <div className="mt-3 text-xs text-slate-500">{brand.colors.coral}</div>
          </div>
          <div className="card p-6">
            <div className="text-sm font-medium">Support ? Warm Sand</div>
            <div className="mt-3 h-20 rounded-lg" style={{ background: brand.colors.sand }} />
            <div className="mt-3 text-xs text-slate-500">{brand.colors.sand}</div>
          </div>
        </div>
      </Section>
    </>
  );
}

