import { Mail, Linkedin, Github } from "lucide-react"

export default function ContactPage() {
  return (
    <section className="max-w-3xl space-y-16">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Kontakt
        </h1>
        <p className="text-zinc-600">
          Otvorena sam za Data & Machine Learning pozicije, projekte i saradnju.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Email */}
        <a
          href="mailto:savic.sanja2025@gmail.com"
          className="flex items-center gap-4 p-6 rounded-2xl border border-zinc-200 bg-white hover:border-violet-500 transition"
        >
          <Mail className="text-violet-500" />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-zinc-500 text-sm">
              savic.sanja2025@gmail.com
            </p>
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sanja-s-650078234"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 rounded-2xl border border-zinc-200 bg-white hover:border-cyan-500 transition"
        >
          <Linkedin className="text-cyan-500" />
          <div>
            <p className="font-medium">LinkedIn</p>
            <p className="text-zinc-500 text-sm">
              Povežimo se profesionalno
            </p>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/njanjahier"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-500 transition"
        >
          <Github className="text-zinc-700" />
          <div>
            <p className="font-medium">GitHub</p>
            <p className="text-zinc-500 text-sm">
              Kod i projekti
            </p>
          </div>
        </a>
      </div>
    </section>
  )
}
