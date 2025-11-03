import PageHeader from "@/components/page-header"

import RegistrationSteps from "../../../../contents/registration-steps.mdx"

export default function Page() {
  return (
    <>
      <PageHeader title="Registration Steps" crumbs={["For Author"]} />
      <section className="container mt-8 md:mt-16">
        <div className="rounded-lg bg-gray-200/70 px-10 py-10 md:px-14 md:py-20">
          <article className="prose prose-li:marker:text-gray-500">
            <RegistrationSteps />
          </article>
        </div>
      </section>
      <section className="container mt-8 md:mt-16">
        <div className="rounded-lg bg-gray-200/70 px-10 py-10 md:px-14 md:py-20">
          <article className="prose prose-li:marker:text-gray-500">
              <h2 className="text-xl font-semibold">
                Register for Non-presenter Participant
              </h2>
              <p>
                We’re excited to welcome you to our event. Please fill out the registration form to join as a Non-Presenter Participant according to your category — whether you are a Non Member (Early Bird or Normal) or an IEEE Member (Early Bird or Normal). 
                Your participation is highly valued, and completing the <a href="https://bit.ly/NonPresenterParticipantICAITech" target="_blank">Form</a> (Form submission needs to log in from a Google account) will confirm your spot at the event. 
              </p>

          </article>
        </div>
      </section>
    </>
  )
}
