import Header from "./layout/header"

interface Props {
  title: string
  crumbs?: string[]
}

export default function PageHeader({ title, crumbs }: Props) {
  return (
    <header className="relative bg-black bg-[url('/assets/header.jpg')] bg-cover">
      <Header />

      <div className="container py-20 text-white">
        <h1 className="text-2xl font-bold md:text-5xl">{title}</h1>
        <p>
          - ICAITech 2025{" "}
          {crumbs && crumbs.map((crumb, i) => <span key={i}>/ {crumb}</span>)}
        </p>
      </div>
    </header>
  )
}
