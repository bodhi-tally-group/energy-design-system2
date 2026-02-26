"use client";

import NavigationBar from "@/components/NavigationBar/NavigationBar";
import PageBanner from "@/components/PageBanner/PageBanner";
import TabNavigation from "@/components/TabNavigation/TabNavigation";
import { Icon } from "@/components/ui/icon";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { useState, useEffect } from "react";

export default function NavigationBarPage() {
  const [activeTab, setActiveTab] = useState("design");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const [responsiveCollapsed, setResponsiveCollapsed] = useState(!isLg);

  useEffect(() => {
    setResponsiveCollapsed(!isLg);
  }, [isLg]);

  const tabs = [
    { id: "design", label: "Design" },
    { id: "code", label: "Code" },
  ];

  const sampleNavItems = [
    { id: "search", label: "Search", href: "#", icon: "search" },
    {
      id: "account",
      label: "Account",
      icon: "person",
      children: [
        { id: "submenu-1", label: "Submenu 1", href: "#" },
        { id: "submenu-2", label: "Submenu 2", href: "#" },
        { id: "submenu-3", label: "Submenu 3", href: "#" },
        { id: "submenu-4", label: "Submenu 4", href: "#" },
      ],
    },
    { id: "tasks", label: "Tasks and Exceptions", href: "#", icon: "task_alt" },
    { id: "market", label: "Market", href: "#", icon: "storefront" },
    { id: "adjustments", label: "Adjustments", href: "#", icon: "tune" },
    {
      id: "life-support",
      label: "Life Support registry",
      href: "#",
      icon: "medical_services",
    },
    { id: "reports", label: "Reports", href: "#", icon: "assessment" },
    {
      id: "products",
      label: "Products",
      icon: "inventory_2",
      children: [
        { id: "prod-1", label: "Product list", href: "#" },
        { id: "prod-2", label: "Catalog", href: "#" },
      ],
    },
    { id: "maintenance", label: "Maintenance", href: "#", icon: "build" },
  ];

  const sampleBottomItems = [
    { id: "help", label: "Help", href: "#", icon: "help" },
    { id: "settings", label: "Settings", href: "#", icon: "settings" },
  ];

  const sampleTopSection = {
    icon: "public",
    title: "Mass Market",
    subtitle: "Tally Group",
    environments: [
      { id: "mass-market", label: "Mass Market", sublabel: "Tally Group", icon: "public", accent: "teal" as const },
      { id: "small-markets", label: "Small markets", sublabel: "Tally Group", icon: "public", accent: "red" as const },
    ],
    currentEnvironmentId: "mass-market",
    onEnvironmentChange: (id: string) => console.log("Environment:", id),
    onAddEnvironment: () => console.log("Add environment"),
  };

  return (
    <>
      <PageBanner title="Navigation Bar" />

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
              Navigation bars provide consistent navigation patterns across
              applications. They support collapsible states, icons, and multiple
              interaction states to create intuitive navigation experiences.
            </p>
          </div>

          {activeTab === "design" && (
            <>
              {/* Expanded Navigation Bar */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Expanded Navigation Bar
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Full-width bar with top section (branding and environment
                  switcher), main nav with optional submenus, and bottom
                  items (Help, Settings). Use the collapse control at the
                  bottom to toggle to icon-only.
                </p>
                <div className="rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex">
                    <NavigationBar
                      topSection={sampleTopSection}
                      items={sampleNavItems}
                      bottomItems={sampleBottomItems}
                      defaultActiveId="search"
                      collapsed={false}
                      compact
                    />
                    {/* In-situ skeleton content */}
                    <div className="flex-1 border-l border-border bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900/40">
                      <div className="mb-6 h-6 w-40 rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="mb-4 h-4 w-64 rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="space-y-3">
                        <div className="h-20 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                        <div className="h-20 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                        <div className="h-20 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Compact (icon-only) Navigation Bar */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Compact Navigation Bar
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Collapsed to icon-only strip. Hover an icon to see its label
                  as a tooltip. Items with submenus show a flyout to the right
                  on hover. Use the chevron at the bottom to expand.
                </p>
                <div className="rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex">
                    <NavigationBar
                      topSection={sampleTopSection}
                      items={sampleNavItems}
                      bottomItems={sampleBottomItems}
                      defaultActiveId="search"
                      collapsed={true}
                      compact
                    />
                    {/* In-situ skeleton content */}
                    <div className="flex-1 border-l border-border bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900/40">
                      <div className="mb-6 h-6 w-40 rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="mb-4 h-4 w-64 rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="space-y-3">
                        <div className="h-20 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                        <div className="h-20 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                        <div className="h-20 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* States Section */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  States
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Navigation items support multiple states to provide clear
                  feedback and indicate interactivity.
                </p>

                <div className="space-y-8">
                  {/* Default State */}
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Default State
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      Default navigation items use gray text colors and are
                      ready for interaction.
                    </p>
                    <div className="inline-flex flex-col gap-1 rounded-lg border border-border bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <Icon
                          name="dashboard"
                          size={20}
                          className="text-gray-600 dark:text-gray-400"
                        />
                        <span>Dashboard</span>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                      <p className="mb-2 font-semibold">Specifications:</p>
                      <ul className="list-inside list-disc space-y-1 text-gray-300">
                        <li>Text color: gray-700 (dark: gray-300)</li>
                        <li>Icon color: gray-600 (dark: gray-400)</li>
                        <li>Background: transparent</li>
                        <li>Padding: px-3 py-2</li>
                      </ul>
                    </div>
                  </div>

                  {/* Hover State */}
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Hover State
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      On hover, items show a background color change and text
                      color darkens to indicate interactivity.
                    </p>
                    <div className="inline-flex flex-col gap-1 rounded-lg border border-border bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-center gap-3 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 transition-colors dark:bg-gray-700 dark:text-gray-100">
                        <Icon
                          name="analytics"
                          size={20}
                          className="text-gray-900 dark:text-gray-100"
                        />
                        <span>Analytics</span>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                      <p className="mb-2 font-semibold">Specifications:</p>
                      <ul className="list-inside list-disc space-y-1 text-gray-300">
                        <li>Text color: gray-900 (dark: gray-100)</li>
                        <li>Icon color: gray-900 (dark: gray-100)</li>
                        <li>Background: gray-100 (dark: gray-700)</li>
                        <li>Transition: transition-colors</li>
                      </ul>
                    </div>
                  </div>

                  {/* Active State */}
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Active State
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      Active items use a subtle background highlight to indicate
                      the current page or section. Each Tally product defines
                      its own active colour — the default uses a neutral gray.
                    </p>
                    <div className="inline-flex flex-col gap-1 rounded-lg border border-border bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-center gap-3 rounded-md bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100">
                        <Icon
                          name="settings"
                          size={20}
                          className="text-gray-900 dark:text-gray-100"
                        />
                        <span>Settings</span>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                      <p className="mb-2 font-semibold">Specifications:</p>
                      <ul className="list-inside list-disc space-y-1 text-gray-300">
                        <li>Text color: gray-900 (dark: gray-100)</li>
                        <li>Icon color: gray-900 (dark: gray-100)</li>
                        <li>Background: gray-100 (dark: gray-700)</li>
                        <li>Indicates current page/section</li>
                        <li>Each Tally product overrides active colours to match its brand</li>
                      </ul>
                    </div>
                  </div>

                  {/* Disabled State */}
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Disabled State
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      Disabled items are visually de-emphasized and
                      non-interactive.
                    </p>
                    <div className="inline-flex flex-col gap-1 rounded-lg border border-border bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-gray-700 opacity-50 dark:text-gray-300">
                        <Icon
                          name="lock"
                          size={20}
                          className="text-gray-400 dark:text-gray-500"
                        />
                        <span>Disabled Item</span>
                      </div>
                    </div>
                    <div className="mt-4 rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                      <p className="mb-2 font-semibold">Specifications:</p>
                      <ul className="list-inside list-disc space-y-1 text-gray-300">
                        <li>Text color: gray-700 with 50% opacity</li>
                        <li>Icon color: gray-400 (dark: gray-500)</li>
                        <li>Background: transparent</li>
                        <li>Cursor: not-allowed</li>
                        <li>No hover effects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Icon Specifications */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Icon Specifications
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Icons in navigation bars follow consistent sizing and styling
                  guidelines.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Icon Size
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      Navigation bar icons use a standard size of 20px (1.25rem)
                      for optimal visibility and touch targets.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3 rounded-md border border-border bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
                        <Icon name="dashboard" size={20} />
                        <span className="text-sm">20px (default)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Icon Color
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      Icon colors match the text color in each state for visual
                      consistency.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 rounded-md border border-border bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
                        <Icon
                          name="dashboard"
                          size={20}
                          className="text-gray-600 dark:text-gray-400"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Default: gray-600 (dark: gray-400)
                        </span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md border border-border bg-gray-100 px-3 py-2 dark:border-gray-700 dark:bg-gray-700">
                        <Icon
                          name="analytics"
                          size={20}
                          className="text-gray-900 dark:text-gray-100"
                        />
                        <span className="text-sm text-gray-900 dark:text-gray-100">
                          Hover: gray-900 (dark: gray-100)
                        </span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md border border-border bg-gray-100 px-3 py-2 dark:border-gray-700 dark:bg-gray-700">
                        <Icon
                          name="settings"
                          size={20}
                          className="text-gray-900 dark:text-gray-100"
                        />
                        <span className="text-sm text-gray-900 dark:text-gray-100">
                          Active: gray-900 (dark: gray-100) — per-product override
                        </span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md border border-border bg-white px-3 py-2 opacity-50 dark:border-gray-700 dark:bg-gray-800">
                        <Icon
                          name="lock"
                          size={20}
                          className="text-gray-400 dark:text-gray-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          Disabled: gray-400 (dark: gray-500)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Icon Weight
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      Icons use Material Symbols Outlined with a font-weight of
                      400 (normal). This provides a clean, consistent appearance
                      across all navigation items.
                    </p>
                    <div className="rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                      <p className="mb-2 font-semibold">CSS Specification:</p>
                      <pre className="overflow-x-auto text-gray-300">
                        <code>{`.material-symbols-outlined {
  font-weight: 400;
  font-style: normal;
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Text Specifications */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Text Specifications
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Navigation text follows typography guidelines for consistency
                  and readability.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Text Size
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      Navigation items use text-sm (14px) for optimal readability
                      and space efficiency.
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="rounded-md border border-border bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
                        <span className="text-sm font-medium">text-sm (14px)</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Text Color
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      Text colors align with the state system for visual
                      consistency.
                    </p>
                    <div className="space-y-3">
                      <div className="rounded-md border border-border bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Default: gray-700 (dark: gray-300)
                        </span>
                      </div>
                      <div className="rounded-md border border-border bg-gray-100 px-3 py-2 dark:border-gray-700 dark:bg-gray-700">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          Hover: gray-900 (dark: gray-100)
                        </span>
                      </div>
                      <div className="rounded-md border border-border bg-gray-100 px-3 py-2 dark:border-gray-700 dark:bg-gray-700">
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          Active: gray-900 (dark: gray-100) — per-product override
                        </span>
                      </div>
                      <div className="rounded-md border border-border bg-white px-3 py-2 opacity-50 dark:border-gray-700 dark:bg-gray-800">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Disabled: gray-700 with 50% opacity
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Font Weight
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      Navigation items use font-medium (500) for clear
                      hierarchy and readability.
                    </p>
                    <div className="rounded-md border border-border bg-white px-3 py-2 dark:border-gray-700 dark:bg-gray-800">
                      <span className="text-sm font-medium">font-medium (500)</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Collapsible Behavior */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Collapsible Behavior
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Navigation bars can collapse to save space while maintaining
                  accessibility through icon-only display and hover tooltips.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Expanded State
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      When expanded, the navigation bar shows icons and text
                      labels side by side. Width: 256px (w-64).
                    </p>
                    <div className="inline-block rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex">
                        <NavigationBar
                          topSection={sampleTopSection}
                          items={sampleNavItems.slice(0, 4)}
                          bottomItems={sampleBottomItems}
                          defaultActiveId="search"
                          collapsed={false}
                          compact
                        />
                        <div className="flex-1 border-l border-border bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                          <div className="mb-3 h-4 w-32 rounded bg-gray-200 dark:bg-gray-700" />
                          <div className="space-y-2">
                            <div className="h-10 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                            <div className="h-10 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Collapsed State
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      When collapsed, the navigation bar shows only icons.
                      Width: 64px (w-16). Text labels appear in tooltips on
                      hover.
                    </p>
                    <div className="inline-block rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex">
                        <NavigationBar
                          topSection={sampleTopSection}
                          items={sampleNavItems.slice(0, 4)}
                          bottomItems={sampleBottomItems}
                          defaultActiveId="search"
                          collapsed={true}
                          compact
                        />
                        <div className="flex-1 border-l border-border bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                          <div className="mb-3 h-4 w-32 rounded bg-gray-200 dark:bg-gray-700" />
                          <div className="space-y-2">
                            <div className="h-10 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                            <div className="h-10 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Transition
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      The collapse/expand transition uses a smooth 300ms
                      duration for a polished user experience.
                    </p>
                    <div className="rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                      <p className="mb-2 font-semibold">CSS Specification:</p>
                      <pre className="overflow-x-auto text-gray-300">
                        <code>{`transition-all duration-300`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Responsive Auto-Collapsing */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Responsive Auto-Collapsing
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Navigation bars should auto-collapse based on viewport width.
                  Below the <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono dark:bg-gray-800">lg</code> breakpoint
                  (1024px), the sidebar collapses to an icon-only strip. At or above 1024px, it expands
                  to full width. The user can still manually override with the chevron toggle.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Rules
                    </h3>
                    <div className="rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                      <ul className="list-inside list-disc space-y-1.5 text-gray-300">
                        <li><strong className="text-gray-100">Breakpoint:</strong> 1024px (<code className="text-xs">min-width: 1024px</code> / Tailwind <code className="text-xs">lg</code>)</li>
                        <li><strong className="text-gray-100">Below 1024px:</strong> Auto-collapse to icon-only (<code className="text-xs">w-16</code>). Tooltips on hover; flyout submenus for parent items.</li>
                        <li><strong className="text-gray-100">At or above 1024px:</strong> Auto-expand to full width (<code className="text-xs">w-64</code>). Inline accordion for parent items with children.</li>
                        <li><strong className="text-gray-100">Auto-sync:</strong> Listens to <code className="text-xs">matchMedia</code> change events for real-time response to browser resizing.</li>
                        <li><strong className="text-gray-100">Manual override:</strong> Chevron toggle at the bottom always allows manual collapse/expand.</li>
                        <li><strong className="text-gray-100">Smooth transition:</strong> <code className="text-xs">transition-[width] duration-300</code></li>
                        <li><strong className="text-gray-100">SSR safety:</strong> Hook returns <code className="text-xs">false</code> during SSR/hydration, syncs on mount.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Live Demo
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      This demo is wired to the <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm font-mono dark:bg-gray-800">useMediaQuery</code> hook.
                      Resize your browser below 1024px to see the nav auto-collapse, or use the chevron to override.
                      Current viewport: <strong className="text-gray-900 dark:text-gray-100">{isLg ? "≥ 1024px (expanded)" : "< 1024px (collapsed)"}</strong>
                    </p>
                    <div className="rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800">
                      <div className="flex">
                        <NavigationBar
                          topSection={sampleTopSection}
                          items={sampleNavItems}
                          bottomItems={sampleBottomItems}
                          defaultActiveId="search"
                          collapsed={responsiveCollapsed}
                          onCollapsedChange={setResponsiveCollapsed}
                          compact
                        />
                        <div className="flex-1 border-l border-border bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900/40">
                          <div className="flex items-center gap-2 mb-4">
                            <Icon name={isLg ? "desktop_windows" : "smartphone"} size={20} className="text-gray-500" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {isLg ? "Desktop viewport" : "Narrow viewport"} — Nav is {responsiveCollapsed ? "collapsed" : "expanded"}
                            </span>
                          </div>
                          <div className="space-y-3">
                            <div className="h-20 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                            <div className="h-20 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                            <div className="h-20 rounded-md border border-border bg-white dark:border-gray-700 dark:bg-gray-800" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Spacing and Layout */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Spacing and Layout
                </h2>
                <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Consistent spacing ensures visual harmony and proper touch
                  targets.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Item Padding
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      Navigation items use px-3 py-2 (12px horizontal, 8px
                      vertical) for comfortable spacing.
                    </p>
                    <div className="rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                      <p className="mb-2 font-semibold">Specification:</p>
                      <ul className="list-inside list-disc space-y-1 text-gray-300">
                        <li>Horizontal padding: px-3 (12px)</li>
                        <li>Vertical padding: py-2 (8px)</li>
                        <li>Gap between icon and text: gap-3 (12px)</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Item Spacing
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      Items are spaced with space-y-1 (4px vertical gap) for
                      clear separation without excessive spacing.
                    </p>
                    <div className="rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                      <p className="mb-2 font-semibold">Specification:</p>
                      <ul className="list-inside list-disc space-y-1 text-gray-300">
                        <li>Vertical spacing: space-y-1 (4px)</li>
                        <li>Container padding: p-4 (16px)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === "code" && (
            <section className="border-t border-border pt-16 dark:border-gray-700">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                Usage Examples
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                    Full structure (top, main, bottom)
                  </h3>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    <code>{`import NavigationBar from "@/components/NavigationBar/NavigationBar";

const topSection = {
  icon: "public",
  title: "Mass Market",
  subtitle: "Tally Group",
  environments: [
    { id: "mass-market", label: "Mass Market", icon: "public", accent: "teal" },
    { id: "small-markets", label: "Small markets", icon: "public", accent: "red" },
  ],
  currentEnvironmentId: "mass-market",
  onEnvironmentChange: (id) => {},
  onAddEnvironment: () => {},
};

const items = [
  { id: "search", label: "Search", href: "/search", icon: "search" },
  {
    id: "account",
    label: "Account",
    icon: "person",
    children: [
      { id: "sub-1", label: "Submenu 1", href: "#" },
      { id: "sub-2", label: "Submenu 2", href: "#" },
    ],
  },
];

const bottomItems = [
  { id: "help", label: "Help", href: "/help", icon: "help" },
  { id: "settings", label: "Settings", href: "/settings", icon: "settings" },
];

<NavigationBar
  topSection={topSection}
  items={items}
  bottomItems={bottomItems}
  defaultActiveId="search"
  collapsed={false}
  onCollapsedChange={(c) => setCollapsed(c)}
/>`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                    Compact (icon-only) with collapse toggle
                  </h3>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    <code>{`<NavigationBar
  topSection={topSection}
  items={items}
  bottomItems={bottomItems}
  collapsed={true}
  onItemClick={(itemId) => console.log("Clicked:", itemId)}
/>`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                    Props
                  </h3>
                  <div className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    <pre>
                      <code>{`interface NavigationBarProps {
  items: NavigationItem[];
  bottomItems?: NavigationItem[];
  topSection?: NavTopSection;
  defaultActiveId?: string;
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
  compact?: boolean;
  expandOnHover?: boolean;
  onItemClick?: (itemId: string) => void;
  className?: string;
}

interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  icon?: string;
  disabled?: boolean;
  children?: NavigationItem[];
}`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                    Controlled collapse
                  </h3>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    <code>{`"use client";

import { useState } from "react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <NavigationBar
      topSection={topSection}
      items={items}
      bottomItems={bottomItems}
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
    />
  );
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                    Responsive auto-collapsing with useMediaQuery
                  </h3>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    <code>{`"use client";

import { useState, useEffect } from "react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

export default function Layout() {
  const isLg = useMediaQuery("(min-width: 1024px)");
  const [navCollapsed, setNavCollapsed] = useState(!isLg);

  // Auto-sync when viewport crosses the 1024px boundary
  useEffect(() => {
    setNavCollapsed(!isLg);
  }, [isLg]);

  return (
    <NavigationBar
      topSection={topSection}
      items={items}
      bottomItems={bottomItems}
      collapsed={navCollapsed}
      onCollapsedChange={setNavCollapsed}
    />
  );
}`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-gray-100">
                    useMediaQuery hook
                  </h3>
                  <p className="mb-3 text-sm text-gray-600 dark:text-gray-400">
                    SSR-safe hook that listens to a CSS media query. Returns <code className="rounded bg-gray-800 px-1.5 py-0.5 text-xs font-mono">false</code> during
                    SSR/hydration and syncs with the real value on mount. Located at <code className="rounded bg-gray-800 px-1.5 py-0.5 text-xs font-mono">lib/hooks/useMediaQuery.ts</code>.
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
                    <code>{`"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);
  return matches;
}`}</code>
                  </pre>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
