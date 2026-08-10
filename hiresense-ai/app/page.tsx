import AppShell from "@/components/layout/app-shell";
import AppSidebar from "@/components/layout/app-sidebar";
import TopNavbar from "@/components/layout/top-navbar";

import DashboardGrid from "@/components/dashboard/dashboard-grid";

export default function Home() {
  return (
    <AppShell
      sidebar={<AppSidebar />}
      header={<TopNavbar />}
    >
      <DashboardGrid />
    </AppShell>
  );
}