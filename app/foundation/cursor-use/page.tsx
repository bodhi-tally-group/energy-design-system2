import Link from "next/link";
import PageBanner from "@/components/PageBanner/PageBanner";

export default function CursorUsePage() {
  return (
    <>
      <PageBanner title="Cursor use" />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Page description */}
          <div className="mb-12">
            <p className="max-w-3xl text-lg leading-7 text-gray-600 dark:text-gray-400">
              Follow these steps to start a new Cursor project that fully
              utilises the Tally Energy Design System. You will get consistent
              components, tokens, and patterns with AI assistance that knows the
              design system rules.
            </p>
          </div>

          {/* Step 1 */}
          <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2C365D] text-sm font-semibold text-white dark:bg-[#7c8cb8]">
                1
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                Create or open your project in Cursor
              </h2>
            </div>
            <p className="mb-4 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
              In Cursor, create a new folder for your app or open an existing
              one. For the best fit with this design system, use a{" "}
              <strong className="text-gray-900 dark:text-gray-100">Next.js</strong>{" "}
              project (App Router). If you are starting from scratch:
            </p>
            <pre className="mb-4 max-w-3xl overflow-x-auto rounded-lg border border-border bg-gray-900 p-4 text-sm text-gray-100 dark:border-gray-700">
              <code>{`npx create-next-app@latest my-app --typescript --tailwind --eslint --app`}</code>
            </pre>
            <p className="max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
              Open the project folder in Cursor (File → Open Folder).
            </p>
          </section>

          {/* Step 2 */}
          <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2C365D] text-sm font-semibold text-white dark:bg-[#7c8cb8]">
                2
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                Add the design system rules to your project
              </h2>
            </div>
            <p className="mb-4 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
              So Cursor follows this design system when generating code, add the
              same rules to your new project. Copy the{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">
                .cursorrules
              </code>{" "}
              file from the <strong className="text-gray-900 dark:text-gray-100">energy-design-system</strong> repo into your
              project root.
            </p>
            <ul className="mb-4 max-w-3xl list-disc space-y-2 pl-5 text-base leading-6 text-gray-600 dark:text-gray-400">
              <li>
                Clone or download the design system repo, then copy{" "}
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">
                  .cursorrules
                </code>{" "}
                into your app’s root folder, or
              </li>
              <li>
                Use Cursor’s multi-root workspace: add both the design system
                folder and your app folder so Cursor can read the design system
                and your code in one context.
              </li>
            </ul>
            <p className="max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
              With{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">
                .cursorrules
              </code>{" "}
              in place, Cursor will prefer existing components, use the correct
              tokens, and follow the documented page patterns when you ask it to
              build features.
            </p>
          </section>

          {/* Step 3 */}
          <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2C365D] text-sm font-semibold text-white dark:bg-[#7c8cb8]">
                3
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                Align path aliases and structure
              </h2>
            </div>
            <p className="mb-4 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
              The design system uses the path alias{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">
                @/*
              </code>{" "}
              pointing at the project root. Configure your new project the same
              way so that generated imports like{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">
                @/components/Button/Button
              </code>{" "}
              resolve correctly.
            </p>
            <p className="mb-2 max-w-3xl text-sm font-medium text-gray-700 dark:text-gray-300">
              In <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">tsconfig.json</code>:
            </p>
            <pre className="mb-4 max-w-3xl overflow-x-auto rounded-lg border border-border bg-gray-900 p-4 text-sm text-gray-100 dark:border-gray-700">
              <code>{`"compilerOptions": {
  "paths": {
    "@/*": ["./*"]
  }
}`}</code>
            </pre>
            <p className="max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
              If your app does not contain the design system components yet, you
              can either copy the <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">components/</code> and{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">lib/</code> folders from the design system repo into your project, or add the design system as a Git submodule and point{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">@/*</code> to include that path. The rules in{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">
                .cursorrules
              </code>{" "}
              assume this structure.
            </p>
          </section>

          {/* Step 4 */}
          <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2C365D] text-sm font-semibold text-white dark:bg-[#7c8cb8]">
                4
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                Match core dependencies and Tailwind
              </h2>
            </div>
            <p className="mb-4 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
              To avoid import or style mismatches, use compatible versions of
              React, Next.js, and Tailwind. The design system uses Next.js (App
              Router), React 19, and Tailwind v4. Install the same major
              versions so that code Cursor generates runs without extra changes.
            </p>
            <p className="mb-2 max-w-3xl text-sm font-medium text-gray-700 dark:text-gray-300">
              Copy or merge design system dependencies from{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">package.json</code> as needed (e.g.{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">class-variance-authority</code>,{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">recharts</code>,{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">date-fns</code>). Ensure your{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">globals.css</code> or Tailwind setup includes the design system’s theme and any CSS variables the components rely on if you have copied them.
            </p>
          </section>

          {/* Step 5 */}
          <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2C365D] text-sm font-semibold text-white dark:bg-[#7c8cb8]">
                5
              </span>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                Use specific prompts when building
              </h2>
            </div>
            <p className="mb-4 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
              When asking Cursor to create or change UI, always specify the{" "}
              <strong className="text-gray-900 dark:text-gray-100">brand</strong>
              , <strong className="text-gray-900 dark:text-gray-100">user context</strong>, and{" "}
              <strong className="text-gray-900 dark:text-gray-100">reference page or pattern</strong> so it uses the right components and layout.
            </p>
            <div className="max-w-3xl rounded-lg border border-border bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
              <p className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                Example prompt:
              </p>
              <blockquote className="border-l-2 border-[#2C365D] pl-4 text-sm italic text-gray-600 dark:border-[#7c8cb8] dark:text-gray-400">
                Create a dashboard for payment history. This is for Tally Glass
                (call center agents). Use Card for the summary, Table for
                transactions, and Badge for status. Follow the layout from
                /pages/dashboard.
              </blockquote>
            </div>
            <p className="mt-4 max-w-3xl text-base leading-6 text-gray-600 dark:text-gray-400">
              For more prompt patterns and examples, see{" "}
              <Link
                href="/foundation/cursor-rules"
                className="font-medium text-[#2C365D] underline hover:no-underline dark:text-[#7c8cb8]"
              >
                Cursor Rules
              </Link>
              .
            </p>
          </section>

          {/* Quick checklist */}
          <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Quick checklist
            </h2>
            <ul className="max-w-3xl list-none space-y-3 pl-0 text-base leading-6 text-gray-600 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#00D2A2]" aria-hidden>✓</span>
                New Next.js (or compatible) project opened in Cursor
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#00D2A2]" aria-hidden>✓</span>
                <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">.cursorrules</code> from the design system copied to project root
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#00D2A2]" aria-hidden>✓</span>
                Path alias <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">@/*</code> configured
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#00D2A2]" aria-hidden>✓</span>
                Design system <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">components/</code> and <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-sm dark:bg-gray-800 dark:text-gray-200">lib/</code> available (copied or via submodule)
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#00D2A2]" aria-hidden>✓</span>
                Dependencies and Tailwind aligned with the design system
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-[#00D2A2]" aria-hidden>✓</span>
                Prompts include brand, user, and reference page
              </li>
            </ul>
          </section>

          {/* Related */}
          <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
              Related
            </h2>
            <ul className="max-w-3xl list-disc space-y-2 pl-5 text-base leading-6 text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/foundation/cursor-rules"
                  className="font-medium text-[#2C365D] hover:underline dark:text-[#7c8cb8]"
                >
                  Cursor Rules
                </Link>{" "}
                — How the design system works with Cursor and how to write
                effective prompts
              </li>
              <li>
                <Link
                  href="/foundation/layout"
                  className="font-medium text-[#2C365D] hover:underline dark:text-[#7c8cb8]"
                >
                  Layout
                </Link>{" "}
                — App bar, navigation, and pane structure
              </li>
              <li>
                <Link
                  href="/pages/dashboard"
                  className="font-medium text-[#2C365D] hover:underline dark:text-[#7c8cb8]"
                >
                  Dashboard
                </Link>{" "}
                — Example page to reference in prompts
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
