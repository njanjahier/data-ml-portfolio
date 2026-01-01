import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import ProjectCard from "@/components/ProjectCard"

export default function Home() {
  return (
    <section className="space-y-24">
      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
  Diplomirani inženjer
  <span className="block bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
    računarstva i informatike
  </span>
</h1>

          <p className="text-zinc-600 max-w-xl">
  Fokus na analizu podataka, mašinsko učenje i razvoj rješenja
  zasnovanih na realnim poslovnim potrebama.
</p>

          <div className="flex gap-4">
            <Link
              href="/projects"
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-cyan-500 text-white font-medium"
            >
              Projekti
            </Link>

            <a
              href="/cv.pdf"
              className="px-6 py-2 rounded-lg border border-zinc-300 hover:border-violet-400 transition"
            >
              CV
            </a>
          </div>
        </div>

        {/* PROFILNA SLIKA */}
        <div className="flex justify-center">
          <div className="relative">
            {/* gradient okvir */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 blur-sm"></div>

            {/* slika */}
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white bg-white">
              <Image
                src="/profile.jpg"
                alt="Sanja"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    
    </section>
  )
}
