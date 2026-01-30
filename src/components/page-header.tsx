import Header from "./layout/header"

interface Props {
  title: string
  crumbs?: string[]
}

export default function PageHeader({ title, crumbs }: Props) {
  return (
    <header className="relative flex flex-col bg-gray-100 bg-[url('/assets/header1.jpg')] bg-cover bg-center">
      <div className="z-20">
        <Header />
      </div>

      <div className="container z-10 py-12 text-gray-900 md:py-20">
        <h1 className="text-4xl font-bold md:text-5xl">
          {title}
        </h1>

        <p className="mt-2 text-sm md:text-base text-gray-700">
          ICAITech 2025
          {crumbs && crumbs.map((crumb, i) => (
            <span key={i}> / {crumb}</span>
          ))}
        </p>
      </div>

      {/* overlay soft putih */}
      <div className="absolute inset-0 bg-white/70" />
    </header>
  )
}
