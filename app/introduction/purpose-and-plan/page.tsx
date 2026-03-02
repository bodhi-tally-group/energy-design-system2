"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const T = {
  navy: "#2C365D",
  navyLight: "#3D4A7A",
  navyDim: "rgba(44, 54, 93, 0.06)",
  turquoise: "#00D2A2",
  turquoiseDim: "rgba(0, 210, 162, 0.08)",
  turquoiseBorder: "rgba(0, 210, 162, 0.25)",
  text: "#181B25",
  textSecondary: "#595767",
  textMuted: "#8B8A97",
  error: "#C40000",
  errorDim: "rgba(196, 0, 0, 0.06)",
  errorBorder: "rgba(196, 0, 0, 0.15)",
  info: "#0074C4",
  infoDim: "rgba(0, 116, 196, 0.06)",
  bg: "#F9F9FB",
  bgWhite: "#FFFFFF",
  border: "#DEDEE1",
  borderLight: "#EEEEEF",
  glowNavy: "rgba(44, 54, 93, 0.04)",
  glowTurquoise: "rgba(0, 210, 162, 0.06)",
};

const SLIDES = [
  { num: "01", label: "Overview" },
  { num: "02", label: "Challenge" },
  { num: "03", label: "Ecosystem" },
  { num: "04", label: "Before / After" },
  { num: "05", label: "Principles" },
  { num: "06", label: "Transition" },
  { num: "07", label: "What's Next" },
];

const PRODUCTS = [
  { name: "Billing", logo: "/tally-suite/TallyBilling.svg", href: "/pages/small-market" },
  { name: "Glass", logo: "/foundation/brands/tally-glass/TallyGlassLogo.svg", href: "/pages/glass-vision" },
  { name: "Digital", logo: "/tally-suite/TallyDigital.svg", href: "/pages/beta-test-dashboard" },
  { name: "Analytics", logo: "/tally-suite/TallyAnalytics.svg", href: "/pages/tally-acquire" },
  { name: "Acquire", logo: "/tally-suite/TallyAcquire.svg", href: "/pages/tally-acquire" },
  { name: "Customer", logo: "/tally-suite/TallyCustomer.svg", href: "/pages/sales-acquisition-dashboard" },
];

function SlideOverview() {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] flex-col justify-center relative">
      <div
        className="pointer-events-none absolute -right-[15%] -top-[30%] h-[600px] w-[600px] rounded-full"
        style={{ background: `radial-gradient(circle, ${T.glowTurquoise} 0%, transparent 70%)` }}
      />
      <div
        className="pointer-events-none absolute -bottom-[15%] -left-[8%] h-[400px] w-[400px] rounded-full"
        style={{ background: `radial-gradient(circle, ${T.glowNavy} 0%, transparent 70%)` }}
      />

      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.12em]" style={{ color: T.turquoise }}>
          <span className="h-0.5 w-8 rounded-full" style={{ background: T.turquoise }} />
          V1.5 Release
        </div>

        <h1 className="mb-4 text-[clamp(3.5rem,6vw,6rem)] font-extrabold leading-[1.05] tracking-[-0.04em]" style={{ color: T.text }}>
          UI<br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(135deg, ${T.navy}, ${T.turquoise})` }}
          >
            Modernisation
          </span>
        </h1>

        <p className="mb-8 max-w-[700px] text-xl font-normal leading-relaxed" style={{ color: T.textSecondary }}>
          Refreshing our product suite with a unified design system, while preserving the workflows operators already know.
        </p>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border px-5 py-2 text-sm font-semibold" style={{ borderColor: T.turquoiseBorder, color: T.turquoise, background: T.turquoiseDim }}>
            Unified Experience
          </span>
          <span className="rounded-full border px-5 py-2 text-sm font-semibold" style={{ borderColor: "rgba(44, 54, 93, 0.2)", color: T.navy, background: T.navyDim }}>
            Minimal Disruption
          </span>
          <span className="rounded-full border px-5 py-2 text-sm font-semibold" style={{ borderColor: T.border, color: T.textMuted }}>
            CIS &middot; Glass &middot; CRM &middot; Acquire &middot; Digital
          </span>
        </div>
      </div>
    </div>
  );
}

function SlideChallenge() {
  const cards = [
    { icon: "block", title: "Inconsistent UI", desc: "Each app looks and feels different: different colours, layouts, and components across CIS, Core, Glass, and Acquire.", accent: T.error, dimBg: T.errorDim },
    { icon: "sync_problem", title: "Retraining Cost", desc: "Operators switching between apps must learn new patterns each time, reducing efficiency and increasing error rates.", accent: T.error, dimBg: T.errorDim },
    { icon: "settings", title: "Maintenance Overhead", desc: "Separate codebases with duplicated logic and divergent patterns make every change slower and riskier.", accent: T.info, dimBg: T.infoDim },
    { icon: "blur_on", title: "Brand Fragmentation", desc: "No cohesive visual identity across the product ecosystem. It feels like separate companies, not one platform.", accent: T.info, dimBg: T.infoDim },
  ];

  return (
    <div>
      <h2 className="mb-3 text-5xl font-extrabold tracking-[-0.035em]" style={{ color: T.text }}>The Challenge</h2>
      <p className="mb-6 max-w-[760px] text-lg leading-relaxed" style={{ color: T.textSecondary }}>
        Multiple products have evolved independently, each with its own UI patterns, visual language, and interaction models. This creates real friction for the people who use them every day.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {cards.map((c) => (
          <div
            key={c.title}
            className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: T.bgWhite, borderColor: T.borderLight }}
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: c.dimBg, color: c.accent }}>
              <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>{c.icon}</span>
            </div>
            <h3 className="mb-2 text-lg font-bold tracking-[-0.01em]" style={{ color: T.text }}>{c.title}</h3>
            <p className="text-base leading-relaxed" style={{ color: T.textSecondary }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideEcosystem() {
  const inputProducts = [
    { name: "Billing", logo: "/tally-suite/TallyBilling.svg", dashed: false },
    { name: "Glass", logo: "/foundation/brands/tally-glass/TallyGlassLogo.svg", dashed: false },
    { name: "Digital", logo: "/tally-suite/TallyDigital.svg", dashed: false },
    { name: "Analytics", logo: "/tally-suite/TallyAnalytics.svg", dashed: false },
    { name: "Acquire", logo: "/tally-suite/TallyAcquire.svg", dashed: false },
    { name: "Customer", logo: "/tally-suite/TallyCustomer.svg", dashed: false },
  ];

  const v15Items = [
    "Same content structure",
    "Modernised UI/UX",
    "Consistent patterns",
    "Minimal retraining",
    "Brand-flexible tokens",
  ];

  return (
    <div className="flex min-h-[calc(100vh-12rem)] flex-col">
      <div>
        <h2 className="mb-3 text-5xl font-extrabold tracking-[-0.035em]" style={{ color: T.text }}>Product Ecosystem</h2>
        <p className="mb-6 max-w-[760px] text-lg leading-relaxed" style={{ color: T.textSecondary }}>
          All Tally products converge into the V1.5 unified experience, with V2 as the future-focused evolution.
        </p>
      </div>

      <div className="flex flex-1 items-center gap-8">
        <div className="flex shrink-0 flex-col gap-3">
          {inputProducts.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-3 rounded-xl border px-6 py-4 text-sm font-semibold"
              style={{
                background: T.bgWhite,
                borderColor: T.borderLight,
                borderStyle: p.dashed ? "dashed" : "solid",
                opacity: p.dashed ? 0.55 : 1,
              }}
            >
              <Image src={p.logo} alt={p.name} width={120} height={28} className="h-7 w-auto opacity-70" />
            </div>
          ))}
        </div>

        <div className="shrink-0" style={{ color: T.turquoise, opacity: 0.6 }}>
          <span className="material-symbols-outlined" style={{ fontSize: "40px" }}>arrow_forward</span>
        </div>

        <div
          className="flex-1 rounded-2xl border-[1.5px] p-10 text-center"
          style={{
            background: `linear-gradient(135deg, ${T.navyDim}, ${T.turquoiseDim})`,
            borderColor: T.turquoiseBorder,
            maxWidth: "480px",
          }}
        >
          <h3
            className="mb-3 text-6xl font-extrabold bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(135deg, ${T.navy}, ${T.turquoise})` }}
          >
            V1.5
          </h3>
          <div className="mb-6 text-sm font-semibold uppercase tracking-[0.1em]" style={{ color: T.turquoise }}>
            Unified Design System
          </div>
          <ul className="space-y-3 text-left">
            {v15Items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg" style={{ color: T.textSecondary }}>
                <span style={{ color: T.turquoise }} className="material-symbols-outlined">check</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0" style={{ color: T.turquoise, opacity: 0.35 }}>
          <span className="material-symbols-outlined" style={{ fontSize: "40px" }}>arrow_forward</span>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl border-[1.5px] border-dashed p-10 text-center"
          style={{ background: T.bgWhite, borderColor: T.turquoiseBorder, maxWidth: "320px" }}
        >
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full"
            style={{ background: `radial-gradient(circle, ${T.glowTurquoise} 0%, transparent 70%)` }}
          />
          <div
            className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full"
            style={{ background: `radial-gradient(circle, ${T.glowNavy} 0%, transparent 70%)` }}
          />
          <div className="relative z-10">
            <h3
              className="mb-2 text-7xl font-extrabold bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(135deg, ${T.navy}, ${T.turquoise})` }}
            >
              V2
            </h3>
            <div className="mb-6 text-sm font-semibold uppercase tracking-[0.1em]" style={{ color: T.turquoise }}>
              Future Vision
            </div>
            <div className="space-y-3 text-left">
              {[
                { icon: "auto_awesome", label: "AI-first workflows" },
                { icon: "rocket_launch", label: "New capabilities" },
                { icon: "brush", label: "Full platform redesign" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-base" style={{ color: T.textSecondary }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "20px", color: T.turquoise, opacity: 0.6 }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {["Mobile App", "My Account", "C&I Portal", "Load Dissag", "Behavioural Demand"].map((tag) => (
          <span
            key={tag}
            className="rounded-lg border px-4 py-2 text-sm font-medium"
            style={{ background: T.bgWhite, borderColor: T.borderLight, color: T.textMuted }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function BeforeMockCIS() {
  const c = { header: "#D97706", line: "rgba(217, 119, 6, 0.2)", box: "rgba(217, 119, 6, 0.07)" };
  return (
    <div className="overflow-hidden rounded-lg border" style={{ borderColor: T.borderLight, background: T.bgWhite }}>
      <div className="px-3 py-1 text-xs font-bold tracking-wide text-white" style={{ background: c.header }}>CIS</div>
      <div className="flex gap-1.5 p-2" style={{ minHeight: 60 }}>
        <div className="flex w-12 shrink-0 flex-col gap-1 rounded p-1" style={{ background: c.box }}>
          <div className="h-1 w-full rounded-full" style={{ background: c.line }} />
          <div className="h-1 w-3/4 rounded-full" style={{ background: c.line }} />
          <div className="h-1 w-full rounded-full" style={{ background: c.line }} />
          <div className="h-1 w-1/2 rounded-full" style={{ background: c.line }} />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="h-1.5 w-3/5 rounded-full" style={{ background: c.line }} />
          <div className="flex gap-1.5">
            <div className="h-8 flex-1 rounded" style={{ background: c.box }} />
            <div className="h-8 flex-1 rounded" style={{ background: c.box }} />
          </div>
          <div className="h-1.5 w-2/5 rounded-full" style={{ background: c.line }} />
        </div>
      </div>
    </div>
  );
}

function BeforeMockCore() {
  const c = { header: "#2563EB", line: "rgba(37, 99, 235, 0.15)", box: "rgba(37, 99, 235, 0.06)" };
  return (
    <div className="overflow-hidden rounded-lg border" style={{ borderColor: T.borderLight, background: T.bgWhite }}>
      <div className="px-3 py-1 text-xs font-bold tracking-wide text-white" style={{ background: c.header }}>Core</div>
      <div className="flex flex-col gap-1.5 p-2" style={{ minHeight: 60 }}>
        <div className="flex gap-1.5">
          <div className="h-6 w-1/3 rounded" style={{ background: c.box }} />
          <div className="h-6 w-1/3 rounded" style={{ background: c.box }} />
          <div className="h-6 w-1/3 rounded" style={{ background: c.box }} />
        </div>
        <div className="flex gap-1.5">
          <div className="flex flex-1 flex-col gap-1">
            <div className="h-1.5 w-4/5 rounded-full" style={{ background: c.line }} />
            <div className="h-1.5 w-3/5 rounded-full" style={{ background: c.line }} />
          </div>
          <div className="h-10 w-14 shrink-0 rounded" style={{ background: c.box }} />
        </div>
      </div>
    </div>
  );
}

function BeforeMockGlass() {
  const c = { header: "#065F46", headerText: "#D1FAE5", line: "rgba(16, 185, 129, 0.15)", box: "rgba(16, 185, 129, 0.06)" };
  return (
    <div className="overflow-hidden rounded-lg border" style={{ borderColor: T.borderLight, background: T.bgWhite }}>
      <div className="flex items-center justify-between px-3 py-1 text-xs font-bold tracking-wide" style={{ background: c.header, color: c.headerText }}>
        <span>Glass</span>
        <div className="flex gap-0.5">
          <div className="h-2 w-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
          <div className="h-2 w-2 rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
        </div>
      </div>
      <div className="flex gap-1.5 p-2" style={{ minHeight: 60 }}>
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="h-1.5 w-4/5 rounded-full" style={{ background: c.line }} />
          <div className="h-10 rounded" style={{ background: c.box }} />
          <div className="h-1.5 w-3/5 rounded-full" style={{ background: c.line }} />
        </div>
        <div className="flex w-16 shrink-0 flex-col gap-1 rounded p-1.5" style={{ background: c.box }}>
          <div className="h-1 w-full rounded-full" style={{ background: c.line }} />
          <div className="h-1 w-2/3 rounded-full" style={{ background: c.line }} />
          <div className="h-1 w-full rounded-full" style={{ background: c.line }} />
        </div>
      </div>
    </div>
  );
}

function BeforeMockAcquire() {
  const c = { header: "#7C3AED", line: "rgba(124, 58, 237, 0.15)", box: "rgba(124, 58, 237, 0.06)" };
  return (
    <div className="overflow-hidden rounded-lg border" style={{ borderColor: T.borderLight, background: T.bgWhite }}>
      <div className="px-3 py-1 text-xs font-bold tracking-wide text-white" style={{ background: c.header }}>Acquire</div>
      <div className="flex gap-1.5 p-2" style={{ minHeight: 60 }}>
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="flex gap-1.5">
            <div className="h-5 flex-1 rounded" style={{ background: c.box }} />
            <div className="h-5 w-10 shrink-0 rounded" style={{ background: c.box }} />
          </div>
          <div className="h-1.5 w-3/4 rounded-full" style={{ background: c.line }} />
          <div className="h-1.5 w-1/2 rounded-full" style={{ background: c.line }} />
        </div>
        <div className="flex w-8 shrink-0 flex-col items-center gap-1.5 pt-0.5">
          <div className="h-4 w-4 rounded-full" style={{ background: c.box }} />
          <div className="h-4 w-4 rounded" style={{ background: c.box }} />
          <div className="h-4 w-4 rounded-full" style={{ background: c.box }} />
        </div>
      </div>
    </div>
  );
}

function AfterMock({ name }: { name: string }) {
  return (
    <div className="overflow-hidden rounded-lg border" style={{ borderColor: T.borderLight, background: T.bgWhite }}>
      <div className="px-3 py-1 text-xs font-bold tracking-wide" style={{ background: T.navyDim, color: T.navy }}>{name}</div>
      <div className="flex gap-1.5 p-2" style={{ minHeight: 60 }}>
        <div className="flex w-12 shrink-0 flex-col gap-1 rounded p-1" style={{ background: T.navyDim }}>
          <div className="h-1 w-full rounded-full" style={{ background: T.turquoiseDim }} />
          <div className="h-1 w-3/4 rounded-full" style={{ background: T.turquoiseDim }} />
          <div className="h-1 w-full rounded-full" style={{ background: T.turquoiseDim }} />
          <div className="h-1 w-1/2 rounded-full" style={{ background: T.turquoiseDim }} />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="h-1.5 w-3/5 rounded-full" style={{ background: T.turquoiseDim }} />
          <div className="flex gap-1.5">
            <div className="h-8 flex-1 rounded" style={{ background: T.navyDim }} />
            <div className="h-8 flex-1 rounded" style={{ background: T.navyDim }} />
          </div>
          <div className="h-1.5 w-2/5 rounded-full" style={{ background: T.turquoiseDim }} />
        </div>
      </div>
    </div>
  );
}

function SlideBeforeAfter() {
  return (
    <div>
      <h2 className="mb-3 text-5xl font-extrabold tracking-[-0.035em]" style={{ color: T.text }}>Before & After</h2>
      <p className="mb-6 max-w-[760px] text-lg leading-relaxed" style={{ color: T.textSecondary }}>
        Same content structure and positions, with a new consistent skin. Operators keep their muscle memory.
      </p>

      <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-8">
        <div className="space-y-3">
          <div className="mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em]" style={{ color: T.error }}>
            Fragmented
            <span className="h-px flex-1" style={{ background: T.errorBorder }} />
          </div>
          <BeforeMockCIS />
          <BeforeMockCore />
          <BeforeMockGlass />
          <BeforeMockAcquire />
          <p className="text-sm font-medium" style={{ color: "rgba(196, 0, 0, 0.5)" }}>
            Different layouts &middot; Different patterns &middot; Different interactions
          </p>
        </div>

        <div className="flex items-center justify-center pt-24">
          <div className="flex h-14 w-14 items-center justify-center rounded-full" style={{ background: T.turquoiseDim, color: T.turquoise }}>
            <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>arrow_forward</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em]" style={{ color: T.turquoise }}>
            V1.5 Unified
            <span className="h-px flex-1" style={{ background: T.turquoiseBorder }} />
          </div>
          {["CIS", "Core", "Glass", "Acquire"].map((name) => (
            <AfterMock key={name} name={name} />
          ))}
          <p className="text-sm font-medium" style={{ color: "rgba(0, 210, 162, 0.7)" }}>
            Same structure &middot; Consistent design &middot; Familiar to operators
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {PRODUCTS.slice(0, 4).map((p) => (
          <Link
            key={p.name}
            href={p.href}
            className="flex items-center gap-2.5 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors hover:border-[#00D2A2]"
            style={{ borderColor: T.borderLight, color: T.textSecondary, background: T.bgWhite }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "18px", color: T.turquoise }}>open_in_new</span>
            View {p.name} in TDS
          </Link>
        ))}
      </div>
    </div>
  );
}

function SlidePrinciples() {
  const principles = [
    { title: "Preserve Structure", desc: "Content positions and page hierarchy stay the same. Operators don't need to relearn where the majority of things are." },
    { title: "Unified Design System", desc: "One shared component library, colour palette, and typography scale across CIS, Core, Glass, and Acquire." },
    { title: "Zero Disruption Goal", desc: "Minimal retraining required. If you know where something is today, you'll know where it is tomorrow." },
    { title: "Scalable Foundation", desc: "Build the system that V2 will inherit: tokens, patterns, and components ready for future capabilities." },
  ];

  return (
    <div>
      <h2 className="mb-3 text-5xl font-extrabold tracking-[-0.035em]" style={{ color: T.text }}>V1.5 Design Principles</h2>
      <p className="mb-6 max-w-[760px] text-lg leading-relaxed" style={{ color: T.textSecondary }}>
        Four guiding principles that shape every decision in this modernisation.
      </p>

      {/* 70/30 callout */}
      <div
        className="mb-6 flex items-center gap-6 rounded-2xl p-6"
        style={{ background: T.navy }}
      >
        <div className="shrink-0 text-center">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl font-extrabold" style={{ color: T.turquoise }}>70</span>
            <span className="text-2xl font-bold" style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
            <span className="text-5xl font-extrabold" style={{ color: "rgba(255,255,255,0.85)" }}>30</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Preserve the familiar. Refresh the friction.</h3>
        </div>
      </div>

      <div className="space-y-3">
        {principles.map((p, i) => (
          <div
            key={p.title}
            className="group flex items-start gap-5 rounded-2xl border p-5 transition-all duration-300 hover:translate-x-1 hover:shadow-md"
            style={{ background: T.bgWhite, borderColor: T.borderLight }}
          >
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold"
              style={{ background: T.navyDim, color: T.navy }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 className="mb-2 text-xl font-bold tracking-[-0.01em]" style={{ color: T.text }}>{p.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: T.textSecondary }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

function SlideTransition() {
  const steps = [
    { num: "1", title: "Audit & Map", items: ["Map existing layouts", "Identify shared patterns", "Document content structure"], status: "done" as const },
    { num: "2", title: "Design System", items: ["Unified component library", "Consistent tokens & scales", "Shared interaction patterns"], status: "done" as const },
    { num: "3", title: "V1.5 Rollout", items: ["Apply new UI skin", "Retain content positions", "Minimal operator retraining"], status: "current" as const },
    { num: "4", title: "V2", items: ["AI-first workflows", "New capabilities", "Full platform evolution"], status: "future" as const },
  ];

  const statusStyles = {
    done: { numBg: T.navyDim, numColor: T.navy, numBorder: "rgba(44, 54, 93, 0.15)", cardBorder: T.borderLight, cardStyle: "solid" as const, opacity: 1 },
    current: { numBg: T.turquoiseDim, numColor: T.turquoise, numBorder: T.turquoiseBorder, cardBorder: T.turquoiseBorder, cardStyle: "solid" as const, opacity: 1 },
    future: { numBg: T.navyDim, numColor: T.textMuted, numBorder: T.borderLight, cardBorder: T.borderLight, cardStyle: "dashed" as const, opacity: 0.55 },
  };

  return (
    <div>
      <h2 className="mb-3 text-5xl font-extrabold tracking-[-0.035em]" style={{ color: T.text }}>Transition Strategy</h2>
      <p className="mb-6 max-w-[760px] text-lg leading-relaxed" style={{ color: T.textSecondary }}>
        A phased approach that minimises risk and builds toward V2.
      </p>
      <div className="grid grid-cols-4 gap-4">
        {steps.map((s) => {
          const st = statusStyles[s.status];
          return (
            <div
              key={s.num}
              className="relative rounded-2xl border p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                background: T.bgWhite,
                borderColor: st.cardBorder,
                borderStyle: st.cardStyle,
                opacity: st.opacity,
                boxShadow: s.status === "current" ? `0 0 0 1px rgba(0, 210, 162, 0.1), 0 4px 20px rgba(0, 210, 162, 0.08)` : "none",
              }}
            >
              <div
                className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full text-base font-extrabold"
                style={{ background: st.numBg, color: st.numColor, border: `1.5px ${st.cardStyle} ${st.numBorder}` }}
              >
                {s.num}
              </div>
              <h3 className="mb-3 text-base font-bold tracking-[-0.01em]" style={{ color: T.text }}>{s.title}</h3>
              <ul className="space-y-2 text-left">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: T.textSecondary }}>
                    <span style={{ color: T.textMuted }} className="mt-0.5">&#8594;</span>
                    {item}
                  </li>
                ))}
              </ul>
              {s.status === "current" && (
                <span className="mt-5 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-[0.08em]" style={{ background: T.turquoiseDim, color: T.turquoise }}>
                  Now
                </span>
              )}
              {s.status === "future" && (
                <span className="mt-5 inline-block rounded-full px-4 py-1 text-xs font-bold uppercase tracking-[0.08em]" style={{ background: T.navyDim, color: T.textMuted }}>
                  Next
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border p-5" style={{ background: T.bgWhite, borderColor: T.borderLight }}>
        <div className="mb-3 text-sm font-bold uppercase tracking-[0.08em]" style={{ color: T.turquoise }}>
          Live in the TDS: V1.5 Page Examples
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { name: "Tally Glass", href: "/pages/glass-vision", desc: "Call centre agent view" },
            { name: "Tally CRM", href: "/crm/dashboard", desc: "CRM dashboard & pipeline" },
            { name: "Tally+ Large Market", href: "/pages/tally-large-market", desc: "Customer dashboard" },
          ].map((ex) => (
            <Link
              key={ex.name}
              href={ex.href}
              className="flex items-center gap-4 rounded-xl border p-4 transition-colors hover:border-[#00D2A2]"
              style={{ borderColor: T.borderLight, background: T.bg }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "22px", color: T.turquoise }}>open_in_new</span>
              <div>
                <div className="text-sm font-semibold" style={{ color: T.text }}>{ex.name}</div>
                <div className="text-sm" style={{ color: T.textMuted }}>{ex.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideClosing() {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] flex-col justify-center relative">
      <div
        className="pointer-events-none absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full"
        style={{ background: `radial-gradient(circle, ${T.glowTurquoise} 0%, transparent 70%)` }}
      />
      <div className="relative z-10">
        <h2 className="mb-5 text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold leading-[1.12] tracking-[-0.04em]" style={{ color: T.text }}>
          V1.5 is the bridge.<br />
          <span style={{ color: T.turquoise }}>V2 is the destination.</span>
        </h2>
        <p className="mb-6 max-w-[700px] text-xl leading-relaxed" style={{ color: T.textSecondary }}>
          V1.5 delivers a unified, modern experience today, without disrupting the teams who depend on these tools every day. It also lays the design system foundation that V2 will build upon with AI-first workflows and new capabilities.
        </p>

        <div className="mb-8 flex flex-wrap gap-4">
          <Link
            href="/crm/dashboard"
            className="inline-flex items-center gap-2.5 rounded-xl border px-5 py-3 text-base font-bold tracking-[-0.01em] transition-all hover:-translate-y-0.5 hover:shadow-md"
            style={{
              background: T.turquoiseDim,
              borderColor: T.turquoiseBorder,
              color: T.turquoise,
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>rocket_launch</span>
            Explore the TDS
          </Link>
          <Link
            href="/foundation/tds-setup"
            className="inline-flex items-center gap-2.5 rounded-xl border px-5 py-3 text-base font-bold tracking-[-0.01em] transition-all hover:-translate-y-0.5 hover:shadow-md"
            style={{ borderColor: T.borderLight, color: T.textSecondary, background: T.bgWhite }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>info</span>
            How the TDS is Set Up
          </Link>
        </div>

        <div className="flex items-center gap-6 opacity-50">
          {PRODUCTS.map((p) => (
            <Image key={p.name} src={p.logo} alt={p.name} width={120} height={28} className="h-6 w-auto" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PurposeAndPlanPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index < 0 || index >= SLIDES.length) return;
    setCurrentSlide(index);
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isFullscreen) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, SLIDES.length - 1));
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen]);

  const slideComponents = [
    <SlideOverview key="overview" />,
    <SlideChallenge key="challenge" />,
    <SlideEcosystem key="ecosystem" />,
    <SlideBeforeAfter key="before-after" />,
    <SlidePrinciples key="principles" />,
    <SlideTransition key="transition" />,
    <SlideClosing key="closing" />,
  ];

  return (
    <div className={`min-h-screen ${isFullscreen ? "fixed inset-0 z-[9999] overflow-y-auto" : ""}`} style={{ background: T.bg }}>
      <div className="mx-auto max-w-[1600px] px-12 pb-10 pt-6">
        {/* Tab navigation */}
        <nav className="mb-8 flex items-center gap-1.5 overflow-x-auto rounded-xl border p-1.5 scrollbar-none" style={{ background: T.bgWhite, borderColor: T.borderLight }}>
          <button
            onClick={toggleFullscreen}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-gray-100"
            style={{ color: T.textSecondary }}
            title={isFullscreen ? "Exit fullscreen" : "Present fullscreen"}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
              {isFullscreen ? "fullscreen_exit" : "fullscreen"}
            </span>
          </button>
          <div className="h-6 w-px shrink-0" style={{ background: T.borderLight }} />
          {SLIDES.map((slide, i) => (
            <button
              key={slide.num}
              onClick={() => goToSlide(i)}
              className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-3 py-3 text-sm font-semibold tracking-[0.01em] transition-all duration-200"
              style={{
                background: i === currentSlide ? T.navyDim : "transparent",
                color: i === currentSlide ? T.navy : T.textMuted,
                boxShadow: i === currentSlide ? `0 1px 3px rgba(0,0,0,0.06), 0 0 0 1px rgba(44, 54, 93, 0.12)` : "none",
              }}
            >
              <span
                className="inline-flex h-5 w-5 items-center justify-center rounded text-[11px] font-bold"
                style={{
                  background: i === currentSlide ? "rgba(44, 54, 93, 0.12)" : "rgba(0,0,0,0.04)",
                  color: i === currentSlide ? T.navy : T.textMuted,
                }}
              >
                {slide.num}
              </span>
              {slide.label}
            </button>
          ))}
        </nav>

        {/* Slide content */}
        <div
          key={currentSlide}
          className="animate-[slideIn_0.4s_cubic-bezier(0.4,0,0.2,1)]"
        >
          {slideComponents[currentSlide]}
        </div>

      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-4 right-6 flex items-center gap-1.5 text-xs opacity-50" style={{ color: T.textMuted }}>
        <kbd className="rounded border px-2 py-1 text-[11px] font-semibold" style={{ background: T.bgWhite, borderColor: T.borderLight }}>&larr;</kbd>
        <kbd className="rounded border px-2 py-1 text-[11px] font-semibold" style={{ background: T.bgWhite, borderColor: T.borderLight }}>&rarr;</kbd>
        <span>Navigate slides</span>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
