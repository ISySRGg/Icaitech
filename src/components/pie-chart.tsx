'use client'

import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"
import { LabelList, Pie, PieChart } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

const chartData = [
    { status: "accepted", value: 70, fill: "var(--color-accepted)" },
    { status: "rejected", value: 10, fill: "var(--color-rejected)" },
    { status: "underReview", value: 20, fill: "var(--color-underReview)" },
]

const chartConfig = {
    value: {
        label: "Percentage",
    },
    accepted: {
        label: "Accepted",
        color: "hsl(var(--chart-1))",
    },
    rejected: {
        label: "Rejected",
        color: "hsl(var(--chart-2))",
    },
    underReview: {
        label: "Under Review",
        color: "hsl(var(--chart-3))",
    },
} satisfies ChartConfig

export default function PieChartInfo() {
    const renderLabel = (entry: any) => {
        return `${entry.value}%`
    }

    return (
        <Card className="flex flex-col gap-2 rounded max-w-xl w-full border p-8 shadow-none">
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[500px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                    <PieChart>
                        {/* <ChartTooltip content={<ChartTooltipContent hideLabel />} /> */}
                        <Pie data={chartData} dataKey="value" label={renderLabel} nameKey="status">
                            <LabelList
                                dataKey="status"
                                className="fill-background"
                                stroke="none"
                                fontSize={14}
                                formatter={(value: keyof typeof chartConfig) =>
                                    chartConfig[value]?.label
                                }
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}