"use client";

import { useRouter } from "next/navigation";
import {
  ResponsiveContainer,
  FunnelChart,
  Funnel,
  LabelList,
  Tooltip,
} from "recharts";

const data = [
  { value: 280, name: "Applied", fill: "#2563eb" },
  { value: 170, name: "Screening", fill: "#3b82f6" },
  { value: 90, name: "Interview", fill: "#60a5fa" },
  { value: 35, name: "Offer", fill: "#93c5fd" },
  { value: 12, name: "Hired", fill: "#bfdbfe" },
];

export default function PipelineCard() {
  const router = useRouter();

  function handleStageClick(stage: string) {
    router.push(
      `/candidates?stage=${encodeURIComponent(stage)}`
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6 flex items-start justify-between">

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Hiring Pipeline
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Candidate flow across recruitment stages
          </p>
        </div>

        <button
          type="button"
          onClick={() => router.push("/candidates")}
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
        >
          View Candidates
        </button>

      </div>

      {/* Funnel */}

      <div className="h-[320px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <FunnelChart>

            <Tooltip />

            <Funnel
              dataKey="value"
              data={data}
              isAnimationActive
              onClick={(entry) => {
                if (entry && "name" in entry) {
                  handleStageClick(String(entry.name));
                }
              }}
            >

              <LabelList
                position="right"
                fill="#111827"
                stroke="none"
                dataKey="name"
              />

            </Funnel>

          </FunnelChart>

        </ResponsiveContainer>

      </div>

      {/* Stage Summary */}

      <div className="mt-6 grid grid-cols-5 gap-2">

        {data.map((stage) => (

          <button
            key={stage.name}
            type="button"
            onClick={() => handleStageClick(stage.name)}
            className="rounded-xl bg-slate-50 p-3 text-left transition hover:bg-blue-50"
          >

            <p className="text-xs text-slate-500">
              {stage.name}
            </p>

            <p className="mt-1 text-lg font-bold text-slate-900">
              {stage.value}
            </p>

          </button>

        ))}

      </div>

    </div>
  );
}