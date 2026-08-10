"use client";

import { CalendarDays, Clock, Video } from "lucide-react";

const interviews = [
  {
    id: 1,
    candidate: "John Anderson",
    role: "Frontend Developer",
    time: "10:30 AM",
    date: "Today",
    type: "Technical Interview",
  },
  {
    id: 2,
    candidate: "Sarah Parker",
    role: "Backend Engineer",
    time: "12:00 PM",
    date: "Today",
    type: "Technical Interview",
  },
  {
    id: 3,
    candidate: "Emily Watson",
    role: "AI Engineer",
    time: "3:30 PM",
    date: "Tomorrow",
    type: "Final Interview",
  },
];

export default function UpcomingInterviews() {
  function joinInterview(candidate: string) {
    alert(`Joining interview with ${candidate}`);
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Upcoming Interviews
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your scheduled interviews
          </p>
        </div>

        <CalendarDays
          size={22}
          className="text-blue-600"
        />

      </div>

      <div className="mt-6 space-y-4">

        {interviews.map((interview) => (

          <div
            key={interview.id}
            className="rounded-2xl border border-slate-200 p-4 transition hover:border-blue-200 hover:bg-slate-50"
          >

            <div className="flex items-start justify-between gap-3">

              <div>

                <h3 className="font-semibold text-slate-900">
                  {interview.candidate}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {interview.role}
                </p>

              </div>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                {interview.date}
              </span>

            </div>

            <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">

              <span className="flex items-center gap-1.5">
                <Clock size={15} />
                {interview.time}
              </span>

              <span className="flex items-center gap-1.5">
                <Video size={15} />
                Video
              </span>

            </div>

            <button
              type="button"
              onClick={() => joinInterview(interview.candidate)}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              <Video size={16} />
              Join Interview
            </button>

          </div>

        ))}

      </div>

      <button
        type="button"
        onClick={() => {
          window.location.href = "/interviews";
        }}
        className="mt-5 w-full rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        View All Interviews
      </button>

    </div>
  );
}