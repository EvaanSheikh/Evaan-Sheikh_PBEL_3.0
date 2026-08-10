import KpiCard from "./kpi-card";
import PipelineCard from "./pipeline-card";
import RecentCandidates from "./recent-candidates";
import UpcomingInterviews from "./upcoming-interviews";
import AIInsights from "./ai-insights";

import {
  Users,
  Briefcase,
  CalendarDays,
  Trophy,
} from "lucide-react";
export default function DashboardGrid() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <section>

        <div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Welcome back 👋
          </h1>

          <p className="mt-2 text-slate-500">
            Manage candidates, interviews and hiring from one dashboard.
          </p>

        </div>

      </section>

      {/* KPI Cards */}

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

        <KpiCard
  title="Candidates"
  value="248"
  change="+12 this week"
  icon={Users}
  href="/candidates"
/>

<KpiCard
  title="Open Jobs"
  value="18"
  change="+2 today"
  icon={Briefcase}
  href="/jobs"
/>

<KpiCard
  title="Interviews"
  value="9"
  change="Today"
  icon={CalendarDays}
  href="/interviews"
/>

<KpiCard
  title="Offers"
  value="4"
  change="+1"
  icon={Trophy}
  href="/jobs"
/>

      </section>

      {/* Middle Row */}

      <section className="grid grid-cols-12 gap-6">

        <div className="col-span-12 xl:col-span-8">

          <PipelineCard />

        </div>

        <div className="col-span-12 xl:col-span-4">

          <UpcomingInterviews />

        </div>

      </section>

      {/* Bottom Row */}

      <section className="grid grid-cols-12 gap-6">

        <div className="col-span-12 xl:col-span-8">

          <RecentCandidates />

        </div>

        <div className="col-span-12 xl:col-span-4">

          <AIInsights />

        </div>

      </section>

    </div>
  );
}