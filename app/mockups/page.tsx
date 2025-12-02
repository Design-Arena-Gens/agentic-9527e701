/* eslint-disable react/no-unescaped-entities */
"use client";
import { Section, TumblerMock, FlaskMock, LogoVariant } from "../components";
import { brand } from "@/lib/brand";
import { useState } from "react";

export default function MockupsPage() {
  const [productColor, setProductColor] = useState("#e5e7eb");
  const [variant, setVariant] = useState<LogoVariant>("teal");
  return (
    <>
      <section className="container-lg py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Product Mockups</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Preview the Floka mark on tumblers and flasks. Choose brand-forward colors or test on neutrals.
        </p>
      </section>
      <Section
        title="Customizer"
        actions={
          <div className="flex gap-3">
            <select
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              value={variant}
              onChange={(e) => setVariant(e.target.value as LogoVariant)}
            >
              <option value="teal">Teal</option>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="coral">Coral</option>
            </select>
            <input
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
              type="color"
              value={productColor}
              onChange={(e) => setProductColor(e.target.value)}
              title="Product color"
            />
          </div>
        }
      >
        <div className="grid-auto">
          <div className="card p-6">
            <div className="text-sm font-medium">Tumbler</div>
            <div className="mt-4">
              <TumblerMock color={productColor} logo={variant} />
            </div>
          </div>
          <div className="card p-6">
            <div className="text-sm font-medium">Flask</div>
            <div className="mt-4">
              <FlaskMock color={productColor} logo={variant} />
            </div>
          </div>
        </div>
      </Section>
      <Section title="Recommended palettes">
        <div className="grid-auto">
          {[
            ["Glacier", "#E9FBF7", "teal"],
            ["Midnight", "#0F172A", "white"],
            ["Coral Pop", "#FF6B6B", "white"],
            ["Sandstone", "#F6F1E9", "black"],
          ].map(([name, color, v]) => (
            <div key={name} className="card p-6">
              <div className="text-sm font-medium">{name}</div>
              <div className="mt-2 text-xs text-slate-500">{color}</div>
              <div className="mt-4">
                <TumblerMock color={color as string} logo={v as LogoVariant} />
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

