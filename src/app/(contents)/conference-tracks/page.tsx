import { Track } from "@/types"

import PageHeader from "@/components/page-header"

import { conferenceTracks } from "../../../../contents/conference-tracks"

export default function Page() {
  return (
    <>
      <PageHeader title="Conference Tracks" crumbs={["For Author"]} />
      <section className="container mt-16">
        <p className="text-xl">Here are tracks for ICAITech 2025.</p>
        <ul className="mt-10 grid grid-cols-3 gap-x-10 gap-y-16">
          {conferenceTracks.map((track: Track, i) => (
            <li key={i} className="flex flex-col">
              <p className="font-mono text-6xl text-gray-500">0{i + 1}.</p>
              <h2 className="text-2xl font-bold">{track.title}</h2>
              <ul className="prose mt-6">
                {track.subtracks.map((subtrack, j) => (
                  <p key={j}>
                    <span className="font-semibold">{subtrack.title}:</span>{" "}
                    {subtrack.description}
                  </p>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
