import Image from "next/image"
import Link from "next/link"
import {
  ArrowRightIcon,
  CheckCircle2,
  CircleChevronDown,
  FileText,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import Countdown from "@/components/countdown"
import Header from "@/components/layout/header"
import PieChartInfo from "@/components/pie-chart"

export default function Page() {
  return (
    <>
      {/* <header className="relative flex h-[max(60rem,100dvh)] items-center justify-center bg-black bg-[url('/assets/header-mp4.mp4')] bg-cover">
        <div className="absolute top-0 z-20 w-full">
          <Header />
        </div> */}
      <header className="relative flex h-[max(60rem,100dvh)] items-center justify-center overflow-hidden bg-black">
        {/* VIDEO BACKGROUND */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/header-mp4.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/10" />

        {/* <div className="absolute bottom-0 h-full w-full bg-linear-to-t from-sky-900/90 to-green-900/60" /> */}

        {/* HEADER NAV */}
        <div className="absolute top-0 z-20 w-full">
          <Header />
        </div>

        <div className="z-10 container mt-[5rem] flex flex-col items-center">
          <h1 className="text-center text-6xl font-bold text-white md:text-8xl">
            ICAITech
          </h1>
          <div className="animate-float rounded bg-white/20 px-3 py-1 text-lg font-semibold text-white capitalize backdrop-blur-sm md:py-2 md:text-2xl">
            <p>In conjunction with</p>
          </div>

          {/* <p className="mt-1 text-center text-sm font-medium text-white md:text-lg">
            The 14th Asean Workshop on Information Science and Technology 2026
          </p> */}
          <p className="mt-1 text-center text-lg font-medium text-white md:text-3xl">
            The 14th Asean Workshop on Information Science and Technology 2026
          </p>

          <div className="animate-float mt-3 rounded-md bg-white/20 px-4 py-1 text-lg font-semibold text-white uppercase backdrop-blur-sm md:py-2 md:text-4xl">
            <p>November, 2026</p>
          </div>

          <p className="mt-4 max-w-prose text-center text-white md:text-xl">
            The 2nd International Conference on Artificial Intelligence and
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

        {/* <div className="absolute bottom-0 h-full w-full bg-linear-to-t from-sky-900/90 to-green-900/60" /> */}
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
              src="/assets/innovation.jpg"
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
                November, 2026
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
                National Annual Research Seminar (ARS) 2026
              </strong>
              , further enriching the academic exchange. Click here to submit
              your works in ARS 2026.
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
      {/* <section
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
      </section> */}

      {/* <section
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
      </section> */}

      <section className="mt-20 grid divide-y border-y border-sky-500 md:container md:grid-flow-col md:grid-cols-2 md:gap-8 md:border-0">
        <div className="group relative overflow-hidden border-sky-500 bg-sky-50 p-6 md:col-span-2 md:rounded-lg md:border md:p-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-600 md:text-lg">
                Total Paper Accepted
              </h3>
              <div className="flex size-12 items-center justify-center rounded-full bg-sky-100">
                <CheckCircle2 className="size-6 text-sky-600" />
              </div>
            </div>
            <div className="hidden h-px w-full bg-gray-300 md:block"></div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-6xl font-bold text-black md:text-7xl">67</p>
                <p className="text-sm text-gray-500">papers approved</p>
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
              <h3 className="text-sm font-semibold text-gray-600 md:text-lg">
                Total Submit
              </h3>
              <div className="flex size-12 items-center justify-center rounded-full bg-sky-100">
                <FileText className="size-6 text-sky-600" />
              </div>
            </div>
            <div className="hidden h-px w-full bg-gray-300 md:block"></div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-6xl font-bold text-black md:text-7xl">129</p>
                <p className="text-sm text-gray-500">papers received</p>
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
              <h3 className="text-sm font-semibold text-gray-600 md:text-lg">
                Total reviewers
              </h3>
              <div className="flex size-12 items-center justify-center rounded-full bg-sky-100">
                <User className="size-6 text-sky-600" />
              </div>
            </div>
            <div className="hidden h-px w-full bg-gray-300 md:block"></div>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-6xl font-bold text-black md:text-7xl">118</p>
                <p className="text-sm text-gray-500">reviewers</p>
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
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black md:text-6xl">
            Gallery
          </h2>
          <div className="mx-auto h-1 w-24 bg-sky-500"></div>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            "DSC02885.webp",
            "DSC02900.webp",
            "DSC02913.webp",
            "DSC03047.webp",
            "DSC03065.webp",
            "IMG_4612.webp",
            "DSC03076.webp",
            "IMG_4690.webp",
          ].map((image, index) => (
            <div
              key={index}
              className="bg-muted relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={`/assets/gallery/${image}`}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild size="lg" variant="default">
            <Link href="/gallery">
              View Full Photos <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      </section>

      <section className="pt-20 md:container">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          Organized By
        </h2>
        <div className="mt-6 grid grid-cols-1 items-center justify-items-center overflow-hidden border-y md:grid-cols-7 md:rounded-lg md:border">
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
              src="/assets/logo-aimed-01.jpg"
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
          <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/logo-logo-icaitech-10.png"
              alt=""
              width="200"
              height="200"
              className="h-full object-contain"
            />
          </div>
          <div className="hover:bg-muted flex h-32 w-full items-center justify-center border p-6 transition">
            <Image
              src="/assets/EQUITY.png"
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
