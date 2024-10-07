import { Agenda } from "@/types"

import PageHeader from "@/components/page-header"

import { importantDate } from "../../../../contents/important-date"

export default function Page() {
  return (
    <>
      <PageHeader title="Important Date" crumbs={["For Author"]} />
      <section className="container mt-8 md:mt-16">
        <ul className="flex flex-col divide-y">
          {importantDate.map((agenda: Agenda, i) => (
            <li
              key={i}
              className="flex flex-col-reverse justify-between py-4 md:flex-row"
            >
              <p className="md:text-lg">{agenda.name}</p>
              <p className="text-xl font-medium text-gray-500 md:text-2xl">
                {agenda.date}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
