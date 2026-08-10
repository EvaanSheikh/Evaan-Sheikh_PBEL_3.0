"use client";

import { useState } from "react";
import { MoreHorizontal, ArrowUpRight } from "lucide-react";
import CandidateDrawer from "../candidates/candidate-drawer";

export interface Candidate {
  name: string;
  email: string;
  role: string;
  score: number;
  status: string;
  experience: string;
}

const candidates: Candidate[] = [
  {
    name: "John Anderson",
    email: "john@email.com",
    role: "Frontend Developer",
    score: 94,
    status: "Interview",
    experience: "3 Years",
  },
  {
    name: "Sarah Parker",
    email: "sarah@email.com",
    role: "Backend Engineer",
    score: 91,
    status: "Shortlisted",
    experience: "5 Years",
  },
  {
    name: "Michael Lee",
    email: "michael@email.com",
    role: "UI Designer",
    score: 87,
    status: "Review",
    experience: "2 Years",
  },
  {
    name: "Emily Watson",
    email: "emily@email.com",
    role: "AI Engineer",
    score: 97,
    status: "Hired",
    experience: "6 Years",
  },
];

export default function RecentCandidates() {
  const [selectedCandidate, setSelectedCandidate] =
    useState<Candidate | null>(null);

  const [drawerOpen, setDrawerOpen] = useState(false);

  function handleCandidateClick(candidate: Candidate) {
    setSelectedCandidate(candidate);
    setDrawerOpen(true);
  }

  return (
    <>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Recent Candidates
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Latest candidate applications
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/candidates";
            }}
            className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
          >
            View All
            <ArrowUpRight size={16} />
          </button>

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">
                  Candidate
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-slate-500">
                  Role
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-slate-500">
                  ATS
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-slate-500">
                  Experience
                </th>

                <th className="px-4 py-4 text-left text-sm font-semibold text-slate-500">
                  Status
                </th>

                <th className="w-14" />

              </tr>

            </thead>

            <tbody>

              {candidates.map((candidate) => (

                <tr
                  key={candidate.email}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                >

                  {/* Candidate */}

                  <td className="px-6 py-5">

                    <button
                      type="button"
                      onClick={() => handleCandidateClick(candidate)}
                      className="flex items-center gap-4 text-left"
                    >

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white">
                        {candidate.name.charAt(0)}
                      </div>

                      <div>

                        <p className="font-semibold text-slate-900 hover:text-blue-600">
                          {candidate.name}
                        </p>

                        <p className="text-sm text-slate-500">
                          {candidate.email}
                        </p>

                      </div>

                    </button>

                  </td>

                  {/* Role */}

                  <td className="px-4 py-5 text-sm text-slate-700">
                    {candidate.role}
                  </td>

                  {/* ATS */}

                  <td className="px-4 py-5">

                    <span className="inline-flex rounded-xl bg-emerald-100 px-3 py-1 font-semibold text-emerald-700">
                      {candidate.score}
                    </span>

                  </td>

                  {/* Experience */}

                  <td className="px-4 py-5 text-sm text-slate-700">
                    {candidate.experience}
                  </td>

                  {/* Status */}

                  <td className="px-4 py-5">

                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
                        candidate.status === "Hired"
                          ? "bg-emerald-100 text-emerald-700"
                          : candidate.status === "Interview"
                            ? "bg-blue-100 text-blue-700"
                            : candidate.status === "Shortlisted"
                              ? "bg-violet-100 text-violet-700"
                              : "bg-amber-100 text-amber-700"
                      }`}
                    >
                      {candidate.status}
                    </span>

                  </td>

                  {/* More */}

                  <td className="px-2 py-5">

                    <button
                      type="button"
                      onClick={() => handleCandidateClick(candidate)}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
                    >
                      <MoreHorizontal size={18} />
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Candidate Drawer */}

      <CandidateDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        candidate={selectedCandidate}
      />
    </>
  );
}