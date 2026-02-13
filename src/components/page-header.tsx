import Header from "./layout/header"

interface Props {
  title: string
  crumbs?: string[]
}

export default function PageHeader({ title, crumbs }: Props) {
  return (
    <header className="relative flex flex-col bg-slate-100 bg-[url('/assets/amp.jpg')] bg-cover bg-center">
      <div className="z-20">
        <Header />
      </div>

      <div className="z-10 container py-12 text-slate-100 md:py-20">
        <h1 className="text-4xl font-medium md:text-5xl">{title}</h1>

        <p className="mt-2 text-sm text-slate-200 md:text-base">
          ICAITech 2026
          {crumbs && crumbs.map((crumb, i) => <span key={i}> / {crumb}</span>)}
        </p>
      </div>

      {/* overlay soft putih */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-sky-800/60 to-sky-600/80" />
    </header>
  )
}
