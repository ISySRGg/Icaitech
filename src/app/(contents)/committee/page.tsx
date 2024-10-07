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
      <section className="container mt-16">
        <ul className="grid grid-cols-2 gap-x-10 gap-y-4">
          <li>
            <p>Conference Chair</p>
            <p className="text-xl font-semibold">{conferenceChair}</p>
          </li>
          <li>
            <p>Publication Chair</p>
            <p className="text-xl font-semibold">{publicationChair}</p>
          </li>
          <li>
            <p>Finance Chair</p>
            <p className="text-xl font-semibold">{financeChair}</p>
          </li>
          <li>
            <p>Technical Chair</p>
            <p className="text-xl font-semibold">{technicalChair}</p>
          </li>
        </ul>
      </section>
      <section className="container mt-16">
        <h2 className="text-2xl font-bold">Editorial Board Members</h2>
        <ul className="mt-6 grid grid-cols-2 gap-x-10 gap-y-4">
          {editorialBoardMembers.map((member, i) => (
            <li key={i}>
              <p className="text-lg font-medium">{member.name}</p>
              <p className="text-sm text-gray-400">{member.affiliation}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="container mt-16">
        <h2 className="text-2xl font-bold">Organizing Comittee</h2>
        <ul className="mt-6 grid grid-cols-3 gap-x-10 gap-y-4">
          {organizingComittee.map((member, i) => (
            <li key={i}>
              <p className="text-lg font-medium">{member.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="container mt-16">
        <h2 className="text-2xl font-bold">Reviewers</h2>
        <ul className="mt-6 grid grid-cols-3 gap-x-10 gap-y-4">
          {reviewers.map((member, i) => (
            <li key={i}>
              <p className="text-lg font-medium">{member.name}</p>
              <p className="text-sm text-gray-400">{member.affiliation}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
