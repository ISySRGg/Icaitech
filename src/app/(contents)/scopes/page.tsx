import { Scope } from "@/types"

import PageHeader from "@/components/page-header"

import { scopes } from "../../../../contents/scopes"

export default function Page() {
  return (
    <>
      <PageHeader title="Scopes" />
      <section className="container mt-16">
        <ul className="grid grid-cols-2 gap-4">
          {scopes.map((scope: Scope, i) => (
            <li key={i} className="text-lg">
              {scope}
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
