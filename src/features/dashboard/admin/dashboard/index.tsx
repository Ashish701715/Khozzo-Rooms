
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Chart from "./Helper/Chart"
import PieChart from "./Helper/Pie"
import PaymentChartChart from "./Helper/PaymentChart"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import { CardHeader } from "@nextui-org/react"

export default function Component() {
    return (
        /*****
         * 
         * @param@ Imports  charts 
         * 
         * ***/

        <>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between border-b-4">
                    <div>
                        <h2 className="font-total-text text-[#20AA70]">Total Properties</h2>
                        <p className="headertext mt-2">15000</p>
                    </div>
                    <img src="/svg/Group 62.svg" alt="" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between border-b-4">
                    <div>
                        <h2 className="font-total-text text-[#7152F3]">Total Tenants</h2>
                        <p className="headertext mt-2">15000</p>
                    </div>
                    <img src="/svg/lender 1.svg" alt="" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between border-b-4">
                    <div>
                        <h2 className="font-total-text text-[#0D8EE6]">Total Managers</h2>
                        <p className="headertext mt-2">15000</p>
                    </div>
                    <img src="/svg/Group 165503.svg" alt="" />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between border-b-4">
                    <div>
                        <h2 className="font-total-text text-[#FF900D]">Total Appointments</h2>
                        <p className="headertext mt-2">15000</p>
                    </div>
                    <img src="/svg/Group 2.svg" alt="" />
                </div>
            </div>


            <div className="grid grid-cols-4 gap-4 lg:grid-cols-12 rounded-[20px]">
                <Card className="flex flex-col col-span-4 lg:col-span-9 bg-white  h-[60%]">
                    <CardContent className="flex-1 pb-0 ">
                        <div className="headerCrad">
                            <span></span>
                        </div>
                        <Suspense fallback={<div>loading page...</div>}>
                            <Chart />
                        </Suspense>
                    </CardContent>
                </Card>

                <Card className="rounded-[20px] flex flex-col col-span-4 lg:col-span-3 bg-white h-[60%]">
                    <CardContent className="flex-1 p-3 font-pietext">
                        <span>Ticket Status</span>
                        <Suspense fallback={<div>loading page...</div>}>
                            <PieChart />
                        </Suspense>

                        <ul className="grid grid-cols-2 gap-2">
                            {/* Left item */}
                            <li className="flex items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <circle cx="5.59746" cy="6.39629" r="5.59746" fill="#FF900D" />
                                    </svg>
                                </span>
                                <span className="font-text">
                                    New tickets : 28
                                </span>
                            </li>

                            {/* Right item */}
                            <li className="flex items-center gap-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <circle cx="5.59746" cy="6.39629" r="5.59746" fill="#48A7FF" />
                                    </svg>
                                </span>
                                <span className="font-text">
                                    Open tickets : 28
                                </span>
                            </li>

                            {/* Centered item spanning both columns */}
                            <li className="flex items-center gap-2 justify-center col-span-2">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <circle cx="5.59746" cy="6.39629" r="5.59746" fill="#20AA70" />
                                    </svg>
                                </span>
                                <span className="font-text">
                                    Resolved tickets : 28
                                </span>
                            </li>
                        </ul>

                    </CardContent>
                </Card>
            </div>


            <div className="grid gap-4 pb-3 md:grid-cols-4 pt-3">
                <Card className="bg-[#FFF8E7]">
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm text-muted-foreground">Revenue</p>
                                    <h3 className="text-2xl font-bold">$950,031</h3>
                                </div>
                            </div>
                            <div className="h-[60px] w-full">
                                <div className="flex h-full items-end gap-2">
                                    <div className="h-[20%] w-6 rounded-sm bg-yellow-400/50" />
                                    <div className="h-[40%] w-6 rounded-sm bg-yellow-400/50" />
                                    <div className="h-[30%] w-6 rounded-sm bg-yellow-400/50" />
                                    <div className="h-[70%] w-6 rounded-sm bg-yellow-400/50" />
                                    <div className="h-[50%] w-6 rounded-sm bg-yellow-400/50" />
                                    <div className="h-[60%] w-6 rounded-sm bg-yellow-400/50" />
                                    <div className="h-[45%] w-6 rounded-sm bg-yellow-400" />
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">45%</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Expenses Card */}
                <Card className="bg-[#FFF1F1]">
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm text-muted-foreground">Expenses</p>
                                    <h3 className="text-2xl font-bold">$234,390</h3>
                                </div>
                            </div>
                            <div className="h-[60px] w-full">
                                <div className="flex h-full items-end gap-2">
                                    <div className="h-[40%] w-6 rounded-sm bg-red-400/50" />
                                    <div className="h-[20%] w-6 rounded-sm bg-red-400/50" />
                                    <div className="h-[60%] w-6 rounded-sm bg-red-400/50" />
                                    <div className="h-[40%] w-6 rounded-sm bg-red-400/50" />
                                    <div className="h-[50%] w-6 rounded-sm bg-red-400/50" />
                                    <div className="h-[30%] w-6 rounded-sm bg-red-400/50" />
                                    <div className="h-[28%] w-6 rounded-sm bg-red-400" />
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">28%</p>
                        </div>
                    </CardContent>
                </Card>

                {/* Tax Report Card */}
                <Card className="bg-[#F1FFE7]">
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Important</p>
                                <h3 className="text-xl font-bold">Tax Report</h3>
                            </div>
                            <div className="relative h-[60px] w-full">
                                <svg
                                    className="absolute inset-0 h-full w-full"
                                    viewBox="0 0 100 30"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M0 25 C20 10, 40 30, 60 20 S80 0, 100 15"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-green-500"
                                    />
                                    <circle cx="100" cy="15" r="2" fill="currentColor" className="text-green-500" />
                                </svg>
                            </div>
                            <p className="text-sm">
                                Prepare your yearly Tax Report till{" "}
                                <span className="font-semibold">Oct 20</span>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-[#FFF8E7]">
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-1">
                                    <p className="text-sm text-muted-foreground">Revenue</p>
                                    <h3 className="text-2xl font-bold">$950,031</h3>
                                </div>
                            </div>
                            <div className="h-[60px] w-full">
                                <div className="flex h-full items-end gap-2">
                                    <div className="h-[20%] w-6 rounded-sm bg-yellow-400/50" />
                                    <div className="h-[40%] w-6 rounded-sm bg-yellow-400/50" />
                                    <div className="h-[30%] w-6 rounded-sm bg-yellow-400/50" />
                                    <div className="h-[70%] w-6 rounded-sm bg-yellow-400/50" />
                                    <div className="h-[50%] w-6 rounded-sm bg-yellow-400/50" />
                                    <div className="h-[60%] w-6 rounded-sm bg-yellow-400/50" />
                                    <div className="h-[45%] w-6 rounded-sm bg-yellow-400" />
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground">45%</p>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </>


    )
}
