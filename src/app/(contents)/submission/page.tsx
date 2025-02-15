import { Guideline } from "@/types"
import Markdown from "markdown-to-jsx"

import PageHeader from "@/components/page-header"

import { submissionGuidelines } from "../../../../contents/submissioin-guideline"

export default function Page() {
  return (
    <>
      <PageHeader title="Submission Guidelines" crumbs={["For Author"]} />
      <section className="container mt-8 md:mt-16">
        <p className="text-lg md:text-xl">
          Before you proceed, follow the guidelines below.
        </p>
        <ul className="mt-8 md:mt-10 md:columns-2 md:gap-x-20">
          {submissionGuidelines.map((guideline: Guideline, i) => (
            <li key={i} className="flex flex-col pb-6">
              <p className="font-mono text-3xl text-sky-700">
                {i < 9 && 0}
                {i + 1}.
              </p>
              <p className="prose">
                <Markdown>{guideline}</Markdown>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
