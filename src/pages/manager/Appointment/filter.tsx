import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { Filter } from "lucide-react";

interface FilterPopoverProps {
    isOpen: boolean;
    onClose: () => void;
    triggerButton: React.ReactElement;
}

export default function FilterPopover({ isOpen, onClose, triggerButton }: FilterPopoverProps) {
    return (
        <Popover isOpen={isOpen} placement="top" >
            <PopoverTrigger>
                {React.isValidElement(triggerButton) ? triggerButton : <span />}
            </PopoverTrigger>

            <PopoverContent 
                className="items-stretch w-[500px] transform -translate-y-20 shadow-lg border border-gray-200 rounded-[40px] bg-white p-4" 
            >
                <div className="px-4 py-3">
                    {/* Filter Title */}
                    <div className="mb-3 text-xl flex gap-2">
                        <Filter className="w-[20px]" />
                        Filters
                    </div>

                    {/* Type Dropdown */}
                    <div className="input-field mb-3">
                        <label htmlFor="type" className="block font-medium text-gray-700">Type</label>
                        <select id="type" required className="w-full mt-1 border border-gray-300 rounded-md p-2">
                            <option value="">Select Type</option>
                            <option value="user1">User 1</option>
                            <option value="user2">User 2</option>
                        </select>
                    </div>

                    {/* User-wise Dropdown */}
                    <div className="input-field mb-3">
                        <label htmlFor="userwise" className="block font-medium text-gray-700">User Wise</label>
                        <select id="userwise" required className="w-full mt-1 border border-gray-300 rounded-md p-2">
                            <option value="">Select User</option>
                            <option value="user1">User 1</option>
                            <option value="user2">User 2</option>
                        </select>
                    </div>
                    <div className="input-field mb-3">
                        <label htmlFor="userwise" className="block font-medium text-gray-700">User Wise</label>
                        <select id="userwise" required className="w-full mt-1 border border-gray-300 rounded-md p-2">
                            <option value="">Select User</option>
                            <option value="user1">User 1</option>
                            <option value="user2">User 2</option>
                        </select>
                    </div>
                    <div className="input-field mb-3">
                        <label htmlFor="userwise" className="block font-medium text-gray-700">User Wise</label>
                        <select id="userwise" required className="w-full mt-1 border border-gray-300 rounded-md p-2">
                            <option value="">Select User</option>
                            <option value="user1">User 1</option>
                            <option value="user2">User 2</option>
                        </select>
                    </div>

                    {/* Created By Dropdown */}
                    <div className="input-field mb-3">
                        <label htmlFor="createdBy" className="block font-medium text-gray-700">Created By</label>
                        <select id="createdBy" required className="w-full mt-1 border border-gray-300 rounded-md p-2">
                            <option value="">Select Creator</option>
                            <option value="creator1">Creator 1</option>
                            <option value="creator2">Creator 2</option>
                        </select>
                    </div>

                    {/* Date Range Picker */}
                    <div className="input-field mb-3">
                        <label htmlFor="dateRange" className="block font-medium text-gray-700">Date Range</label>
                        <div className="flex gap-2">
                            <input id="startDate" type="date" className="w-full border border-gray-300 rounded-md p-2" />
                            <input id="endDate" type="date" className="w-full border border-gray-300 rounded-md p-2" />
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="flex gap-2 mt-3">
                        <button className="reset-btn px-4 py-2 border border-gray-300 rounded-md" onClick={onClose}>
                            Cancel
                        </button>
                        <button className="Search-btn px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => console.log("Search clicked")}>
                            Search
                        </button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
