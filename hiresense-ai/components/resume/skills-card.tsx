const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "Docker",
  "MongoDB",
  "Tailwind CSS",
];

export default function SkillsCard() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-semibold">
        Skills
      </h2>

      <div className="mt-5 flex flex-wrap gap-3">

        {skills.map((skill) => (

          <span
            key={skill}
            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>
  );
}