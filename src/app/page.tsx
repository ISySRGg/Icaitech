import Image from "next/image"
import Link from "next/link"
import { CircleChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import CastFigure from "@/components/cast-figure"
import Header from "@/components/layout/header"

export default function Page() {
  return (
    <>
      <header className="relative flex h-dvh items-center justify-center bg-black bg-[url('/assets/header.jpg')] bg-cover">
        <div className="absolute top-0 w-full">
          <Header />
        </div>

        <div className="container z-10 flex flex-col items-center">
          <h1 className="text-center text-5xl font-bold text-white md:text-8xl">
            ICAITech
          </h1>
          <div className="rounded-md bg-white px-4 py-2 text-xl font-semibold uppercase text-black md:text-4xl">
            <p>November 20-21, 2025</p>
          </div>
          <p className="mt-4 max-w-prose text-center text-white md:text-xl">
            The 1st International Conference on Artificial Intelligence
            Technology For Good Health, Well-Being, and Sustainable Water
            Management Towards Sustainable Development Goals 3 and 6
          </p>
          <div className="mt-10 flex gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="register">Register</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="schedule">View Schedule</Link>
            </Button>
          </div>
          <Link href="#about" className="mt-20 animate-pulse">
            <CircleChevronDown size={42} className="text-white" />
          </Link>
        </div>

        <div className="absolute bottom-0 h-[80%] w-full bg-gradient-to-t from-black/90 to-transparent" />
      </header>
      <section
        id="about"
        className="container flex flex-col gap-4 pt-20 md:gap-8"
      >
        <h2 className="text-3xl font-semibold md:text-5xl">About Us</h2>
        <article className="flex flex-col items-center gap-10 md:flex-row">
          <div className="flex flex-none flex-row gap-2 md:gap-4">
            <Image
              src="/assets/sdg-3.png"
              alt="SDG 3"
              width={240}
              height={240}
            />
            <Image
              src="/assets/sdg-6.png"
              alt="SDG 6"
              width={240}
              height={240}
            />
          </div>
          <p className="prose">
            The International Conference on Artificial Technology (ICAITech),
            organized by the Faculty of Computer Science at Universitas
            Sriwijaya, Indonesia, aims to advance Sustainable Development Goals
            (SDGs) 3 and 6, focusing on Good Health, Well-Being, and Sustainable
            Water Management. The conference will take place on November 20–21,
            2025, at the Santika Premiere Hotel in Palembang, Indonesia, and
            will be held in a hybrid format, offering both in-person and virtual
            participation.
          </p>
        </article>

        <div className="flex justify-start overflow-hidden rounded-lg bg-black bg-[url('/assets/water.jpeg')] bg-cover">
          <article className="prose bg-black/80 px-14 py-20 text-white">
            <p>
              The event will serve as a global platform for researchers,
              practitioners, and policymakers to discuss the role of artificial
              intelligence and related technologies in improving health outcomes
              and water management practices. Participants will explore how AI
              can contribute to achieving the UN’s SDG 3 (Good Health and
              Well-Being) and SDG 6 (Clean Water and Sanitation).
            </p>
          </article>
        </div>

        <div className="flex justify-end overflow-hidden rounded-lg bg-black bg-[url('/assets/earth.png')] bg-cover">
          <article className="prose bg-black/80 px-14 py-20 text-white">
            <p>
              Key topics include AI in healthcare, predictive analytics for
              disease prevention, AI-driven solutions for water purification and
              distribution, and sustainable technological innovations. The
              conference will feature keynote speeches, panel discussions, and
              presentations of cutting-edge research, offering valuable
              networking opportunities for professionals committed to leveraging
              AI for societal benefit.
            </p>
          </article>
        </div>
      </section>
      <section
        id="keynote-speakers"
        className="container flex flex-col items-center pt-20"
      >
        <h2 className="text-center text-3xl font-semibold md:text-5xl">
          Keynote Speakers
        </h2>
        <p className="prose mt-4 text-center">
          Our passionate and dedicated team brings together a diverse range of
          skills and expertise to deliver exceptional results. From creative
          visionaries to meticulous strategists, we work seamlessly together to
          meet and exceed our client&apos;s expectations.
        </p>
        <div className="mt-6 grid w-full grid-cols-3 gap-4">
          <CastFigure
            cast={{
              name: "Prof. Dr. Eko Supriyanto",
              title: "Confirmed",
              description:
                "Medical Imaging, Medical Informatics, Medical Electronics, Healthcare Management.",
              image: {
                src: "/assets/cast1.png",
                alt: "",
              },
              linkedIn: "https://my.linkedin.com/in/eko-supriyanto-88a38377",
            }}
          />
          <CastFigure
            cast={{
              name: "Hongo Kenta",
              title: "In Confirmation",
              description:
                "Materials Informatics, Data Science, Computer Simulations.",
              image: {
                src: "/assets/cast2.png",
                alt: "",
              },
              linkedIn:
                "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEj7CHfWizU3AAAAZJQb8wItPjeWUEkAEKfrDKB9u8x_Whae-Z5rncMQNBzUbe0wLMexXjiyIVx_uQVX_OMDoJV84l4TsK9_yk15NELlMCZlK-ze5nmrSLKalK12JZ81iRtrEY=&original_referer=&sessionRedirect=https%3A%2F%2Fjp.linkedin.com%2Fin%2Fkenta-hongo-38008667",
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
            }}
          />
        </div>
      </section>
      <section className="container pt-20">
        <div className="flex justify-end overflow-hidden rounded-lg bg-black bg-[url('/assets/ampera.png')] bg-cover">
          <div className="w-full bg-black/70 px-14 py-20">
            <h2 className="text-3xl font-semibold text-white md:text-5xl">
              Publication Ethics
            </h2>
            <article className="prose mt-6 text-white">
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
          Location
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7969.416801261058!2d104.719768!3d-2.90011!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b73bd7cdcebb7%3A0x65ab9bf769278edf!2sHotel%20Santika%20Premiere%20Bandara%20-%20Palembang!5e0!3m2!1sen!2sid!4v1728241642496!5m2!1sen!2sid"
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
