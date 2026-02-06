"use client";

import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/PageBanner/PageBanner";
import TabNavigation from "@/components/TabNavigation/TabNavigation";
import { Avatar, AvatarFallback } from "@/components/Avatar/Avatar";
import { Icon } from "@/components/ui/icon";
import { useState } from "react";
/* ========== App Bar Component (from pages) ========== */
function AppBarExample({
  showSearch = true,
  showNotifications = true,
  showAvatar = true,
  logoVariant = "tally",
}: {
  showSearch?: boolean;
  showNotifications?: boolean;
  showAvatar?: boolean;
  logoVariant?: "tally" | "beta" | "glass";
}) {
  const logoSrc =
    logoVariant === "beta"
      ? { light: "/BetaTestLogo.svg", dark: "/BetaTestLogo_darkmode.svg" }
      : logoVariant === "glass"
        ? { light: "/GlassLogoTest.svg", dark: "/GlassLogoTest_darkmode.svg" }
        : { light: "/Tally_DS_Logo.svg", dark: "/Tally_DS_Logo.svg" };

  return (
    <header className="flex h-14 shrink-0 items-center gap-4 border-b border-border bg-white px-6 dark:border-gray-800 dark:bg-gray-950/90">
      {/* 1. App Logo Area */}
      <div className="flex min-w-0 shrink-0 items-center gap-4">
        <Link href="/" className="flex items-center">
          {logoVariant === "tally" ? (
            <Image
              src={logoSrc.light}
              alt="Tally Design System"
              width={210}
              height={33}
              className="h-8 w-auto block dark:hidden"
              priority
            />
          ) : (
            <>
              <Image
                src={logoSrc.light}
                alt="App Logo"
                width={140}
                height={32}
                className="h-8 w-auto block dark:hidden"
                priority
              />
              <Image
                src={logoSrc.dark}
                alt="App Logo"
                width={140}
                height={32}
                className="h-8 w-auto hidden dark:block"
                priority
              />
            </>
          )}
        </Link>
      </div>

      {/* 2. Search Bar Area (Center) */}
      {showSearch && (
        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-md">
            <Icon
              name="search"
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
            />
            <input
              type="search"
              placeholder="Search"
              className="h-10 w-full rounded-lg border border-border bg-gray-50 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-[#2C365D] focus:outline-none focus:ring-1 focus:ring-[#2C365D] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
      )}

      {/* 3. Profile & Actions Area (Right) */}
      <div className="flex shrink-0 items-center gap-3">
        {showNotifications && (
          <button
            type="button"
            className="rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800/80 dark:hover:text-gray-100"
            aria-label="Notifications"
          >
            <Icon name="notifications" size={20} />
          </button>
        )}
        {showAvatar && (
          <Avatar className="h-9 w-9">
            <AvatarFallback className="text-xs">BT</AvatarFallback>
          </Avatar>
        )}
      </div>
    </header>
  );
}

/* ========== App Bar with labeled areas for documentation ========== */
function AppBarWithLabels() {
  return (
    <div className="rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800">
      {/* Labels overlay - shown above the bar */}
      <div className="border-b border-dashed border-amber-400/60 bg-amber-50/80 px-4 py-2 dark:border-amber-500/40 dark:bg-amber-950/30">
        <p className="text-xs font-medium text-amber-800 dark:text-amber-200">
          App Bar structure — three distinct areas
        </p>
      </div>
      <div className="relative">
        <header className="flex h-14 shrink-0 items-center gap-4 border-b border-border bg-white px-6 dark:border-gray-800 dark:bg-gray-950/90">
          {/* Area 1: App Logo */}
          <div className="flex min-w-0 shrink-0 items-center gap-4 rounded-lg border-2 border-dashed border-blue-400/60 bg-blue-50/50 p-2 dark:border-blue-500/40 dark:bg-blue-950/20">
            <Link href="/" className="flex items-center">
              <Image
                src="/BetaTestLogo.svg"
                alt="App Logo"
                width={140}
                height={32}
                className="h-7 w-auto block dark:hidden"
                priority
              />
              <Image
                src="/BetaTestLogo_darkmode.svg"
                alt="App Logo"
                width={140}
                height={32}
                className="h-7 w-auto hidden dark:block"
                priority
              />
            </Link>
          </div>

          {/* Area 2: Search Bar */}
          <div className="flex flex-1 justify-center">
            <div className="relative w-full max-w-md rounded-lg border-2 border-dashed border-emerald-400/60 bg-emerald-50/50 p-1.5 dark:border-emerald-500/40 dark:bg-emerald-950/20">
              <Icon
                name="search"
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
              />
              <input
                type="search"
                placeholder="Search"
                readOnly
                className="h-9 w-full cursor-default rounded-md border border-border bg-gray-50 pl-10 pr-3 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          {/* Area 3: Profile Avatar & Actions */}
          <div className="flex shrink-0 items-center gap-3 rounded-lg border-2 border-dashed border-violet-400/60 bg-violet-50/50 p-2 dark:border-violet-500/40 dark:bg-violet-950/20">
            <button
              type="button"
              className="rounded p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              aria-label="Notifications"
            >
              <Icon name="notifications" size={20} />
            </button>
            <Avatar className="h-9 w-9">
              <AvatarFallback className="text-xs">BT</AvatarFallback>
            </Avatar>
          </div>
        </header>
        {/* Area labels below */}
        <div className="grid grid-cols-3 gap-2 border-t border-border bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-900/40">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              1. App Logo
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              2. Search Bar
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-violet-500" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              3. Profile Avatar & Actions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppBarPage() {
  const [activeTab, setActiveTab] = useState("design");

  const tabs = [
    { id: "design", label: "Design" },
    { id: "code", label: "Code" },
  ];

  return (
    <>
      <PageBanner title="App Bar" />

      <TabNavigation
        tabs={tabs}
        defaultTab="design"
        onTabChange={setActiveTab}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Page Description */}
          <div className="mb-12">
            <p className="max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
              The App Bar is the primary top header used across application pages.
              It provides consistent branding, global search, and user profile
              access. The bar is divided into three distinct areas: App Logo (left),
              Search Bar (center), and Profile Avatar with optional actions (right).
            </p>
          </div>

          {activeTab === "design" && (
            <>
              {/* Structure with labeled areas */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  App Bar Structure
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  The App Bar comprises three clearly defined zones. Each area has
                  a specific role and can be customized per application.
                </p>
                <AppBarWithLabels />
              </section>

              {/* Full implementation (clean, no labels) */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Full App Bar (Production)
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Production-ready App Bar as used in Beta Test Dashboard and
                  Tally Glass pages. All three areas are present.
                </p>
                <div className="overflow-hidden rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800">
                  <AppBarExample
                    showSearch
                    showNotifications
                    showAvatar
                    logoVariant="beta"
                  />
                  <div className="h-32 border-t border-border bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900/40">
                    <div className="h-4 w-48 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="mt-4 h-4 w-64 rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                </div>
              </section>

              {/* Area 1: App Logo */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Area 1 — App Logo
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  The left zone displays the application or brand logo. Typically
                  links to home. Supports light and dark mode variants where
                  applicable.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Logo variants
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      <div className="rounded-lg border border-border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                        <p className="mb-2 text-xs font-medium text-muted-foreground">Tally DS</p>
                        <Image src="/Tally_DS_Logo.svg" alt="Tally" width={140} height={24} className="h-6 w-auto" />
                      </div>
                      <div className="rounded-lg border border-border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                        <p className="mb-2 text-xs font-medium text-muted-foreground">App Logo</p>
                        <Image src="/BetaTestLogo.svg" alt="App Logo" width={120} height={28} className="h-6 w-auto block dark:hidden" />
                        <Image src="/BetaTestLogo_darkmode.svg" alt="App Logo" width={120} height={28} className="h-6 w-auto hidden dark:block" />
                      </div>
                      <div className="rounded-lg border border-border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                        <p className="mb-2 text-xs font-medium text-muted-foreground">Tally Glass</p>
                        <Image src="/GlassLogoTest.svg" alt="Glass" width={120} height={32} className="h-6 w-auto block dark:hidden" />
                        <Image src="/GlassLogoTest_darkmode.svg" alt="Glass" width={120} height={32} className="h-6 w-auto hidden dark:block" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    <p className="mb-2 font-semibold">Specifications:</p>
                    <ul className="list-inside list-disc space-y-1 text-gray-300">
                      <li>Height: h-8 (32px) typical</li>
                      <li>Link wraps logo for navigation home</li>
                      <li>Use next/image for optimized loading</li>
                      <li>Support light/dark variants via CSS classes</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Area 2: Search Bar */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Area 2 — Search Bar
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  The center zone hosts global search. It is flex-1 to take
                  remaining space and is typically centered with max-width for
                  readability.
                </p>
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="relative w-full max-w-md">
                      <Icon
                        name="search"
                        size={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                      />
                      <input
                        type="search"
                        placeholder="Search"
                        className="h-10 w-full rounded-lg border border-border bg-gray-50 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                      />
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    <p className="mb-2 font-semibold">Specifications:</p>
                    <ul className="list-inside list-disc space-y-1 text-gray-300">
                      <li>Input height: h-10 (40px)</li>
                      <li>Max width: max-w-md (448px)</li>
                      <li>Search icon: left-3, 20px</li>
                      <li>Border/ring on focus: #2C365D</li>
                      <li>Hidden on small screens if needed (hidden md:block)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Area 3: Profile Avatar & Actions */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Area 3 — Profile Avatar & Actions
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  The right zone contains optional action buttons (e.g. notifications)
                  and the user profile Avatar. Uses the Avatar component with
                  fallback initials.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      className="rounded p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                      aria-label="Notifications"
                    >
                      <Icon name="notifications" size={20} />
                    </button>
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="text-xs">BT</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    <p className="mb-2 font-semibold">Specifications:</p>
                    <ul className="list-inside list-disc space-y-1 text-gray-300">
                      <li>Avatar size: h-9 w-9 (36px)</li>
                      <li>Action buttons: p-2, icon size 20px</li>
                      <li>Gap between items: gap-3</li>
                      <li>Use Avatar + AvatarFallback from design system</li>
                    </ul>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === "code" && (
            <section className="border-t border-border pt-16 dark:border-gray-700">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                Usage
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                    Full App Bar structure
                  </h3>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    <code>{`<header className="flex h-14 shrink-0 items-center gap-4 border-b border-border bg-white px-6 dark:border-gray-800 dark:bg-gray-950/90">
  {/* 1. App Logo */}
  <div className="flex items-center gap-4">
    <Link href="/" className="flex items-center">
      <Image src="/BetaTestLogo.svg" alt="App Logo" width={140} height={32}
        className="h-8 w-auto block dark:hidden" />
      <Image src="/BetaTestLogo_darkmode.svg" alt="App Logo" width={140} height={32}
        className="h-8 w-auto hidden dark:block" />
    </Link>
  </div>

  {/* 2. Search Bar (center) */}
  <div className="flex flex-1 justify-center">
    <div className="relative w-full max-w-md">
      <Icon name="search" size={20}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input type="search" placeholder="Search"
        className="h-10 w-full rounded-lg border border-border bg-gray-50 pl-10 pr-3
          text-sm focus:border-[#2C365D] focus:ring-1 focus:ring-[#2C365D]" />
    </div>
  </div>

  {/* 3. Profile Avatar & Actions */}
  <div className="flex items-center gap-3">
    <button type="button" aria-label="Notifications">
      <Icon name="notifications" size={20} />
    </button>
    <Avatar className="h-9 w-9">
      <AvatarFallback className="text-xs">BT</AvatarFallback>
    </Avatar>
  </div>
</header>`}</code>
                  </pre>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                    Key components
                  </h3>
                  <ul className="list-disc space-y-1 pl-6 text-gray-600 dark:text-gray-400">
                    <li><code className="rounded bg-gray-200 px-1 dark:bg-gray-700">Avatar</code>, <code className="rounded bg-gray-200 px-1 dark:bg-gray-700">AvatarFallback</code> from @/components/Avatar</li>
                    <li><code className="rounded bg-gray-200 px-1 dark:bg-gray-700">Icon</code> from @/components/ui/icon</li>
                    <li><code className="rounded bg-gray-200 px-1 dark:bg-gray-700">Image</code> from next/image</li>
                  </ul>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
