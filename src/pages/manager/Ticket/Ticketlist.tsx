import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Checkbox,
  Button,
  Pagination,
  Tabs,
  Tab,
  Tooltip,
} from "@nextui-org/react";
import {  MoreVertical, Eye, PhoneCall, Edit2Icon, CrossIcon, XIcon } from "lucide-react";

const data = Array(10).fill(null).map((_, index) => ({
  id: index.toString(),
  ticketId: "#001",
  subject: "AC not working",
  status: "Open",
  createdDate: "Mar 23, 2024, 13:00 PM",
  propertyName: "Naar Tower, Mohali",
}));

const TicketTable = () => {
  const [selectedTab, setSelectedTab]:any = useState("open");
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [page, setPage] = useState(1);

  return (
    <div className="">
      {/* Tabs */}
      <Tabs selectedKey={selectedTab} onSelectionChange={(key) => setSelectedTab(key)} className="mb-4">
        <Tab key="open" title="Open Tickets" />
        <Tab key="progress" title="In Progress" />
        <Tab key="resolved" title="Resolved" />
      </Tabs><br/>
      <div className="btn_filter">
          <Button >
            Name <XIcon />
          </Button>
          <Button >
            Ticket Id <XIcon />
          </Button>
          <Button >
          Status <XIcon />
          </Button>
          <Button >
          Subject <XIcon />
          </Button>
          <a href="#">Clear all filters</a>
      </div>
        
      {/* Filters & Options */}
     

      {/* Table */}
      <Table removeWrapper aria-label="Ticket Table">
        <TableHeader>
          <TableColumn className="table_header">
            <Checkbox />
          </TableColumn>
          <TableColumn className="table_header">Ticket ID</TableColumn>
          <TableColumn className="table_header">Subject</TableColumn>
          <TableColumn className="table_header">Status</TableColumn>
          <TableColumn className="table_header">Created Date</TableColumn>
          <TableColumn className="table_header">Property Name</TableColumn>
          <TableColumn className="table_header">Action</TableColumn>
        </TableHeader>
        <TableBody className="table_body">
          {data.map((ticket) => (
            <TableRow key={ticket.id} className="border-b last:border-b-0 hover:shadow-xl hover:scale-100 hover:border hover:bg-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{ticket.ticketId}</TableCell>
              <TableCell>{ticket.subject}</TableCell>
              <TableCell>
                <span className="text-green-500 font-bold">🟢 {ticket.status}</span>
              </TableCell>
              <TableCell>{ticket.createdDate}</TableCell>
              <TableCell>{ticket.propertyName}</TableCell>
              <TableCell>
                <div className="flex gap-3">
                  <Tooltip content="View">
                    <Button isIconOnly variant="light">
                      <Eye size={16} className="text-blue-500" />
                    </Button>
                  </Tooltip>
                  <Tooltip content="Call">
                    <Button isIconOnly variant="light">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96419 3.16634C4.65252 3.16634 3.58919 4.22967 3.58919 5.54134V13.458C3.58919 14.7697 4.65252 15.833 5.96419 15.833H13.8809C15.1926 15.833 16.2559 14.7697 16.2559 13.458V8.70801C16.2559 8.27077 16.6103 7.91634 17.0475 7.91634C17.4848 7.91634 17.8392 8.27077 17.8392 8.70801V13.458C17.8392 15.6441 16.067 17.4163 13.8809 17.4163H5.96419C3.77807 17.4163 2.00586 15.6441 2.00586 13.458V5.54134C2.00586 3.35522 3.77807 1.58301 5.96419 1.58301H10.7142C11.1514 1.58301 11.5059 1.93745 11.5059 2.37467C11.5059 2.8119 11.1514 3.16634 10.7142 3.16634H5.96419Z" fill="#31AA21"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0515 2.23287C14.4676 1.81677 15.032 1.58301 15.6205 1.58301C16.2089 1.58301 16.7732 1.81677 17.1893 2.23287C17.6054 2.64897 17.8392 3.21332 17.8392 3.80177C17.8392 4.39023 17.6054 4.95458 17.1893 5.37068L16.5694 5.99067C16.2602 6.29984 15.7589 6.29984 15.4498 5.99067L13.4315 3.97245C13.1224 3.66328 13.1224 3.16203 13.4315 2.85286L14.0515 2.23287ZM12.3119 5.09203C12.0028 4.78286 11.5015 4.78286 11.1924 5.09203L7.66049 8.62393C7.55903 8.72535 7.48706 8.85249 7.45226 8.99166L6.77952 11.6827C6.71207 11.9524 6.79111 12.2378 6.98775 12.4345C7.18438 12.6311 7.46977 12.7101 7.73956 12.6427L10.4305 11.97C10.5697 11.9352 10.6969 11.8632 10.7983 11.7617L14.3302 8.22984C14.6394 7.9207 14.6394 7.41942 14.3302 7.11026L12.3119 5.09203Z" fill="#31AA21"/>
                      </svg>
                    </Button>
                    
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>{"« Prev"}</Button>
        <Pagination total={5} page={page} onChange={setPage} />
        <Button disabled={page === 5} onClick={() => setPage(page + 1)}>{"Next »"}</Button>
      </div>
    </div>
  );
};

export default TicketTable;
