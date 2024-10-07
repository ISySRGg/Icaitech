import { Track } from "@/types"

import PageHeader from "@/components/page-header"

import { conferenceTracks } from "../../../../contents/conference-tracks"

export default function Page() {
  return (
    <>
      <PageHeader title="Conference Tracks" crumbs={["For Author"]} />
      <section className="container mt-8 md:mt-16">
        <p className="text-lg md:text-xl">Here are tracks for ICAITech 2025.</p>
        <ul className="mt-8 grid gap-x-10 gap-y-8 md:mt-10 md:grid-cols-3 md:gap-y-16">
          {conferenceTracks.map((track: Track, i) => (
            <li key={i} className="flex flex-col">
              <p className="font-mono text-4xl text-sky-700 md:text-6xl">
                0{i + 1}.
              </p>
              <h2 className="text-xl font-bold md:text-2xl">{track.title}</h2>
              <ul className="prose mt-2 md:mt-6">
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
