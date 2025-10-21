import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  CheckCircle2,
  CircleChevronDown,
  FileText,
} from "lucide-react"
import Markdown from "markdown-to-jsx"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import CastFigure from "@/components/cast-figure"
import Countdown from "@/components/countdown"
import Header from "@/components/layout/header"
import PieChartInfo from "@/components/pie-chart"

import { importantDate } from "../../contents/important-date1"

export default function Page() {
  return (
    <>
      <header className="relative flex h-[max(60rem,100dvh)] items-center justify-center bg-black bg-[url('/assets/header1.jpg')] bg-cover">
        <div className="absolute top-0 z-20 w-full">
          <Header />
        </div>

        <div className="z-10 container mt-[5rem] flex flex-col items-center">
          <h1 className="text-center text-6xl font-bold text-white md:text-8xl">
            ICAITech
          </h1>
          <div className="rounded-md bg-white/90 px-4 py-0.5 text-lg font-semibold text-black uppercase md:py-2 md:text-4xl">
            <p>November 20—21, 2025</p>
          </div>
          <p className="mt-4 max-w-prose text-center text-white md:text-xl">
            The 1st International Conference on Artificial Intelligence and
            Technological Solutions For Good Health, Well-Being, Clean Water and
            Sanitation, Industry, Innovation and Infrastructure Management
            Towards Sustainable Development Goals 3, 6 and 9
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

        <div className="absolute bottom-0 h-full w-full bg-linear-to-t from-sky-900/90 to-green-900/60" />
      </header>
      <section
        id="about"
        className="flex flex-col gap-0 md:container md:gap-10 md:pt-20"
      >
        {/* <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-black md:text-6xl">
            About Us
          </h2>
          <div className="mx-auto h-1 w-24 bg-black"></div>
        </div>{" "} */}
        <div className="grid grid-cols-3 overflow-hidden md:rounded-lg">
          <div className="relative h-80">
            <Image
              src="/assets/earth.png"
              alt=""
              width={150}
              height={150}
              className="size-full object-cover brightness-50"
            />
            <Image
              src="/assets/sdg-3.png"
              alt="SDG 3"
              width={150}
              height={150}
              className="absolute inset-x-0 bottom-0 mx-auto w-full object-contain md:inset-x-auto md:bottom-6 md:left-6 md:size-40"
            />
          </div>
          <div className="relative h-80">
            <Image
              src="/assets/water.jpeg"
              alt=""
              width={150}
              height={150}
              className="size-full object-cover brightness-50"
            />
            <Image
              src="/assets/sdg-6.png"
              alt="SDG 6"
              width={150}
              height={150}
              className="absolute inset-x-0 bottom-0 mx-auto w-full object-contain md:inset-x-auto md:bottom-6 md:left-6 md:size-40"
            />
          </div>
          <div className="relative h-80">
            <Image
              src="/assets/industri1.jpg"
              alt=""
              width={150}
              height={150}
              className="size-full object-cover brightness-50"
            />
            <Image
              src="/assets/sdg-9.png"
              alt="SDG 9"
              width={150}
              height={150}
              className="absolute inset-x-0 bottom-0 mx-auto w-full object-contain md:inset-x-auto md:bottom-6 md:left-6 md:size-40"
            />
          </div>
        </div>
        {/* Main Content */}
        <div className="bg-gray-50 p-8 md:rounded-r-lg md:border-l-2 md:border-sky-500 md:p-12">
          <div className="max-w-4xl space-y-6">
            <p className="text-xl leading-relaxed text-gray-800 md:text-3xl">
              The{" "}
              <strong className="font-semibold text-black">
                International Conference on Artificial Intelligence and
                Technological Solutions (ICAITech)
              </strong>
              , organized by the Faculty of Computer Science at Universitas
              Sriwijaya, Indonesia, aims to advance{" "}
              <strong className="font-semibold text-black">
                Sustainable Development Goals (SDGs) 3, 6 and 9
              </strong>
              , focusing on Good Health, Well-Being, Clean Water and Sanitation,
              Industry, Innovation and Infrastructure.
            </p>
            <p className="text-base leading-relaxed text-gray-800 md:text-lg">
              The conference will take place on{" "}
              <strong className="font-semibold text-black">
                November 20–21, 2025
              </strong>
              , at the{" "}
              <strong className="font-semibold text-black">
                Jaidan Jauhari Hall, Faculty of Computer Science, Universitas
                Sriwijaya Palembang, Indonesia
              </strong>
              , and will be held in a{" "}
              <strong className="font-semibold text-black">
                hybrid format
              </strong>
              , offering both in-person and virtual participation.
            </p>
          </div>
        </div>
        {/* Conjunction Section */}
        <div className="border border-sky-500 bg-sky-50 p-8 md:rounded-lg md:p-10">
          <div className="max-w-4xl space-y-6">
            <p className="text-base leading-relaxed text-gray-700">
              The event will be held in{" "}
              <strong className="font-semibold text-black">conjunction</strong>{" "}
              with the{" "}
              <strong className="font-semibold text-black">
                National Annual Research Seminar (ARS) 2025
              </strong>
              , further enriching the academic exchange. Click here to submit
              your works in ARS 2025.
            </p>
            <Button
              asChild
              size="lg"
              variant="link"
              className="px-0 text-base font-semibold text-sky-500"
            >
              <Link href="https://seminar.ilkom.unsri.ac.id">
                Submit to ARS 2025 <ArrowRightIcon />
              </Link>
            </Button>
          </div>
        </div>
        {/* Feature Sections */}
        <div className="grid divide-x overflow-hidden border md:grid-cols-2 md:rounded-lg">
          {/* Global Platform */}
          <div className="space-y-4 bg-white p-8 md:p-10">
            <div className="space-y-2">
              <div className="h-1 w-16 bg-sky-500"></div>
              <h3 className="text-xl font-semibold text-black">
                Global Platform
              </h3>
            </div>
            <p className="leading-relaxed text-gray-700">
              The event will serve as a global platform for researchers,
              practitioners, and policymakers to discuss the role of artificial
              intelligence and related technologies in improving health outcomes
              and water management practices. Participants will explore how AI
              can contribute to achieving the UN&apos;s SDG 3 (Good Health and
              Well-Being) SDG 6 (Clean Water and Sanitation) and SDG 9
              (Industry, Innovation and Infrastructure).
            </p>
          </div>

          {/* Key Topics */}
          <div className="space-y-4 bg-white p-8 md:p-10">
            <div className="space-y-2">
              <div className="h-1 w-16 bg-sky-500"></div>
              <h3 className="text-xl font-semibold text-black">Key Topics</h3>
            </div>
            <p className="leading-relaxed text-gray-700">
              Key topics include{" "}
              <strong className="font-semibold text-black">
                AI in healthcare, predictive analytics for disease prevention,
                AI-driven solutions for water purification and distribution, and
                sustainable technological innovations
              </strong>
              . The conference will feature keynote speeches, panel discussions,
              and presentations of cutting-edge research, offering valuable
              networking opportunities for professionals committed to leveraging
              AI for societal benefit.
            </p>
          </div>
        </div>
      </section>
      <section
        id="ImportantDate"
        className="flex flex-col items-center gap-12 pt-20 md:container md:gap-16"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-6xl">
            Important Dates
          </h2>
          <div className="mx-auto h-1 w-24 bg-sky-500"></div>
        </div>

        <div className="grid w-full divide-y overflow-hidden border-y md:grid-cols-3 md:gap-6 md:divide-y-0 md:rounded-none md:border-none">
          {importantDate.map((item, i) => (
            <div
              key={i}
              className={cn(
                "group relative overflow-hidden bg-white p-6 transition-all md:rounded-lg md:border md:p-8",
                item.name === "Conference"
                  ? "border-black bg-linear-to-br from-black to-sky-800 text-white"
                  : ""
              )}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3
                    className={cn(
                      "text-sm font-semibold md:text-lg",
                      item.name === "Conference"
                        ? "text-white"
                        : "text-gray-900"
                    )}
                  >
                    {item.name}
                  </h3>
                  {item.icon && (
                    <item.icon
                      className={cn(
                        "size-8 md:size-10",
                        item.name === "Conference"
                          ? "text-sky-300"
                          : "text-sky-600"
                      )}
                    />
                  )}
                </div>
                <div
                  className={cn(
                    "hidden h-px w-full md:block",
                    item.name === "Conference" ? "bg-gray-700" : "bg-gray-300"
                  )}
                ></div>
                <p
                  className={cn(
                    "tetx-lg font-bold md:text-2xl",
                    item.name === "Conference" ? "text-white" : "text-black"
                  )}
                >
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="keynote-speakers"
        className="container flex flex-col items-center pt-20"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-6xl">
            Keynote Speakers
          </h2>
          <div className="mx-auto h-1 w-24 bg-sky-500"></div>
        </div>
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
              scopus:
                "https://www.scopus.com/authid/detail.uri?authorId=51865098600&origin=recordpage",
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

      <section className="mt-20 grid divide-y border-y border-sky-500 md:container md:grid-flow-col md:grid-cols-2 md:gap-8 md:border-0">
        {/* Total Submitted */}
        <div className="group relative overflow-hidden border-sky-500 bg-sky-50 p-6 md:rounded-lg md:border md:p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-600 md:text-lg">
                Total Submitted
              </h3>
              <div className="flex size-12 items-center justify-center rounded-full bg-sky-100">
                <FileText className="size-6 text-sky-600" />
              </div>
            </div>
            <div className="hidden h-px w-full bg-gray-300 md:block"></div>
            <p className="text-6xl font-bold text-black md:text-6xl">0</p>
            <p className="text-sm text-gray-500">Papers received</p>
          </div>
        </div>

        {/* Total Accepted */}
        <div className="group relative overflow-hidden border-sky-500 bg-sky-50 p-6 md:rounded-lg md:border md:p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-600 md:text-lg">
                Total Accepted
              </h3>
              <div className="flex size-12 items-center justify-center rounded-full bg-sky-100">
                <CheckCircle2 className="size-6 text-sky-600" />
              </div>
            </div>
            <div className="hidden h-px w-full bg-gray-300 md:block"></div>
            <p className="text-6xl font-bold text-black md:text-6xl">0</p>
            <p className="text-sm text-gray-500">Papers approved</p>
          </div>
        </div>

        <PieChartInfo />
      </section>

      <section className="pt-20 md:container">
        <div className="flex justify-end overflow-hidden bg-black bg-[url('/assets/ap.png')] bg-cover md:rounded-lg">
          <div className="w-full bg-black/80 px-10 py-10 md:mt-0 md:px-14 md:py-20">
            <h2 className="text-2xl font-semibold text-white md:text-4xl">
              Publication Ethics
            </h2>
            <article className="prose prose-invert prose-sm md:prose-base mt-6 text-white/80">
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
      <section className="pt-20 md:container">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          Organized By
        </h2>
        <div className="mt-6 grid grid-cols-1 items-center justify-items-center overflow-hidden border-y md:grid-cols-4 md:rounded-lg md:border">
          <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logo-unsri.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>

          <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/IEEEIS.jpg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>

          <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/Logo isysrg-01.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logo_comnets-black-01.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
        </div>
      </section>
      <section className="pt-20 md:container">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          Reviewed By
        </h2>
        <div className="mt-6 grid grid-cols-2 items-center justify-items-center overflow-hidden border-y md:grid-cols-4 md:rounded-lg md:border">
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Amazon Web Services_idS5TK0MYh_0.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Amazon_Logo_0.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/att_hz_lg_lkp_rgb_pos.jpg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Bank_of_America_logo.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Block-IOWA-GOLD-ffcd00.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Broadcom Inc._idEOPC1LWp_0.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Capgemini_ida9N-7Ufo_0.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/cdnlogo.com_acentra-health.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Colorado Technical University_id4dFBPwbR_0.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/EY_idh3Sg1g92_0.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/FractalAnalytics-new-logo.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Gamechanger Media LTD_idQIsKHX8t_1.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Gen Threat Labs_idQmjbvYHM_1.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/golden-bear-logo-2020.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Google_Logo_0.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/IBM_logo.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/id8W1MOUnH_logos.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/id9IbtqO_h_1760973492289.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/idAvCJfgrX_1760974302971.jpeg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/idJwpawiLf_1760975890052.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/idLYzEiaC9_logos.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/idmi4F8-rP_1760975281707.jpeg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/idngHj1Zc__1760974008894.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/ids6bbseYL_1760975434193.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/idVkuQzc2N_1760974640828.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/idXDcdLZAl_logos.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Intel_idF_neNFIz_0.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/llu_pref_rgb.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Meta_idlf4cVSsS_0.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/PANW_Parent_Brand_Primary_Logo_RGB.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Peli BioThermal_idabG6e_BF_1.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/PrimaryLogotype-1024x219.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Rialtic_id-swH41Mg_1.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Snap Inc._idn1N9ov70_0.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/ST_Engineering_Logo.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/TDA_Seal_masthead.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/ucm-acad-h.jpg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Vanguard.svg"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Wilmington_univ_textlogo.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-24 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logos/Wordmark_stacked_Purple_Hex.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
        </div>
      </section>
      <section className="pt-20 md:container">
        <h2 className="text-center text-2xl font-bold md:text-3xl">Location</h2>
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
