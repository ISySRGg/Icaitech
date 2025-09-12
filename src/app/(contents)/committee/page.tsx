import PageHeader from "@/components/page-header"

import {
  conferenceChair,
  editorialBoardMembers,
  financeChair,
  organizingComittee,
  publicationChair,
  reviewers,
  technicalChair,
} from "../../../../contents/committee"

export default function Page() {
  return (
    <>
      <PageHeader title="Committe" />
      <section className="container mt-8 md:mt-16">
        <ul className="grid gap-x-4 gap-y-4 md:grid-cols-2 md:gap-x-10">
          <li>
            <p className="text-sm md:text-base">Conference Chair</p>
            <p className="text-lg font-semibold md:text-xl">
              {conferenceChair}
            </p>
          </li>
          <li>
            <p className="text-sm md:text-base">Publication Chair</p>
            <p className="text-lg font-semibold md:text-xl">
              {publicationChair}
            </p>
          </li>
          <li>
            <p className="text-sm md:text-base">Finance Chair</p>
            <p className="text-lg font-semibold md:text-xl">{financeChair}</p>
          </li>
          <li>
            <p className="text-sm md:text-base">Technical Chair</p>
            <p className="text-lg font-semibold md:text-xl">{technicalChair}</p>
          </li>
        </ul>
      </section>
      <section className="container mt-8 md:mt-16">
        <h2 className="text-xl font-bold md:text-2xl">
          Editorial Board Members
        </h2>
        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-4 md:mt-6 md:gap-x-10">
          {editorialBoardMembers.map((member, i) => (
            <li key={i}>
              <p className="font-medium md:text-lg">{member.name}</p>
              <p className="text-xs text-gray-400 md:text-sm">
                {member.affiliation}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section className="container mt-8 md:mt-16">
        <h2 className="text-xl font-bold md:text-2xl">Organizing Comittee</h2>
        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-4 md:mt-6 md:grid-cols-3 md:gap-x-10">
          {organizingComittee.map((member, i) => (
            <li key={i}>
              <p className="font-medium md:text-lg">{member.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="container mt-8 md:mt-16">
<<<<<<< HEAD
        <h2 className="text-xl font-bold md:text-2xl"></h2> 
=======
        <h2 className="text-xl font-bold md:text-2xl"></h2>
>>>>>>> fe2d05dd62ce5ea90465ac5981499e9ee47f9ed6
        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-4 md:mt-6 md:grid-cols-3 md:gap-x-10">
          {reviewers.map((member, i) => (
            <li key={i}>
              <p className="font-medium md:text-lg">{member.name}</p>
              <p className="text-xs text-gray-400 md:text-sm">
                {member.affiliation}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
