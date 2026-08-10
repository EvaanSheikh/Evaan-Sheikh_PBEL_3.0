"use client";

interface PdfViewerClientProps {
  resumeUrl: string;
  candidateName: string;
}

export default function PdfViewerClient({
  resumeUrl,
  candidateName,
}: PdfViewerClientProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Resume
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {candidateName}
          </p>
        </div>

        <a
          href={resumeUrl}
          download
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Download
        </a>

      </div>

      {/* Resume */}

      <div className="bg-slate-100 p-6">

        <iframe
          src={resumeUrl}
          title={`${candidateName} resume`}
          className="h-[850px] w-full rounded-xl border border-slate-200 bg-white"
        />

      </div>

    </div>
  );
}