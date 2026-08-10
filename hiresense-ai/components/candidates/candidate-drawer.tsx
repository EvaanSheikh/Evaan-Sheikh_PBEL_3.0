"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  Mail,
  Briefcase,
  FolderKanban,
  Code2,
  CalendarDays,
} from "lucide-react";

interface Candidate {
  name: string;
  email: string;
  role: string;
  experience: string;
  score: number;
  status: string;
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  candidate: Candidate | null;
}

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Docker",
];

export default function CandidateDrawer({
  open,
  onOpenChange,
  candidate,
}: Props) {
  if (!candidate) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>

      <SheetContent
        side="right"
        className="w-full overflow-y-auto sm:max-w-[520px]"
      >

        <SheetHeader className="border-b border-slate-200 pb-6">

          <div className="flex items-center gap-5">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-3xl font-bold text-white">
              {candidate.name.charAt(0)}
            </div>

            <div>

              <SheetTitle className="text-2xl font-bold text-slate-900">
                {candidate.name}
              </SheetTitle>

              <p className="mt-1 text-slate-500">
                {candidate.role}
              </p>

              <div className="mt-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                ATS Score {candidate.score}
              </div>

            </div>

          </div>

        </SheetHeader>

        <div className="space-y-8 py-6">

          {/* Contact */}

          <section>

            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Contact
            </h3>

            <div className="space-y-3">

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                <Mail
                  size={18}
                  className="text-slate-500"
                />

                <span className="text-sm text-slate-700">
                  {candidate.email}
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4">
                <Briefcase
                  size={18}
                  className="text-slate-500"
                />

                <span className="text-sm text-slate-700">
                  {candidate.experience}
                </span>
              </div>

            </div>

          </section>

          {/* Resume Overview */}

          <section>

            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Resume Overview
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-slate-200 p-5">
                <FolderKanban
                  size={20}
                  className="text-blue-600"
                />

                <p className="mt-4 text-sm text-slate-500">
                  Projects
                </p>

                <p className="mt-1 text-3xl font-bold">
                  6
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <Code2
                  size={20}
                  className="text-violet-600"
                />

                <p className="mt-4 text-sm text-slate-500">
                  Skills
                </p>

                <p className="mt-1 text-3xl font-bold">
                  18
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">

                <p className="text-sm text-slate-500">
                  Experience
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {candidate.experience}
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 p-5">

                <p className="text-sm text-slate-500">
                  Status
                </p>

                <p className="mt-2 text-xl font-bold">
                  {candidate.status}
                </p>

              </div>

            </div>

          </section>

          {/* Skills */}

          <section>

            <h3 className="mb-4 text-lg font-semibold text-slate-900">
              Skills
            </h3>

            <div className="flex flex-wrap gap-2">

              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}

            </div>

          </section>

          {/* Actions */}

          <section className="grid grid-cols-2 gap-3">

            <button
              type="button"
              onClick={() => {
                window.location.href = "/resume";
              }}
              className="flex items-center justify-center rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              View Resume
            </button>

            <button
              type="button"
              onClick={() => {
                window.location.href = "/interviews";
              }}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <CalendarDays size={17} />
              Schedule
            </button>

          </section>

        </div>

      </SheetContent>

    </Sheet>
  );
}