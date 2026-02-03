"use client";

import PageBanner from "@/components/PageBanner/PageBanner";
import TabNavigation from "@/components/TabNavigation/TabNavigation";
import { useState } from "react";

export default function DarkModePage() {
  const [activeTab, setActiveTab] = useState("guidelines");

  const tabs = [
    { id: "guidelines", label: "Guidelines" },
    { id: "examples", label: "Examples" },
  ];

  return (
    <>
      <PageBanner title="Dark Mode" />

      <TabNavigation
        tabs={tabs}
        defaultTab="guidelines"
        onTabChange={setActiveTab}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {activeTab === "guidelines" && (
            <>
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Page background
                </h2>
                <p className="mb-4 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Component documentation pages use a neutral, low‑contrast
                  background so content and component surfaces stay readable:
                </p>
                <ul className="max-w-3xl list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>Light mode</strong>: <code>bg-gray-50</code> on the
                    page wrapper.
                  </li>
                  <li>
                    <strong>Dark mode</strong>:{" "}
                    <code>dark:bg-gray-900</code> on the same wrapper.
                  </li>
                  <li>
                    This pattern appears on{" "}
                    <code>/components/navigation-bar</code> and should be used
                    for all component pages.
                  </li>
                </ul>
              </section>

              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Headings and typography
                </h2>
                <p className="mb-4 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Use paired light / dark text utilities to keep headings and
                  body copy legible on both themes.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Page headings
                    </h3>
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                      Large section titles follow this pattern:
                    </p>
                    <pre className="overflow-x-auto rounded-md bg-gray-900 p-4 text-xs text-gray-100">
                      <code>
                        {`<h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">`}
                      </code>
                    </pre>
                  </div>

                  <div>
                    <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">
                      Introductory paragraphs
                    </h3>
                    <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                      Descriptive copy under the page banner or section heading
                      uses:
                    </p>
                    <pre className="overflow-x-auto rounded-md bg-gray-900 p-4 text-xs text-gray-100">
                      <code>
                        {`<p className="max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">`}
                      </code>
                    </pre>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      This mirrors the Navigation Bar page, where the intro
                      paragraph stays readable but slightly muted in dark mode.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Component surfaces
                </h2>
                <p className="mb-4 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Components sit on card‑like surfaces that adapt to dark mode
                  using the same rules as the Navigation Bar examples:
                </p>
                <ul className="max-w-3xl list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    Use <code>bg-white dark:bg-gray-800</code> for cards and
                    panes.
                  </li>
                  <li>
                    Use <code>border border-border dark:border-gray-700</code>{" "}
                    for strokes.
                  </li>
                  <li>
                    Avoid heavy shadows in dark mode; prefer flat or subtle
                    elevation only.
                  </li>
                </ul>
              </section>

              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Dividers and subtle surfaces
                </h2>
                <p className="mb-4 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                  Many pages use soft containers or skeleton content to show
                  components in situ. Follow the Navigation Bar page pattern:
                </p>
                <ul className="max-w-3xl list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
                  <li>
                    Use <code>bg-gray-50 dark:bg-gray-900/40</code> for
                    secondary backgrounds.
                  </li>
                  <li>
                    Use <code>border-border dark:border-gray-700</code> for
                    dividers between navigation and content panes.
                  </li>
                  <li>
                    Use gray skeleton blocks with{" "}
                    <code>bg-gray-200 dark:bg-gray-700</code> for placeholder
                    content.
                  </li>
                </ul>
              </section>
            </>
          )}

          {activeTab === "examples" && (
            <section className="border-t border-border pt-16 dark:border-gray-700">
              <h2 className="mb-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                Applying these rules
              </h2>
              <p className="mb-6 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
                When creating a new component page, start from an existing page
                that already follows these dark mode rules (for example, the
                Navigation Bar page) and keep:
              </p>
              <ul className="max-w-3xl list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  The page wrapper background{" "}
                  <code>min-h-screen bg-gray-50 dark:bg-gray-900</code>.
                </li>
                <li>
                  Heading and body text pairs like{" "}
                  <code>text-gray-900 dark:text-gray-100</code> and{" "}
                  <code>text-gray-600 dark:text-gray-400</code>.
                </li>
                <li>
                  Card surfaces using{" "}
                  <code>bg-white dark:bg-gray-800</code> with matching borders.
                </li>
              </ul>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

