"use client"

import { ChevronDownIcon } from "lucide-react";
import { Pie, PieChart, Area, AreaChart, CartesianGrid, XAxis, Line, LineChart } from "recharts";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

// Chart 1 Lingkaran
const chartData = [
    { browser: "keluar", visitors: 45, fill: "#3366FF" },
    { browser: "gagal", visitors: 8, fill: "#F3F5F8" },
    { browser: "masuk", visitors: 23, fill: "#4FBEAB" },
]
const chartConfig = {
    keluar: {
        label: "timepesan Keluar",
        color: "hsl(var(--chart-2))",
    },
    masuk: {
        label: "timepesan Masuk",
        color: "hsl(var(--chart-1))",
    },
    gagal: {
        label: "timepesan Gagal",
        color: "hsl(var(--chart-3))",
    },
}

// Chart 2 Grafik
const chartDataPerjam = [
    { time: "00:00", timepesan: 0.62 },
    { time: "01:00", timepesan: 0.59 },
    { time: "02:00", timepesan: 0.67 },
    { time: "03:00", timepesan: 0.69 },
    { time: "04:00", timepesan: 0.6 },
    { time: "05:00", timepesan: 0.6 },
    { time: "06:00", timepesan: 0.6 },
    { time: "07:00", timepesan: 0.7 },
    { time: "08:00", timepesan: 0.73 },
    { time: "09:00", timepesan: 0.7 },
    { time: "10:00", timepesan: 0.5 },
    { time: "11:00", timepesan: 0.68 },
    { time: "12:00", timepesan: 0.65 },
    { time: "13:00", timepesan: 0.7 },
    { time: "14:00", timepesan: 0.7 },
    { time: "15:00", timepesan: 0.6 },
    { time: "16:00", timepesan: 0.71 },
    { time: "17:00", timepesan: 0.69 },
    { time: "18:00", timepesan: 0.78 },
    { time: "19:00", timepesan: 0.6 },
    { time: "20:00", timepesan: 0.6 },
    { time: "21:00", timepesan: 0.3 },
    { time: "22:00", timepesan: 0.5 },
    { time: "23:00", timepesan: 0.4 },
]
const chartConfigPerjam = {
    timepesan: {
        label: "Time Pesan",
        color: "hsl(var(--chart-2))",
    },
}

// Chart 3 Grafik
const chartDataPesan = [
    { month: "Jan", data1: 0.6, data2: 0.95 },
    { month: "Feb", data1: 0.58, data2: 0.95 },
    { month: "Mar", data1: 0.55, data2: 0.95 },
    { month: "Apr", data1: 0.52, data2: 0.95 },
    { month: "May", data1: 0.55, data2: 0.90 },
    { month: "Jun", data1: 0.58, data2: 0.92 },
    { month: "Jul", data1: 0.58, data2: 0.92 },
    { month: "Aug", data1: 0.58, data2: 0.92 },
    { month: "Sep", data1: 0.51, data2: 0.92 },
    { month: "Oct", data1: 0.51, data2: 0.88 },
    { month: "Nov", data1: 0.52, data2: 0.9 },
    { month: "Dec", data1: 0.5, data2: 0.9 },
]
const chartConfigPesan = {
    data1: {
        label: "Data Pesan 2",
        color: "hsl(var(--chart-2))",
    },
    data2: {
        label: "Data Pesan 1",
        color: "hsl(var(--chart-1))",

    },


}


const AnalitikDashboard = () => {
    return (
        <div className="bg-white dark:bg-transparent dark:border dark:border-[#444444] p-6 rounded-lg mt-8">
            <h1 className="text-[24px] font-extrabold">Analitik</h1>
            <div className="flex md:flex-row flex-col items-start gap-3 mt-6">
                <div className="md:w-2/3 w-full border border-gray-300 dark:border-[#444444] rounded-lg p-6">
                    <h3 className="text-[20px] font-bold">Ringkasan Hari Ini</h3>
                    <div className="flex items-center mt-4 gap-2 md:gap-4">
                        <div className="bg-gray-100 dark:bg-black lg:w-3/5 w-full p-3 gap-3 md:gap-6 flex items-center rounded-lg">
                            <div className="flex flex-col dark:text-white">
                                <p className="text-[12px]">Device</p>
                                <h4 className="text-[14px] font-semibold">RMX3263</h4>
                            </div>
                            <ChevronDownIcon className="w-6 h-6 ms-auto" />
                        </div>
                        <div className="bg-gray-100 dark:bg-black darl:bg-black p-3 lg:w-2/5 w-2/5 rounded-lg dark:text-white">
                            <p className="text-[12px]">Aktif Sejak</p>
                            <h4 className="text-[14px] font-semibold">29.8.2023</h4>
                        </div>
                    </div>
                    <div className="grid grid-flow-row grid-cols-3 gap-2 md:gap-0 mt-6">
                        <div className="flex flex-col">
                            <p className="text-[12px]">Pesan Keluar</p>
                            <h4 className="text-[14px] font-semibold">24</h4>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[12px]">Pesan Masuk</p>
                            <h4 className="text-[14px] font-semibold">7</h4>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[12px]">Pesan Gagal</p>
                            <h4 className="text-[14px] font-semibold">0</h4>
                        </div>
                    </div>
                </div>
                <div className="w-full border border-gray-300 dark:border-[#444444] rounded-lg p-6">
                    <h3 className="text-[20px] font-bold">Total statistik pesan </h3>
                    <div className="flex lg:flex-row flex-col gap-4 items-center">
                        <div className="w-full grid grid-flow-row grid-cols-2 mt-5 lg:mt-0 gap-4">
                            <div className="flex flex-col">
                                <p className="text-[12px]">Total pesan Keluar</p>
                                <h4 className="text-[14px] font-semibold">45</h4>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[12px]">Total pesan Gagal</p>
                                <h4 className="text-[14px] font-semibold">8</h4>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[12px]">Total pesan Masuk</p>
                                <h4 className="text-[14px] font-semibold">23</h4>
                            </div>
                        </div>
                        <div className="w-full">
                            <ChartContainer
                                config={chartConfig}
                                className="ms-auto w-full max-w-[240px]"
                            >
                                <PieChart>
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                    />
                                    <Pie
                                        data={chartData}
                                        dataKey="visitors"
                                        nameKey="browser"
                                        innerRadius={35}
                                    />
                                </PieChart>
                            </ChartContainer>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-gray-300 dark:border-[#444444] rounded-lg p-6 mt-3">
                <div className="md:flex grid grid-flow-row grid-cols-2 items-center gap-4">
                    <div className="bg-gray-100 p-3 lg:w-[13%] md:w-[20%] w-full rounded-lg dark:bg-black dark:text-white">
                        <p className="text-[12px]">Hari ini</p>
                        <h4 className="text-[14px] font-semibold">24</h4>
                    </div>
                    <div className="bg-gray-100 p-3 lg:w-[13%] md:w-[20%] w-full rounded-lg dark:bg-black dark:text-white">
                        <p className="text-[12px]">Rata-rata harian</p>
                        <h4 className="text-[14px] font-semibold">7</h4>
                    </div>
                    <div className="bg-gray-100 p-3 lg:w-[13%] md:w-[20%] w-full rounded-lg dark:bg-black dark:text-white">
                        <p className="text-[12px]">Bulan ini</p>
                        <h4 className="text-[14px] font-semibold">23</h4>
                    </div>
                    <div className="bg-gray-100 p-3 lg:w-[13%] md:w-[20%] w-full rounded-lg dark:bg-black dark:text-white">
                        <p className="text-[12px]">Rata-rata waktu</p>
                        <h4 className="text-[14px] font-semibold">00:02:42</h4>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="text-[16px] font-semibold">Grafik chart perjam</h1>
                    <div className="pt-6 w-full h-[200px] md:h-[300px]">
                        <ChartContainer config={chartConfigPerjam} className="w-full h-full">
                            <AreaChart
                                accessibilityLayer
                                data={chartDataPerjam}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />

                                <XAxis
                                    dataKey="time"
                                    tickLine={false}
                                    axisLine={false}
                                    // tickMargin={4}
                                    tickFormatter={(value) => value}
                                    // tickFormatter={(value) => value.slice(1)}
                                    className="text-[10px]"

                                />

                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent indicator="dot" hideLabel />}
                                />
                                <Area
                                    dataKey="timepesan"
                                    type="linear"
                                    fill="#3366FF40"
                                    fillOpacity={0.4}
                                    stroke="#3366FF"
                                />
                            </AreaChart>
                        </ChartContainer>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="text-[16px] font-semibold">Trend Interaksi timepesan</h1>
                    <div className="pt-6 w-full h-[200px] md:h-[300px]">
                        <ChartContainer config={chartConfigPesan} className="w-full h-full">
                            <LineChart
                                accessibilityLayer
                                data={chartDataPesan}
                                margin={{
                                    left: 12,
                                    right: 12,
                                }}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    axisLine={false}
                                    tickMargin={8}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Line
                                    dataKey="data2"
                                    type="linear"
                                    stroke="#000000"
                                    strokeWidth={2}
                                    dot={false}
                                    strokeDasharray="5 5"
                                />
                                <Line
                                    dataKey="data1"
                                    type="linear"
                                    stroke="#3366FF"
                                    strokeWidth={2}
                                    dot={false}
                                />

                            </LineChart>
                        </ChartContainer>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default AnalitikDashboard
