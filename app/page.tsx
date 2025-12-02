import { Lockup, LogoMark, Section, Palette, Typography } from "./components";
import { brand } from "@/lib/brand";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-lg py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-floka-mint px-3 py-1 text-xs text-floka-slate ring-1 ring-floka-teal/20">
                New ? Floka brand system
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                {brand.name} ? {brand.tagline}
              </h1>
              <p className="mt-4 text-slate-600">
                A complete identity for premium tumblers and flasks. Download the logo, learn the brand rules, and preview on product mockups.
              </p>
              <div className="mt-6 flex gap-3">
                <Link className="btn btn-primary" href="/assets">Download assets</Link>
                <Link className="btn btn-ghost" href="/brand">View guidelines</Link>
              </div>
            </div>
            <div className="card p-8">
              <div className="flex items-center justify-center">
                <Lockup className="" />
              </div>
              <div className="mt-8 grid grid-cols-4 gap-4">
                <LogoMark className="h-20 w-20" color="teal" />
                <LogoMark className="h-20 w-20" color="coral" />
                <LogoMark className="h-20 w-20" color="black" />
                <LogoMark className="h-20 w-20" color="white" bg="#0F172A" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section title="Color palette">
        <Palette />
      </Section>
      <Section title="Typography">
        <Typography />
      </Section>
      <Section
        title="Get started"
        actions={<Link className="btn btn-primary" href="/assets">Download logo</Link>}
      >
        <div className="grid-auto">
          <div className="card p-6">
            <div className="text-sm font-medium">Logo & Wordmark</div>
            <p className="mt-2 text-slate-600">Primary teal, black, white, and coral variants. Horizontal lockup included.</p>
          </div>
          <div className="card p-6">
            <div className="text-sm font-medium">Guidelines</div>
            <p className="mt-2 text-slate-600">Usage rules, clearspace, color, and typography.</p>
          </div>
          <div className="card p-6">
            <div className="text-sm font-medium">Product mockups</div>
            <p className="mt-2 text-slate-600">Preview the mark on tumblers and flasks in brand colors.</p>
          </div>
        </div>
      </Section>
    </>
  );
}

