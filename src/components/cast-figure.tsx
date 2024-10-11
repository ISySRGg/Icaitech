import Image from "next/image"
import Link from "next/link"
import { Cast } from "@/types"
import { SquareArrowOutUpRight } from "lucide-react"

interface Props {
  cast: Cast
}

export default function CastFigure({ cast }: Props) {
  return (
    <figure className="group relative flex aspect-[3/4] h-[26rem] flex-col justify-end overflow-hidden rounded-lg border bg-gradient-to-b from-sky-100/25 to-green-800/10 to-60% transition duration-300 hover:border-gray-600/70">
      <div className="flex h-full flex-col items-center justify-end">
        <Image
          src={cast.image.src}
          alt={cast.image.alt}
          width={400}
          height={400}
          className="w-full object-cover"
        />
        <figcaption className="absolute -bottom-[70%] flex h-full w-full flex-col items-start bg-gradient-to-t from-gray-950/85 from-80% to-transparent p-5 text-left text-white transition-all duration-300 group-hover:bottom-0 group-hover:bg-gradient-to-t group-hover:from-sky-950/85 group-hover:from-0% group-hover:to-green-950/85 group-hover:py-10 group-hover:backdrop-blur">
          <h3 className="text-xl font-semibold">{cast.name}</h3>
          <p className="flex gap-2">
              <Link
                href={cast.linkedIn}
                className="flex flex-row items-center gap-x-1 font-semibold hover:underline"
                target="_blank"
              >
                <span>LinkedIn</span>
                <SquareArrowOutUpRight className="size-[1em]" />
              </Link>
              <Link
                href={cast.scopus}
                className="flex flex-row items-center gap-x-1 font-semibold hover:underline"
                target="_blank"
              >
                <span>Scopus</span>
                <SquareArrowOutUpRight className="size-[1em]" />
              </Link>
            </p>
          <div className="mt-6 flex h-full flex-col justify-between opacity-0 transition-all duration-300 group-hover:opacity-100">
            <p className="font-light text-gray-300">{cast.description}</p>
            
          </div>
        </figcaption>
      </div>
    </figure>
  )
}
