import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import Markdown from "markdown-to-jsx"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import CastFigure from "@/components/cast-figure"
import Countdown2 from "@/components/countdown2"
import GallerySlideshow from "@/components/gallery-slideshow"
import Header from "@/components/layout/header"

import { importantDate } from "../../contents/important-date"

export default function Page() {
  return (
    <>
      <header className="relative flex flex-col items-center justify-center overflow-hidden bg-black">
        {/* IMAGE BACKGROUND */}
        <Image
          src="/assets/amp.jpg"
          alt="Header Background"
          fill
          priority
          className="scale-105 object-cover"
        />

        {/* DARK CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-sky-800/60 to-sky-600/80" />

        {/* HEADER NAV */}
        <div className="relative z-50 w-full">
          <Header />
        </div>

        <div className="relative z-10 container flex flex-col items-center gap-4 py-20 text-center xl:gap-5 2xl:gap-6 2xl:py-24">
          <div>
            <h1 className="text-5xl font-medium tracking-tight text-white drop-shadow-lg 2xl:text-7xl">
              ICAITech
            </h1>

            <p className="w-full max-w-xl text-base leading-relaxed font-light text-white/90 2xl:text-2xl">
              The 2nd International Conference on Artificial Intelligence and
              Technological Solutions
            </p>
          </div>

          <div className="text-md rounded-full border-white bg-white/20 px-6 font-semibold text-sky-200/90 italic 2xl:text-lg">
            in conjunction with
          </div>

          <div>
            <h2 className="text-5xl font-medium tracking-tight text-white drop-shadow-lg 2xl:text-7xl">
              AWIST
            </h2>

            <p className="w-full max-w-xl text-base leading-relaxed font-light text-white/90 2xl:text-2xl">
              The 14th ASEAN Workshop on Information Science and Technology 2026
            </p>
          </div>

          <div className="h-0.5 w-full max-w-2xl rounded-full bg-white/50" />

          <p className="max-w-2xl text-sm font-semibold text-white italic md:text-base xl:text-lg 2xl:text-xl">
            Artificial Intelligence-Driven Innovations and Partnerships for
            Health, Clean Water, and Sustainable Development
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 border-2 border-white/50 p-6 text-white md:flex-row">
            <p className="flex flex-col font-mono">
              <span className="text-3xl/5 font-semibold md:text-4xl/6">
                17—18
              </span>
              <span className="text-base font-light tracking-widest md:text-lg">
                NOV 2026
              </span>
            </p>
            <div className="h-0.5 w-full rounded-full bg-white/50 md:h-14 md:w-0.5" />
            <Countdown2 />
          </div>

          <div className="mt-10 flex w-full flex-col items-center gap-4 md:w-fit md:flex-row">
            <Button
              asChild
              size="lg"
              className="w-full bg-white text-black hover:bg-white/90 md:w-fit"
            >
              <Link href="https://edas.info/N34962">Register</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white text-white md:w-fit"
            >
              <Link href="/important-date">View Schedule</Link>
            </Button>
          </div>

          {/* <Link href="#about" className="mt-16 animate-bounce">
            <CircleChevronDown size={42} className="text-white/80" />
          </Link> */}
        </div>
      </header>

      {/* <section
        id="about"
        className="flex flex-col gap-0 md:container md:gap-10 md:pt-20"
      > */}
      <section id="about" className="pt-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-20">
          {/* isi konten about di sini */}
          <div className="grid grid-cols-3 overflow-hidden xl:rounded-lg">
            <div className="relative h-80">
              <Image
                src="/assets/innovation.jpg"
                alt=""
                width={150}
                height={150}
                className="size-full object-cover brightness-50"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-linear-to-tr from-[#4C9F38] to-transparent to-70%" />
              <Image
                src="/assets/sdgs/03c.png"
                alt="SDG 3"
                width={150}
                height={150}
                className="absolute inset-x-0 bottom-0 mx-auto w-full bg-white object-contain md:inset-x-auto md:bottom-6 md:left-6 md:size-28"
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
              <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-linear-to-tr from-[#26BDE2] to-transparent to-70%" />

              <Image
                src="/assets/sdgs/06c.png"
                alt="SDG 6"
                width={150}
                height={150}
                className="absolute inset-x-0 bottom-0 mx-auto w-full bg-white object-contain md:inset-x-auto md:bottom-6 md:left-6 md:size-28"
              />
            </div>
            <div className="relative h-80">
              <Image
                src="/assets/jabat.jpg"
                alt=""
                width={150}
                height={150}
                className="size-full object-cover brightness-50"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-linear-to-tr from-[#19486A] to-transparent to-70%" />

              <Image
                src="/assets/sdgs/17c.png"
                alt="SDG 17"
                width={150}
                height={150}
                className="absolute inset-x-0 bottom-0 mx-auto w-full bg-white object-contain md:inset-x-auto md:bottom-6 md:left-6 md:size-28"
              />
            </div>
          </div>
          {/* Main Content */}
          <div className="bg-slate-50 p-8 md:rounded-r-lg md:border-l-2 md:border-sky-500 md:p-12">
            <h2 className="pb-8 text-3xl font-medium tracking-tight text-black md:text-4xl">
              Call for Papers
            </h2>
            <div className="prose prose-lg max-w-full space-y-6">
              <p className="text-slate-800">
                The{" "}
                <strong className="font-semibold text-black">
                  International Conference on Artificial Intelligence and
                  Technological Solutions (ICAITech)
                </strong>
                , organized by the Faculty of Computer Science at Universitas
                Sriwijaya, Indonesia, aims to advance{" "}
                <strong className="font-semibold text-black">
                  Sustainable Development Goals (SDGs) 3, 6 and 17
                </strong>
                , focusing on Good Health, Well-Being, Clean Water and
                Sanitation, Partnerships For The Goals.
              </p>
              <p className="text-slate-800">
                The conference will take place on{" "}
                <strong className="font-semibold text-black">
                  November, 2026
                </strong>
                , at the{" "}
                <strong className="font-semibold text-black">
                  The Excelton Hotel Palembang, Indonesia
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
          <div className="grid gap-6 md:grid-cols-2">
            {/* Box Kiri */}
            <div className="border border-sky-500 bg-sky-50 p-8 md:rounded-lg md:p-10">
              <div className="prose prose-lg space-y-6">
                <p className="text-slate-700">
                  The event will be held in{" "}
                  <strong className="font-semibold text-black">
                    conjunction
                  </strong>{" "}
                  with the{" "}
                  <strong className="font-semibold text-black">
                    National Annual Research Seminar (ARS) 2026
                  </strong>
                  , further enriching the academic exchange.
                </p>

                <Button
                  asChild
                  size="lg"
                  variant="link"
                  className="px-0 text-base font-semibold text-sky-500"
                >
                  <Link href="https://seminar.ilkom.unsri.ac.id">
                    Submit to ARS 2026 <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Box Kanan */}
            <div className="border border-sky-500 bg-sky-50 p-8 md:rounded-lg md:p-10">
              <div className="prose prose-lg space-y-6">
                <p className="text-slate-700">
                  The event will be held in{" "}
                  <strong className="font-semibold text-black">
                    conjunction
                  </strong>{" "}
                  with the{" "}
                  <strong className="font-semibold text-black">
                    14th Asean Workshop on Information Science and Technology
                    (AWIST) 2026
                  </strong>
                  , further enriching the academic exchange.
                </p>

                <Button
                  asChild
                  size="lg"
                  variant="link"
                  className="px-0 text-base font-semibold text-sky-500"
                >
                  <Link href="">
                    Submit to AWIST 2026 <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
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
              <p className="prose prose-lg text-slate-700">
                The event will serve as a global platform for researchers,
                practitioners, and policymakers to discuss the role of
                artificial intelligence and related technologies in improving
                health outcomes and water management practices. Participants
                will explore how AI can contribute to achieving the UN&apos;s
                SDG 3 (Good Health and Well-Being) SDG 6 (Clean Water and
                Sanitation) and SDG 17 (Partnerships For The Goals).
              </p>
            </div>

            {/* Key Topics */}
            <div className="space-y-4 bg-white p-8 md:p-10">
              <div className="space-y-2">
                <div className="h-1 w-16 bg-sky-500"></div>
                <h3 className="text-xl font-semibold text-black">Key Topics</h3>
              </div>
              <p className="prose prose-lg leading-relaxed text-slate-700">
                Key topics include{" "}
                <strong className="font-semibold text-black">
                  AI in healthcare, predictive analytics for disease prevention,
                  AI-driven solutions for water purification and distribution,
                  and sustainable technological innovations
                </strong>
                . The conference will feature keynote speeches, panel
                discussions, and presentations of cutting-edge research,
                offering valuable networking opportunities for professionals
                committed to leveraging AI for societal benefit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* </section> */}

      {/* Previous ICAITech */}
      <section className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-black md:text-5xl">
            Previous ICAITech
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-sky-500"></div>
        </div>

        {/* Grid 3 kolom */}
        <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          {/* Kolom 1 */}
          <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Link
              href="/home-2025"
              className="text-lg font-semibold text-sky-600 hover:text-sky-800 hover:underline"
            >
              ICAITech 2025
            </Link>
            <p className="mt-2 text-sm text-slate-500">Official Website</p>
          </div>

          {/* Kolom 2 */}
          <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <p className="text-lg font-medium text-slate-700">
              November 20-21, 2025
            </p>
            <span className="mt-2 rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-600">
              Event Date
            </span>
          </div>

          {/* Kolom 3 */}
          <div className="flex flex-col items-center gap-2 rounded-xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Link
              // https://ieeexplore.ieee.org/Xplore/home.jsp
              href="https://ieeexplore.ieee.org/xpl/conhome/11387033/proceeding"
              className="text-lg font-semibold text-sky-600 hover:text-sky-800 hover:underline"
            >
              ICAITech2025 IEEE Xplore
            </Link>
            <p className="mt-2 text-sm text-slate-500">Research Papers</p>
          </div>
        </div>
      </section>

      <section
        id="ImportantDate"
        className="flex flex-col items-center gap-12 pt-20 md:container md:gap-16"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-black md:text-5xl">
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
                        : "text-slate-900"
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
                    item.name === "Conference" ? "bg-slate-700" : "bg-slate-300"
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

      {/* Keynote-speakers */}
      <section
        id="keynote-speakers"
        className="container flex flex-col items-center pt-20"
      >
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-black md:text-5xl">
            Keynote Speakers
          </h2>
          <div className="mx-auto h-1 w-24 bg-sky-500"></div>
        </div>
        <div className="prose prose-lg mt-4 text-center">
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
              name: "Van-Nam, Huynh",
              title: "Confirmed",
              description: "Computer Science dari JAIST Japan",
              image: {
                src: "/assets/huynh1-01.jpg",
                alt: "",
              },
              linkedIn:
                "https://www.linkedin.com/in/van-nam-huynh-3589b9a/?originalSubdomain=jp",
              scopus:
                "https://www.scopus.com/authid/detail.uri?authorId=7003274638",
            }}
          />
          <CastFigure
            cast={{
              name: "Shi-Jinn Horng",
              title: "Confirmed",
              description:
                "National Taiwan University of Science and Technology, Department of Computer Science and Information Engineering",
              image: {
                src: "/assets/profshi-jin.jpg",
                alt: "",
              },
              linkedIn: "",
              scopus:
                "https://www.scopus.com/authid/detail.uri?authorId=35585485600",
            }}
          />
          <CastFigure
            cast={{
              name: "Bayu Adhi Tama",
              title: "Confirmed",
              description: "University of Maryland Baltimore County, USA",
              image: {
                src: "/assets/bat.jpeg",
                alt: "",
              },
              linkedIn: "",
              scopus:
                "https://www.scopus.com/authid/detail.uri?authorId=55847313400",
            }}
          />
        </div>
      </section>

      {/* Grafik Paper Accepted */}
      {/* <section className="mt-20 grid divide-y border-y border-sky-500 md:container md:grid-flow-col md:grid-cols-2 md:gap-8 md:border-0">
        <div className="group relative overflow-hidden border-sky-500 bg-sky-50 p-6 md:col-span-2 md:rounded-lg md:border md:p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-600 md:text-lg">
                Total Paper Accepted
              </h3>
              <div className="flex size-12 items-center justify-center rounded-full bg-sky-100">
                <CheckCircle2 className="size-6 text-sky-600" />
              </div>
            </div>
            <div className="hidden h-px w-full bg-slate-300 md:block"></div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-6xl font-bold text-black md:text-7xl">67</p>
                <p className="text-sm text-slate-500">papers approved</p>
              </div>
              <div>
                <Button
                  asChild
                  size="lg"
                  variant="link"
                  className="h-auto px-0 text-base font-semibold text-sky-500"
                >
                  <Link href="/paper-accepted">
                    View details <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative overflow-hidden border-sky-500 bg-sky-50 p-6 md:rounded-lg md:border md:p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-600 md:text-lg">
                Total Submit
              </h3>
              <div className="flex size-12 items-center justify-center rounded-full bg-sky-100">
                <FileText className="size-6 text-sky-600" />
              </div>
            </div>
            <div className="hidden h-px w-full bg-slate-300 md:block"></div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-6xl font-bold text-black md:text-7xl">129</p>
                <p className="text-sm text-slate-500">papers received</p>
              </div>
              <div>
                <Button
                  asChild
                  size="lg"
                  variant="link"
                  className="h-auto px-0 text-base font-semibold text-sky-500"
                >
                  <Link href="#">
                    View details <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden border-sky-500 bg-sky-50 p-6 md:rounded-lg md:border md:p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-600 md:text-lg">
                Total reviewers
              </h3>
              <div className="flex size-12 items-center justify-center rounded-full bg-sky-100">
                <User className="size-6 text-sky-600" />
              </div>
            </div>
            <div className="hidden h-px w-full bg-slate-300 md:block"></div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-6xl font-bold text-black md:text-7xl">118</p>
                <p className="text-sm text-slate-500">reviewers</p>
              </div>
              <div>
                <Button
                  asChild
                  size="lg"
                  variant="link"
                  className="h-auto px-0 text-base font-semibold text-sky-500"
                >
                  <Link href="#">
                    View details <ArrowRightIcon />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <PieChartInfo />
      </section> */}

      {/* <section className="pt-20">
        <div className="relative right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] w-screen overflow-hidden bg-black bg-[url('/assets/ap.png')] bg-cover bg-center">
          <div className="bg-black/85">
            <div className="mx-auto max-w-7xl px-10 py-14 md:px-20 md:py-24">
              <div className="max-w-4xl md:max-w-5xl">
                <h2 className="text-2xl font-semibold text-white md:text-4xl">
                  Publication Ethics
                </h2>

                <div className="mt-6 text-sm leading-relaxed text-white/85 md:text-base">
                  <p className="mb-4">
                    The ICAITech follows the highest standards of publication
                    ethics and takes all possible procedures against any
                    publication misconduct. This Conference does not accept any
                    type of plagiarism, which means that any author replicating
                    a significant part of another’s work without acknowledging
                    him/her or passing another’s work off as his/her own are not
                    tolerated and not published. ICAITech reserves the right to
                    use plagiarism detecting software to screen submitted papers
                    at all times.
                  </p>

                  <p>
                    All authors submitting their works to the ICAITech
                    Conference for publication as original works confirm that
                    the submitted papers are their own contributions and have
                    not been copied in whole or in part from other works. Each
                    submission is anonymously reviewed by an average of three
                    independent reviewers, to ensure the final high standard and
                    quality of each accepted submission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="px-2 pt-20 md:container">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-medium tracking-tight text-black md:text-5xl">
            Gallery
          </h2>
          <div className="mx-auto h-1 w-24 bg-sky-500"></div>
        </div>
        <GallerySlideshow />
        <div className="mt-8 text-center">
          <Button asChild size="lg" variant="default">
            <Link href="/gallery">
              View Full Photos <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </section>

      <section className="pt-20 md:px-4">
        {/* Title tetap container */}
        <div className="mx-auto md:container">
          <h2 className="text-center text-2xl font-medium md:text-3xl">
            Technical Co-Sponsorship
          </h2>
        </div>

        {/* Grid logo full width */}
        <div className="relative mt-6">
          <div className="flex flex-wrap justify-center">
            <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition md:basis-1/6">
              <Image
                src="/assets/IEEEIS.jpg"
                alt=""
                width={300}
                height={300}
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 md:px-4">
        {/* Title tetap container */}
        <div className="mx-auto md:container">
          <h2 className="text-center text-2xl font-medium md:text-3xl">
            Organized By
          </h2>
        </div>

        {/* Grid logo full width */}
        <div className="relative container mt-6">
          <div className="flex flex-wrap justify-center">
            {/* <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition md:basis-1/5">
              <Image
                src="/assets/organizers/ieeeis.jpg"
                alt=""
                width={200}
                height={200}
                className="h-full object-contain"
              />
            </div> */}

            <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition md:basis-1/5">
              <Image
                src="/assets/organizers/unsri.png"
                alt=""
                width={200}
                height={200}
                className="h-full object-contain"
              />
            </div>

            <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition md:basis-1/5">
              <Image
                src="/assets/organizers/jaist.jpeg"
                alt=""
                width={200}
                height={200}
                className="h-full object-contain"
              />
            </div>

            <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition md:basis-1/5">
              <Image
                src="/assets/organizers/ukm.webp"
                alt=""
                width={200}
                height={200}
                className="h-full object-contain"
              />
            </div>

            <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition md:basis-1/5">
              <Image
                src="/assets/organizers/unikom.png"
                alt=""
                width={200}
                height={200}
                className="h-full object-contain"
              />
            </div>

            <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition md:basis-1/5">
              <Image
                src="/assets/organizers/umt.png"
                alt=""
                width={200}
                height={200}
                className="h-full object-contain"
              />
            </div>

            <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition md:basis-1/5">
              <Image
                src="/assets/organizers/fasilkom.png"
                alt=""
                width={200}
                height={200}
                className="h-full object-contain"
              />
            </div>

            <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition md:basis-1/5">
              <Image
                src="/assets/organizers/aimed.png"
                alt=""
                width={200}
                height={200}
                className="h-full object-contain"
              />
            </div>

            <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition md:basis-1/5">
              <Image
                src="/assets/organizers/comnets.png"
                alt=""
                width={200}
                height={200}
                className="h-full object-contain"
              />
            </div>

            <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition md:basis-1/5">
              <Image
                src="/assets/organizers/ris.png"
                alt=""
                width={200}
                height={200}
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20 md:px-4">
        {/* Title tetap container */}
        <div className="mx-auto md:container">
          <h2 className="text-center text-2xl font-medium md:text-3xl">
            Sponsored By
          </h2>
        </div>

        {/* Grid logo full width */}
        <div className="relative mt-6">
          <div className="flex flex-wrap justify-center">
            <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition md:basis-1/6">
              <Image
                src="/assets/sponsors/equity.png"
                alt=""
                width={300}
                height={300}
                className="h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pt-20">
        <div className="mx-auto md:container">
          <h2 className="text-center text-2xl font-medium md:text-4xl">
            Location
          </h2>
        </div>

        <div className="relative right-1/2 left-1/2 mt-6 -mr-[50vw] -ml-[50vw] w-screen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.4568081792786!2d104.72817007614384!3d-2.970662839789475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75bf5ff64fdd%3A0x8f753aff329a68c8!2sThe%20Excelton%20Hotel%20Palembang!5e0!3m2!1sen!2sid!4v1770294238226!5m2!1sen!2sid"
            className="h-[450px] w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  )
}
