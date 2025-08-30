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
import "./style.css";
import { CheckCheck, CheckCircle2, CheckIcon, Edit2, Edit2Icon, Edit3, Edit3Icon, EyeIcon, PencilIcon, PhoneCallIcon, PhoneIcon } from "lucide-react";

const data = Array(7).fill(null).map((_, index) => ({
    id: index.toString(),
    VisitorName: "John Doe",
    AppointmentDate: "Mar 23, 2024, 13:00 PM",
    PropertyDetails: "2 Bedrooms",
    PropertyLocation: "Naar Tower, Mohali",
    Status: "Pending",
    ScheduledBy: { name: "Ashish Singh", avatar: "https://via.placeholder.com/40" },
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
                    <TableColumn className="table_header">Visitor Name</TableColumn>
                    <TableColumn className="table_header">Appointment Date</TableColumn>
                    <TableColumn className="table_header">Property Details</TableColumn>
                    <TableColumn className="table_header">Property Location</TableColumn>
                    <TableColumn className="table_header">Status</TableColumn>
                    <TableColumn className="table_header">Scheduled By</TableColumn>
                    <TableColumn className="table_header">Action</TableColumn>
                </TableHeader>

                <TableBody className="table_body">
                    {data.map((property:any, index) => (
                        <TableRow key={property.id} className="border-b last:border-b-0 hover:shadow-xl hover:scale-100 hover:border hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
                            <TableCell><Checkbox /></TableCell>
                            <TableCell>
                                {property.VisitorName}
                            </TableCell>
                            <TableCell>{property.AppointmentDate}</TableCell>
                            <TableCell>{property.PropertyDetails}</TableCell>
                            <TableCell>{property.PropertyLocation}</TableCell>
                            <TableCell> 
                                <span className="appointmant_status">
                                     {property.Status}
                                </span>
                            </TableCell>
                            <TableCell>{property?.ScheduledBy?.name}</TableCell>
                            
                            <TableCell>
                                <div className="flex gap-3">
                                    <Tooltip content="View">
                                        <Button isIconOnly variant="light">
                                            <EyeIcon className="eye_icon main-color" />
                                        </Button>
                                    </Tooltip>
                                    <Tooltip content="Call">
                                        <Button isIconOnly variant="light">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none" className="main-color">
                                            <g clip-path="url(#clip0_259_994)">
                                                <path d="M8.99923 0.450195C4.2772 0.450195 0.449219 4.27816 0.449219 9.00019C0.449219 13.7222 4.27718 17.5502 8.99921 17.5502C13.7212 17.5502 17.5492 13.7222 17.5492 9.0002C17.5492 4.27817 13.7213 0.450195 8.99923 0.450195ZM14.3596 12.8162C13.9816 13.5866 13.3264 14.1428 12.3274 14.3642C11.5174 14.5424 10.6714 14.42 9.91182 14.0834C8.67342 13.5326 7.46022 12.7064 6.37662 11.6228C5.29301 10.5392 4.46682 9.326 3.91602 8.08759C3.57942 7.328 3.45702 6.482 3.63522 5.672C3.85662 4.673 4.41282 4.0178 5.18322 3.63979C5.56122 3.4544 6.01662 3.5822 6.26502 3.92239C6.65202 4.44979 7.03542 5.0438 7.41881 5.6864C7.62042 6.023 7.57542 6.45679 7.30182 6.73759C7.06062 6.986 6.80862 7.22179 6.54402 7.4486C6.22721 7.7186 6.17862 8.1902 6.41801 8.5322C6.82122 9.1064 7.28562 9.66259 7.81122 10.1882C8.33682 10.7138 8.89301 11.1782 9.46721 11.5814C9.80922 11.8208 10.2808 11.7722 10.5508 11.4554C10.7776 11.1908 11.0134 10.9388 11.2618 10.6976C11.5426 10.424 11.9764 10.379 12.313 10.5806C12.9556 10.964 13.5496 11.3474 14.077 11.7344C14.4172 11.9828 14.545 12.4382 14.3596 12.8162Z" fill="#0087E5"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_259_994">
                                                <rect width="18" height="18" fill="white"/>
                                                </clipPath>
                                            </defs>
                                            </svg>
                                            
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
