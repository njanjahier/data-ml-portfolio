import Link from "next/link"

export default function Navbar() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-semibold"
        >
          Sanja
        </Link>

        {/* NAVIGATION */}
        <nav className="flex gap-3">
          <NavItem href="/projects">Projekti</NavItem>
          <NavItem href="/about">O meni</NavItem>
          <NavItem href="/contact">Kontakt</NavItem>
        </nav>

      </div>
    </header>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="
        px-4 py-1.5
        rounded-full
        bg-black text-white
        text-sm font-medium
        hover:bg-zinc-900
        transition
      "
    >
      {children}
    </Link>
  )
}
