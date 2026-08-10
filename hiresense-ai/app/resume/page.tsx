"use client";

import { useSearchParams } from "next/navigation";

import AppShell from "@/components/layout/app-shell";
import AppSidebar from "@/components/layout/app-sidebar";
import TopNavbar from "@/components/layout/top-navbar";

import PdfViewer from "@/components/resume/pdf-viewer";

const candidates = {
  "1": {
    name: "John Anderson",
    role: "Frontend Developer",
    resume: "/resumes/john-anderson.pdf",
  },

  "2": {
    name: "Sarah Parker",
    role: "Backend Engineer",
    resume: "/resumes/john-anderson.pdf",
  },

  "3": {
    name: "Michael Lee",
    role: "UI Designer",
    resume: "/resumes/john-anderson.pdf",
  },

  "4": {
    name: "Emily Watson",
    role: "AI Engineer",
    resume: "/resumes/john-anderson.pdf",
  },
};

export default function ResumePage() {
  const searchParams = useSearchParams();

  const candidateId = searchParams.get("candidate") ?? "1";

  const candidate =
    candidates[candidateId as keyof typeof candidates] ??
    candidates["1"];

  return (
    <AppShell
      sidebar={<AppSidebar />}
      header={<TopNavbar />}
    >
      <main className="space-y-6">

        {/* Candidate Header */}

        <section>
          <h1 className="text-3xl font-bold text-slate-900">
            {candidate.name}
          </h1>

          <p className="mt-1 text-slate-500">
            {candidate.role}
          </p>
        </section>

        {/* Resume */}

        <section>
          <PdfViewer
            resumeUrl={candidate.resume}
            candidateName={candidate.name}
          />
        </section>

      </main>
    </AppShell>
  );
}