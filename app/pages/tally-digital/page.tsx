"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import { Icon } from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/Avatar/Avatar";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import type { NavigationItem } from "@/components/NavigationBar/NavigationBar";
import Badge from "@/components/Badge/Badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/Tabs/Tabs";
import { surfaceColours } from "@/lib/tokens/surface-colours";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { dataVisualizationColors } from "@/lib/tokens/colors";

/* ─── Brand tokens ─────────────────────────────────────────────────────── */

const tallyDigitalActiveColors = {
  bg: "bg-[#FFF3E6]",
  text: "text-[#BF4600]",
  darkBg: "dark:bg-[#FFF3E6]/15",
  darkText: "dark:text-[#FFCF99]",
};

/* ─── Mock data ────────────────────────────────────────────────────────── */

const channelPerformanceData = [
  { month: "Sep", web: 3200, mobile: 2400, email: 1800, sms: 900 },
  { month: "Oct", web: 3500, mobile: 2800, email: 2000, sms: 1100 },
  { month: "Nov", web: 3100, mobile: 3200, email: 2200, sms: 1300 },
  { month: "Dec", web: 4200, mobile: 3600, email: 2100, sms: 1400 },
  { month: "Jan", web: 4800, mobile: 4100, email: 2400, sms: 1600 },
  { month: "Feb", web: 5100, mobile: 4500, email: 2600, sms: 1700 },
];

const engagementData = [
  { month: "Sep", sessions: 18400, conversions: 920 },
  { month: "Oct", sessions: 21200, conversions: 1060 },
  { month: "Nov", sessions: 19800, conversions: 990 },
  { month: "Dec", sessions: 24600, conversions: 1230 },
  { month: "Jan", sessions: 28400, conversions: 1420 },
  { month: "Feb", sessions: 31200, conversions: 1560 },
];

const trafficSourceData = [
  { name: "Organic Search", value: 38, color: dataVisualizationColors.dataASolid.hex },
  { name: "Direct", value: 24, color: dataVisualizationColors.dataFSolid.hex },
  { name: "Social Media", value: 18, color: dataVisualizationColors.dataCSolid.hex },
  { name: "Email", value: 12, color: dataVisualizationColors.dataESolid.hex },
  { name: "Paid Ads", value: 8, color: dataVisualizationColors.dataDSolid.hex },
];

const hourlyActiveUsersData = [
  { hour: "06:00", users: 420 },
  { hour: "08:00", users: 1840 },
  { hour: "10:00", users: 3200 },
  { hour: "12:00", users: 4100 },
  { hour: "14:00", users: 3800 },
  { hour: "16:00", users: 3400 },
  { hour: "18:00", users: 4600 },
  { hour: "20:00", users: 5200 },
  { hour: "22:00", users: 3100 },
  { hour: "00:00", users: 1200 },
];

const recentActivity = [
  { id: 1, type: "success", message: "App release v3.4.1 deployed successfully", time: "1 hour ago", icon: "rocket_launch" },
  { id: 2, type: "info", message: "Push notification campaign sent to 42k users", time: "3 hours ago", icon: "campaign" },
  { id: 3, type: "warning", message: "Mobile conversion rate dropped 2.1% this week", time: "5 hours ago", icon: "trending_down" },
  { id: 4, type: "success", message: "Self-service portal uptime: 99.97%", time: "6 hours ago", icon: "check_circle" },
];

const topPages = [
  { page: "Account Overview", views: "42,180", bounce: "24%", avgTime: "3m 12s" },
  { page: "Bill Payment", views: "38,420", bounce: "18%", avgTime: "2m 48s" },
  { page: "Usage Dashboard", views: "28,960", bounce: "32%", avgTime: "4m 05s" },
  { page: "Support Centre", views: "22,340", bounce: "41%", avgTime: "2m 14s" },
  { page: "Tariff Comparison", views: "18,120", bounce: "29%", avgTime: "3m 42s" },
];

const contentPerformanceData = [
  { type: "Blog Posts", published: 24, views: 86400, engagement: "4.2%" },
  { type: "Help Articles", published: 18, views: 124800, engagement: "6.8%" },
  { type: "Video Tutorials", published: 8, views: 42600, engagement: "8.1%" },
  { type: "Email Campaigns", published: 12, views: 156000, engagement: "3.6%" },
];

const conversionFunnelData = [
  { stage: "Visitors", count: 31200, color: dataVisualizationColors.dataASolid.hex },
  { stage: "Sign-ups", count: 4680, color: dataVisualizationColors.dataFSolid.hex },
  { stage: "Activations", count: 2810, color: dataVisualizationColors.dataCSolid.hex },
  { stage: "Conversions", count: 1560, color: dataVisualizationColors.dataDSolid.hex },
];

/* ─── Nav items ────────────────────────────────────────────────────────── */

const navItems: NavigationItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "dashboard", href: "#" },
  {
    id: "channels",
    label: "Channels",
    icon: "device_hub",
    children: [
      { id: "channels-web", label: "Web", href: "#" },
      { id: "channels-mobile", label: "Mobile App", href: "#" },
      { id: "channels-email", label: "Email", href: "#" },
      { id: "channels-sms", label: "SMS", href: "#" },
    ],
  },
  {
    id: "content",
    label: "Content",
    icon: "article",
    children: [
      { id: "content-pages", label: "Pages", href: "#" },
      { id: "content-blog", label: "Blog", href: "#" },
      { id: "content-media", label: "Media Library", href: "#" },
    ],
  },
  {
    id: "campaigns",
    label: "Campaigns",
    icon: "campaign",
    children: [
      { id: "campaigns-active", label: "Active", href: "#" },
      { id: "campaigns-scheduled", label: "Scheduled", href: "#" },
      { id: "campaigns-archive", label: "Archive", href: "#" },
    ],
  },
  { id: "analytics", label: "Analytics", icon: "insights", href: "#" },
  { id: "audience", label: "Audience", icon: "people", href: "#" },
];

const bottomNavItems: NavigationItem[] = [
  { id: "help", label: "Help & Support", icon: "help_outline", href: "#" },
  { id: "settings", label: "Settings", icon: "settings", href: "#" },
];

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function TallyDigitalDashboard() {
  const [navCollapsed, setNavCollapsed] = useState(false);

  return (
    <div className="flex h-screen flex-col">
      {/* ── App Bar ──────────────────────────────────────────────────── */}
      <header className="flex h-14 shrink-0 items-center border-b border-border bg-white px-4 dark:bg-gray-800">
        <Link href="/pages/tally-digital" className="mr-6 flex items-center">
          <Image
            src="/foundation/brands/tally-digital/TallyDigital.svg"
            alt="Tally Digital"
            width={140}
            height={40}
            className="block h-8 w-auto dark:hidden"
            priority
          />
          <Image
            src="/foundation/brands/tally-digital/TallyDigitalReversed.svg"
            alt="Tally Digital"
            width={140}
            height={40}
            className="hidden h-8 w-auto dark:block"
            priority
          />
        </Link>

        <div className="mx-auto flex w-full max-w-md items-center gap-2 rounded-density-md border border-border bg-gray-50 px-3 dark:bg-gray-700">
          <Icon name="search" size="var(--tally-icon-size-md)" className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search pages, campaigns, content…"
            className="w-full bg-transparent py-2 outline-none placeholder:text-muted-foreground"
            style={{ fontSize: "var(--tally-font-size-sm)" }}
          />
        </div>

        <div className="ml-6 flex items-center gap-3">
          <button
            type="button"
            className="relative rounded-density-md p-density-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Notifications"
          >
            <Icon name="notifications" size="var(--tally-icon-size-md)" className="text-muted-foreground" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </button>
          <Avatar className="h-8 w-8">
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        {/* ── Left Navigation ─────────────────────────────────────── */}
        <NavigationBar
          items={navItems}
          bottomItems={bottomNavItems}
          defaultActiveId="dashboard"
          collapsed={navCollapsed}
          onCollapsedChange={setNavCollapsed}
          activeColors={tallyDigitalActiveColors}
        />

        {/* ── Main Content ────────────────────────────────────────── */}
        <main className={`flex-1 overflow-y-auto ${surfaceColours["tally-digital"]}`}>
          <div className="mx-auto max-w-[1600px] p-density-xl">

            {/* Page header */}
            <div className="mb-density-xl flex items-center justify-between">
              <div>
                <h1
                  className="font-bold text-gray-900 dark:text-gray-100"
                  style={{ fontSize: "var(--tally-font-size-3xl)", lineHeight: "var(--tally-line-height-tight)" }}
                >
                  Digital Dashboard
                </h1>
                <p
                  className="mt-density-xs text-muted-foreground"
                  style={{ fontSize: "var(--tally-font-size-sm)" }}
                >
                  Digital channel performance, engagement metrics, and content analytics
                </p>
              </div>
              <div className="flex items-center gap-density-sm">
                <Button variant="outline" size="sm">
                  <Icon name="download" size="var(--tally-icon-size-sm)" className="mr-1" />
                  Export
                </Button>
                <Button variant="primary" size="sm">
                  <Icon name="add" size="var(--tally-icon-size-sm)" className="mr-1" />
                  New Campaign
                </Button>
              </div>
            </div>

            {/* ── KPI Cards ──────────────────────────────────────── */}
            <div className="mb-density-xl grid grid-cols-1 gap-density-lg sm:grid-cols-2 xl:grid-cols-4">
              <KPICard
                title="Active Users"
                value="31,240"
                change="+12.4% from last month"
                changeType="positive"
                icon="person"
              />
              <KPICard
                title="Conversion Rate"
                value="5.02%"
                change="+0.8% from last month"
                changeType="positive"
                icon="conversion_path"
              />
              <KPICard
                title="Digital Sessions"
                value="148,600"
                change="+18.2% from last month"
                changeType="positive"
                icon="devices"
              />
              <KPICard
                title="Avg. Session Duration"
                value="3m 24s"
                change="-0.4% from last month"
                changeType="negative"
                icon="timer"
              />
            </div>

            {/* ── Tabs ───────────────────────────────────────────── */}
            <Tabs defaultValue="overview" className="mb-density-xl">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="channels">Channels</TabsTrigger>
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="conversions">Conversions</TabsTrigger>
              </TabsList>

              {/* Overview tab */}
              <TabsContent value="overview" className="mt-density-lg">
                <div className="mb-density-lg grid grid-cols-1 gap-density-lg lg:grid-cols-12">
                  {/* Channel performance area chart */}
                  <Card className="shadow-none lg:col-span-8">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Channel Performance</CardTitle>
                          <CardDescription>Monthly interactions by digital channel</CardDescription>
                        </div>
                        <Badge variant="outline">Last 6 months</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div style={{ height: "320px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={channelPerformanceData}>
                            <defs>
                              <linearGradient id="gradWeb" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={dataVisualizationColors.dataASolid.hex} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={dataVisualizationColors.dataASolid.hex} stopOpacity={0} />
                              </linearGradient>
                              <linearGradient id="gradMobile" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={dataVisualizationColors.dataFSolid.hex} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={dataVisualizationColors.dataFSolid.hex} stopOpacity={0} />
                              </linearGradient>
                              <linearGradient id="gradEmail" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={dataVisualizationColors.dataCSolid.hex} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={dataVisualizationColors.dataCSolid.hex} stopOpacity={0} />
                              </linearGradient>
                              <linearGradient id="gradSMS" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={dataVisualizationColors.dataDSolid.hex} stopOpacity={0.3} />
                                <stop offset="95%" stopColor={dataVisualizationColors.dataDSolid.hex} stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "13px" }} />
                            <Legend />
                            <Area type="monotone" dataKey="web" name="Web" stroke={dataVisualizationColors.dataASolid.hex} fill="url(#gradWeb)" strokeWidth={2} />
                            <Area type="monotone" dataKey="mobile" name="Mobile" stroke={dataVisualizationColors.dataFSolid.hex} fill="url(#gradMobile)" strokeWidth={2} />
                            <Area type="monotone" dataKey="email" name="Email" stroke={dataVisualizationColors.dataCSolid.hex} fill="url(#gradEmail)" strokeWidth={2} />
                            <Area type="monotone" dataKey="sms" name="SMS" stroke={dataVisualizationColors.dataDSolid.hex} fill="url(#gradSMS)" strokeWidth={2} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Traffic sources pie chart */}
                  <Card className="shadow-none lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Traffic Sources</CardTitle>
                      <CardDescription>Where users are coming from</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div style={{ height: "320px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={trafficSourceData}
                              cx="50%"
                              cy="45%"
                              innerRadius={60}
                              outerRadius={100}
                              dataKey="value"
                              paddingAngle={2}
                              label={({ name, percent }: { name?: string; percent?: number }) =>
                                `${name ?? ""} ${((percent ?? 0) * 100).toFixed(0)}%`
                              }
                            >
                              {trafficSourceData.map((entry, idx) => (
                                <Cell key={idx} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "13px" }} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Row 2: engagement + hourly users */}
                <div className="mb-density-lg grid grid-cols-1 gap-density-lg lg:grid-cols-12">
                  <Card className="shadow-none lg:col-span-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Engagement Trend</CardTitle>
                          <CardDescription>Sessions vs conversions over time</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div style={{ height: "280px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={engagementData} barGap={4}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "13px" }} />
                            <Legend />
                            <Bar dataKey="sessions" name="Sessions" fill={dataVisualizationColors.dataASolid.hex} radius={[4, 4, 0, 0]} />
                            <Bar dataKey="conversions" name="Conversions" fill="#FF5E00" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-none lg:col-span-6">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Active Users Today</CardTitle>
                          <CardDescription>Hourly active user count</CardDescription>
                        </div>
                        <Badge variant="secondary">Live</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div style={{ height: "280px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={hourlyActiveUsersData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "13px" }} />
                            <Line
                              type="monotone"
                              dataKey="users"
                              name="Active Users"
                              stroke="#FF5E00"
                              strokeWidth={2.5}
                              dot={{ r: 4, fill: "#FF5E00" }}
                              activeDot={{ r: 6 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Bottom row: activity + top pages */}
                <div className="grid grid-cols-1 gap-density-lg lg:grid-cols-12">
                  <Card className="shadow-none lg:col-span-5">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Recent Activity</CardTitle>
                        <Badge variant="outline">{recentActivity.length}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-density-md">
                        {recentActivity.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-start gap-density-md rounded-density-md border border-border p-density-md"
                          >
                            <div
                              className={`flex shrink-0 items-center justify-center rounded-density-sm p-density-xs ${
                                item.type === "warning"
                                  ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                                  : item.type === "success"
                                    ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                    : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                              }`}
                            >
                              <Icon name={item.icon} size="var(--tally-icon-size-md)" />
                            </div>
                            <div className="flex-1">
                              <p
                                className="font-medium text-gray-900 dark:text-gray-100"
                                style={{ fontSize: "var(--tally-font-size-sm)" }}
                              >
                                {item.message}
                              </p>
                              <p
                                className="mt-density-xs text-muted-foreground"
                                style={{ fontSize: "var(--tally-font-size-xs)" }}
                              >
                                {item.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-none lg:col-span-7">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Top Pages</CardTitle>
                          <CardDescription>Most visited pages this month</CardDescription>
                        </div>
                        <Button variant="ghost" size="sm">
                          View All
                          <Icon name="chevron_right" size="var(--tally-icon-size-sm)" className="ml-1" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-hidden rounded-density-md border border-border">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-border bg-gray-50 dark:bg-gray-800">
                              <th className="px-density-lg py-density-sm text-left font-medium text-muted-foreground" style={{ fontSize: "var(--tally-font-size-xs)" }}>
                                Page
                              </th>
                              <th className="px-density-lg py-density-sm text-right font-medium text-muted-foreground" style={{ fontSize: "var(--tally-font-size-xs)" }}>
                                Views
                              </th>
                              <th className="px-density-lg py-density-sm text-right font-medium text-muted-foreground" style={{ fontSize: "var(--tally-font-size-xs)" }}>
                                Bounce Rate
                              </th>
                              <th className="px-density-lg py-density-sm text-right font-medium text-muted-foreground" style={{ fontSize: "var(--tally-font-size-xs)" }}>
                                Avg. Time
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {topPages.map((page) => (
                              <tr key={page.page} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                <td className="px-density-lg py-density-md font-medium text-gray-900 dark:text-gray-100" style={{ fontSize: "var(--tally-font-size-sm)" }}>
                                  {page.page}
                                </td>
                                <td className="px-density-lg py-density-md text-right font-medium text-gray-900 dark:text-gray-100" style={{ fontSize: "var(--tally-font-size-sm)" }}>
                                  {page.views}
                                </td>
                                <td className="px-density-lg py-density-md text-right text-muted-foreground" style={{ fontSize: "var(--tally-font-size-sm)" }}>
                                  {page.bounce}
                                </td>
                                <td className="px-density-lg py-density-md text-right text-muted-foreground" style={{ fontSize: "var(--tally-font-size-sm)" }}>
                                  {page.avgTime}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Channels tab */}
              <TabsContent value="channels" className="mt-density-lg">
                <div className="grid grid-cols-1 gap-density-lg lg:grid-cols-2">
                  <Card className="shadow-none">
                    <CardHeader>
                      <CardTitle>Channel Breakdown</CardTitle>
                      <CardDescription>Interactions by channel over the past 6 months</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div style={{ height: "380px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={channelPerformanceData} barGap={4}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "13px" }} />
                            <Legend />
                            <Bar dataKey="web" name="Web" fill={dataVisualizationColors.dataASolid.hex} radius={[4, 4, 0, 0]} />
                            <Bar dataKey="mobile" name="Mobile" fill={dataVisualizationColors.dataFSolid.hex} radius={[4, 4, 0, 0]} />
                            <Bar dataKey="email" name="Email" fill={dataVisualizationColors.dataCSolid.hex} radius={[4, 4, 0, 0]} />
                            <Bar dataKey="sms" name="SMS" fill={dataVisualizationColors.dataDSolid.hex} radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-none">
                    <CardHeader>
                      <CardTitle>User Activity Heatmap</CardTitle>
                      <CardDescription>Active users by time of day</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div style={{ height: "380px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={hourlyActiveUsersData}>
                            <defs>
                              <linearGradient id="gradUsers" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#FF5E00" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#FF5E00" stopOpacity={0} />
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis dataKey="hour" tick={{ fontSize: 12 }} />
                            <YAxis tick={{ fontSize: 12 }} />
                            <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "13px" }} />
                            <Area type="monotone" dataKey="users" name="Active Users" stroke="#FF5E00" fill="url(#gradUsers)" strokeWidth={2} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Content tab */}
              <TabsContent value="content" className="mt-density-lg">
                <div className="grid grid-cols-1 gap-density-lg sm:grid-cols-2 xl:grid-cols-4">
                  {contentPerformanceData.map((item) => (
                    <Card key={item.type} className="shadow-none">
                      <CardContent className="p-density-xl pt-density-xl">
                        <p className="font-medium text-muted-foreground" style={{ fontSize: "var(--tally-font-size-sm)" }}>
                          {item.type}
                        </p>
                        <p className="mt-density-sm font-bold text-gray-900 dark:text-gray-100" style={{ fontSize: "var(--tally-font-size-3xl)" }}>
                          {item.views.toLocaleString()}
                        </p>
                        <p className="text-muted-foreground" style={{ fontSize: "var(--tally-font-size-xs)" }}>
                          total views
                        </p>
                        <div className="mt-density-md flex items-center justify-between">
                          <span className="text-muted-foreground" style={{ fontSize: "var(--tally-font-size-xs)" }}>
                            {item.published} published
                          </span>
                          <span className="font-medium text-[#BF4600]" style={{ fontSize: "var(--tally-font-size-xs)" }}>
                            {item.engagement} engagement
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-density-lg shadow-none">
                  <CardHeader>
                    <CardTitle>Content Engagement Over Time</CardTitle>
                    <CardDescription>How engagement rates have changed across channels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div style={{ height: "340px" }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={engagementData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                          <YAxis tick={{ fontSize: 12 }} />
                          <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "13px" }} />
                          <Legend />
                          <Line type="monotone" dataKey="sessions" name="Sessions" stroke={dataVisualizationColors.dataASolid.hex} strokeWidth={2.5} dot={{ r: 4 }} />
                          <Line type="monotone" dataKey="conversions" name="Conversions" stroke="#FF5E00" strokeWidth={2.5} dot={{ r: 4 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Conversions tab */}
              <TabsContent value="conversions" className="mt-density-lg">
                <div className="grid grid-cols-1 gap-density-lg lg:grid-cols-12">
                  <Card className="shadow-none lg:col-span-8">
                    <CardHeader>
                      <CardTitle>Conversion Funnel</CardTitle>
                      <CardDescription>User journey from visit to conversion</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div style={{ height: "380px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={conversionFunnelData} layout="vertical" barSize={40}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                            <XAxis type="number" tick={{ fontSize: 12 }} />
                            <YAxis dataKey="stage" type="category" tick={{ fontSize: 12 }} width={90} />
                            <Tooltip contentStyle={{ borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "13px" }} />
                            <Bar dataKey="count" name="Users" radius={[0, 4, 4, 0]}>
                              {conversionFunnelData.map((entry, idx) => (
                                <Cell key={idx} fill={entry.color} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex flex-col gap-density-lg lg:col-span-4">
                    <MiniStatCard label="Conversion Rate" value="5.02%" subtext="+0.8% vs last month" icon="conversion_path" positive />
                    <MiniStatCard label="Cost per Acquisition" value="$12.40" subtext="-$1.20 vs last month" icon="savings" positive />
                    <MiniStatCard label="Avg. Order Value" value="$84.60" subtext="+$3.40 vs last month" icon="shopping_cart" positive />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ─── Sub-components ───────────────────────────────────────────────────── */

function KPICard({
  title,
  value,
  change,
  changeType,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: string;
}) {
  return (
    <Card className="shadow-none">
      <CardContent className="p-density-xl pt-density-xl">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="font-medium text-muted-foreground" style={{ fontSize: "var(--tally-font-size-sm)" }}>
              {title}
            </p>
            <p
              className="mt-density-sm font-bold leading-tight text-gray-900 dark:text-gray-100"
              style={{ fontSize: "var(--tally-font-size-3xl)" }}
            >
              {value}
            </p>
            <div className="mt-density-sm flex items-center gap-density-xs">
              <Icon
                name={changeType === "positive" ? "trending_up" : "trending_down"}
                size="var(--tally-icon-size-sm)"
                className={changeType === "positive" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}
              />
              <span
                className={`font-medium ${changeType === "positive" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                style={{ fontSize: "var(--tally-font-size-xs)" }}
              >
                {change}
              </span>
            </div>
          </div>
          <div className="flex shrink-0 items-center justify-center rounded-density-md bg-[#FF5E00]/10 p-density-md dark:bg-[#FFCF99]/20">
            <Icon name={icon} size="var(--tally-icon-size-lg)" className="text-[#FF5E00] dark:text-[#FFCF99]" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function MiniStatCard({
  label,
  value,
  subtext,
  icon,
  positive,
}: {
  label: string;
  value: string;
  subtext: string;
  icon: string;
  positive: boolean;
}) {
  return (
    <Card className="shadow-none">
      <CardContent className="p-density-xl pt-density-xl">
        <div className="flex items-center gap-density-md">
          <div className="flex shrink-0 items-center justify-center rounded-density-md bg-[#FF5E00]/10 p-density-sm dark:bg-[#FFCF99]/20">
            <Icon name={icon} size="var(--tally-icon-size-md)" className="text-[#FF5E00] dark:text-[#FFCF99]" />
          </div>
          <div>
            <p className="text-muted-foreground" style={{ fontSize: "var(--tally-font-size-xs)" }}>
              {label}
            </p>
            <p className="font-bold text-gray-900 dark:text-gray-100" style={{ fontSize: "var(--tally-font-size-xl)" }}>
              {value}
            </p>
            <p
              className={`font-medium ${positive ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`}
              style={{ fontSize: "var(--tally-font-size-xs)" }}
            >
              {subtext}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
