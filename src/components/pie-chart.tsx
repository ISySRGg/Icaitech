"use client"

import { ChartPie } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  {
    name: "aiAndPublicHealth",
    value: 36.4,
    fill: "var(--color-aiAndPublicHealth)",
  },
  { name: "invitedSpeaker", value: 27.3, fill: "var(--color-invitedSpeaker)" },
  { name: "aiInHealthcare", value: 18.2, fill: "var(--color-aiInHealthcare)" },
  {
    name: "crossCuttingTechnologies",
    value: 9.1,
    fill: "var(--color-crossCuttingTechnologies)",
  },
  {
    name: "sustainableAiInnovations",
    value: 4.5,
    fill: "var(--color-sustainableAiInnovations)",
  },
  {
    name: "aIForWaterManagement",
    value: 4.5,
    fill: "var(--color-aIForWaterManagement)",
  },
]

const chartConfig = {
  value: {
    label: "Percentage",
  },
  aiAndPublicHealth: {
    label: "AI and Public Health",
    color: "hsl(var(--chart-1))",
  },
  invitedSpeaker: {
    label: "Invited Speaker",
    color: "hsl(var(--chart-2))",
  },
  aiInHealthcare: {
    label: "AI in Healthcare",
    color: "hsl(var(--chart-3))",
  },
  crossCuttingTechnologies: {
    label: "Cross-cutting Technologies",
    color: "hsl(var(--chart-4))",
  },
  sustainableAiInnovations: {
    label: "Sustainable AI Innovations",
    color: "hsl(var(--chart-5))",
  },
  aIForWaterManagement: {
    label: "AI for Water Management",
    color: "hsl(var(--chart-6))",
  },
} satisfies ChartConfig

export default function PieChartInfo() {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const renderLabel = (entry: any) => {
    return `${entry.value}%`
  }

  return (
    <div className="group relative overflow-hidden border-sky-500 bg-sky-50 p-6 transition-all md:row-span-2 md:rounded-lg md:border md:p-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-sm font-semibold text-gray-600 md:text-lg">
            Distribution of Papers by Trackname
          </h3>
          <div className="flex size-12 items-center justify-center rounded-full bg-sky-100">
            <ChartPie className="size-6 text-sky-600" />
          </div>
        </div>
        <div className="hidden h-px w-full bg-gray-300 md:block"></div>
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-pie-label-text]:fill-foreground mx-auto aspect-square max-h-[500px] pb-0"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              label={renderLabel}
              nameKey="name"
              animationDuration={0}
            ></Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="name" />}
              align="left"
              className="grid translate-y-2 grid-cols-2 gap-1 gap-x-4"
            />
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  )
}
