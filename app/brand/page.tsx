import { Section, Palette, Typography, LogoMark, Lockup } from "../components";

export const metadata = {
  title: "Brand Guidelines ? Floka",
};

export default function BrandGuidelines() {
  return (
    <>
      <section className="container-lg py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Brand Guidelines</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          The Floka identity is simple, legible, and fluid. Use these rules to keep our
          brand consistent across packaging, web, and product.
        </p>
      </section>
      <Section title="Logo">
        <div className="grid-auto">
          <div className="card p-6">
            <div className="text-sm font-medium">Primary lockup</div>
            <div className="mt-4 flex items-center justify-center">
              <Lockup />
            </div>
          </div>
          <div className="card p-6">
            <div className="text-sm font-medium">Logo mark</div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              <LogoMark className="h-16 w-16" color="teal" />
              <LogoMark className="h-16 w-16" color="coral" />
              <LogoMark className="h-16 w-16" color="black" />
              <LogoMark className="h-16 w-16" color="white" bg="#0F172A" />
            </div>
          </div>
          <div className="card p-6">
            <div className="text-sm font-medium">Clearspace</div>
            <p className="mt-2 text-slate-600">
              Keep a minimum clearspace equal to 1/2 the height of the mark on all sides.
            </p>
          </div>
        </div>
      </Section>
      <Section title="Color">
        <Palette />
      </Section>
      <Section title="Typography">
        <Typography />
      </Section>
      <Section title="Usage">
        <ul className="list-disc space-y-2 pl-5 text-slate-600">
          <li>Do not distort, rotate, or apply effects to the logo.</li>
          <li>Use white or black versions when contrast is insufficient.</li>
          <li>Maintain legible sizes: mark minimum 16px, lockup minimum 120px wide.</li>
          <li>Avoid placing the mark on complex or low-contrast photography.</li>
        </ul>
      </Section>
    </>
  );
}

