import { useState } from "react"
import { Button } from "@/component/ui/button"
import { ChevronLeft, ChevronRight, Filter } from 'lucide-react'
import FilterPopover from "./filter"

const events = [
    { date: 1, label: "Property Visit", color: "bg-blue-500", description: "Discussing maintenance issues." },
    { date: 1, label: "Property Visit", color: "bg-emerald-400", description: "Checking the site layout." },
    { date: 11, label: "Property Visit", color: "bg-orange-300", description: "Finalizing lease agreements." },
    { date: 14, label: "Property Visit", color: "bg-blue-500", description: "Routine inspection." },
    { date: 14, label: "Property Visit", color: "bg-emerald-400", description: "Meeting with tenants." },
    { date: 14, label: "Property Visit", color: "bg-purple-400", description: "Signing contracts." },
    { date: 17, label: "Property Visit", color: "bg-emerald-400", description: "Structural assessment." },
    { date: 17, label: "Property Visit", color: "bg-orange-300", description: "Discussing payment options." },
    { date: 17, label: "Property Visit", color: "bg-purple-400", description: "Finalizing deal." },
]

const CustomPopover = ({ event, position, onClose }: { event: { date: number; label: string; color: string; description: string }; position: { top: string; left: string }; onClose: () => void }) => {

    return (
        <div
            className="absolute bg-white shadow-lg border border-gray-200 rounded-md p-4 w-[346px] sm:w-[346px] max-w-full min-h-auto z-50 transition-all duration-300 ease-in-out"
            style={{
                top: `calc(${position.top} + 10px)`,
                left: `min(${position.left}, calc(100vw - 500px))`,
            }}
        >
            <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-md font-semibold">Additional Information</h3>
                <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
                    ✕
                </button>
            </div>
            <div className="mt-2 text-sm text-gray-800">
                <p><strong>Meeting Type</strong><br />Property Visit</p>
                <p className="mt-2"><strong>Location</strong><br />15th Floor , Tower A</p>
                <p className="mt-2"><strong>Participants</strong><br />Tenants</p>
                <p className="mt-2"><strong>Time</strong><br />10 AM  - 11:30 AM</p>
                <p className="mt-2"><strong>Description</strong><br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="flex justify-between mt-4">
                <button className="border border-green-500 text-green-500 px-3 py-1 rounded-md hover:bg-green-100">Reschedule</button>
                <button className="border border-gray-400 text-gray-400 px-3 py-1 rounded-md cursor-not-allowed">Cancel</button>
                <button className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700">Mark as Complete</button>
            </div>
        </div>
    );
};

export default function Component() {
    const [currentDate] = useState(new Date(2025, 0, 20));
    const [hoveredEvent, setHoveredEvent] = useState<{ date: number; label: string; color: string; description: string } | null>(null);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [position, setPosition] = useState({ top: "0px", left: "0px" });

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                <div className="dashbord_box transition-all ease-in-out duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#0D8EE6] hover:text-white p-4 rounded-lg cursor-pointer">
                    <div>
                        <h2 className="font-total-text">Completed Appointments</h2>
                        <p className="headertext mt-2">15000</p>
                    </div>
                    <img src="/svg/Group Tick.svg" alt="" />
                </div>

                <div className="dashbord_box transition-all ease-in-out duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#09B69F] hover:text-white p-4 rounded-lg cursor-pointer">
                    <div>
                        <h2 className="font-total-text">Cancelled Appointments</h2>
                        <p className="headertext mt-2">15000</p>
                    </div>
                    <img src="/svg/time 1.svg" alt="" />
                </div>

                <div className="dashbord_box transition-all ease-in-out duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#FF900D] hover:text-white p-4 rounded-lg cursor-pointer">
                    <div>
                        <h2 className="font-total-text">Rescheduled Appointments</h2>
                        <p className="headertext mt-2">15000</p>
                    </div>
                    <img src="/svg/rescheduling 1.svg" alt="" />
                </div>

                <div className="dashbord_box transition-all ease-in-out duration-300 hover:shadow-lg hover:scale-105 hover:bg-[#9723FD] hover:text-white p-4 rounded-lg cursor-pointer">
                    <div>
                        <h2 className="font-total-text">Total Appointments</h2>
                        <p className="headertext mt-2">15000</p>
                    </div>
                    <img src="/svg/calendar (2) 1.svg" alt="" />
                </div>
            </div>


            {/* Calendar Container */}
            <div className="w-full bg-white rounded-xl p-4 shadow-sm">
                {/* Calendar Header */}
                <div className="flex flex-wrap items-center justify-start mb-4 gap-2">
                    <div className="flex items-center w-[35%] gap-2">
                        <Button variant="ghost" size="icon">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-medium">Jan 20, 2025</span>
                        <Button variant="ghost" size="icon">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="ml-2">
                            Today
                        </Button>
                    </div>
                    <div className="flex flex-wrap items-center justify-between w-[64%] gap-2">
                        <div className="flex bg-gray-100 rounded-md p-1">
                            {["Week", "Month", "Year"].map((view) => (
                                <Button key={view} variant="ghost" size="sm" className="text-gray-500">
                                    {view}
                                </Button>
                            ))}
                        </div>
                        <div>
                            {/* Filter Button (Only One) */}
                            <FilterPopover
                                isOpen={isFilterOpen}
                                onClose={() => setIsFilterOpen(false)}
                                triggerButton={(
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="gap-2"
                                        onClick={() => setIsFilterOpen(true)}
                                    >
                                        <Filter className="h-4 w-4" />
                                        Filters
                                    </Button>
                                )}
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="inline-flex items-center bg-[#d8e0f0] text-gray-800 font-medium px-3 h-[28px] w-[90px] rounded-[30px] shadow-sm mb-3"

                >
                    <span className="mr-2 text-sm">Name</span>
                    <button
                        className="text-base font-bold focus:outline-none"

                    >
                        ×
                    </button>
                </div>
                <div
                    className="inline-flex items-center bg-[#d8e0f0] text-gray-800 font-medium px-3 h-[28px] w-[90px] rounded-[30px] shadow-sm ml-2"

                >
                    <span className="mr-2 text-sm">Name</span>
                    <button
                        className="text-base font-bold focus:outline-none"

                    >
                        ×
                    </button>
                </div>

                {/* Scrollable Calendar Grid */}
                <div className="overflow-x-auto border-t border-l" style={{ borderRadius: "12px" }}>
                    <div className="grid grid-cols-1 sm:grid-cols-7 min-w-[600px] sm:min-w-full">
                        {/* Days Header */}
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                            <div key={day} className="p-2 border-b border-r text-[#0D8EE6] text-sm text-center font-semibold">
                                {day}
                            </div>
                        ))}

                        {/* Calendar Cells */}
                        {Array.from({ length: 35 }).map((_, index) => {
                            const dayNumber = index - 4; // Adjust start
                            const isCurrentMonth = dayNumber > 0 && dayNumber <= 31;
                            const dayEvents = events.filter((event) => event.date === dayNumber);

                            return (
                                <div
                                    key={index}
                                    className={`min-h-[100px] sm:min-h-[120px] p-2 border-b border-r relative ${isCurrentMonth ? "bg-white" : "bg-gray-50"
                                        } last:border-b-0 hover:shadow-xl hover:scale-200 hover:border  hover:text-black transition-all duration-300 ease-in-out`}
                                >
                                    <span className={`text-sm ${isCurrentMonth ? "text-gray-900" : "text-gray-400"}`}>
                                        {dayNumber <= 0 ? 30 + dayNumber : dayNumber > 31 ? dayNumber - 31 : dayNumber}
                                    </span>

                                    <div className="mt-2 space-y-1 relative">
                                        {dayEvents.map((event, eventIndex) => (
                                            <div
                                                key={eventIndex}
                                                className={`${event.color} text-white text-xs px-2 py-1 rounded-md truncate cursor-pointer relative`}
                                                onClick={(e) => {
                                                    setHoveredEvent(event);
                                                    setPosition({ top: `${e.clientY}px`, left: `${e.clientX}px` });
                                                }}
                                            >
                                                {event.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Render Custom Popover */}
            {hoveredEvent && <CustomPopover event={hoveredEvent} position={position} onClose={() => setHoveredEvent(null)} />}
        </>
    );
}
