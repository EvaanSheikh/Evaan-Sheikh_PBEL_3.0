"use client";

import dynamic from "next/dynamic";

interface PdfViewerProps {
  resumeUrl: string;
  candidateName: string;
}

const PdfViewerClient = dynamic(
  () => import("./pdf-viewer-client"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[850px] items-center justify-center bg-slate-100">
        <p className="text-sm text-slate-500">
          Loading resume...
        </p>
      </div>
    ),
  }
);

export default function PdfViewer({
  resumeUrl,
  candidateName,
}: PdfViewerProps) {
  return (
    <PdfViewerClient
      resumeUrl={resumeUrl}
      candidateName={candidateName}
    />
  );
}