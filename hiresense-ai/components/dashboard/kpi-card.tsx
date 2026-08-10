import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface KPIProps {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  href: string;
}

export default function KpiCard({
  title,
  value,
  change,
  icon: Icon,
  href,
}: KPIProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            {value}
          </h2>

          <p className="mt-2 text-sm font-medium text-green-600">
            {change}
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-50 transition group-hover:bg-blue-100">
          <Icon
            size={28}
            className="text-blue-600"
          />
        </div>

      </div>
    </Link>
  );
}