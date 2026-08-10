"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  BriefcaseBusiness,
  CalendarDays,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    label: "Candidates",
    href: "/candidates",
    icon: Users,
  },
  {
    label: "Jobs",
    href: "/jobs",
    icon: BriefcaseBusiness,
  },
  {
    label: "Interviews",
    href: "/interviews",
    icon: CalendarDays,
  },
  {
    label: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: FileText,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[323px] shrink-0 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}

      <div className="border-b border-slate-200 px-9 py-8">
        <Link href="/" className="block">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            HireSense
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            AI Recruitment Platform
          </p>
        </Link>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 px-6 py-8">

        {navigation.map((item) => {
          const Icon = item.icon;

          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-medium transition ${
                active
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon size={22} strokeWidth={1.8} />

              <span>{item.label}</span>
            </Link>
          );
        })}

      </nav>

      {/* Settings */}

      <div className="border-t border-slate-200 p-6">

        <Link
          href="/settings"
          className="flex items-center gap-4 rounded-xl px-4 py-3.5 text-base font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
        >
          <Settings size={22} strokeWidth={1.8} />
          <span>Settings</span>
        </Link>

      </div>

    </aside>
  );
}