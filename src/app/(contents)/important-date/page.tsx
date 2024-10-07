import { Agenda } from "@/types"

import PageHeader from "@/components/page-header"

import { importantDate } from "../../../../contents/important-date"

export default function Page() {
  return (
    <>
      <PageHeader title="Important Date" crumbs={["For Author"]} />
      <section className="container mt-16">
        <ul className="flex flex-col divide-y">
          {importantDate.map((agenda: Agenda, i) => (
            <li key={i} className="flex justify-between py-4">
              <p className="text-lg">{agenda.name}</p>
              <p className="text-2xl font-medium text-gray-500">
                {agenda.date}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
