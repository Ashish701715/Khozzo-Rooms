import { Button, Input, Pagination, Chip, User, ButtonGroup, Spinner } from '@nextui-org/react';
import { Checkbox } from 'antd';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { BadgeCheck, BadgeHelp, Edit, Filter, Plus, Search, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';
import { setSearchText } from '../../../../reducers/searchSlice';
import { Link, NavLink } from 'react-router';



export default function PropertyListComponents(props: any) {
    const { PropertyList } = props;
    const [searchInput, setSearchInput] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        const timeOut = setTimeout(() => {
            dispatch(setSearchText(searchInput));
        }, 1000);

        return (() => clearTimeout(timeOut));
    }, [searchInput])

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchInput(value);
    };

    return (
        <div className="addProperty p-4 bg-gray-50 rounded-lg shadow-md">
            <div className='mb-4 flex justify-between items-center'>

                <Button color='primary' size='sm' className='flex items-center rounded-[2px]'>
                    <NavLink to={'/property/add'} className='flex items-center'>
                        <Plus strokeWidth={2} /> Add Property
                    </NavLink>
                </Button>

                <div className='flex gap-2'>
                    <Input onChange={handleSearchChange} size='sm' placeholder='Search...' className='w-[200px] bg-white' startContent={<Search />} />
                    <Button size='sm' className='rounded-sm bg-white border' startContent={<Filter size={15} />}>Filter</Button>
                </div>
            </div>
            <div className='border rounded-lg overflow-hidden'>
                <div className='table-header-section flex justify-between bg-gray-200 p-2'>
                    <span className='font-semibold w-[40px]'><Checkbox /></span>
                    <span className='font-semibold w-[60px]'>#id</span>
                    <span className='font-semibold flex text-center'># Property Name</span>
                    <span className='font-semibold flex text-center'>Property Location</span>
                    <span className='font-semibold flex text-center'>Total Rooms</span>
                    <span className='font-semibold flex text-center'>Property Owner</span>
                    <span className='font-semibold flex text-center'>Property Manager</span>
                    <span className='font-semibold flex text-center'>Status</span>
                    <span className='font-semibold flex text-center'>Action</span>
                </div>

                <div className='h-[60vh] overflow-y-auto'>
                    {PropertyList.map((value: any, index: number) => (
                        <div
                            key={index}
                            className='table-body-section p-3 flex justify-between border-b hover:bg-gray-100 transition-colors'
                        >
                            <span className='flex text-center'><Checkbox /></span>
                            <span className='font-medium flex text-center'>{value?.property_id}</span>
                            <span className='font-[500] flex text-center'>{value?.property_name}</span>
                            <span className='font-[500] flex text-center'>{value?.property_address?.address}</span>
                            <span className='font-medium flex text-center'>{value?.num_rooms}</span>
                            <span className='font-[500] flex text-center'>
                                {value?.owner_information?.owner_name}
                            </span>
                            <span className='font-[500] flex text-center'>
                                {value?.owner_information?.owner_name}
                            </span>
                            <span className='font-medium flex text-center'>
                                {value?.property_address?.verifyed_property === 'true' ? <BadgeCheck color='green' strokeWidth={1.5} height={17} /> : <BadgeHelp color='red' strokeWidth={1.5} height={17} />}
                            </span>
                            <span className='font-medium flex text-center gap-2'>
                                <Edit strokeWidth={0.8} height={20} className='cursor-pointer' />
                                <Trash strokeWidth={0.8} height={20} className='cursor-pointer' />
                            </span>
                        </div>
                    ))}
                </div>

                <div className='border-t table-footer flex justify-between items-center p-2'>
                    <Pagination isCompact showControls initialPage={0} total={0} />
                    <Select>
                        <SelectTrigger className="w-[150px]">
                            <SelectValue placeholder="Rows Per Page" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem className='cursor-pointer' value="10">10</SelectItem>
                                <SelectItem className='cursor-pointer' value="20">20</SelectItem>
                                <SelectItem className='cursor-pointer' value="50">50</SelectItem>
                                <SelectItem className='cursor-pointer' value="100">100</SelectItem>
                                <SelectItem className='cursor-pointer' value="150">150</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    );
}