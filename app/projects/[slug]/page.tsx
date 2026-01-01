import { projects } from '@/data/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'

type Props = {
  params: {
    slug: string
  }
}

export default function ProjectDetail({ params }: Props) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) return notFound()

  return (
    <article className="space-y-10">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {project.title}
        </h1>
        <p className="text-zinc-400 max-w-3xl">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm rounded-full border border-zinc-700 text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-medium"
        >
          GitHub Repo
        </a>

        <Link
          href="/projects"
          className="px-6 py-2 rounded-lg border border-zinc-700 hover:border-violet-400 transition"
        >
          Nazad
        </Link>
      </div>
    </article>
  )
}
