export default function ATSScore() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <p className="text-sm text-slate-500">
        ATS Score
      </p>

      <h1 className="mt-3 text-6xl font-bold text-blue-600">
        94
      </h1>

      <div className="mt-6 space-y-3">

        <div className="flex justify-between">

          <span className="text-slate-500">
            Resume Match
          </span>

          <span className="font-semibold">
            96%
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">
            Skills
          </span>

          <span className="font-semibold">
            91%
          </span>

        </div>

        <div className="flex justify-between">

          <span className="text-slate-500">
            Experience
          </span>

          <span className="font-semibold">
            89%
          </span>

        </div>

      </div>

    </div>
  );
}