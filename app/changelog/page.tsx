import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";
import { DESIGN_SYSTEM_VERSION } from "@/lib/version";

const CHANGELOG: { version: string; date: string; changes: string[] }[] = [
  {
    version: "1.5.2",
    date: "2025-02-13",
    changes: [
      "Version display: 'Version 1.5.' with patch number as underlined link to changelog; patch (e.g. 2) is the only part that updates between releases.",
      "Changelog page: entries use 1.5.x versioning (1.5.1, 1.5.2).",
    ],
  },
  {
    version: "1.5.1",
    date: "2025-02-13",
    changes: [
      "Sidebar: atomic design navigation (Elements, Components, Patterns, Templates), collapsible sections, flyout item list when collapsed.",
      "Sidebar & NavigationBar: Powered by Tally badge and collapse toggle in one row; collapse icon on the right.",
      "Sidebar section icons: Elements (palette), Brands (filter_vintage), Components (deployed_code), Patterns (widgets), Templates (newsmode).",
      "Version number centralised in lib/version.ts; version link to changelog page.",
      "Small Market page: Select components use defaultValue to fix controlled-component warning.",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <PageBanner title="Changelog" />
      <div className="p-6">
        <p className="mb-8 text-muted-foreground">
          Version history and changes for the Tally Energy Design System. Current
          version:{" "}
          <span className="font-medium text-gray-900 dark:text-gray-100">
            {DESIGN_SYSTEM_VERSION}
          </span>
          .{" "}
          <Link
            href="/"
            className="text-[#2C365D] underline underline-offset-2 hover:no-underline dark:text-[#00D2A2]"
          >
            Back to home
          </Link>
        </p>
        <ul className="space-y-8">
          {CHANGELOG.map((entry) => (
            <li
              key={entry.version}
              className="rounded-lg border border-border bg-white p-6 dark:border-gray-700 dark:bg-gray-800/40"
            >
              <div className="mb-2 flex items-baseline gap-3">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {entry.version}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {entry.date}
                </span>
              </div>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {entry.changes.map((change, i) => (
                  <li key={i}>{change}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
