'use client'

import { ChartContainer, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart"
import { Pie, PieChart } from "recharts"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

const chartData = [
    { name: 'aiAndPublicHealth', value: 36.4, fill: "var(--color-aiAndPublicHealth)" },
    { name: 'invitedSpeaker', value: 27.3, fill: "var(--color-invitedSpeaker)" },
    { name: 'aiInHealthcare', value: 18.2, fill: "var(--color-aiInHealthcare)" },
    { name: 'crossCuttingTechnologies', value: 9.1, fill: "var(--color-crossCuttingTechnologies)" },
    { name: 'sustainableAiInnovations', value: 4.5, fill: "var(--color-sustainableAiInnovations)" },
    { name: 'aIForWaterManagement', value: 4.5, fill: "var(--color-aIForWaterManagement)" },
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
        <Card className="flex flex-col gap-2 rounded max-w-xl w-full border p-2 shadow-none">
            <CardHeader className="items-center pb-0">
                <CardTitle>Distribution of Papers by Trackname</CardTitle>
                {/* <CardDescription>January - June 2024</CardDescription> */}
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[500px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                    <PieChart>
                        {/* <ChartTooltip content={<ChartTooltipContent hideLabel />} /> */}
                        <Pie data={chartData} dataKey="value" label={renderLabel} nameKey="name">
                            {/* <LabelList
                                dataKey="name"
                                className="fill-background"
                                stroke="none"
                                fontSize={14}
                                formatter={(value: keyof typeof chartConfig) =>
                                    chartConfig[value]?.label
                                }
                            /> */}
                        </Pie>
                        <ChartLegend
                            content={<ChartLegendContent nameKey="name" />}
                            align="left"
                            className="translate-y-2 flex-wrap gap-2 md:[&>*]:basis-1/4 [&>*]:justify-center"
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                {/* <div className="flex items-center gap-2 font-medium leading-none">
                    Distribution of Papers by Trackname
                </div> */}
                {/* <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div> */}
            </CardFooter>
        </Card>
    )
}