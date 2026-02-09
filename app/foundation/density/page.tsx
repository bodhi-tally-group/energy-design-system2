"use client";

import PageBanner from "@/components/PageBanner/PageBanner";
import TabNavigation from "@/components/TabNavigation/TabNavigation";
import { useState } from "react";
import {
  type DensityMode,
  densityTokens,
  densityBreakpoints,
  getDensityCSS,
  useDensityPreference,
  useViewportWidth,
} from "@/lib/density";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/Card/Card";

const MODES: DensityMode[] = ["comfortable", "normal", "compact"];

const MODE_META: Record<DensityMode, { label: string; range: string; icon: string }> = {
  comfortable: { label: "Comfortable", range: "≥ 2 560 px (4K)", icon: "desktop_windows" },
  normal:      { label: "Normal",      range: "1 920 – 2 559 px", icon: "monitor" },
  compact:     { label: "Compact",     range: "< 1 920 px (laptop)", icon: "laptop" },
};

export default function DensityPage() {
  const [activeTab, setActiveTab] = useState("design");
  const tabs = [
    { id: "design", label: "Design" },
    { id: "code", label: "Code" },
  ];

  return (
    <>
      <PageBanner title="Density System" />
      <TabNavigation tabs={tabs} defaultTab="design" onTabChange={setActiveTab} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
              The density system automatically scales spacing, type, icons, and
              radii based on viewport width so the design system feels right on
              4K monitors, standard desktops, and laptops alike.
            </p>
          </div>

          {activeTab === "design" && <DesignTab />}
          {activeTab === "code" && <CodeTab />}
        </div>
      </div>
    </>
  );
}

/* ─── Design tab ────────────────────────────────────────────────────────── */

function DesignTab() {
  return (
    <>
      <CurrentDensitySection />
      <OverrideControlsSection />
      <CardDensitySection />
      <SideBySideSection />
      <TokenTableSection />
    </>
  );
}

/* ── Current density ────────────────────────────────────────────────────── */

function CurrentDensitySection() {
  const width = useViewportWidth();
  const { density, isAutoDetect, autoDetected } = useDensityPreference();
  const meta = MODE_META[density];

  return (
    <section className="mb-16 border-t border-border pt-16">
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        Current Density
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Active mode */}
        <div className="rounded-lg border border-border bg-background p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Active Mode
          </p>
          <p className="mt-1 flex items-center gap-2 text-xl font-semibold text-foreground">
            <span className="material-symbols-outlined text-[20px]">{meta.icon}</span>
            {meta.label}
          </p>
          {!isAutoDetect && (
            <span className="mt-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
              Manual override
            </span>
          )}
        </div>

        {/* Viewport width */}
        <div className="rounded-lg border border-border bg-background p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Viewport Width
          </p>
          <p className="mt-1 text-xl font-semibold text-foreground">{width} px</p>
          <p className="mt-1 text-xs text-muted-foreground">{meta.range}</p>
        </div>

        {/* Auto-detected */}
        <div className="rounded-lg border border-border bg-background p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Auto-detected
          </p>
          <p className="mt-1 text-xl font-semibold text-foreground">
            {MODE_META[autoDetected].label}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Based on breakpoints: {densityBreakpoints.comfortable} / {densityBreakpoints.normal} px
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Override controls ──────────────────────────────────────────────────── */

function OverrideControlsSection() {
  const { density, setDensity, resetToAuto, isAutoDetect } = useDensityPreference();

  return (
    <section className="mb-16 border-t border-border pt-16">
      <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        Manual Override
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Pin a density mode for testing. The preference is stored in{" "}
        <code className="rounded bg-gray-200 px-1.5 py-0.5 text-sm dark:bg-gray-700">
          localStorage
        </code>{" "}
        and survives page reloads.
      </p>

      <div className="flex flex-wrap gap-2">
        {MODES.map((mode) => (
          <button
            key={mode}
            onClick={() => setDensity(mode)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              density === mode && !isAutoDetect
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-background text-foreground hover:bg-accent"
            }`}
          >
            {MODE_META[mode].label}
          </button>
        ))}
        <button
          onClick={resetToAuto}
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            isAutoDetect
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-background text-foreground hover:bg-accent"
          }`}
        >
          Auto-detect
        </button>
      </div>
    </section>
  );
}

/* ── Card density comparison ─────────────────────────────────────────────── */

function CardDensitySection() {
  const { density: currentDensity } = useDensityPreference();

  return (
    <section className="mb-16 border-t border-border pt-16">
      <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        Card Component — Density Comparison
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        The Card component now adapts its internal padding and spacing
        automatically. Each card below uses the{" "}
        <code className="rounded bg-gray-200 px-1.5 py-0.5 text-sm dark:bg-gray-700">
          density
        </code>{" "}
        prop to lock a specific mode.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {MODES.map((mode) => (
          <div key={mode}>
            <p className="mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              {MODE_META[mode].label} ({MODE_META[mode].range})
            </p>
            <Card density={mode}>
              <CardHeader>
                <CardTitle>Energy Usage Report</CardTitle>
                <CardDescription>Monthly consumption summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-gray-900 dark:text-gray-100">
                    Total Usage: <span className="font-semibold">1,234 kWh</span>
                  </p>
                  <p className="text-gray-900 dark:text-gray-100">
                    Cost: <span className="font-semibold">$156.78</span>
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <button className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                  View Details
                </button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>

      {/* Auto-detect test card */}
      <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-950/30">
        <h4 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
          Auto-Detect Test
        </h4>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          This card has <strong>no</strong>{" "}
          <code className="rounded bg-gray-200 px-1 py-0.5 text-xs dark:bg-gray-700">
            density
          </code>{" "}
          prop — it adapts to your viewport via CSS media queries. Currently
          auto-detected:{" "}
          <span className="font-semibold text-primary">{MODE_META[currentDensity].label}</span>.
          Resize your browser to see it change.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Auto-Detected Density</CardTitle>
            <CardDescription>
              This adapts to your screen size — no prop needed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              Current density is driven purely by CSS custom properties and
              viewport media queries. No JavaScript re-render required.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

/* ── Side-by-side comparison ────────────────────────────────────────────── */

function SideBySideSection() {
  return (
    <section className="mb-16 border-t border-border pt-16">
      <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        Side-by-Side Comparison
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        The same UI elements rendered at each density mode. Each column applies
        its own CSS custom properties inline so you can compare without
        resizing.
      </p>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {MODES.map((mode) => (
          <DensityExample key={mode} mode={mode} />
        ))}
      </div>
    </section>
  );
}

function DensityExample({ mode }: { mode: DensityMode }) {
  const tokens = densityTokens[mode];
  const css = getDensityCSS(mode);
  const meta = MODE_META[mode];

  return (
    <div
      className="overflow-hidden rounded-lg border border-border bg-background"
      style={css as React.CSSProperties}
    >
      {/* Header */}
      <div className="border-b border-border bg-accent/50 px-4 py-3">
        <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <span className="material-symbols-outlined text-[18px]">{meta.icon}</span>
          {meta.label}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">{meta.range}</p>
      </div>

      <div className="space-y-5 p-4">
        {/* Typography */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Typography
          </p>
          <div className="space-y-1">
            <p style={{ fontSize: tokens.fontSize.xxl, lineHeight: tokens.lineHeight.tight }}>
              Heading XXL
            </p>
            <p style={{ fontSize: tokens.fontSize.xl, lineHeight: tokens.lineHeight.tight }}>
              Heading XL
            </p>
            <p style={{ fontSize: tokens.fontSize.lg, lineHeight: tokens.lineHeight.normal }}>
              Body Large
            </p>
            <p style={{ fontSize: tokens.fontSize.base, lineHeight: tokens.lineHeight.normal }}>
              Body Base — The quick brown fox jumps over the lazy dog.
            </p>
            <p
              className="text-muted-foreground"
              style={{ fontSize: tokens.fontSize.sm, lineHeight: tokens.lineHeight.normal }}
            >
              Caption Small
            </p>
            <p
              className="text-muted-foreground"
              style={{ fontSize: tokens.fontSize.xs, lineHeight: tokens.lineHeight.normal }}
            >
              Label XS
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Buttons
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              className="inline-flex items-center justify-center bg-primary font-medium text-primary-foreground hover:bg-primary/90"
              style={{
                padding: `${tokens.spacing.sm} ${tokens.spacing.lg}`,
                fontSize: tokens.fontSize.sm,
                borderRadius: tokens.borderRadius.md,
              }}
            >
              Primary
            </button>
            <button
              className="inline-flex items-center justify-center border border-border bg-background font-medium text-foreground hover:bg-accent"
              style={{
                padding: `${tokens.spacing.sm} ${tokens.spacing.lg}`,
                fontSize: tokens.fontSize.sm,
                borderRadius: tokens.borderRadius.md,
              }}
            >
              Secondary
            </button>
            <button
              className="inline-flex items-center justify-center font-medium text-foreground hover:bg-accent"
              style={{
                padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
                fontSize: tokens.fontSize.sm,
                borderRadius: tokens.borderRadius.md,
              }}
            >
              Ghost
            </button>
          </div>
        </div>

        {/* Card */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Card
          </p>
          <div
            className="border border-border bg-card"
            style={{
              padding: tokens.spacing.lg,
              borderRadius: tokens.borderRadius.lg,
            }}
          >
            <p className="font-semibold text-foreground" style={{ fontSize: tokens.fontSize.lg }}>
              Energy Usage
            </p>
            <p className="text-muted-foreground" style={{ fontSize: tokens.fontSize.sm, marginTop: tokens.spacing.xs }}>
              Monthly summary for February 2026
            </p>
            <div
              className="mt-2 grid grid-cols-2"
              style={{ gap: tokens.spacing.md }}
            >
              <div className="rounded-md bg-accent/60" style={{ padding: tokens.spacing.md, borderRadius: tokens.borderRadius.sm }}>
                <p className="text-muted-foreground" style={{ fontSize: tokens.fontSize.xs }}>
                  Consumption
                </p>
                <p className="font-semibold text-foreground" style={{ fontSize: tokens.fontSize.xl }}>
                  342 kWh
                </p>
              </div>
              <div className="rounded-md bg-accent/60" style={{ padding: tokens.spacing.md, borderRadius: tokens.borderRadius.sm }}>
                <p className="text-muted-foreground" style={{ fontSize: tokens.fontSize.xs }}>
                  Cost
                </p>
                <p className="font-semibold text-foreground" style={{ fontSize: tokens.fontSize.xl }}>
                  $48.20
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Spacing swatch */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Spacing Scale
          </p>
          <div className="flex items-end gap-1.5">
            {(["xs", "sm", "md", "lg", "xl", "xxl"] as const).map((key) => (
              <div key={key} className="flex flex-col items-center gap-1">
                <div
                  className="bg-primary/70 rounded-sm"
                  style={{ width: tokens.spacing[key], height: tokens.spacing[key] }}
                />
                <span className="text-[9px] text-muted-foreground">{key}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Icon sizes */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Icon Sizes
          </p>
          <div className="flex items-end gap-3">
            {(["sm", "md", "lg", "xl"] as const).map((key) => (
              <div key={key} className="flex flex-col items-center gap-1">
                <span
                  className="material-symbols-outlined text-foreground"
                  style={{ fontSize: tokens.iconSize[key] }}
                >
                  bolt
                </span>
                <span className="text-[9px] text-muted-foreground">
                  {key} ({tokens.iconSize[key]})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Token table ────────────────────────────────────────────────────────── */

function TokenTableSection() {
  const categories = [
    { title: "Spacing", key: "spacing" as const },
    { title: "Font Size", key: "fontSize" as const },
    { title: "Line Height", key: "lineHeight" as const },
    { title: "Icon Size", key: "iconSize" as const },
    { title: "Border Radius", key: "borderRadius" as const },
  ];

  return (
    <section className="mb-16 border-t border-border pt-16">
      <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
        Token Reference
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Every value for each density mode at a glance.
      </p>

      {categories.map(({ title, key }) => {
        const keys = Object.keys(densityTokens.normal[key]) as string[];
        return (
          <div key={key} className="mb-8">
            <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-gray-100 dark:bg-gray-800">
                    <th className="px-4 py-2.5 text-left font-medium text-gray-900 dark:text-gray-100">
                      Token
                    </th>
                    {MODES.map((m) => (
                      <th
                        key={m}
                        className="px-4 py-2.5 text-left font-medium text-gray-900 dark:text-gray-100"
                      >
                        {MODE_META[m].label}
                      </th>
                    ))}
                    <th className="px-4 py-2.5 text-left font-medium text-gray-900 dark:text-gray-100">
                      CSS Variable
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {keys.map((k) => {
                    const varName = `--tally-${key === "fontSize" ? "font-size" : key === "lineHeight" ? "line-height" : key === "iconSize" ? "icon-size" : key === "borderRadius" ? "radius" : key}-${k}`;
                    return (
                      <tr key={k} className="bg-background">
                        <td className="px-4 py-2 font-mono text-xs text-gray-900 dark:text-gray-100">
                          {k}
                        </td>
                        {MODES.map((m) => (
                          <td
                            key={m}
                            className="px-4 py-2 font-mono text-xs text-muted-foreground"
                          >
                            {(densityTokens[m][key] as Record<string, string>)[k]}
                          </td>
                        ))}
                        <td className="px-4 py-2 font-mono text-xs text-muted-foreground">
                          {varName}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </section>
  );
}

/* ─── Code tab ──────────────────────────────────────────────────────────── */

function CodeTab() {
  return (
    <>
      <section className="mb-16 border-t border-border pt-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Auto-detect Density
        </h2>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
          <code>{`import { useDensity, densityTokens } from "@/lib/density";

function MyComponent() {
  const density = useDensity();
  // → "compact" on a 1440px laptop, "normal" on 1920px, "comfortable" on 4K

  const tokens = densityTokens[density];

  return (
    <div style={{ padding: tokens.spacing.md, fontSize: tokens.fontSize.base }}>
      Automatically adapts to viewport width.
    </div>
  );
}`}</code>
        </pre>
      </section>

      <section className="mb-16 border-t border-border pt-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          User Preference Override
        </h2>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
          <code>{`import { useDensityPreference } from "@/lib/density";

function SettingsPanel() {
  const { density, setDensity, resetToAuto, isAutoDetect } = useDensityPreference();

  return (
    <div>
      <p>Current: {density} {isAutoDetect ? "(auto)" : "(manual)"}</p>
      <button onClick={() => setDensity("compact")}>Compact</button>
      <button onClick={() => setDensity("normal")}>Normal</button>
      <button onClick={() => setDensity("comfortable")}>Comfortable</button>
      <button onClick={resetToAuto}>Auto-detect</button>
    </div>
  );
}`}</code>
        </pre>
      </section>

      <section className="mb-16 border-t border-border pt-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          CSS Custom Properties (zero-JS)
        </h2>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
          <code>{`/* These adapt automatically via media queries — no JS needed */
.my-card {
  padding: var(--tally-spacing-lg);
  font-size: var(--tally-font-size-base);
  border-radius: var(--tally-radius-md);
}

/* Or use the Tailwind density utilities: */
<div className="p-density-lg text-density-base rounded-density-md">
  Adapts to viewport width automatically.
</div>`}</code>
        </pre>
      </section>

      <section className="mb-16 border-t border-border pt-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          getDensityClasses Helper
        </h2>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
          <code>{`import { useDensity, getDensityClasses } from "@/lib/density";

function AdaptiveButton() {
  const density = useDensity();

  const cls = getDensityClasses(density, {
    comfortable: "px-6 py-3 text-base",
    normal:      "px-4 py-2 text-sm",
    compact:     "px-3 py-1.5 text-xs",
  });

  return <button className={cls}>Click me</button>;
}`}</code>
        </pre>
      </section>

      <section className="mb-16 border-t border-border pt-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Inline CSS via getDensityCSS
        </h2>
        <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
          <code>{`import { getDensityCSS } from "@/lib/density";

// Useful for scoped overrides or Storybook wrappers
const compactVars = getDensityCSS("compact");
// → { "--tally-spacing-xs": "2px", "--tally-font-size-base": "13px", … }

<div style={compactVars}>
  {/* Everything inside uses compact tokens */}
</div>`}</code>
        </pre>
      </section>

      <section className="mb-16 border-t border-border pt-16">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
          Breakpoints
        </h2>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-gray-100 dark:bg-gray-800">
                <th className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                  Mode
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                  Min Width
                </th>
                <th className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100">
                  Typical Screen
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr className="bg-background">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">Comfortable</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">≥ 2 560 px</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">4K / Ultra-wide displays</td>
              </tr>
              <tr className="bg-background">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">Normal</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">≥ 1 920 px</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Full HD desktop monitors</td>
              </tr>
              <tr className="bg-background">
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">Compact</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">&lt; 1 920 px</td>
                <td className="px-4 py-3 text-gray-600 dark:text-gray-400">Laptops (13″–15″)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
