import type { Metadata } from "next"

import "@/styles/globals.css"

import { geistSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import Footer from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "ICAITech",
  description: "International Conference on Artificial Intelligence Technology",
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          geistSans.className,
          "flex min-h-dvh flex-col text-gray-800 antialiased"
        )}
      >
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
