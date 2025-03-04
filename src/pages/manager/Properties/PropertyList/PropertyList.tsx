import React, { useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Checkbox,
    Avatar,
    Tooltip,
    Button,
    Pagination,
} from "@nextui-org/react";
import "../PropertyList/style.css";
import { CheckCheck, CheckCircle2, CheckIcon, Edit2, Edit2Icon, Edit3, Edit3Icon, EyeIcon, PencilIcon } from "lucide-react";

const data = Array(7).fill(null).map((_, index) => ({
    id: index.toString(),
    image: "/images/property1.png",
    name: "Shri Guru Tegh Bahadur Housing Complex",
    location: "Sector 74, Mohali (Punjab)",
    manager: { name: "Ashish Singh", avatar: "https://via.placeholder.com/40" },
}));
export default function PropertyManagerTable(props: any) {
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;

    const handleSelect = (id: any) => {
        const newSelected = new Set(selectedRows);
        newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);
        setSelectedRows(newSelected);
    };

    return (
        <div className="flex flex-col gap-3">
            <Table
                removeWrapper
                disallowEmptySelection
                aria-label="Property Manager Table"
                color="default"
            >
                <TableHeader>
                    <TableColumn className="table_header"><Checkbox /></TableColumn>
                    <TableColumn className="table_header">Property Image</TableColumn>
                    <TableColumn className="table_header">Property Name</TableColumn>
                    <TableColumn className="table_header">Property Location</TableColumn>
                    <TableColumn className="table_header">Property Manager</TableColumn>
                    <TableColumn className="table_header">Action</TableColumn>
                </TableHeader>

                <TableBody className="table_body">
                    {data.map((property, index) => (
                        <TableRow key={property.id} className="border-b last:border-b-0 hover:shadow-xl hover:scale-100 hover:border hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
                            <TableCell><Checkbox /></TableCell>
                            <TableCell>
                                <img
                                    src={property.image}
                                    alt="Property"
                                    className="rounded-md w-40 h-20"
                                />
                            </TableCell>
                            <TableCell>{property.name}</TableCell>
                            <TableCell>{property.location}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <Avatar src={'/images/dummy-man.png'} radius="sm" />
                                    {property.manager.name}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex gap-3">
                                    <Tooltip content="View">
                                        <Button isIconOnly variant="light">
                                            <EyeIcon className="eye_icon main-color" />
                                        </Button>
                                    </Tooltip>
                                    <Tooltip content="Edit">
                                        <Button isIconOnly variant="light">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="edit_icon" viewBox="0 0 20 19" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.94466 3.16634C4.63299 3.16634 3.56966 4.22967 3.56966 5.54134V13.458C3.56966 14.7697 4.63299 15.833 5.94466 15.833H13.8613C15.173 15.833 16.2363 14.7697 16.2363 13.458V8.70801C16.2363 8.27077 16.5908 7.91634 17.028 7.91634C17.4652 7.91634 17.8197 8.27077 17.8197 8.70801V13.458C17.8197 15.6441 16.0474 17.4163 13.8613 17.4163H5.94466C3.75854 17.4163 1.98633 15.6441 1.98633 13.458V5.54134C1.98633 3.35522 3.75854 1.58301 5.94466 1.58301H10.6947C11.1319 1.58301 11.4863 1.93745 11.4863 2.37467C11.4863 2.8119 11.1319 3.16634 10.6947 3.16634H5.94466Z" fill="#31AA21"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.032 2.23287C14.4481 1.81677 15.0125 1.58301 15.6009 1.58301C16.1894 1.58301 16.7537 1.81677 17.1698 2.23287C17.5859 2.64897 17.8197 3.21332 17.8197 3.80177C17.8197 4.39023 17.5859 4.95458 17.1698 5.37068L16.5498 5.99067C16.2407 6.29984 15.7394 6.29984 15.4303 5.99067L13.412 3.97245C13.1028 3.66328 13.1028 3.16203 13.412 2.85286L14.032 2.23287ZM12.2924 5.09203C11.9833 4.78286 11.482 4.78286 11.1728 5.09203L7.64096 8.62393C7.5395 8.72535 7.46753 8.85249 7.43273 8.99166L6.75998 11.6827C6.69253 11.9524 6.77158 12.2378 6.96822 12.4345C7.16485 12.6311 7.45024 12.7101 7.72002 12.6427L10.411 11.97C10.5502 11.9352 10.6773 11.8632 10.7787 11.7617L14.3107 8.22984C14.6198 7.9207 14.6198 7.41942 14.3107 7.11026L12.2924 5.09203Z" fill="#31AA21"/>
                                        </svg>
                                            {/* <Edit3Icon className="edit_icon" /> */}
                                        </Button>
                                    </Tooltip>
                                    <Tooltip content="Edit">
                                        <Button isIconOnly variant="light">
                                            <CheckCheck className="check_icon" />
                                        </Button>
                                    </Tooltip>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="flex justify-center mt-3">
                <Pagination total={100} page={page} onChange={setPage} />
            </div>
        </div>
    );
}
