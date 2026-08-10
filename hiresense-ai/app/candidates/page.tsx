"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  Eye,
  Mail,
} from "lucide-react";

interface Candidate {
  id: number;
  name: string;
  email: string;
  role: string;
  score: number;
  status: "Interview" | "Shortlisted" | "Review" | "Hired";
  experience: string;
}

const candidates: Candidate[] = [
  {
    id: 1,
    name: "John Anderson",
    email: "john@email.com",
    role: "Frontend Developer",
    score: 94,
    status: "Interview",
    experience: "3 Years",
  },
  {
    id: 2,
    name: "Sarah Parker",
    email: "sarah@email.com",
    role: "Backend Engineer",
    score: 91,
    status: "Shortlisted",
    experience: "5 Years",
  },
  {
    id: 3,
    name: "Michael Lee",
    email: "michael@email.com",
    role: "UI Designer",
    score: 87,
    status: "Review",
    experience: "2 Years",
  },
  {
    id: 4,
    name: "Emily Watson",
    email: "emily@email.com",
    role: "AI Engineer",
    score: 97,
    status: "Hired",
    experience: "6 Years",
  },
  {
    id: 5,
    name: "David Miller",
    email: "david@email.com",
    role: "Full Stack Developer",
    score: 89,
    status: "Shortlisted",
    experience: "4 Years",
  },
  {
    id: 6,
    name: "Jessica Brown",
    email: "jessica@email.com",
    role: "Data Scientist",
    score: 93,
    status: "Interview",
    experience: "4 Years",
  },
];

const statusStyles: Record<Candidate["status"], string> = {
  Interview: "bg-blue-100 text-blue-700",
  Shortlisted: "bg-violet-100 text-violet-700",
  Review: "bg-amber-100 text-amber-700",
  Hired: "bg-emerald-100 text-emerald-700",
};

export default function CandidatesPage() {
  const searchParams = useSearchParams();

  const initialSearch = searchParams.get("search") ?? "";
  const initialStage = searchParams.get("stage") ?? "All";

  const [search, setSearch] = useState(initialSearch);
  const [status, setStatus] = useState(initialStage);
  const [sortDescending, setSortDescending] = useState(true);

  const filteredCandidates = useMemo(() => {
    let result = candidates.filter((candidate) => {
      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        candidate.name.toLowerCase().includes(query) ||
        candidate.email.toLowerCase().includes(query) ||
        candidate.role.toLowerCase().includes(query);

      const matchesStatus =
        status === "All" ||
        status === "Applied" ||
        status === "Screening"
          ? true
          : candidate.status === status;

      return matchesSearch && matchesStatus;
    });

    result = [...result].sort((a, b) =>
      sortDescending
        ? b.score - a.score
        : a.score - b.score
    );

    return result;
  }, [search, status, sortDescending]);

  return (
    <main className="space-y-8 p-8">

      {/* Header */}

      <section className="flex items-start justify-between">

        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Candidates
          </h1>

          <p className="mt-2 text-slate-500">
            Search, filter and review candidates.
          </p>
        </div>

        <Link
          href="/"
          className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Back to Dashboard
        </Link>

      </section>

      {/* Controls */}

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

        <div className="flex items-center gap-4">

          <div className="flex flex-1 items-center rounded-xl border border-slate-200 px-4">

            <Search
              size={19}
              className="text-slate-400"
            />

            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name, email or role..."
              className="w-full bg-transparent px-3 py-3 text-sm outline-none"
            />

          </div>

          <div className="flex items-center gap-2">

            <SlidersHorizontal
              size={18}
              className="text-slate-500"
            />

            <select
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
            >
              <option value="All">All statuses</option>
              <option value="Interview">Interview</option>
              <option value="Shortlisted">Shortlisted</option>
              <option value="Review">Review</option>
              <option value="Hired">Hired</option>
            </select>

          </div>

          <button
            type="button"
            onClick={() => setSortDescending((value) => !value)}
            className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowUpDown size={17} />
            ATS {sortDescending ? "High → Low" : "Low → High"}
          </button>

        </div>

      </section>

      {/* Results */}

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

          <div>

            <h2 className="text-xl font-semibold">
              Candidate List
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredCandidates.length} candidates found
            </p>

          </div>

        </div>

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

                <th className="px-4 py-4 text-right text-sm font-semibold text-slate-500">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredCandidates.map((candidate) => (

                <tr
                  key={candidate.id}
                  className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 font-bold text-white">
                        {candidate.name.charAt(0)}
                      </div>

                      <div>

                        <Link
  href={`/candidates/${candidate.id}`}
  className="font-semibold text-slate-900 hover:text-blue-600"
>
  {candidate.name}
</Link>

                        <p className="mt-1 text-sm text-slate-500">
                          {candidate.email}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-4 py-5 text-sm text-slate-700">
                    {candidate.role}
                  </td>

                  <td className="px-4 py-5">

                    <span className="rounded-xl bg-emerald-100 px-3 py-1 font-semibold text-emerald-700">
                      {candidate.score}
                    </span>

                  </td>

                  <td className="px-4 py-5 text-sm text-slate-700">
                    {candidate.experience}
                  </td>

                  <td className="px-4 py-5">

                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyles[candidate.status]}`}
                    >
                      {candidate.status}
                    </span>

                  </td>

                  <td className="px-4 py-5">

                    <div className="flex justify-end gap-2">

                      <Link
                        href="/resume"
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
                        title="View resume"
                      >
                        <Eye size={18} />
                      </Link>

                      <a
                        href={`mailto:${candidate.email}`}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
                        title="Email candidate"
                      >
                        <Mail size={18} />
                      </a>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {filteredCandidates.length === 0 && (
            <div className="py-16 text-center">

              <p className="text-lg font-semibold text-slate-900">
                No candidates found
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Try changing your search or filter.
              </p>

            </div>
          )}

        </div>

      </section>

    </main>
  );
}