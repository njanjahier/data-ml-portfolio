export default function AboutPage() {
  return (
    <section className="space-y-16 max-w-3xl">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          O meni
        </h1>

        <p className="text-zinc-400">
          Diplomirani inženjer računarstva i informatike sa fokusom na razvoj web aplikacija i izradu funkcionalnih rješenja zasnovanih na realnim poslovnim potrebama.
          Posebno me interesuju projekti u kojima se spajaju dobar korisnički interfejs, jasna logika aplikacije i čisto strukturiran kod. 
          Volim raditi na kompletnim rješenjima — od ideje i strukture, do implementacije i deploya.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-violet-400">
          Kako razmišljam
        </h2>

        <p className="text-zinc-300">
          Ne gradim aplikacije „reda radi“. Uvijek polazim od pitanja:
          <br />
          <span className="italic text-zinc-400">
            „Koji problem korisnik ima i kako mu aplikacija konkretno pomaže?“
            U radu se fokusiram na:
          </span>
        </p>

        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>validaciju podataka i korisničke tokove</li>
          <li>jasnu strukturu aplikacije i čitljiv kod</li>
          <li>praktična rješenja koja se mogu koristiti u stvarnom okruženju</li>
          <li>stabilnost i jednostavnost korištenja</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-cyan-400">
          Tehnologije
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            'Python',
            'Next.js',
            'React',
            'TypeScript',
            'JavaScript',
            'Tailwind CSS',
            'SQL',
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-zinc-100 text-sm text-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
