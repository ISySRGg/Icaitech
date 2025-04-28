import Image from "next/image"
import Link from "next/link"
import { CircleChevronDown } from "lucide-react"
import Markdown from "markdown-to-jsx"

import { Button } from "@/components/ui/button"
import CastFigure from "@/components/cast-figure"
import Countdown from "@/components/countdown"
import Header from "@/components/layout/header"
import { cn } from "@/lib/utils"
import { useEffect } from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";


import { importantDate } from "../../contents/important-date1"

export default function Page() {
  return (
    <>
      <header className="relative flex h-[max(60rem,100dvh)] items-center justify-center bg-black bg-[url('/assets/header1.jpg')] bg-cover">
        <div className="absolute top-0 z-20 w-full">
          <Header />
        </div>

        <div className="container z-10 mt-[5rem] flex flex-col items-center">
          <h1 className="text-center text-6xl font-bold text-white md:text-8xl">
            ICAITech
          </h1>
          <div className="rounded-md bg-white/90 px-4 py-0.5 text-lg font-semibold uppercase text-black md:py-2 md:text-4xl">
            <p>November 20—21, 2025</p>
          </div>
          <p className="mt-4 max-w-prose text-center text-white md:text-xl">
            The 1st International Conference on Artificial Intelligence and Technological
            Solutions For Good Health, Well-Being, and Sustainable Water
            Management Towards Sustainable Development Goals 3 and 6
          </p>
          <div className="mt-10">
            <Countdown />
          </div>
          <div className="mt-10 flex gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="https://edas.info/N32981">Register</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#ImportantDate">View Schedule</Link>
            </Button>
          </div>

          <Link href="#about" className="mt-20 animate-pulse">
            <CircleChevronDown size={42} className="text-white" />
          </Link>
        </div>

        <div className="absolute bottom-0 h-full w-full bg-gradient-to-t from-sky-900/90 to-green-900/60" />
      </header>
      <section
        id="about"
        className="container flex flex-col gap-4 pt-20 md:gap-8"
      >
        <h2 className="text-3xl font-semibold md:text-5xl">About Us</h2>
        <article className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="grid flex-none grid-cols-2 gap-2 md:flex md:flex-row md:gap-4">
            <Image
              src="/assets/sdg-3.png"
              alt="SDG 3"
              width={240}
              height={240}
              className="size-auto"
            />
            <Image
              src="/assets/sdg-6.png"
              alt="SDG 6"
              width={240}
              height={240}
              className="size-auto"
            />
          </div>
          {/* <div className="prose">
            <Markdown>
              The **International Conference on Artificial Technology
              (ICAITech)**, organized by the Faculty of Computer Science at
              Universitas Sriwijaya, Indonesia, aims to advance **Sustainable
              Development Goals (SDGs) 3 and 6, focusing on Good Health,
              Well-Being, and Sustainable Water Management**. The conference
              will take place on November 20–21, 2025, at the **Santika Premiere
              Hotel in Palembang, Indonesia**, and will be held in a hybrid
              format, offering both in-person and virtual participation.
            </Markdown>
          </div> */}
          <div className="prose">
            <Markdown>
              {`The **International Conference on Artificial Intelligence and Technological Solutions
    (ICAITech)**, organized by the Faculty of Computer Science at
    Universitas Sriwijaya, Indonesia, aims to advance **Sustainable
    Development Goals (SDGs) 3 and 6, focusing on Good Health,
    Well-Being, and Sustainable Water Management**. The conference
    will take place on November 20–21, 2025, at the **Jaidan Jauhari Hall, Faculty of Computer Science, Universitas Sriwijaya Palembang, Indonesia**, and will be held in a hybrid
    format, offering both in-person and virtual participation.
    `}
            </Markdown>
            <Markdown>
              The event will be held in **conjunction** with the **National
              Annual Research Seminar (ARS) 2025**, further enriching the
              academic exchange. Click here to submit your works in ARS 2025
            </Markdown>

            <div className="mt-4">
              <Button asChild size="lg">
                <Link href="/submit-to-ars">Submit to ARS 2025</Link>
              </Button>
            </div>
          </div>
        </article>
        <div className="flex justify-start overflow-hidden rounded-lg bg-black bg-[url('/assets/water.jpeg')] bg-cover">
          <article className="prose prose-invert mt-20 bg-sky-950/80 px-10 py-10 md:mt-0 md:px-14 md:py-20">
            <Markdown>
              The event will serve as a global platform for researchers,
              practitioners, and policymakers to discuss the role of artificial
              intelligence and related technologies in improving health outcomes
              and water management practices. Participants will explore how AI
              can contribute to achieving the UN’s SDG 3 (Good Health and
              Well-Being) and SDG 6 (Clean Water and Sanitation).
            </Markdown>
          </article>
        </div>
        <div className="flex justify-end overflow-hidden rounded-lg bg-black bg-[url('/assets/earth.png')] bg-cover">
          <article className="prose prose-invert mt-20 bg-green-950/80 px-10 py-10 md:mt-0 md:px-14 md:py-20">
            <Markdown>
              Key topics include **AI in healthcare, predictive analytics for
              disease prevention, AI-driven solutions for water purification and
              distribution, and sustainable technological innovations**. The
              conference will feature keynote speeches, panel discussions, and
              presentations of cutting-edge research, offering valuable
              networking opportunities for professionals committed to leveraging
              AI for societal benefit.
            </Markdown>
          </article>
        </div>
      </section>
      <section
        id="ImportantDate"
        className="container flex flex-col items-center pt-20">
        <h2 className="text-center text-3xl font-semibold md:text-5xl">
          Important Date
        </h2>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {importantDate.map((item, i) => (
            <div key={i} className="flex flex-col gap-2 rounded border p-8">
              <p>{item.name}</p>
              {item.icon && <item.icon className="size-[3rem] text-blue-900" />}
              <p className={cn(item.name == "Conference" ? "bg-black text-white p-4 rounded-md" : "", "text-2xl font-semibold")}>{item.date}</p>
            </div>
          ))}
        </div>
      </section>
 {/* bagian grafik pie chart */}
      {/* <section 
        id="pie-chart" 
        className="container flex flex-col items-center pt-20">
        <h2 className="text-center text-3xl font-semibold md:text-5xl mb-10">
          Grafik Pie Chart
        </h2>

        <div className="w-full flex justify-center">
          <div className="w-[300px] h-[300px]"> */}
            {/* Tempat Pie Chart-nya */}
            {/* <canvas id="pieChart"></canvas>
          </div>
        </div>
      </section> */}
 

      <section
        id="keynote-speakers"
        className="container flex flex-col items-center pt-20"
      >
        <h2 className="text-center text-3xl font-semibold md:text-5xl">
          Keynote Speakers
        </h2>
        <div className="prose mt-4 text-center">
          <Markdown>
            Our passionate and dedicated team brings together a diverse range of
            skills and expertise to deliver exceptional results. From creative
            visionaries to meticulous strategists, we work seamlessly together
            to meet and exceed our client&apos;s expectations.
          </Markdown>
        </div>
        <div className="mt-6 grid w-full justify-items-center gap-4 md:grid-cols-3">
          <CastFigure
            cast={{
              name: "Prof. Dr. Eko Supriyanto",
              title: "Confirmed",
              description:
                "Medical Imaging, Medical Informatics, Medical Electronics, Healthcare Management.",
              image: {
                src: "/assets/cast11.png",
                alt: "",
              },
              linkedIn: "https://my.linkedin.com/in/eko-supriyanto-88a38377",
              scopus:
                "https://www.scopus.com/authid/detail.uri?authorId=57194261987",
            }}
          />
          <CastFigure
            cast={{
              name: "Yoshioka Hidekazu",
              title: "In Confirmation",
              description:
                "Mathematical Environmental Sciences, Social Systems Engineering.",
              image: {
                src: "/assets/cast4.png",
                alt: "",
              },
              linkedIn:
                "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEj7CHfWizU3AAAAZJQb8wItPjeWUEkAEKfrDKB9u8x_Whae-Z5rncMQNBzUbe0wLMexXjiyIVx_uQVX_OMDoJV84l4TsK9_yk15NELlMCZlK-ze5nmrSLKalK12JZ81iRtrEY=&original_referer=&sessionRedirect=https%3A%2F%2Fjp.linkedin.com%2Fin%2Fkenta-hongo-38008667",
              scopus: "https://www.scopus.com/authid/detail.uri?authorId=51865098600&origin=recordpage",
            }}
          />
          <CastFigure
            cast={{
              name: "Prof. Drs. Ec. Ir. Riyanarto Sarno, M.Sc Ph.D",
              title: "Confirmed",
              description:
                "Internet of Things, Business Process Management, Process Aware Information Systems, Knowledge Engineering, Smart Grids",
              image: {
                src: "/assets/cast3.png",
                alt: "",
              },
              linkedIn:
                "https://www.its.ac.id/informatika/id/profil-riyanarto-sarno/",
              scopus:
                "https://www.scopus.com/authid/detail.uri?authorId=53264815700",
            }}
          />
        </div>
      </section>
      <section className="container pt-20">
        <div className="flex justify-end overflow-hidden rounded-lg bg-black bg-[url('/assets/ap.png')] bg-cover">
          <div className="w-full bg-black/70 px-10 py-10 md:mt-0 md:px-14 md:py-20">
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Publication Ethics
            </h2>
            <article className="prose prose-invert mt-6">
              <p>
                The ICAITech follows the highest standards of publication ethics
                and takes all possible procedures against any publication
                misconduct. This Conference does not accept any type of
                plagiarism, which means that any author replicating a
                significant part of another’s work without acknowledging him/her
                or passing another’s work off as his/her own are not tolerated
                and not published. ICAITech reserves the right to use plagiarism
                detecting software to screen submitted papers at all times.
              </p>
              <p>
                All authors submitting their works to the ICAITech Conference
                for publication as original works confirm that the submitted
                papers are their own contributions and have not been copied in
                whole or in part from other works. Each submission is
                anonymously reviewed by an average of three independent
                reviewers, to ensure the final high standard and quality of each
                accepted submission.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="container pt-20">
        <h2 className="text-center text-3xl font-semibold md:text-5xl">
          Supported By
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-10">
          <Image
            src="/assets/logo-unsri.png"
            alt=""
            width="200"
            height="200"
            className="h-28 w-auto"
          />
          <Image
            src="/assets/IEEEIS.jpg"
            alt=""
            width="200"
            height="200"
            className="h-28 w-auto"
          />
          <Image
            src="/assets/Logo isysrg-01.png"
            alt=""
            width="200"
            height="200"
            className="h-28 w-auto"
          />
          <Image
            src="/assets/logo_comnets-black-01.png"
            alt=""
            width="200"
            height="200"
            className="h-28 w-auto"
          />

        </div>
      </section>
      <section className="container pt-20">
        <h2 className="text-center text-3xl font-semibold md:text-5xl">
          Location
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d127500.96976936757!2d104.6004016!3d-2.9849001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75ed9f44e9c5%3A0x30db735107f3611d!2sFasilkom%20Unsri%20Bukit%20Besar!5e0!3m2!1sen!2sid!4v1741258655078!5m2!1sen!2sid"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="mt-6 w-full"
        ></iframe>
      </section>

    </>
  )
}
