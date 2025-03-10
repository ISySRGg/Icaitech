import { Guideline } from "@/types"
import Markdown from "markdown-to-jsx"

import PageHeader from "@/components/page-header"

import { submissionGuidelines } from "../../../../contents/submissioin-guideline"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <PageHeader title="Submission Guidelines" crumbs={["For Author"]} />
      <section className="container mt-8 md:mt-16">
        <p className="text-lg md:text-xl">
          Before you proceed, follow the guidelines below.
        </p>
        <ul className="mt-8 md:mt-10 *:break-inside-avoid md:columns-2 md:gap-x-20">
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
      <section className="container mt-8 md:mt-16 bg-gray-100 md:rounded-lg p-4 md:p-8">
        <div className="prose prose-lg">
          <p>
            The final paper file must meet IEEE&apos;s PDF formatting requirements. Hence, the authors&apos; final paper must be checked using PDF eXpress before submitting the final version to EDAS. Visit <Link href="https://ieee-pdf-express.org">this link</Link> and follow the steps below:
          </p>
        </div>
        <div className="prose mt-10">
          <p>
            Creating your PDF eXpress Account
          </p>

          <ol>
            <li>
              <p>Log in to the IEEE PDF eXpress TM site. First-time users should do the following:</p>
              <p>Select the New Users. Click Here link. Enter the following:</p>
              <ul>
                <li>66481X for the Conference ID</li>
                <li>your email address</li>
                <li>a password</li>
              </ul>
            </li>

            <li>
              <p>Continue to enter information as prompted.</p>
            </li>

            <li>
              <p>An Online confirmation will be displayed and an email confirmation will be sent verifying your account setup.</p>
            </li>
          </ol>
          <p>
            Note: Previous users of PDF eXpress need to follow the above steps, but should enter the same password that was used for previous conferences. Verify that your contact information is valid.
          </p>

        </div>

      </section>
    </>
  )
}