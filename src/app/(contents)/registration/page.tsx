import PageHeader from "@/components/page-header"

import RegistrationSteps from "../../../../contents/registration-steps.mdx"

export default function Page() {
  return (
    <>
      <PageHeader title="Registration Steps" crumbs={["For Author"]} />
      <section className="container mt-16">
        <div className="rounded-lg bg-gray-200/70 px-14 py-20">
          <article className="prose prose-li:marker:text-gray-500">
            <RegistrationSteps />
          </article>
        </div>
      </section>
    </>
  )
}
