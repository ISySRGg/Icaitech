import { Scope } from "@/types"

import PageHeader from "@/components/page-header"

import { scopes } from "../../../../contents/scopes"

export default function Page() {
  return (
    <>
      <PageHeader title="Scopes" />
      <section className="container mt-8 md:mt-16">
        <ul className="grid gap-2 md:grid-cols-2 md:gap-4">
          {scopes.map((scope: Scope, i) => (
            <li key={i} className="md:text-lg">
              {scope}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
