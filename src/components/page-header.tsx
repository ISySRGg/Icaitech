import Header from "./layout/header"

interface Props {
  title: string
  crumbs?: string[]
}

export default function PageHeader({ title, crumbs }: Props) {
  return (
    <header className="relative flex flex-col bg-black bg-[url('/assets/header.jpg')] bg-cover bg-center">
      <div className="z-20">
        <Header />
      </div>

      <div className="container z-10 py-8 text-white md:py-20">
        <h1 className="text-4xl font-bold md:text-5xl">{title}</h1>
        <p className="text-sm md:text-base">
          - ICAITech 2025{" "}
          {crumbs && crumbs.map((crumb, i) => <span key={i}>/ {crumb}</span>)}
        </p>
      </div>

      <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-blue-900/90 to-teal-900/60" />
    </header>
  )
}
