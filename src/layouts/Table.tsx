import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { ArrowDownWideNarrowIcon, ArrowUpNarrowWide, CirclePlus, Ellipsis, MoveDown, MoveUp, SlidersHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
type Checked = DropdownMenuCheckboxItemProps["checked"]

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function TableDemo() {
    return (
        <div>
            <div className="filter-table flex justify-between mb-4 gap-3">
                <div className="flex gap-5">
                    <Input placeholder="Filter users..." className="font-meduim"/>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant={"secondary"} className="font-medium border border-dashed">
                                <CirclePlus strokeWidth={2} /> Status
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <Input placeholder="search..." className="border-none" />
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem>
                                <Checkbox
                                />
                                Status Bar
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                                <Checkbox
                                />
                                Activity Bar
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                                <Checkbox
                                />
                                Panel
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button variant={"secondary"} className="font-medium border border-dashed">
                        <CirclePlus strokeWidth={2} /> Status
                    </Button>
                </div>
                <div>
                    <Button variant={'secondary'} className="font-medium border border-dashed">
                        <SlidersHorizontal strokeWidth={2} /> View
                    </Button>
                </div>
            </div>
            <div className="rounded-md border">
                <div className="relative w-full overflow-auto">
                    <Table className="">
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    <Checkbox id="terms" />
                                </TableHead>
                                <TableHead>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger color="secondary" className="flex items-center gap-2">
                                            User Name
                                            <MoveDown strokeWidth={4} height={10} />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuLabel>Order by</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem>
                                                <ArrowUpNarrowWide strokeWidth={1.25} />
                                                Asc
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <ArrowDownWideNarrowIcon strokeWidth={1.25} />
                                                Desc
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableHead>
                                <TableHead>User Email</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead >Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="">
                            {Array(10).fill(true).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium"> <Checkbox id="terms" /></TableCell>
                                    <TableCell className="max-w-[500px] truncate font-medium">INV001</TableCell>
                                    <TableCell className="font-medium">Paid</TableCell>
                                    <TableCell className="font-medium">Credit Card</TableCell>
                                    <TableCell className="font-medium">Credit Card</TableCell>
                                    <TableCell className="font-medium">Credit Card</TableCell>
                                    <TableCell className="font-medium" >
                                        <button className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted" type="button" id="radix-:rjs:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                            <Ellipsis strokeWidth={1.25} />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="pagination mt-5 flex justify-between">
                <div>
                    <span className="font-medium">0 of 100 row(s) selected.</span>
                </div>
                <div className="flex">
                    <div className="flex items-center gap-2">
                        <Select >
                            <p className="font-medium">
                                Rows per page
                            </p>
                            <SelectTrigger className="w-[80px]">
                                <SelectValue defaultValue={10} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="10">10</SelectItem>
                                    <SelectItem value="20">20</SelectItem>
                                    <SelectItem value="50">50</SelectItem>
                                    <SelectItem value="100">100</SelectItem>
                                    <SelectItem value="150">150</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#">3</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
            </div>
        </div>

    )
}
