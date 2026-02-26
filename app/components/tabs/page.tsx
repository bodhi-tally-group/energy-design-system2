"use client";

import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/Tabs/Tabs";
import { Icon } from "@/components/ui/icon";
import PageBanner from "@/components/PageBanner/PageBanner";
import TabNavigation from "@/components/TabNavigation/TabNavigation";

function UnderlineDemo() {
  const [active, setActive] = useState(0);
  const tabs = ["Overview", "Activity", "Analytics", "Settings"];
  return (
    <div className="max-w-2xl">
      <div className="flex border-b border-border dark:border-gray-700">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            className={`-mb-px px-5 py-2.5 text-sm transition-all ${
              active === i
                ? "border-b-2 border-[#2C365D] font-semibold text-[#2C365D] dark:border-[#80B3FF] dark:text-[#80B3FF]"
                : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="px-1 py-5 text-sm text-gray-500 dark:text-gray-400">
        Content panel for{" "}
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {tabs[active]}
        </span>
      </div>
    </div>
  );
}

function PillDemo() {
  return (
    <Tabs defaultValue="monthly" className="max-w-sm">
      <TabsList className="inline-flex h-10 items-center gap-1 rounded-lg bg-gray-100 p-1 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
        <TabsTrigger
          value="monthly"
          className="rounded-md px-6 py-1.5 text-sm data-[state=active]:bg-white data-[state=active]:text-[#2C365D] data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-gray-100"
        >
          Monthly
        </TabsTrigger>
        <TabsTrigger
          value="yearly"
          className="rounded-md px-6 py-1.5 text-sm data-[state=active]:bg-white data-[state=active]:text-[#2C365D] data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-gray-100"
        >
          Yearly
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="monthly"
        className="mt-4 text-sm text-gray-500 dark:text-gray-400"
      >
        Showing{" "}
        <span className="font-medium text-gray-900 dark:text-gray-100">
          monthly
        </span>{" "}
        pricing
      </TabsContent>
      <TabsContent
        value="yearly"
        className="mt-4 text-sm text-gray-500 dark:text-gray-400"
      >
        Showing{" "}
        <span className="font-medium text-gray-900 dark:text-gray-100">
          yearly
        </span>{" "}
        pricing
      </TabsContent>
    </Tabs>
  );
}

function PillWithIconsDemo() {
  return (
    <Tabs defaultValue="overview" className="max-w-2xl">
      <TabsList className="grid w-full grid-cols-3 rounded-lg bg-gray-100 p-1 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
        <TabsTrigger
          value="overview"
          className="flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm data-[state=active]:bg-white data-[state=active]:text-gray-900 dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-gray-100"
        >
          <Icon name="dashboard" size={18} />
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="details"
          className="flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm data-[state=active]:bg-white data-[state=active]:text-gray-900 dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-gray-100"
        >
          <Icon name="info" size={18} />
          Details
        </TabsTrigger>
        <TabsTrigger
          value="settings"
          className="flex items-center justify-center gap-2 rounded-md px-2 py-1 text-sm data-[state=active]:bg-white data-[state=active]:text-gray-900 dark:data-[state=active]:bg-gray-900 dark:data-[state=active]:text-gray-100"
        >
          <Icon name="settings" size={18} />
          Settings
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="overview"
        className="mt-4 rounded-lg border border-border bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Overview content. Uses our Energy design system colours and
          foundations.
        </p>
      </TabsContent>
      <TabsContent
        value="details"
        className="mt-4 rounded-lg border border-border bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Details content. Icons from Material Symbols.
        </p>
      </TabsContent>
      <TabsContent
        value="settings"
        className="mt-4 rounded-lg border border-border bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Settings content.
        </p>
      </TabsContent>
    </Tabs>
  );
}

function BoxedDemo() {
  const [active, setActive] = useState(0);
  const tabs = ["Details", "History", "Notes"];
  return (
    <div className="max-w-2xl">
      <div className="flex">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            className={`relative -mb-px px-5 py-2.5 text-sm transition-all ${
              active === i
                ? "z-10 rounded-t-md border border-border border-b-white bg-white font-semibold text-gray-900 dark:border-gray-600 dark:border-b-gray-800 dark:bg-gray-800 dark:text-gray-100"
                : "border border-transparent border-b-border bg-gray-50 text-gray-500 hover:text-gray-700 dark:border-b-gray-600 dark:bg-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="rounded-b-lg rounded-tr-lg border border-border bg-white p-5 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
        Content for{" "}
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {tabs[active]}
        </span>
      </div>
    </div>
  );
}

function VerticalDemo() {
  const [active, setActive] = useState(0);
  const tabs = [
    { label: "Profile", icon: "person" },
    { label: "Security", icon: "lock" },
    { label: "Billing", icon: "credit_card" },
    { label: "Notifications", icon: "notifications" },
  ];
  return (
    <div className="flex max-w-2xl min-h-[180px]">
      <div className="flex flex-col gap-0.5 border-r border-border pr-0 dark:border-gray-700">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`flex items-center gap-2.5 border-l-2 px-4 py-2 text-left text-sm transition-all ${
              active === i
                ? "border-[#2C365D] bg-[#2C365D]/5 font-semibold text-[#2C365D] dark:border-[#80B3FF] dark:bg-[#80B3FF]/10 dark:text-[#80B3FF]"
                : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
            }`}
          >
            <Icon name={t.icon} size={18} />
            {t.label}
          </button>
        ))}
      </div>
      <div className="flex-1 px-5 py-2 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {tabs[active].label}
        </span>{" "}
        settings panel
      </div>
    </div>
  );
}

function NavigationDemo() {
  const [active, setActive] = useState(0);
  const tabs = ["Dashboard", "Customers", "Billing", "Reports"];
  return (
    <div className="max-w-2xl">
      <div className="flex rounded-t-lg border-b border-border bg-gray-50 px-2 dark:border-gray-600 dark:bg-gray-800">
        {tabs.map((t, i) => (
          <button
            key={t}
            onClick={() => setActive(i)}
            className={`-mb-px px-4 py-3 text-sm transition-all ${
              active === i
                ? "border-b-2 border-[#2C365D] font-semibold text-gray-900 dark:border-[#80B3FF] dark:text-gray-100"
                : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="rounded-b-lg border border-t-0 border-border bg-white p-5 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-400">
        Navigated to{" "}
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {tabs[active]}
        </span>{" "}
        page
      </div>
    </div>
  );
}

function IconTabsDemo() {
  const [active, setActive] = useState(0);
  const tabs = [
    { label: "Home", icon: "home" },
    { label: "Search", icon: "search" },
    { label: "Tasks", icon: "task_alt" },
    { label: "Profile", icon: "account_circle" },
  ];
  return (
    <div className="max-w-2xl">
      <div className="flex border-b border-border dark:border-gray-700">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            onClick={() => setActive(i)}
            className={`-mb-px flex items-center gap-1.5 px-4 py-2.5 text-sm transition-all ${
              active === i
                ? "border-b-2 border-[#2C365D] font-semibold text-[#2C365D] dark:border-[#80B3FF] dark:text-[#80B3FF]"
                : "border-b-2 border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            <Icon name={t.icon} size={18} />
            {t.label}
          </button>
        ))}
      </div>
      <div className="px-1 py-5 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {tabs[active].label}
        </span>{" "}
        content
      </div>
    </div>
  );
}

function RulesBlock({
  rules,
  avoid,
  when,
}: {
  rules: string[];
  avoid: string[];
  when: string;
}) {
  return (
    <div className="mt-6 space-y-4">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        <span className="font-medium text-gray-900 dark:text-gray-100">
          When to use:
        </span>{" "}
        {when}
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <h4 className="mb-2 flex items-center gap-1.5 text-sm font-medium text-green-700 dark:text-green-400">
            <Icon name="check_circle" size={16} />
            Do
          </h4>
          <ul className="space-y-1.5">
            {rules.map((r, i) => (
              <li
                key={i}
                className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 flex items-center gap-1.5 text-sm font-medium text-red-700 dark:text-red-400">
            <Icon name="cancel" size={16} />
            Avoid
          </h4>
          <ul className="space-y-1.5">
            {avoid.map((r, i) => (
              <li
                key={i}
                className="text-sm leading-relaxed text-gray-600 dark:text-gray-400"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function TabsPage() {
  const [activeTab, setActiveTab] = useState("design");

  const pageTabs = [
    { id: "design", label: "Design" },
    { id: "code", label: "Code" },
  ];

  return (
    <>
      <PageBanner title="Tabs" />
      <TabNavigation
        tabs={pageTabs}
        defaultTab="design"
        onTabChange={setActiveTab}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
              Tabs organise content into switchable panels. There are six
              distinct tab patterns — each suited to different contexts.
              Choosing the right one prevents usability issues.
            </p>
          </div>

          {activeTab === "design" && (
            <>
              {/* Underline */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Underline Tabs
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  The most common in-page tab pattern. Active state indicated by
                  a bottom border and bold text. Best for switching between
                  related content views within a single panel.
                </p>
                <UnderlineDemo />
                <RulesBlock
                  when="Dashboard panels, data views, settings sections, content filters"
                  rules={[
                    "Always use at least 2 selection indicators (underline + bold, underline + colour)",
                    "Keep labels to 1–2 words max",
                    "Default tab should be the highest-use content",
                    "Never mix with navigation tabs in the same control",
                  ]}
                  avoid={[
                    "More than 6 tabs — consider a different pattern",
                    "ALL CAPS labels — hurts legibility",
                    "Thin 1px underlines with low contrast",
                  ]}
                />
              </section>

              {/* Pill / Segmented */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Pill / Segmented Tabs
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Contained tabs using background fills to indicate selection.
                  Works well for binary or small sets of mutually exclusive
                  options. This is the default style provided by the{" "}
                  <code className="rounded bg-gray-200 px-1.5 py-0.5 text-sm font-mono text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    Tabs
                  </code>{" "}
                  component.
                </p>
                <div className="space-y-8">
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Simple toggle
                    </h3>
                    <PillDemo />
                  </div>
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      With icons
                    </h3>
                    <PillWithIconsDemo />
                  </div>
                </div>
                <RulesBlock
                  when="Toggle between 2–4 views, filter modes, map/list switches, billing toggles"
                  rules={[
                    "Limit to 2–4 options for best results",
                    "Selected pill must have strong contrast against unselected",
                    "Equal-width segments work best for 2–3 items",
                    "Container background should differ from page background",
                  ]}
                  avoid={[
                    "More than 4 segments — gets cramped",
                    "Long labels that force text wrapping",
                    "Using for navigation — these are strictly in-page",
                  ]}
                />
              </section>

              {/* Boxed / Card */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Boxed / Card Tabs
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Classic file-folder metaphor where the active tab shares a
                  common region with the panel below. The strongest visual
                  connection between tab and content.
                </p>
                <BoxedDemo />
                <RulesBlock
                  when="Complex apps, settings panels, multi-step configuration, data-heavy interfaces"
                  rules={[
                    "Active tab background must match panel background",
                    "Inactive tabs need a visually distinct background",
                    "Maintain proximity — no gap between tab and panel",
                    "Single row only — never stack rows",
                  ]}
                  avoid={[
                    "Stacking multiple rows — destroys spatial memory",
                    "Adding gaps or dividers between tab and panel",
                    "Mixing with other tab types in same interface region",
                  ]}
                />
              </section>

              {/* Vertical */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Vertical Tabs
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Tabs arranged vertically on the left side of the content
                  panel. Accommodates more items and longer labels than
                  horizontal tabs. Use with caution — users can overlook them.
                </p>
                <VerticalDemo />
                <RulesBlock
                  when="Settings pages, account management, admin panels with many sections"
                  rules={[
                    "Position to the LEFT of the panel, never right",
                    "Use a clear active indicator (left border + background)",
                    "Keep panel and tab list visually connected",
                    "Consider icons alongside labels for scannability",
                  ]}
                  avoid={[
                    "Right-side placement — users scan left to right",
                    "Using on mobile — switch to accordions instead",
                    "Subtle active states — vertical tabs already have discoverability issues",
                  ]}
                />
              </section>

              {/* Navigation */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Navigation Tabs
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Tabs that navigate users to entirely different pages or views.
                  Visually similar to in-page tabs but fundamentally different in
                  behaviour — each tab loads new content.
                </p>
                <NavigationDemo />
                <RulesBlock
                  when="Top-level app navigation, section navigation, main content areas of a platform"
                  rules={[
                    "Visually differentiate from in-page tabs if both exist",
                    "Current page tab should always be clearly marked",
                    "Expect slight loading delay — users understand this",
                    "Can be fixed to viewport top on scroll",
                  ]}
                  avoid={[
                    "Mixing with in-page tabs in the same tab bar",
                    "More tabs than fit in one row — use overflow menu",
                    "Hiding the active state when navigated from elsewhere",
                  ]}
                />
              </section>

              {/* Icon Tabs */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Icon Tabs
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Tabs using icons alongside text labels. Common in dense
                  interfaces. Icons alone are risky — always pair with a label
                  for clarity.
                </p>
                <IconTabsDemo />
                <RulesBlock
                  when="Compact dashboards, toolbar-style interfaces, media type switching"
                  rules={[
                    "Always include a text label — icon-only tabs fail usability tests",
                    "Use universally recognised icons only",
                    "Active state needs both icon and label colour change",
                    "Keep icon set visually consistent (same style, weight, size)",
                  ]}
                  avoid={[
                    "Icon-only tabs on desktop — there's room for labels",
                    "Ambiguous or decorative icons without labels",
                    "Mixing icon tabs with text-only tabs in same control",
                  ]}
                />
              </section>

              {/* Universal Rules */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Universal Rules
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  These rules apply to every tab type regardless of variant.
                </p>
                <div className="max-w-3xl space-y-2">
                  {[
                    "Never mix in-page and navigation tabs in the same tab bar",
                    "Use sentence case or title case — never ALL CAPS",
                    "One row only — never stack tab rows",
                    "Position tabs above (or left of) their content panel",
                    "Always have one tab selected by default (in-page tabs)",
                    "If users need to compare across tabs, don't use tabs",
                    "Labels should be 1–2 words with strong information scent",
                    "On mobile, consider accordions instead of horizontal tabs",
                  ].map((rule, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <span className="mt-0.5 shrink-0 font-mono text-xs font-medium text-[#2C365D] dark:text-[#80B3FF]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="leading-relaxed">{rule}</span>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {activeTab === "code" && (
            <>
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Pill / Segmented (component)
                </h2>
                <p className="mb-4 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
                  The{" "}
                  <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    Tabs
                  </code>{" "}
                  component provides the pill/segmented style out of the box.
                </p>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                  <code>{`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/Tabs/Tabs";
import { Icon } from "@/components/ui/icon";

<Tabs defaultValue="overview">
  <TabsList className="grid w-full grid-cols-3 rounded-lg bg-gray-100 p-1">
    <TabsTrigger value="overview">
      <Icon name="dashboard" size={18} />
      Overview
    </TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">Overview content</TabsContent>
  <TabsContent value="details">Details content</TabsContent>
  <TabsContent value="settings">Settings content</TabsContent>
</Tabs>`}</code>
                </pre>
              </section>

              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Underline Tabs
                </h2>
                <p className="mb-4 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
                  Built with plain buttons and Tailwind utilities. Use{" "}
                  <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    border-b-2 border-[#2C365D]
                  </code>{" "}
                  for the active indicator.
                </p>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                  <code>{`const [active, setActive] = useState(0);
const tabs = ["Overview", "Activity", "Analytics"];

<div className="flex border-b border-border">
  {tabs.map((t, i) => (
    <button
      key={t}
      onClick={() => setActive(i)}
      className={\`-mb-px px-5 py-2.5 text-sm transition-all \${
        active === i
          ? "border-b-2 border-[#2C365D] font-semibold text-[#2C365D]"
          : "border-b-2 border-transparent text-gray-500 hover:text-gray-700"
      }\`}
    >
      {t}
    </button>
  ))}
</div>`}</code>
                </pre>
              </section>

              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Boxed / Card Tabs
                </h2>
                <p className="mb-4 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
                  Active tab shares a background with the content panel. Use{" "}
                  <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    border-b-white
                  </code>{" "}
                  on the active tab to erase the bottom border.
                </p>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                  <code>{`<button
  className={active === i
    ? "rounded-t-md border border-border border-b-white bg-white font-semibold"
    : "border border-transparent border-b-border bg-gray-50 text-gray-500"
  }
>
  {tab}
</button>

<div className="rounded-b-lg rounded-tr-lg border border-border bg-white p-5">
  Content panel
</div>`}</code>
                </pre>
              </section>

              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Vertical Tabs
                </h2>
                <p className="mb-4 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
                  Use a left{" "}
                  <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    border-l-2 border-[#2C365D]
                  </code>{" "}
                  indicator with a tinted background. Add icons for
                  scannability.
                </p>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                  <code>{`<div className="flex min-h-[180px]">
  <div className="flex flex-col gap-0.5 border-r border-border">
    {tabs.map((t, i) => (
      <button
        className={\`flex items-center gap-2.5 border-l-2 px-4 py-2 text-sm \${
          active === i
            ? "border-[#2C365D] bg-[#2C365D]/5 font-semibold text-[#2C365D]"
            : "border-transparent text-gray-500 hover:bg-gray-50"
        }\`}
      >
        <Icon name={t.icon} size={18} />
        {t.label}
      </button>
    ))}
  </div>
  <div className="flex-1 px-5 py-2">Content</div>
</div>`}</code>
                </pre>
              </section>

              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Icon Tabs
                </h2>
                <p className="mb-4 max-w-3xl text-sm text-gray-600 dark:text-gray-400">
                  Same underline pattern with a Material Symbols{" "}
                  <code className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-xs text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                    Icon
                  </code>{" "}
                  before each label.
                </p>
                <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                  <code>{`import { Icon } from "@/components/ui/icon";

<button className="flex items-center gap-1.5 border-b-2 border-[#2C365D] ...">
  <Icon name="home" size={18} />
  Home
</button>`}</code>
                </pre>
              </section>
            </>
          )}
        </div>
      </div>
    </>
  );
}
