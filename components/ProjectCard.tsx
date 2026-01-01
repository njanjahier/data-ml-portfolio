import Link from "next/link"

export default function ProjectCard({ project }: any) {
  return (
    <div className="border border-zinc-200 rounded-2xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">
        {project.title}
      </h3>

      <p className="text-sm text-zinc-600 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t: string) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full bg-zinc-100 text-zinc-700"
          >
            {t}
          </span>
        ))}
      </div>

      <Link
        href={project.github}
        target="_blank"
        className="text-sm font-medium text-violet-600 hover:underline"
      >
        GitHub repo →
      </Link>
    </div>
  )
}
