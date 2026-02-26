"use client";

import React, { useState } from "react";
import AccountContextPanel from "@/components/crm/AccountContextPanel";
import PageBanner from "@/components/PageBanner/PageBanner";
import TabNavigation from "@/components/TabNavigation/TabNavigation";
import Badge from "@/components/Badge/Badge";
import { Icon } from "@/components/ui/icon";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/Table/Table";
import type { Account } from "@/types/crm";

const industrialAccount: Account = {
  id: "acc-demo-1",
  name: "Gladstone Aluminium Smelter",
  accountNumber: "LM-0045890",
  type: "Industrial",
  status: "Active",
  nmis: ["3098765432", "3098765433", "3098765434"],
  energyType: "Dual Fuel",
  primaryContact: {
    id: "con-003",
    name: "Michael Torres",
    role: "Procurement Manager",
    email: "m.torres@gladstone-aluminium.com.au",
    phone: "07 4972 1100",
    isPrimary: true,
  },
  contacts: [
    {
      id: "con-003",
      name: "Michael Torres",
      role: "Procurement Manager",
      email: "m.torres@gladstone-aluminium.com.au",
      phone: "07 4972 1100",
      isPrimary: true,
    },
  ],
  address: "1 Smelter Rd, Boyne Island QLD 4680",
  annualConsumption: "45,000,000 kWh / 8,200,000 MJ",
  accountBalance: "$0.00",
  lastPaymentDate: "05/02/2026",
  lastPaymentAmount: "$1,245,000.00",
  contractEndDate: "31/12/2026",
  orgId: "org-002",
  legalBusinessName: "Boyne Smelter Ltd",
  customerType: "QLD Industrial Customer",
  accountStatus: "Billing",
  isClosed: false,
  accountSyncStatus: true,
  consolidateToParent: false,
  isDirectDebit: true,
  terms: "GladstoneAlum2025",
  serviceReferenceNumber: "SR-0045890",
  lifeSupport: false,
};

const commercialAccount: Account = {
  id: "acc-demo-2",
  name: "Optus Fixed Infrastructure Pty Limited",
  accountNumber: "TC082264",
  type: "Commercial",
  status: "Active",
  nmis: ["63055751070"],
  energyType: "Electricity",
  primaryContact: {
    id: "con-cis-001",
    name: "Sarah Mitchell",
    role: "Primary",
    email: "billing@optusfixed.com.au",
    phone: "0987654321",
    isPrimary: true,
  },
  contacts: [
    {
      id: "con-cis-001",
      name: "Sarah Mitchell",
      role: "Primary",
      email: "billing@optusfixed.com.au",
      phone: "0987654321",
      isPrimary: true,
    },
  ],
  address: "320 S D01, 320 Station St, Lalor VIC 3075",
  annualConsumption: "1,850,000 kWh",
  accountBalance: "$0.00",
  lastPaymentDate: "19/05/2025",
  lastPaymentAmount: "$3,611.44",
  contractEndDate: "31/12/2027",
  orgId: "org-cis-001",
  legalBusinessName: "Optus Fixed Infrastructure Pty Limited",
  parentAccountId: "acc-parent-001",
  parentAccountName: "Optus Group",
  customerType: "Commercial & Industrial",
  accountStatus: "Billing",
  isClosed: false,
  accountSyncStatus: true,
  consolidateToParent: true,
  isDirectDebit: false,
  terms: "OptusFI2025",
  serviceReferenceNumber: "399412",
  lifeSupport: false,
};

const smallMarketAccount: Account = {
  id: "acc-demo-3",
  name: "The Occupier",
  accountNumber: "104096403",
  type: "Residential",
  status: "Active",
  nmis: ["43100826905"],
  energyType: "Electricity",
  primaryContact: {
    id: "con-sm-001",
    name: "The Occupier",
    role: "Account Holder",
    email: "occupier@example.com.au",
    phone: "—",
    isPrimary: true,
  },
  contacts: [
    {
      id: "con-sm-001",
      name: "The Occupier",
      role: "Account Holder",
      email: "occupier@example.com.au",
      phone: "—",
      isPrimary: true,
    },
  ],
  address: "39 Booker St, Smithfield NSW 2164",
  annualConsumption: "4,200 kWh",
  accountBalance: "$0.00",
  lastPaymentDate: "—",
  lastPaymentAmount: "$0.00",
  contractEndDate: "—",
  orgId: "org-sm-001",
  legalBusinessName: "The Occupier",
  customerType: "Residential",
  accountStatus: "Open",
  isClosed: false,
  accountSyncStatus: true,
  consolidateToParent: false,
  isDirectDebit: false,
  terms: "Monthly Bill Group",
  serviceReferenceNumber: "43100826905",
  lifeSupport: false,
};

const propsData = [
  { name: "account", type: "Account", required: "Yes", description: "The account data object to display." },
  { name: "linkedCaseNumbers", type: "string[]", required: "No", description: "Case numbers to show in the Linked Cases section." },
  { name: "currentCaseId", type: "string", required: "No", description: "The active case ID (enables link-case affordance)." },
  { name: "onOpenLinkModal", type: "() => void", required: "No", description: "Callback when the \"Link case\" action is triggered." },
  { name: "onOpenNotePanel", type: "() => void", required: "No", description: "Callback when the Note quick action is clicked." },
  { name: "onOpenCallLogPanel", type: "() => void", required: "No", description: "Callback when the Call quick action is clicked." },
  { name: "relatedCasesMap", type: "Map<string, CaseItem>", required: "No", description: "Map to resolve case numbers to CaseItem objects." },
  { name: "className", type: "string", required: "No", description: "Additional CSS classes for the root element." },
];

export default function AccountContextPanelPage() {
  const [activeTab, setActiveTab] = useState("design");

  const tabs = [
    { id: "design", label: "Design" },
    { id: "code", label: "Code" },
  ];

  return (
    <>
      <PageBanner title="Account Context Panel" />

      <TabNavigation
        tabs={tabs}
        defaultTab="design"
        onTabChange={setActiveTab}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="max-w-3xl text-density-lg leading-7 text-gray-600 dark:text-gray-400">
              The Account Context Panel is a persistent sidebar component used
              across all Tally Group products to display account information,
              quick actions, and collapsible sections for account details, contacts,
              supply, balance, and linked cases.
            </p>
          </div>

          {activeTab === "design" && (
            <>
              {/* ── Anatomy ──────────────────────────────────────────── */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-2 text-density-xxl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Anatomy
                </h2>
                <p className="mb-8 max-w-2xl text-density-sm text-gray-600 dark:text-gray-400">
                  The panel is composed of a fixed header with account identity and
                  badges, a quick-action bar, and a scrollable body of collapsible
                  sections. Sections open and close independently.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-3">
                    {[
                      { icon: "badge", label: "Header", desc: "Account name, number, type & status badges" },
                      { icon: "touch_app", label: "Quick Actions", desc: "Note, Email, Call buttons + overflow menu" },
                      { icon: "expand_more", label: "Collapsible Sections", desc: "Account Details, Primary Contact, Supply, Balance, Linked Cases" },
                      { icon: "person", label: "Primary Contact Card", desc: "Expandable contact with email & phone" },
                      { icon: "folder", label: "Linked Cases", desc: "Related cases with SLA indicators (optional)" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-start gap-3 rounded-lg border border-border bg-white p-3 dark:border-gray-700 dark:bg-gray-800"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2C365D]/10 dark:bg-[#2C365D]/20">
                          <Icon name={item.icon} size={16} className="text-[#2C365D] dark:text-[#7c8cb8]" />
                        </div>
                        <div>
                          <p className="text-density-sm font-medium text-gray-900 dark:text-gray-100">
                            {item.label}
                          </p>
                          <p className="text-density-xs text-gray-500 dark:text-gray-400">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <div className="h-[520px] overflow-hidden rounded-xl border border-border dark:border-gray-700">
                      <AccountContextPanel
                        account={industrialAccount}
                        className="m-0 h-full border-0"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Default / Industrial ─────────────────────────────── */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-2 text-density-xxl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Default — Industrial Account
                </h2>
                <p className="mb-8 max-w-2xl text-density-sm text-gray-600 dark:text-gray-400">
                  The standard configuration with all account details populated.
                  Sections for Account Details and Primary Contact are open by
                  default; Supply, Balance, and Linked Cases start collapsed.
                </p>
                <div className="flex justify-center rounded-xl border border-border bg-gray-100 p-6 dark:border-gray-700 dark:bg-gray-800/50">
                  <div className="h-[600px] overflow-hidden rounded-xl">
                    <AccountContextPanel
                      account={industrialAccount}
                      className="m-0 h-full"
                    />
                  </div>
                </div>
              </section>

              {/* ── Tally+ LM ────────────────────────────────────────── */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-2 text-density-xxl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Tally+ LM
                </h2>
                <p className="mb-8 max-w-2xl text-density-sm text-gray-600 dark:text-gray-400">
                  Example sourced from the Tally+ LM platform. Shows a Commercial &amp;
                  Industrial account with parent account link, billing address,
                  supply address, and contract dates. The <strong>info</strong> badge
                  variant is used for commercial account types.
                </p>
                <div className="flex justify-center rounded-xl border border-border bg-gray-100 p-6 dark:border-gray-700 dark:bg-gray-800/50">
                  <div className="h-[600px] overflow-hidden rounded-xl">
                    <AccountContextPanel
                      account={commercialAccount}
                      className="m-0 h-full"
                    />
                  </div>
                </div>
              </section>

              {/* ── Tally+ SM ────────────────────────────────────────── */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-2 text-density-xxl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Tally+ SM
                </h2>
                <p className="mb-8 max-w-2xl text-density-sm text-gray-600 dark:text-gray-400">
                  Example sourced from the Tally+ Small Market platform. Shows a
                  Residential account with standard credit status, monthly billing
                  group, and cash payment details. The <strong>secondary</strong> badge
                  variant is used for residential account types.
                </p>
                <div className="flex justify-center rounded-xl border border-border bg-gray-100 p-6 dark:border-gray-700 dark:bg-gray-800/50">
                  <div className="h-[600px] overflow-hidden rounded-xl">
                    <AccountContextPanel
                      account={smallMarketAccount}
                      className="m-0 h-full"
                    />
                  </div>
                </div>
              </section>

              {/* ── With Linked Cases ────────────────────────────────── */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-2 text-density-xxl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  With Linked Cases & Actions
                </h2>
                <p className="mb-8 max-w-2xl text-density-sm text-gray-600 dark:text-gray-400">
                  Pass <code className="rounded bg-gray-200 px-1.5 py-0.5 text-density-xs dark:bg-gray-700">linkedCaseNumbers</code> and{" "}
                  <code className="rounded bg-gray-200 px-1.5 py-0.5 text-density-xs dark:bg-gray-700">onOpenLinkModal</code> to
                  enable the Linked Cases section with a &ldquo;+ Link case&rdquo;
                  button.
                </p>
                <div className="flex justify-center rounded-xl border border-border bg-gray-100 p-6 dark:border-gray-700 dark:bg-gray-800/50">
                  <div className="h-[600px] overflow-hidden rounded-xl">
                    <AccountContextPanel
                      account={industrialAccount}
                      linkedCaseNumbers={["CS-2026-001847", "CS-2026-001832"]}
                      onOpenLinkModal={() => alert("Link case modal opened")}
                      onOpenNotePanel={() => alert("Note panel opened")}
                      onOpenCallLogPanel={() => alert("Call log panel opened")}
                      className="m-0 h-full"
                    />
                  </div>
                </div>
              </section>

              {/* ── Side-by-side comparison ──────────────────────────── */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-2 text-density-xxl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Account Type Comparison
                </h2>
                <p className="mb-8 max-w-2xl text-density-sm text-gray-600 dark:text-gray-400">
                  Side-by-side comparison of Industrial, Tally+ LM (Commercial),
                  and Tally+ SM (Residential) account type badge variants.
                </p>
                <div className="flex flex-wrap justify-center gap-6 rounded-xl border border-border bg-gray-100 p-6 dark:border-gray-700 dark:bg-gray-800/50">
                  <div className="h-[500px] overflow-hidden rounded-xl">
                    <AccountContextPanel
                      account={industrialAccount}
                      className="m-0 h-full"
                    />
                  </div>
                  <div className="h-[500px] overflow-hidden rounded-xl">
                    <AccountContextPanel
                      account={commercialAccount}
                      className="m-0 h-full"
                    />
                  </div>
                  <div className="h-[500px] overflow-hidden rounded-xl">
                    <AccountContextPanel
                      account={smallMarketAccount}
                      className="m-0 h-full"
                    />
                  </div>
                </div>
              </section>

              {/* ── Width & Layout Rules ──────────────────────────────── */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-2 text-density-xxl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Width & Layout Rules
                </h2>
                <p className="mb-8 max-w-2xl text-density-sm text-gray-600 dark:text-gray-400">
                  The panel has strict sizing constraints designed for sidebar usage
                  in Tally product layouts.
                </p>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                  <div className="rounded-xl border border-border bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="mb-4 text-density-lg font-semibold text-gray-900 dark:text-gray-100">
                      Sizing Specifications
                    </h3>
                    <div className="space-y-3">
                      {[
                        { label: "Fixed width", value: "288px (w-72)", note: "Tailwind w-72" },
                        { label: "Minimum width", value: "288px", note: "Panel does not shrink (shrink-0)" },
                        { label: "Margin", value: "12px top/bottom, 12px left", note: "my-3 ml-3" },
                        { label: "Border radius", value: "12px", note: "rounded-xl" },
                        { label: "Content overflow", value: "Scrollable", note: "overflow-y-auto on body" },
                      ].map((spec) => (
                        <div
                          key={spec.label}
                          className="flex items-baseline justify-between gap-4 border-b border-gray-100 pb-2 last:border-0 dark:border-gray-700"
                        >
                          <div>
                            <p className="text-density-sm font-medium text-gray-900 dark:text-gray-100">
                              {spec.label}
                            </p>
                            <p className="text-density-xs text-gray-500 dark:text-gray-400">
                              {spec.note}
                            </p>
                          </div>
                          <Badge variant="outline" className="shrink-0 font-mono text-density-xs">
                            {spec.value}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-border bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="mb-4 text-density-lg font-semibold text-gray-900 dark:text-gray-100">
                      Layout Placement
                    </h3>
                    <p className="mb-4 text-density-sm text-gray-600 dark:text-gray-400">
                      The panel is designed to sit as a direct flex child of a
                      horizontal layout container. It takes its height from the
                      parent and scrolls internally.
                    </p>
                    <div className="overflow-hidden rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
                      <div className="flex h-48">
                        <div className="m-1.5 flex w-20 shrink-0 items-center justify-center rounded-lg border border-[#2C365D]/30 bg-[#2C365D]/5 text-[10px] font-semibold text-[#2C365D] dark:border-[#7c8cb8]/30 dark:bg-[#2C365D]/10 dark:text-[#7c8cb8]">
                          Context Panel
                        </div>
                        <div className="flex flex-1 items-center justify-center border-l border-dashed border-gray-300 text-density-xs text-gray-400 dark:border-gray-600">
                          Main Content Area (flex-1)
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 text-density-xs text-gray-500 dark:text-gray-400">
                      The panel uses <code className="rounded bg-gray-100 px-1 dark:bg-gray-700">shrink-0</code> to
                      prevent compression. The adjacent content area
                      uses <code className="rounded bg-gray-100 px-1 dark:bg-gray-700">flex-1 min-w-0</code> to
                      fill remaining space.
                    </p>
                  </div>
                </div>
              </section>

              {/* ── Density ───────────────────────────────────────────── */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-2 text-density-xxl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Density System
                </h2>
                <p className="mb-8 max-w-2xl text-density-sm text-gray-600 dark:text-gray-400">
                  The panel fully integrates with the Tally density system. Padding,
                  gaps, font sizes, and border radii respond to the global density
                  toggle (Compact / Default / Comfortable). Use the density switch
                  in the bottom-right corner of this page to preview.
                </p>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                  {[
                    { token: "px-density-md", desc: "Horizontal padding" },
                    { token: "py-density-sm", desc: "Section trigger padding" },
                    { token: "gap-density-md", desc: "Section spacing" },
                    { token: "rounded-density-sm", desc: "Trigger border radius" },
                    { token: "rounded-density-md", desc: "Contact card radius" },
                    { token: "--tally-font-size-xs", desc: "Data row font size" },
                  ].map((item) => (
                    <div
                      key={item.token}
                      className="flex items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800"
                    >
                      <code className="shrink-0 rounded bg-gray-100 px-1.5 py-0.5 font-mono text-density-xs text-[#2C365D] dark:bg-gray-700 dark:text-[#7c8cb8]">
                        {item.token}
                      </code>
                      <span className="text-density-xs text-gray-500 dark:text-gray-400">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Props table ───────────────────────────────────────── */}
              <section className="mb-16 border-t border-border pt-16 dark:border-gray-700">
                <h2 className="mb-6 text-density-xxl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                  Props
                </h2>
                <div className="overflow-hidden rounded-xl border border-border dark:border-gray-700">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 dark:bg-gray-800">
                        <TableHead className="text-density-xs font-semibold text-gray-600 dark:text-gray-400">
                          Prop
                        </TableHead>
                        <TableHead className="text-density-xs font-semibold text-gray-600 dark:text-gray-400">
                          Type
                        </TableHead>
                        <TableHead className="text-density-xs font-semibold text-gray-600 dark:text-gray-400">
                          Required
                        </TableHead>
                        <TableHead className="text-density-xs font-semibold text-gray-600 dark:text-gray-400">
                          Description
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {propsData.map((prop) => (
                        <TableRow key={prop.name} className="dark:border-gray-700">
                          <TableCell className="font-mono text-density-xs text-[#2C365D] dark:text-[#7c8cb8]">
                            {prop.name}
                          </TableCell>
                          <TableCell className="font-mono text-density-xs dark:text-gray-300">
                            {prop.type}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant={prop.required === "Yes" ? "default" : "outline"}
                              className="text-[10px]"
                            >
                              {prop.required}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-density-sm dark:text-gray-300">
                            {prop.description}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </section>
            </>
          )}

          {activeTab === "code" && (
            <section className="border-t border-border pt-16 dark:border-gray-700">
              <h2 className="mb-6 text-density-xxl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                Usage Examples
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="mb-3 text-density-lg font-medium text-gray-900 dark:text-gray-100">
                    Basic Usage
                  </h3>
                  <p className="mb-4 text-density-sm text-gray-600 dark:text-gray-400">
                    The minimum required prop is <code className="rounded bg-gray-200 px-1.5 py-0.5 text-density-xs dark:bg-gray-700">account</code>.
                    The panel renders all sections with sensible defaults.
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-density-sm text-gray-100">
                    <code>{`import AccountContextPanel from "@/components/crm/AccountContextPanel";
import { getAccountById } from "@/lib/mock-data/accounts";

const account = getAccountById("acc-001");

// Inside a flex layout:
<div className="flex min-h-0 flex-1">
  <AccountContextPanel account={account} />
  <main className="min-w-0 flex-1 overflow-y-auto">
    {/* Main content */}
  </main>
</div>`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="mb-3 text-density-lg font-medium text-gray-900 dark:text-gray-100">
                    With Linked Cases
                  </h3>
                  <p className="mb-4 text-density-sm text-gray-600 dark:text-gray-400">
                    Pass case numbers and a link callback to enable the linked cases
                    section.
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-density-sm text-gray-100">
                    <code>{`<AccountContextPanel
  account={account}
  linkedCaseNumbers={["CS-2026-001847", "CS-2026-001832"]}
  onOpenLinkModal={() => setLinkModalOpen(true)}
/>`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="mb-3 text-density-lg font-medium text-gray-900 dark:text-gray-100">
                    With Quick Action Callbacks
                  </h3>
                  <p className="mb-4 text-density-sm text-gray-600 dark:text-gray-400">
                    Wire up the Note, Email, and Call quick actions to open
                    corresponding panels or modals.
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-density-sm text-gray-100">
                    <code>{`<AccountContextPanel
  account={account}
  onOpenNotePanel={() => setNotePanelOpen(true)}
  onOpenCallLogPanel={() => setCallLogOpen(true)}
  linkedCaseNumbers={linkedCases}
  onOpenLinkModal={() => setLinkModalOpen(true)}
/>`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="mb-3 text-density-lg font-medium text-gray-900 dark:text-gray-100">
                    Layout Integration
                  </h3>
                  <p className="mb-4 text-density-sm text-gray-600 dark:text-gray-400">
                    The panel is designed to be a direct child of a horizontal flex
                    container. It has built-in margin (<code className="rounded bg-gray-200 px-1.5 py-0.5 text-density-xs dark:bg-gray-700">my-3 ml-3</code>)
                    and does not shrink. Override margin with <code className="rounded bg-gray-200 px-1.5 py-0.5 text-density-xs dark:bg-gray-700">className</code> if
                    needed.
                  </p>
                  <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-density-sm text-gray-100">
                    <code>{`// Detail page pattern:
export default function CaseDetailPage() {
  const account = getAccountById(caseItem.accountId);

  return (
    <>
      <AccountContextPanel account={account} />
      <div className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[1400px] p-density-xl">
          {/* Page content */}
        </div>
      </div>
    </>
  );
}

// Override margin for custom layouts:
<AccountContextPanel
  account={account}
  className="m-0"  // Remove default margin
/>`}</code>
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
