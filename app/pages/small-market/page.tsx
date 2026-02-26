"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/Breadcrumb/Breadcrumb";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/Card/Card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/Tabs/Tabs";
import CollapsibleCard from "@/components/CollapsibleCard/CollapsibleCard";
import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import Select from "@/components/Select/Select";
import Checkbox from "@/components/Checkbox/Checkbox";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/Table/Table";
import { surfaceColours } from "@/lib/tokens/surface-colours";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import AccountContextPanel from "@/components/crm/AccountContextPanel";
import type { Account } from "@/types/crm";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  children?: { id: string; label: string }[];
}

const LEFT_NAV_ITEMS: NavItem[] = [
  {
    id: "dashboard", label: "Dashboard", icon: "home",
    children: [
      { id: "dashboard-overview", label: "Overview" },
      { id: "dashboard-exceptions", label: "Exceptions" },
    ],
  },
  {
    id: "tasks", label: "Tasks & Exceptions", icon: "notifications",
    children: [
      { id: "tasks-queue", label: "Task Queue" },
      { id: "tasks-exceptions", label: "Exceptions" },
    ],
  },
  {
    id: "market", label: "Market", icon: "store",
    children: [
      { id: "market-change-requests", label: "Change Requests" },
      { id: "market-transactions", label: "Transactions" },
    ],
  },
  { id: "adjustments", label: "Adjustments", icon: "tune", children: [] },
  {
    id: "metering", label: "Metering Services Registry", icon: "table_chart",
    children: [
      { id: "metering-meters", label: "Meters" },
      { id: "metering-reads", label: "Meter Reads" },
    ],
  },
  {
    id: "reports", label: "Reports", icon: "assessment",
    children: [
      { id: "reports-standard", label: "Standard Reports" },
      { id: "reports-scheduled", label: "Scheduled Reports" },
    ],
  },
  { id: "products", label: "Products", icon: "inventory_2", children: [] },
  { id: "maintenance", label: "Maintenance", icon: "build", children: [] },
];

const TAB_CONFIG = [
  { value: "details", label: "Details" },
  { value: "pricing", label: "Pricing" },
  { value: "financial", label: "Financial" },
  { value: "utility", label: "Utility" },
  { value: "usage", label: "Usage" },
  { value: "interaction", label: "Interaction" },
];

const DETAILS_CARD_TITLES = [
  "Account Summary",
  "Billing Configuration",
  "Payment Details",
  "Contact Information",
  "Service Address",
] as const;

const INITIAL_CARD_OPEN: Record<string, boolean> = Object.fromEntries(
  DETAILS_CARD_TITLES.map((title) => [title, true])
);


const RECENT_BILLS = [
  { id: "INV-2025-05", date: "27 Apr 2025", amount: "$142.50", status: "paid", dueDate: "12 May 2025" },
  { id: "INV-2025-04", date: "27 Mar 2025", amount: "$138.20", status: "paid", dueDate: "11 Apr 2025" },
  { id: "INV-2025-03", date: "27 Feb 2025", amount: "$156.80", status: "paid", dueDate: "14 Mar 2025" },
  { id: "INV-2025-02", date: "27 Jan 2025", amount: "$145.30", status: "paid", dueDate: "11 Feb 2025" },
];

const USAGE_DATA = [
  { period: "May 2025", electricity: "285 kWh", gas: "45 GJ", cost: "$142.50" },
  { period: "Apr 2025", electricity: "268 kWh", gas: "42 GJ", cost: "$138.20" },
  { period: "Mar 2025", electricity: "312 kWh", gas: "48 GJ", cost: "$156.80" },
  { period: "Feb 2025", electricity: "290 kWh", gas: "44 GJ", cost: "$145.30" },
];

const SM_ACCOUNT: Account = {
  id: "sm-001",
  name: "Ronald Thomas",
  accountNumber: "104063774",
  type: "Commercial",
  status: "Active",
  nmis: ["6305194250"],
  energyType: "Electricity",
  primaryContact: {
    id: "sm-con-001",
    name: "Ronald Thomas",
    role: "Account Holder",
    email: "ronald.thomas@email.com",
    phone: "0464 464 646",
    isPrimary: true,
  },
  contacts: [
    {
      id: "sm-con-001",
      name: "Ronald Thomas",
      role: "Account Holder",
      email: "shirley.anderson@email.com",
      phone: "0491 579 760",
      isPrimary: true,
    },
  ],
  address: "1 Lee Walk, Cranbourne, VIC 3977",
  annualConsumption: "3,420 kWh",
  accountBalance: "$0.00",
  lastPaymentDate: "27/04/2025",
  lastPaymentAmount: "$142.50",
  contractEndDate: "15/04/2026",
  orgId: "org-sm-001",
  legalBusinessName: "Ronald Thomas",
  customerType: "Residential",
  accountStatus: "Open",
  isClosed: false,
  accountSyncStatus: true,
  consolidateToParent: false,
  isDirectDebit: true,
  terms: "Standard",
  serviceReferenceNumber: "SR-104063774",
  lifeSupport: false,
};

const PANEL_TABS = ["Control Panel", "X-Sell"] as const;

const TASK_CATEGORIES = [
  { name: "Account Tasks", count: null, icon: "group" as const, hot: false },
  { name: "Financial Tasks", count: 26, icon: "attach_money" as const, hot: true },
  { name: "Supply Tasks", count: 3, icon: "bolt" as const, hot: false },
  { name: "Interaction Tasks", count: 5, icon: "chat_bubble_outline" as const, hot: false },
  { name: "Utility Tasks", count: 17, icon: "monitoring" as const, hot: false },
  { name: "Credit Tasks", count: 29, icon: "credit_card" as const, hot: true },
  { name: "Customer Tasks", count: 15, icon: "group" as const, hot: false },
  { name: "No Contact Tasks", count: 6, icon: "power_settings_new" as const, hot: false },
];

function DataCell({ label, value, className }: { label: string; value: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col gap-1 text-sm", className)}>
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground">{value || "—"}</span>
    </div>
  );
}

function StatusCard({ label, value, icon, variant = "default" }: { label: string; value: string; icon: string; variant?: "default" | "success" | "info" }) {
  return (
    <div className={cn(
      "flex items-center gap-3 rounded-lg border p-4 shadow-none",
      variant === "success" ? "border-[#008000]/20 bg-[#D1FAE5]/30 dark:border-emerald-500/30 dark:bg-emerald-500/10" : 
      variant === "info" ? "border-[#0074C4]/20 bg-[#DBEAFE]/30 dark:border-blue-500/30 dark:bg-blue-500/10" : 
      "border-border bg-card dark:border-gray-800 dark:bg-gray-900/40"
    )}>
      <div className={cn(
        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
        variant === "success" ? "bg-[#008000]/10 dark:bg-emerald-500/20" :
        variant === "info" ? "bg-[#0074C4]/10 dark:bg-blue-500/20" :
        "bg-gray-100 dark:bg-gray-800"
      )}>
        <Icon name={icon} size={20} className={cn(
          variant === "success" ? "text-[#008000] dark:text-emerald-300" :
          variant === "info" ? "text-[#0074C4] dark:text-blue-300" :
          "text-gray-600 dark:text-gray-300"
        )} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground dark:text-gray-400">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-gray-100">{value}</p>
      </div>
    </div>
  );
}

export default function SmallMarketPage() {
  const [tabValue, setTabValue] = useState("details");
  const [cardOpenState, setCardOpenState] = useState<Record<string, boolean>>(INITIAL_CARD_OPEN);
  const [activeNavId, setActiveNavId] = useState("dashboard-overview");
  const [openParentId, setOpenParentId] = useState<string | null>("dashboard");
  const isLg = useMediaQuery("(min-width: 1024px)");
  const [navCollapsed, setNavCollapsed] = useState(!isLg);
  const [isExpanded, setIsExpanded] = useState(false);
  const [controlPanelOpen, setControlPanelOpen] = useState(true);
  const [activePanelTab, setActivePanelTab] = useState<(typeof PANEL_TABS)[number]>("Control Panel");

  React.useEffect(() => {
    setNavCollapsed(!isLg);
  }, [isLg]);

  const [flyoutParentId, setFlyoutParentId] = useState<string | null>(null);
  const [flyoutPos, setFlyoutPos] = useState<{ top: number; left: number } | null>(null);
  const flyoutTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const showFlyout = (e: React.MouseEvent, itemId: string) => {
    if (!navCollapsed) return;
    if (flyoutTimeout.current) clearTimeout(flyoutTimeout.current);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setFlyoutPos({ top: rect.top, left: rect.right + 8 });
    setFlyoutParentId(itemId);
  };
  const hideFlyout = () => {
    flyoutTimeout.current = setTimeout(() => {
      setFlyoutPos(null);
      setFlyoutParentId(null);
    }, 100);
  };
  const cancelHideFlyout = () => {
    if (flyoutTimeout.current) clearTimeout(flyoutTimeout.current);
  };

  const handleParentClick = (item: NavItem) => {
    if (item.children && item.children.length > 0) {
      setOpenParentId((prev) => (prev === item.id ? null : item.id));
    } else {
      setActiveNavId(item.id);
    }
  };

  const isParentActive = (item: NavItem) => {
    if (activeNavId === item.id) return true;
    return item.children?.some((c) => c.id === activeNavId) ?? false;
  };

  const allCardsOpen = DETAILS_CARD_TITLES.every((t) => cardOpenState[t]);
  const expandAll = () => setCardOpenState(() => Object.fromEntries(DETAILS_CARD_TITLES.map((t) => [t, true])));
  const collapseAll = () => setCardOpenState(() => Object.fromEntries(DETAILS_CARD_TITLES.map((t) => [t, false])));

  React.useEffect(() => {
    const root = document.querySelector(".flex.h-screen.overflow-hidden");
    const sidebar = root?.querySelector(":scope > aside");
    if (sidebar instanceof HTMLElement) {
      sidebar.style.display = isExpanded ? "none" : "";
    }
    return () => {
      if (sidebar instanceof HTMLElement) sidebar.style.display = "";
    };
  }, [isExpanded]);

  // Tally CRM brand palette
  const BRAND_PRIMARY = "#006180";

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* 4px brand bar */}
      <div
        className="h-1 shrink-0"
        style={{ backgroundColor: BRAND_PRIMARY }}
        aria-hidden
      />
      {/* App Bar */}
      <header className="flex h-14 shrink-0 items-center gap-4 border-b border-border bg-white px-6 dark:border-gray-800 dark:bg-gray-950/90">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <Link href="/pages/small-market" className="flex items-center">
            <Image
              src="/foundation/brands/tally-plus-small-market/TallyPlusSMLogo.svg"
              alt="Tally+ Small Market"
              width={140}
              height={28}
              className="h-8 w-auto dark:hidden"
              priority
              unoptimized
            />
            <Image
              src="/foundation/brands/tally-plus-small-market/TallyPlusSMLogoReversed.svg"
              alt="Tally+ Small Market"
              width={140}
              height={28}
              className="h-8 w-auto hidden dark:block"
              unoptimized
            />
          </Link>
        </div>

        {/* Center: Search */}
        <div className="flex flex-1 justify-center">
          <div className="relative hidden w-full max-w-md md:block">
            <Icon
              name="search"
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
            />
            <input
              type="search"
              placeholder="Search"
              className="h-10 w-full rounded-lg border border-border bg-gray-50 pl-10 pr-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-[#006180] focus:outline-none focus:ring-1 focus:ring-[#006180] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800/80"
          >
            <Icon name="grid_view" size={20} />
          </button>
          <div
            className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium text-white"
            style={{ backgroundColor: BRAND_PRIMARY }}
          >
            SA
          </div>
        </div>
      </header>

      <div className="flex min-w-0 flex-1 overflow-hidden">
      {/* Left Navigation Bar */}
      <aside
        className={cn(
          "flex shrink-0 flex-col overflow-hidden border-r border-border bg-white transition-[width] duration-300 dark:border-gray-800 dark:bg-gray-950",
          navCollapsed ? "w-16" : "w-64"
        )}
      >
        <div className="min-h-0 flex-1 overflow-y-auto overflow-x-visible">
          <nav className={cn("flex flex-col", navCollapsed ? "items-center p-2" : "p-2")}>
            {LEFT_NAV_ITEMS.map((item) => {
              const hasChildren = (item.children?.length ?? 0) > 0;
              const isOpen = openParentId === item.id;
              const parentActive = isParentActive(item);

              if (navCollapsed) {
                return (
                  <div
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    onMouseEnter={(e) => {
                      if (hasChildren) { cancelHideFlyout(); showFlyout(e, item.id); }
                    }}
                    onMouseLeave={() => { if (hasChildren) hideFlyout(); }}
                    onClick={() => { if (!hasChildren) setActiveNavId(item.id); }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        if (hasChildren) setFlyoutParentId(item.id);
                        else setActiveNavId(item.id);
                      }
                    }}
                    title={!hasChildren ? item.label : undefined}
                    className={cn(
                      "group flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg transition-colors",
                      parentActive
                        ? "bg-[#E6F7FF] text-[#006180] dark:bg-[#006180]/20 dark:text-[#80E0FF]"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                    )}
                  >
                    <Icon
                      name={item.icon as "home"}
                      size={20}
                      className={cn(
                        "shrink-0 font-extralight",
                        parentActive
                          ? "text-[#006180] dark:text-[#80E0FF]"
                          : "text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100"
                      )}
                    />
                  </div>
                );
              }

              return (
                <div key={item.id}>
                  <button
                    type="button"
                    onClick={() => handleParentClick(item)}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-normal transition-colors",
                      parentActive || isOpen
                        ? "bg-[#E6F7FF] text-[#006180] dark:bg-[#006180]/20 dark:text-[#80E0FF]"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                    )}
                  >
                    <Icon
                      name={item.icon as "home"}
                      size={20}
                      className={cn(
                        "shrink-0 font-extralight",
                        parentActive || isOpen
                          ? "text-[#006180] dark:text-[#80E0FF]"
                          : "text-gray-600 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-100"
                      )}
                    />
                    <span className="min-w-0 flex-1 truncate">{item.label}</span>
                    {hasChildren && (
                      <Icon
                        name={isOpen ? "expand_less" : "expand_more"}
                        size={20}
                        className="shrink-0 text-gray-500 dark:text-gray-400"
                      />
                    )}
                  </button>
                  {hasChildren && isOpen && (
                    <ul className="ml-4 mt-0.5 space-y-0.5 border-l border-border pl-2 dark:border-gray-600">
                      {item.children!.map((child) => (
                        <li key={child.id}>
                          <button
                            type="button"
                            onClick={() => setActiveNavId(child.id)}
                            className={cn(
                              "flex w-full items-center rounded-lg py-2 pl-2 pr-3 text-left text-sm font-normal transition-colors",
                              activeNavId === child.id
                                ? "bg-[#E6F7FF] text-[#006180] dark:bg-[#006180]/20 dark:text-[#80E0FF]"
                                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            )}
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
        <div className="shrink-0 border-t border-border dark:border-gray-800">
          {navCollapsed ? (
            <div className="flex flex-col items-center gap-1 p-2">
              <button
                type="button"
                onClick={() => setIsExpanded((v) => !v)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                aria-label={isExpanded ? "Exit full screen" : "Enter full screen"}
              >
                <Icon name={isExpanded ? "close_fullscreen" : "open_in_full"} size={20} />
              </button>
              <button
                type="button"
                onClick={() => setNavCollapsed(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                aria-label="Expand navigation"
              >
                <Icon name="chevron_right" size={20} />
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-between px-3 py-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsExpanded((v) => !v)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                  aria-label={isExpanded ? "Exit full screen" : "Enter full screen"}
                >
                  <Icon name={isExpanded ? "close_fullscreen" : "open_in_full"} size={18} />
                </button>
                <Image src="/PoweredByTallyBadge.svg" alt="Powered by Tally" width={120} height={29} className="w-[120px] h-auto dark:hidden" />
                <Image src="/PoweredByTallyBadgeREV.svg" alt="Powered by Tally" width={120} height={29} className="hidden w-[120px] h-auto dark:block" />
              </div>
              <button
                type="button"
                onClick={() => setNavCollapsed(true)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                aria-label="Collapse navigation"
              >
                <Icon name="chevron_left" size={20} />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Collapsed flyout for parent items with children */}
      {navCollapsed && flyoutParentId && flyoutPos && (() => {
        const parentItem = LEFT_NAV_ITEMS.find((i) => i.id === flyoutParentId);
        if (!parentItem?.children?.length) return null;
        return (
          <div
            className="fixed z-[100] min-w-[180px] rounded-md border border-gray-200 bg-white py-2 dark:border-gray-600 dark:bg-gray-800"
            style={{
              top: flyoutPos.top,
              left: flyoutPos.left,
              boxShadow: "0 2px 2px -1px rgba(10,13,18,0.04), 0 4px 6px -2px rgba(10,13,18,0.03), 0 12px 16px -4px rgba(10,13,18,0.08)",
            }}
            onMouseEnter={() => cancelHideFlyout()}
            onMouseLeave={() => hideFlyout()}
          >
            <div className="px-4 pb-1 pt-1.5 text-sm font-normal text-gray-600 dark:text-gray-300">
              {parentItem.label}
            </div>
            <div className="relative ml-4 border-l border-gray-200 dark:border-gray-600">
              {parentItem.children.map((child) => (
                <button
                  key={child.id}
                  type="button"
                  onClick={() => {
                    setActiveNavId(child.id);
                    setOpenParentId(parentItem.id);
                    hideFlyout();
                  }}
                  className={cn(
                    "flex w-full items-center py-2 pl-3 pr-4 text-left text-sm font-normal transition-colors",
                    activeNavId === child.id
                      ? "mx-2 rounded-lg bg-[#E6F7FF] font-medium text-[#006180] dark:bg-[#006180]/20 dark:text-[#80E0FF]"
                      : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  )}
                >
                  {child.label}
                </button>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Account Context Panel + Main Content share the surface gradient */}
      <div className={`flex min-w-0 flex-1 overflow-hidden ${surfaceColours["tally-crm"]}`}>
        <AccountContextPanel account={SM_ACCOUNT} />

        {/* Main Content */}
        <div className="min-w-0 flex-1 overflow-y-auto">
        <div className="mx-auto max-w-[1600px] px-4 py-4 xl:px-6 xl:py-6">
        {/* Breadcrumb + Glass logo */}
        <div className="mb-4 flex items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList className="items-center gap-1.5 text-sm text-gray-700 dark:text-gray-300">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/"
                    className="flex items-center text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  >
                    <Icon name="home" size={18} className="text-gray-600 dark:text-gray-400" />
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-400 [&>svg]:size-4" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/pages"
                    className="text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                  >
                    Customers
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-400 [&>svg]:size-4" />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link
                    href="/pages/small-market"
                    className="text-gray-700 transition-colors hover:text-[#006180] dark:text-gray-300 dark:hover:text-[#80E0FF]"
                  >
                    Tally+ Small Market Accounts
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gray-400 [&>svg]:size-4" />
              <BreadcrumbItem>
                <BreadcrumbPage className="rounded bg-[#E6F7FF] px-2.5 py-1 font-normal text-[#006180] dark:bg-[#006180]/20 dark:text-[#80E0FF]">
                  104063774 - Ronald Thomas
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Link
                href="/pages/glass-vision?expanded=true"
            className="flex shrink-0 items-center rounded-lg border border-border bg-white p-1.5 transition-colors hover:bg-[#E6F7FF] dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-[#006180]/20"
            title="Open Tally Glass Vision"
          >
            <Image
              src="/GlassLogoTest.svg"
              alt="Tally Glass"
              width={80}
              height={24}
              className="h-5 w-auto dark:hidden"
            />
            <Image
              src="/GlassLogoTest_darkmode.svg"
              alt="Tally Glass"
              width={80}
              height={24}
              className="hidden h-5 w-auto dark:block"
            />
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                104063774 - Ronald Thomas
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                1 Lee Walk, Cranbourne, VIC 3977
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">Tally CRM</Badge>
              <Badge variant="success">Active</Badge>
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatusCard
            label="Account Balance"
            value="$0.00 Nothing Overdue"
            icon="account_balance_wallet"
            variant="success"
          />
          <StatusCard
            label="Account Status"
            value="Open - No Churn Activity"
            icon="check_circle"
            variant="info"
          />
          <StatusCard
            label="Billing Cycle"
            value="Monthly - Billed to 27 Apr 2025"
            icon="calendar_today"
          />
          <StatusCard
            label="Account Commenced"
            value="15 Apr 2025"
            icon="schedule"
          />
        </div>

        {/* Tabs */}
        <Tabs value={tabValue} onValueChange={setTabValue} className="mb-6">
          <TabsList className="mb-6 h-10 flex-nowrap justify-start gap-1 rounded-lg bg-gray-100 p-1 text-gray-600 dark:bg-gray-800 dark:text-gray-200">
            {TAB_CONFIG.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-gray-700 data-[state=active]:bg-[#E6F7FF] data-[state=active]:text-[#006180] dark:text-gray-200 dark:data-[state=active]:bg-[#006180]/20 dark:data-[state=active]:text-[#80E0FF]"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Details Tab */}
          <TabsContent value="details" className="mt-0">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Account Details</h2>
              <button
                type="button"
                onClick={allCardsOpen ? collapseAll : expandAll}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
                aria-label={allCardsOpen ? "Collapse all" : "Expand all"}
              >
                {allCardsOpen ? (
                  <>
                    <Icon name="unfold_less" size={18} />
                    Collapse all
                  </>
                ) : (
                  <>
                    <Icon name="unfold_more" size={18} />
                    Expand all
                  </>
                )}
              </button>
            </div>

            <div>
              <div className="space-y-6">
                <CollapsibleCard
                  title="Account Summary"
                  open={cardOpenState["Account Summary"]}
                  onOpenChange={(open) => setCardOpenState((prev) => ({ ...prev, "Account Summary": open }))}
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <DataCell label="Account Type" value="Residential" />
                    <DataCell label="Protection Classification" value="Tally+ Small Market" />
                    <DataCell label="Journal Segment" value="Residential" />
                    <DataCell label="Credit Status" value="Standard" />
                    <DataCell label="Account Status" value="Open" />
                    <DataCell label="Commence Date" value="15 Apr 2025" />
                    <DataCell label="Move In Date" value="15 Apr 2025" />
                    <DataCell label="Occupancy Type" value="Owner Occupied" />
                    <DataCell label="Life Support" value="No" />
                  </div>
                </CollapsibleCard>

                <CollapsibleCard
                  title="Billing Configuration"
                  open={cardOpenState["Billing Configuration"]}
                  onOpenChange={(open) => setCardOpenState((prev) => ({ ...prev, "Billing Configuration": open }))}
                >
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Select label="Bill Group" defaultValue="monthly">
                        <option value="monthly">Monthly Bill Group</option>
                        <option value="quarterly">Quarterly Bill Group</option>
                      </Select>
                      <Input label="Invoice Due Days" type="number" defaultValue="15" />
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Select label="Correspondence Delivery" defaultValue="email">
                        <option value="email">Email</option>
                        <option value="post">Post</option>
                        <option value="both">Both</option>
                      </Select>
                      <Input label="Invoice Template" defaultValue="Standard Residential" />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
                        Custom Invoice Message
                      </label>
                      <textarea
                        className="w-full rounded-lg border border-border bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006180] focus-visible:ring-offset-2 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                        rows={3}
                        defaultValue="The Australian Government and your State Government require us to provide you with information about energy rebates and concessions."
                      />
                    </div>
                    <div className="flex items-center gap-4">
                      <Checkbox label="Override Due Days" />
                      <Checkbox label="Sensitive Load" />
                    </div>
                  </div>
                </CollapsibleCard>

                <CollapsibleCard
                  title="Payment Details"
                  open={cardOpenState["Payment Details"]}
                  onOpenChange={(open) => setCardOpenState((prev) => ({ ...prev, "Payment Details": open }))}
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Select label="Payment Frequency" defaultValue="monthly">
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="yearly">Yearly</option>
                    </Select>
                    <Input label="Payment Method" defaultValue="Direct Debit" />
                    <Input label="Next Payment Date" type="date" defaultValue="2025-05-28" />
                    <Input label="Payment Amount" defaultValue="$142.50" />
                  </div>
                </CollapsibleCard>

                <CollapsibleCard
                  title="Contact Information"
                  open={cardOpenState["Contact Information"]}
                  onOpenChange={(open) => setCardOpenState((prev) => ({ ...prev, "Contact Information": open }))}
                >
                  <div className="mb-4 flex items-center justify-between rounded-lg border border-border bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">Ronald Thomas</p>
                      <p className="mt-1 text-xs text-muted-foreground">Primary Contact since 14 Apr 2025</p>
                    </div>
                    <Badge variant="info">Primary</Badge>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex items-center gap-2">
                      <Icon name="phone" size={18} className="text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-900 dark:text-gray-100">0464 464 646</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="email" size={18} className="text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-900 dark:text-gray-100">ronald.thomas@email.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="badge" size={18} className="text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-900 dark:text-gray-100">31680432</span>
                    </div>
                  </div>
                </CollapsibleCard>

                <CollapsibleCard
                  title="Service Address"
                  open={cardOpenState["Service Address"]}
                  onOpenChange={(open) => setCardOpenState((prev) => ({ ...prev, "Service Address": open }))}
                >
                  <div className="space-y-4">
                    <div className="rounded-lg border border-border bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">Service Address</p>
                          <p className="mt-1 text-sm font-medium text-gray-900 dark:text-gray-100">1 Lee Walk</p>
                          <p className="text-sm text-gray-900 dark:text-gray-100">Cranbourne, VIC 3977</p>
                        </div>
                        <button className="text-[#006180] hover:text-[#004D66] dark:text-[#80E0FF] dark:hover:text-[#B3EDFF]">
                          <Icon name="edit" size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="rounded-lg border border-border bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900/40">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-xs font-medium text-muted-foreground">Postal Address</p>
                          <p className="mt-1 text-sm font-medium text-gray-900 dark:text-gray-100">666-678 Lygon Street</p>
                          <p className="text-sm text-gray-900 dark:text-gray-100">Carlton North, VIC 3054</p>
                        </div>
                        <button className="text-[#006180] hover:text-[#004D66] dark:text-[#80E0FF] dark:hover:text-[#B3EDFF]">
                          <Icon name="edit" size={18} />
                        </button>
                      </div>
                    </div>
                    <DataCell label="NMI - National Meter ID" value="6305194250" />
                  </div>
                </CollapsibleCard>

                <div className="flex items-center justify-end gap-3">
                  <Button variant="outline" className="border-[#006180] text-[#006180] hover:bg-[#006180]/10 focus:ring-[#006180] dark:border-[#80E0FF] dark:text-[#80E0FF] dark:hover:bg-[#80E0FF]/10">
                    Cancel
                  </Button>
                  <Button
                    className="!bg-[#006180] text-white hover:!bg-[#004D66] focus:ring-[#006180] dark:!bg-[#006180] dark:text-white dark:hover:!bg-[#004D66]"
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Financial Tab */}
          <TabsContent value="financial" className="mt-0">
            <div className="space-y-6">
              <Card className="shadow-none">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-bold text-gray-900 dark:text-gray-100">Recent Bills</CardTitle>
                    <Button variant="outline" size="sm">
                      <Icon name="download" size={16} className="mr-1" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 dark:bg-gray-800/60">
                        <TableHead className="pl-6">Invoice ID</TableHead>
                        <TableHead>Issue Date</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead className="pr-6">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {RECENT_BILLS.map((bill) => (
                        <TableRow key={bill.id}>
                          <TableCell className="pl-6 font-medium text-gray-900 dark:text-gray-100">{bill.id}</TableCell>
                          <TableCell>{bill.date}</TableCell>
                          <TableCell>{bill.dueDate}</TableCell>
                          <TableCell className="font-medium">{bill.amount}</TableCell>
                          <TableCell className="pr-6">
                            <Badge variant={bill.status === "paid" ? "success" : "warning"}>
                              {bill.status === "paid" ? "Paid" : "Pending"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Usage Tab */}
          <TabsContent value="usage" className="mt-0">
            <div className="space-y-6">
              <Card className="shadow-none">
                <CardHeader className="pb-4">
                  <CardTitle className="text-base font-bold text-gray-900 dark:text-gray-100">Usage History</CardTitle>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 dark:bg-gray-800/60">
                        <TableHead className="pl-6">Period</TableHead>
                        <TableHead>Electricity</TableHead>
                        <TableHead>Gas</TableHead>
                        <TableHead className="pr-6">Total Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {USAGE_DATA.map((usage) => (
                        <TableRow key={usage.period}>
                          <TableCell className="pl-6 font-medium text-gray-900 dark:text-gray-100">{usage.period}</TableCell>
                          <TableCell>{usage.electricity}</TableCell>
                          <TableCell>{usage.gas}</TableCell>
                          <TableCell className="pr-6 font-medium">{usage.cost}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Other Tabs */}
          {TAB_CONFIG.filter((t) => !["details", "financial", "usage"].includes(t.value)).map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-0">
              <div className="rounded-lg border border-border bg-card p-8 text-center text-muted-foreground shadow-none dark:border-gray-700 dark:bg-gray-900/40">
                <p className="capitalize">{tab.label} content would go here.</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        </div>
        </div>

        {/* Right Control Panel */}
        {controlPanelOpen && (
        <aside className="my-3 mr-3 flex w-[290px] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-white dark:border-gray-800 dark:bg-gray-950">
          <div className="flex h-full min-w-0 flex-col">
            <div className="flex flex-1 flex-col overflow-y-auto">
              {/* Panel tabs */}
              <div className="flex items-center gap-1 px-3 pb-2 pt-3">
                <div className="flex flex-1 gap-1">
                  {PANEL_TABS.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActivePanelTab(tab)}
                      className={cn(
                        "whitespace-nowrap rounded-md px-2 py-1 text-[11px] font-medium transition-all",
                        activePanelTab === tab
                          ? "bg-[#E6F7FF] text-[#006180] dark:bg-[#006180]/20 dark:text-[#80E0FF]"
                          : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-400"
                      )}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setControlPanelOpen(false)}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                  aria-label="Close control panel"
                >
                  <Icon name="right_panel_close" size={16} />
                </button>
              </div>

              {activePanelTab === "Control Panel" && (
                <>
                  {/* Quick action buttons */}
                  <div className="flex gap-2 border-b border-gray-100 p-3.5 dark:border-gray-800">
                    {([
                      ["check_box", "Tasks", true],
                      ["add_comment", "New Interaction", false],
                      ["filter_alt", "Filter", false],
                      ["layers", "Work Items", false],
                    ] as const).map(([icon, label, active]) => (
                      <button
                        key={icon}
                        type="button"
                        aria-label={label}
                        className={cn(
                          "flex flex-1 items-center justify-center rounded-xl border px-1 py-2 transition-all hover:-translate-y-0.5",
                          active
                            ? "border-[#006180]/40 bg-[#E6F7FF] text-[#006180] dark:border-[#80E0FF]/30 dark:bg-[#006180]/20 dark:text-[#80E0FF]"
                            : "border-gray-200 bg-white text-gray-500 hover:border-[#006180]/30 hover:bg-[#E6F7FF]/50 hover:text-[#006180] dark:border-gray-700 dark:bg-gray-900 dark:text-gray-500 dark:hover:border-[#80E0FF]/20 dark:hover:bg-[#006180]/10 dark:hover:text-[#80E0FF]"
                        )}
                      >
                        <Icon name={icon} size={17} />
                      </button>
                    ))}
                  </div>

                  {/* Create new task */}
                  <div className="px-3.5 pt-3.5">
                    <button
                      type="button"
                      className="flex w-full items-center justify-center gap-2 rounded-xl border-[1.5px] border-dashed border-[#006180]/30 bg-[#006180]/5 px-3 py-2.5 text-[13px] font-semibold text-[#006180] transition-all hover:-translate-y-0.5 hover:border-[#006180] hover:bg-[#006180]/10 hover:shadow-md dark:border-[#80E0FF]/20 dark:bg-[#006180]/5 dark:text-[#80E0FF] dark:hover:border-[#80E0FF]/40 dark:hover:bg-[#006180]/10"
                    >
                      <Icon name="add" size={16} />
                      Create new task
                      <span className="rounded bg-[#006180] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white dark:bg-[#80E0FF] dark:text-gray-900">
                        New
                      </span>
                    </button>
                  </div>

                  {/* Account context + search */}
                  <div className="space-y-3 px-3.5 pt-3.5">
                    <div>
                      <p className="text-xs font-medium text-[#006180] dark:text-[#80E0FF]">
                        What Account Is The Task For?
                      </p>
                      <p className="mt-1.5 border-b border-gray-200 pb-2 text-sm text-gray-900 dark:border-gray-700 dark:text-gray-100">
                        104063774 The Occupier
                      </p>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Search for a specific task"
                        className="w-full border-b-2 border-[#006180] bg-transparent pb-1.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none dark:border-[#80E0FF] dark:text-gray-100 dark:placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  {/* Task categories */}
                  <div className="flex-1 px-2 py-1.5">
                    {TASK_CATEGORIES.map((tc) => (
                      <button
                        key={tc.name}
                        type="button"
                        className="flex w-full items-center gap-2.5 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-[#E6F7FF]/50 dark:hover:bg-[#006180]/10"
                      >
                        <Icon name={tc.icon} size={17} className="shrink-0 text-gray-400 dark:text-gray-500" />
                        <span className="flex-1 text-left text-[13px] font-medium text-gray-700 dark:text-gray-300">
                          {tc.name}
                        </span>
                        <span
                          className={cn(
                            "min-w-[28px] rounded-full px-2 py-0.5 text-center font-mono text-[11.5px] font-medium",
                            tc.count === null
                              ? "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-600"
                              : tc.hot
                                ? "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                                : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                          )}
                        >
                          {tc.count ?? "—"}
                        </span>
                        <Icon name="chevron_right" size={15} className="shrink-0 text-gray-300 dark:text-gray-600" />
                      </button>
                    ))}
                  </div>
                </>
              )}

              {activePanelTab === "X-Sell" && (
                <div className="flex-1 px-3.5 py-3.5">
                  <p className="text-sm text-muted-foreground">X-Sell content would go here.</p>
                </div>
              )}
            </div>
          </div>
        </aside>
        )}

        {/* Panel re-open button (when collapsed) */}
        {!controlPanelOpen && (
          <button
            type="button"
            onClick={() => setControlPanelOpen(true)}
            className="my-3 mr-3 flex w-11 shrink-0 flex-col items-center gap-2 rounded-xl border border-border bg-white py-4 text-gray-500 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-400 dark:hover:text-gray-100"
            aria-label="Open control panel"
          >
            <Icon name="right_panel_open" size={18} />
            <span className="text-[10px] font-semibold tracking-wide [writing-mode:vertical-lr]">
              Control Panel
            </span>
          </button>
        )}
      </div>
      </div>
    </div>
  );
}
