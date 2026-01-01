import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function ProjectsPage() {
  return (
    <section className="space-y-12">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Projekti
        </h1>
        <p className="text-zinc-400 max-w-2xl">
          Od realnih poslovnih problema do implementiranih Machine Learning rješenja.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
