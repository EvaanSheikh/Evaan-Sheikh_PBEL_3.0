"use client";

import { useRouter } from "next/navigation";
import {
  Sparkles,
  ArrowUpRight,
  AlertTriangle,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const insights = [
  {
    id: 1,
    title: "Strong Candidate Match",
    description:
      "3 candidates have an ATS score above 90 for your open positions.",
    icon: UserCheck,
    action: "View Candidates",
    href: "/candidates",
  },
  {
    id: 2,
    title: "Hiring Bottleneck",
    description:
      "Interview-to-offer conversion is lower than your recent average.",
    icon: AlertTriangle,
    action: "View Analytics",
    href: "/analytics",
  },
  {
    id: 3,
    title: "Hiring Trend",
    description:
      "Candidate applications increased by 18% this week.",
    icon: TrendingUp,
    action: "View Analytics",
    href: "/analytics",
  },
];

export default function AIInsights() {
  const router = useRouter();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
            <Sparkles
              size={21}
              className="text-blue-600"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              AI Insights
            </h2>

            <p className="text-sm text-slate-500">
              Recruitment intelligence
            </p>
          </div>

        </div>

      </div>

      {/* Insights */}

      <div className="mt-6 space-y-4">

        {insights.map((insight) => {

          const Icon = insight.icon;

          return (
            <button
              key={insight.id}
              type="button"
              onClick={() => router.push(insight.href)}
              className="group w-full rounded-2xl border border-slate-200 p-4 text-left transition hover:border-blue-200 hover:bg-blue-50"
            >

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition group-hover:bg-white">

                  <Icon
                    size={19}
                    className="text-blue-600"
                  />

                </div>

                <div className="min-w-0 flex-1">

                  <div className="flex items-center justify-between gap-3">

                    <h3 className="font-semibold text-slate-900">
                      {insight.title}
                    </h3>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-slate-400 transition group-hover:text-blue-600"
                    />

                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {insight.description}
                  </p>

                  <p className="mt-3 text-sm font-medium text-blue-600">
                    {insight.action}
                  </p>

                </div>

              </div>

            </button>
          );
        })}

      </div>

      {/* Full Analytics */}

      <button
        type="button"
        onClick={() => router.push("/analytics")}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        View Full Analytics
        <ArrowUpRight size={16} />
      </button>

    </div>
  );
}