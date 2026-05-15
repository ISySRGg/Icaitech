import Link from "next/link"
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
          <br />
          <br />
          <strong>
            <em>
              The paper submission and evaluation process follows a double-blind
              review scheme. <br />
              Do not add any information such as name, email, or affiliations to
              the submitted paper.
            </em>
          </strong>
        </p>
        <ul className="mt-8 *:break-inside-avoid md:mt-10 md:columns-2 md:gap-x-20">
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
      <section className="container mt-8 bg-slate-100 p-4 md:mt-16 md:rounded-lg md:p-8">
        <div className="prose prose-lg">
          <p>
            The final paper file must meet IEEE&apos;s PDF formatting
            requirements. Hence, the authors&apos; final paper must be checked
            using PDF eXpress before submitting the final version to EDAS. Visit{" "}
            <Link href="https://ieee-pdf-express.org">this link</Link> and
            follow the steps below:
          </p>
        </div>
        <div className="prose mt-10">
          <h3>PDF Instructions for your Authors</h3>

          <p>
            2026 International Conference on Artificial Intelligence and
            Technological Solutions (ICAITech)
          </p>

          <h4>Before Creating a PDF</h4>
          <p>
            Proofread your source document thoroughly to confirm that it will
            require no revision.
          </p>

          <h4>Creating your PDF eXpress Account</h4>

          <ol>
            <li>
              <p>Log in to the IEEE PDF eXpress&reg; site.</p>
            </li>

            <li>
              <p>First-time users should do the following:</p>
              <ul>
                <li>Create Account</li>
                <li>Enter the following:</li>
                <ul>
                  <li>72000X for the Conference ID</li>
                  <li>your email address</li>
                  <li>a password</li>
                </ul>
              </ul>
            </li>

            <li>
              <p>Continue to enter information as prompted.</p>
            </li>

            <li>
              <p>
                An Online confirmation will be displayed and an email
                confirmation will be sent verifying your account setup.
              </p>
            </li>
          </ol>

          <p>
            Previous users of PDF eXpress need to follow the above steps but
            should enter the same password that was used for previous
            conferences. Verify that your contact information is valid.
          </p>
        </div>
      </section>
    </>
  )
}
