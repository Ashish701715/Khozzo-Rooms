
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

export default function Component() {
    return (
        /*****
         * 
         * @param@ Imports  charts 
         * 
         * ***/

        <>

            <div className="grid gap-4 pb-3 md:grid-cols-4">
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

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <Card className="flex flex-col">
                    <CardContent className="flex-1 pb-0">
                        <Suspense fallback={<div>laoding page...</div>}>
                            <Chart />
                        </Suspense>
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardContent className="flex-1 pb-0">
                        <Suspense fallback={<div>laoding page...</div>}>
                            <PieChart />
                        </Suspense>
                    </CardContent>
                </Card>

                <Card className="flex flex-col">
                    <CardContent className="flex-1 pb-0">
                        <Suspense fallback={<div>laoding page...</div>}>
                            <PaymentChartChart />
                        </Suspense>
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
