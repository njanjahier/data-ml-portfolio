export default function AboutPage() {
  return (
    <section className="space-y-16 max-w-3xl">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          O meni
        </h1>

        <p className="text-zinc-400">
          Diplomirani inženjer računarstva i informatike sa fokusom na analizu
          podataka, mašinsko učenje i razvoj rješenja zasnovanih na realnim
          poslovnim potrebama.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-violet-400">
          Kako razmišljam
        </h2>

        <p className="text-zinc-300">
          Ne gradim modele “radi modela”. Počinjem od pitanja:
          <br />
          <span className="italic text-zinc-400">
            “Koji problem pokušavamo riješiti i kako mjerimo uspjeh?”
          </span>
        </p>

        <ul className="list-disc list-inside text-zinc-400 space-y-2">
          <li>analizi i razumijevanju podataka</li>
          <li>feature engineering-u</li>
          <li>evaluaciji i interpretaciji ML modela</li>
          <li>jasnoj komunikaciji rezultata</li>
        </ul>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-cyan-400">
          Tehnologije
        </h2>

        <div className="flex flex-wrap gap-3">
          {[
            'Python',
            'Pandas',
            'NumPy',
            'Scikit-learn',
            'SQL',
            'Machine Learning',
            'Data Analysis',
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
