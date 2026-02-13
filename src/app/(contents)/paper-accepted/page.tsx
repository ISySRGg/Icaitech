"use client"

import { useEffect, useState } from "react"
import Papa from "papaparse"

import PageHeader from "@/components/page-header"

type Paper = {
  Title: string
  Status: string
  "Authors with affiliation and country": string
}

export default function Page() {
  const [papers, setPapers] = useState<Paper[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/papers_accepted.csv")
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse<Paper>(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setPapers(result.data)
            setLoading(false)
          },
        })
      })
  }, [])

  return (
    <>
      <PageHeader title="Paper Accepted" />
      <section className="container mt-8 md:mt-16">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <p className="text-slate-600">Loading papers...</p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-slate-600">
                Total Papers Accepted:{" "}
                <span className="font-semibold text-black">
                  {papers.length}
                </span>
              </p>
            </div>

            <div className="overflow-x-auto rounded-lg border border-slate-300">
              <table className="w-full border-collapse bg-white text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="border-b border-slate-300 px-6 py-4 font-semibold text-slate-900">
                      No.
                    </th>
                    <th className="border-b border-slate-300 px-6 py-4 font-semibold text-slate-900">
                      Title
                    </th>
                    {/* <th className="border-b border-slate-300 px-6 py-4 font-semibold text-slate-900">
                      SDG
                    </th> */}
                    <th className="border-b border-slate-300 px-6 py-4 font-semibold text-slate-900">
                      Status
                    </th>
                    <th className="border-b border-slate-300 px-6 py-4 font-semibold text-slate-900">
                      Authors with Affiliation and Country
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {papers.map((paper, index) => (
                    <tr key={index} className="hover:bg-slate-50">
                      <td className="border-b border-slate-200 px-6 py-4 text-slate-600">
                        {index + 1}
                      </td>
                      <td className="border-b border-slate-200 px-6 py-4 font-medium text-slate-900">
                        {paper.Title}
                      </td>
                      {/* <td className="border-b border-slate-200 px-6 py-4"></td> */}
                      <td className="border-b border-slate-200 px-6 py-4">
                        <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 capitalize">
                          {paper.Status}
                        </span>
                      </td>
                      <td className="border-b border-slate-200 px-6 py-4 text-slate-600">
                        {paper["Authors with affiliation and country"]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </section>
    </>
  )
}
