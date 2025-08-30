
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Chart from "./Helper/Chart"
import PieChart from "./Helper/Pie"
import PaymentChartChart from "./Helper/PaymentChart"
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { AlignLeft, ArrowLeftCircle, ArrowRightCircleIcon, ArrowUp, Calendar, ChevronRight, DollarSign, DotIcon, FilePlus2Icon, Plus, PlusCircleIcon, Ticket, User } from 'lucide-react'
import { CardHeader } from "@nextui-org/react"
import { Flex, Select } from 'antd';


export default function Component() {
    return (
        /*****
         * 
         * @param@ Imports  charts 
         * 
         * ***/

        <>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                <div className="dashbord_box">
                    <div>
                        <h2 className="font-total-text text-[#20AA70]">Total Properties</h2>
                        <p className="headertext mt-2">15000</p>
                    </div>
                    <img src="/svg/Group 62.svg" alt="" />
                </div>
                <div className="dashbord_box">
                    <div>
                        <h2 className="font-total-text text-[#7152F3]">Total Tenants</h2>
                        <p className="headertext mt-2">15000</p>
                    </div>
                    <img src="/svg/lender 1.svg" alt="" />
                </div>
                <div className="dashbord_box ">
                    <div>
                        <h2 className="font-total-text text-[#0D8EE6]">Total Managers</h2>
                        <p className="headertext mt-2">15000</p>
                    </div>
                    <img src="/svg/Group 165503.svg" alt="" />
                </div>
                <div className="dashbord_box">
                    <div>
                        <h2 className="font-total-text text-[#FF900D]">Total Appointments</h2>
                        <p className="headertext mt-2">15000</p>
                    </div>
                    <img src="/svg/Group 2.svg" alt="" />
                </div>
            </div>


            <div className="grid grid-cols-4 gap-4 lg:grid-cols-12 rounded-[20px]">
                <Card className="flex flex-col col-span-4 lg:col-span-9 bg-white">
                    <CardContent className="flex-1 pb-0 ">
                        <div className="headerCrad">
                            <div className="flex justify-between ...">
                                <div>
                                    <h3 className="heading3">Revenue Comparison</h3>
                                    <h2 className="heading2">IDR 7.852.000</h2>
                                    <p className="prechart"><span><ArrowUp className="arrowup_icon"/> 2.1% </span> vs last year</p>
                                </div>
                                <div>
                                <Select
                                    placeholder="Last Year"
                                    variant="filled"
                                    className="selected_class"
                                    options={[
                                    { value: '1 Last Year', label: '1 Last Year' },
                                    { value: '2 Last Year', label: '2 Last Year' },
                                    { value: '3 Last Year', label: '3 Last Year' },
                                    ]}
                                />
                                </div>
                            </div>
                        </div>
                        <Suspense fallback={<div>loading page...</div>}>
                        
                            <Chart />
                        </Suspense>
                    </CardContent>
                </Card>

                <Card className="rounded-[20px] flex flex-col col-span-4 lg:col-span-3 bg-white ">
                    <CardContent className="flex-1 p-3 font-pietext">
                        <span>Ticket Status</span>
                        <Suspense fallback={<div>loading page...</div>}>
                            <PieChart />
                        </Suspense>

                        <ul className="grid grid-cols-3 gap-2 items-center">
                           
                            

                            {/* Centered item spanning both columns */}
                            
                        </ul>
                        <div className="grid grid-cols-2 gap-4 justify-center">
                           
                            <div className="col-start-2 col-end-1 justify-center">
                                 {/* Left item */}
                                <li className="flex justify-self-center">
                                    <span className="pr-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <circle cx="5.59746" cy="6.39629" r="5.59746" fill="#FF900D" />
                                        </svg>
                                    </span>
                                    <span className="font-text">
                                        New tickets : 28
                                    </span>
                                </li>

                            </div>
                            <div className="col-span-1 col-end-3">
                                {/* Right item */}
                            <li className="flex items-center ">
                                <span className="pr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <circle cx="5.59746" cy="6.39629" r="5.59746" fill="#48A7FF" />
                                    </svg>
                                </span>
                                <span className="font-text">
                                    Open tickets : 28
                                </span>
                            </li>
                            </div>
                            <div className="col-span-2 col-start-1">
                                <li className="flex items-center gap-2 justify-center ">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <circle cx="5.59746" cy="6.39629" r="5.59746" fill="#20AA70" />
                                        </svg>
                                    </span>
                                    <span className="font-text">
                                        Resolved tickets : 28
                                    </span>
                                </li>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                
            </div>
            <div className="flex flex-row grid grid-cols-12 gap-5">
                <div className="xl:col-span-3 lg:col-span-2 col-span-12">
                    <div className="box1">
                        <h3 className="heading3">Quick Actions</h3>
                        <div className="quick_actions">
                            <div className="flex"><Plus className="plus_icon_dashboard"/>Add Property</div>
                            <div><ChevronRight className="w-4 h-4 ml-auto" /></div>
                        </div>
                        <div className="quick_actions">
                            <div className="flex"><User className="user_icon_dashboard"/>Assign Manager</div>
                            <div><ChevronRight className="w-4 h-4 ml-auto" /></div>
                        </div>
                        <div className="quick_actions">
                            <div className="flex"><Ticket className="Ticket_icon_dashboard"/>View Tickets Status</div>
                            <div><ChevronRight className="w-4 h-4 ml-auto" /></div>
                        </div>
                        <div className="quick_actions">
                            <div className="flex"><DollarSign className="DollarSign_icon_dashboard"/>Manage Revenue </div>
                            <div><ChevronRight className="w-4 h-4 ml-auto" /></div>
                        </div>
                        <div className="quick_actions">
                            <div className="flex"><Calendar className="Calendar_icon_dashboard"/>Schedule Appointment</div>
                            <div><ChevronRight className="w-4 h-4 ml-auto" /></div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-5 lg:col-span-5  col-span-12">
                    <div className="box2">
                        <div className="Properties_h flex">
                            <h3 className="heading3">Properties</h3>
                            <a
                                href="https://github.com/ant-design/ant-design/issues/1862"
                                target="_blank"
                                rel="noopener noreferrer">All properties <ChevronRight/></a>
                        </div>
                        <div className="Properties_h flex flex-row grid grid-cols-12 gap-5">
                            <div className="xl:col-span-5 lg:col-span-5 col-span-12 dis_block">
                                <div className="Properties_h2">
                                    <DotIcon className="dot_naveblue"/>
                                    <div><b>298</b> <p>Occupied: 15%</p></div>
                                </div>
                                <div className="Properties_h2">
                                    <DotIcon className="dot_light_blue"/>
                                    <div><b>162</b><p>Vacant: 58%</p></div>
                                </div>
                                <div className="Properties_h2">
                                    <DotIcon className="sky_blue_blue"/>
                                    <div><b>85</b> <p>Maintenance: 20%</p></div>
                                </div>
                            </div>
                            <div className="xl:col-span-7 lg:col-span-7 col-span-12 pie_chat_custom">
                                <span className="sky_blue_blue_big">20%
                                    <span className="dot_light_blue_big">
                                        58%<span className="dot_naveblue_big">
                                        15%</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-4 col-span-12">
                    <div className="box3">
                        <h3 className="heading3">Recent Activities</h3>
                         <div className="activity">
                                <div className="avatar-container">
                                    <img src="/images/dummy-man.png" alt="User Avatar" className="avatar"/>
                                    <div className="dotted-line"></div>
                                </div>
                                <div className="content">
                                    <p className="user-action"><strong>John Doe</strong> created new query...</p>
                                    <p className="time">2 hours ago</p>
                                    <div className="query-card">
                                        <p className="query-title">Water Drip from Faucets <span className="query-id">#284</span></p>
                                        <span className="tag maintenance">Maintenance</span>
                                    </div>
                                </div>
                            </div>

                            <div className="activity">
                                <div className="avatar-container">
                                    <img src="/images/dummy-man.png" alt="User Avatar" className="avatar"/>
                                    <div className="dotted-line"></div>
                                </div>
                                <div className="content">
                                    <p className="user-action"><strong>John Doe</strong> created new query...</p>
                                    <p className="time">2 hours ago</p>
                                    <div className="query-card">
                                        <p className="query-title">Water Drip from Faucets <span className="query-id">#284</span></p>
                                        <span className="tag maintenance-alt">Maintenance</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>


    )
}
