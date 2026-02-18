"use client";

import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/Card/Card";
import { Icon } from "@/components/ui/icon";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import type { NavigationItem } from "@/components/NavigationBar/NavigationBar";

const BADGE_LIGHT = "/PoweredByTallyBadge.svg";
const BADGE_DARK = "/PoweredByTallyBadgeREV.svg";

const navItems: NavigationItem[] = [
  { id: "home", label: "Home", href: "#", icon: "home" },
  { id: "dashboard", label: "Dashboard", href: "#", icon: "dashboard" },
  { id: "reports", label: "Reports", href: "#", icon: "assessment" },
];

const bottomItems: NavigationItem[] = [
  { id: "help", label: "Help", href: "#", icon: "help" },
  { id: "settings", label: "Settings", href: "#", icon: "settings" },
];

const neutralActiveColors = {
  bg: "bg-gray-100",
  text: "text-gray-900",
  darkBg: "dark:bg-gray-700/50",
  darkText: "dark:text-gray-100",
};

export default function PoweredByTallyPage() {
  return (
    <>
      <PageBanner title="Powered by Tally" />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
              The Powered by Tally badge identifies products and experiences built on the Tally platform. Use the correct variant for your background: light badge on light backgrounds, dark badge on dark backgrounds.
            </p>
          </div>

          <section className="mb-16 border-t border-border pt-16">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Badge variants
            </h2>
            <p className="mb-6 max-w-3xl text-base text-gray-600 dark:text-gray-400">
              Two variants ensure legibility on light and dark surfaces. Use the standard badge on light backgrounds; use the dark variant on dark backgrounds (e.g. dark mode or dark nav bars).
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Card className="overflow-hidden shadow-none">
                <div className="flex min-h-[88px] items-center justify-center bg-white p-6 dark:bg-gray-100">
                  <Image
                    src={BADGE_LIGHT}
                    alt="Powered by Tally (light)"
                    width={123}
                    height={26}
                    className="h-7 w-auto object-contain"
                    unoptimized
                  />
                </div>
                <CardHeader className="pb-1 pt-3">
                  <CardTitle className="text-sm">Light variant</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    For use on light backgrounds (e.g. light mode sidebar, white surfaces).
                  </p>
                </CardHeader>
                <CardContent className="pt-0 pb-3">
                  <a
                    href={BADGE_LIGHT}
                    download="PoweredByTallyBadge.svg"
                    className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium ring-offset-background hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon name="download" size={14} className="mr-1.5" />
                    Download SVG
                  </a>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-none">
                <div className="flex min-h-[88px] items-center justify-center bg-[#2C365D] p-6">
                  <Image
                    src={BADGE_DARK}
                    alt="Powered by Tally (dark)"
                    width={123}
                    height={26}
                    className="h-7 w-auto object-contain"
                    unoptimized
                  />
                </div>
                <CardHeader className="pb-1 pt-3">
                  <CardTitle className="text-sm">Dark variant</CardTitle>
                  <p className="text-xs text-muted-foreground">
                    For use on dark backgrounds (e.g. dark mode sidebar, dark nav bars).
                  </p>
                </CardHeader>
                <CardContent className="pt-0 pb-3">
                  <a
                    href={BADGE_DARK}
                    download="PoweredByTallyBadgeREV.svg"
                    className="inline-flex items-center rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium ring-offset-background hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon name="download" size={14} className="mr-1.5" />
                    Download SVG
                  </a>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16 border-t border-border pt-16">
            <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Use in the nav bar
            </h2>
            <p className="mb-6 max-w-3xl text-base text-gray-600 dark:text-gray-400">
              The <code className="rounded bg-gray-200 px-1.5 py-0.5 text-sm dark:bg-gray-700">NavigationBar</code> component places the Powered by Tally badge at the bottom of the sidebar, next to the collapse toggle. In <strong>expanded</strong> mode the badge is visible; in <strong>collapsed</strong> mode the collapse control is shown and the badge is hidden to save space. The component switches between light and dark badge variants automatically based on theme.
            </p>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="rounded-lg border border-border bg-white dark:border-gray-700 dark:bg-gray-800/50">
                <div className="border-b border-border px-4 py-3 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Expanded — badge visible
                  </span>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Badge appears at bottom of nav with collapse button.
                  </p>
                </div>
                <div className="flex min-h-[420px]">
                  <NavigationBar
                    items={navItems}
                    bottomItems={bottomItems}
                    defaultActiveId="home"
                    collapsed={false}
                    onCollapsedChange={() => {}}
                    compact
                    activeColors={neutralActiveColors}
                  />
                  <div className="flex-1 border-l border-border bg-gray-50/50 p-4 dark:border-gray-700 dark:bg-gray-900/30" />
                </div>
              </div>
              <div className="rounded-lg border border-border bg-white dark:border-gray-700 dark:bg-gray-800/50">
                <div className="border-b border-border px-4 py-3 dark:border-gray-700">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Collapsed — collapse control only
                  </span>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Expand to see the Powered by Tally badge.
                  </p>
                </div>
                <div className="flex min-h-[420px]">
                  <NavigationBar
                    items={navItems}
                    bottomItems={bottomItems}
                    defaultActiveId="home"
                    collapsed={true}
                    onCollapsedChange={() => {}}
                    compact
                    activeColors={neutralActiveColors}
                  />
                  <div className="flex-1 border-l border-border bg-gray-50/50 p-4 dark:border-gray-700 dark:bg-gray-900/30" />
                </div>
              </div>
            </div>
          </section>

          <div className="border-t border-border pt-8">
            <Link
              href="/foundation/brands"
              className="text-sm font-medium text-[#2C365D] hover:underline dark:text-[#7c8cb8]"
            >
              ← Back to Brands
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
