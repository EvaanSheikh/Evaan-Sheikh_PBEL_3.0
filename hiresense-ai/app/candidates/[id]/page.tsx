"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Mail,
  Briefcase,
  CalendarDays,
  FileText,
  Award,
} from "lucide-react";

const candidates = [
  {
    id: "1",
    name: "John Anderson",
    email: "john@email.com",
    role: "Frontend Developer",
    score: 94,
    status: "Interview",
    experience: "3 Years",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    id: "2",
    name: "Sarah Parker",
    email: "sarah@email.com",
    role: "Backend Engineer",
    score: 91,
    status: "Shortlisted",
    experience: "5 Years",
    skills: ["Node.js", "Python", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: "3",
    name: "Michael Lee",
    email: "michael@email.com",
    role: "UI Designer",
    score: 87,
    status: "Review",
    experience: "2 Years",
    skills: ["Figma", "UI Design", "UX Research", "Prototyping"],
  },
  {
    id: "4",
    name: "Emily Watson",
    email: "emily@email.com",
    role: "AI Engineer",
    score: 97,
    status: "Hired",
    experience: "6 Years",
    skills: ["Python", "PyTorch", "TensorFlow", "Machine Learning", "NLP"],
  },
];

export default function CandidateProfilePage() {
  const params = useParams();

  const candidate = candidates.find(
    (item) => item.id === String(params.id)
  );

  if (!candidate) {
    return (
      <main className="p-8">
        <Link
          href="/candidates"
          className="inline-flex items-center gap-2 text-sm font-medium text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to Candidates
        </Link>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-10 text-center">
          <h1 className="text-2xl font-bold">
            Candidate not found
          </h1>

          <p className="mt-2 text-slate-500">
            The candidate you're looking for does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="space-y-6 p-8">

      {/* Back */}

      <Link
        href="/candidates"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
      >
        <ArrowLeft size={17} />
        Back to Candidates
      </Link>

      {/* Profile Header */}

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-6">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-3xl font-bold text-white">
              {candidate.name.charAt(0)}
            </div>

            <div>

              <h1 className="text-3xl font-bold text-slate-900">
                {candidate.name}
              </h1>

              <p className="mt-1 text-lg text-slate-500">
                {candidate.role}
              </p>

              <div className="mt-4 flex items-center gap-3">

                <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                  {candidate.status}
                </span>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  ATS {candidate.score}
                </span>

              </div>

            </div>

          </div>

          <div className="flex gap-3">

            <a
              href={`mailto:${candidate.email}`}
              className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium hover:bg-slate-50"
            >
              <Mail size={17} />
              Contact
            </a>

            <Link
              href="/interviews"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              <CalendarDays size={17} />
              Schedule Interview
            </Link>

          </div>

        </div>

      </section>

      {/* Main Content */}

      <div className="grid grid-cols-12 gap-6">

        {/* Left */}

        <div className="col-span-8 space-y-6">

          {/* ATS */}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-xl font-semibold">
                  ATS Analysis
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Candidate compatibility score
                </p>

              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-blue-100 text-2xl font-bold text-blue-600">
                {candidate.score}
              </div>

            </div>

            <div className="mt-6 space-y-4">

              <div>

                <div className="mb-2 flex justify-between text-sm">
                  <span>Skills Match</span>
                  <span className="font-semibold">95%</span>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-[95%] rounded-full bg-blue-600" />
                </div>

              </div>

              <div>

                <div className="mb-2 flex justify-between text-sm">
                  <span>Experience Match</span>
                  <span className="font-semibold">91%</span>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-[91%] rounded-full bg-blue-600" />
                </div>

              </div>

              <div>

                <div className="mb-2 flex justify-between text-sm">
                  <span>Education Match</span>
                  <span className="font-semibold">88%</span>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div className="h-2 w-[88%] rounded-full bg-blue-600" />
                </div>

              </div>

            </div>

          </section>

          {/* AI Summary */}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-semibold">
              AI Candidate Summary
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              {candidate.name} demonstrates strong alignment with the{" "}
              {candidate.role} position. The candidate has relevant
              technical experience and a strong skills match based on the
              current evaluation.
            </p>

          </section>

        </div>

        {/* Right */}

        <aside className="col-span-4 space-y-6">

          {/* Contact */}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-semibold">
              Candidate Information
            </h2>

            <div className="mt-5 space-y-4">

              <div className="flex gap-3">

                <Mail className="text-slate-400" size={19} />

                <div>
                  <p className="text-xs text-slate-400">
                    Email
                  </p>

                  <p className="text-sm font-medium">
                    {candidate.email}
                  </p>
                </div>

              </div>

              <div className="flex gap-3">

                <Briefcase className="text-slate-400" size={19} />

                <div>
                  <p className="text-xs text-slate-400">
                    Experience
                  </p>

                  <p className="text-sm font-medium">
                    {candidate.experience}
                  </p>
                </div>

              </div>

            </div>

          </section>

          {/* Skills */}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <h2 className="text-xl font-semibold">
              Skills
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">

              {candidate.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}

            </div>

          </section>

          {/* Resume */}

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

            <FileText
              size={22}
              className="text-blue-600"
            />

            <h2 className="mt-3 text-lg font-semibold">
              Resume
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              View the candidate's uploaded resume.
            </p>

            <Link
  href={`/resume?candidate=${candidate.id}`}
  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700"
>
  View Resume
</Link>

          </section>

        </aside>

      </div>

    </main>
  );
}