import React, { useState, FC } from "react";
import { Card, Tabs, Row, Col, Tag, Pagination, Button } from "antd";
import { FilterOutlined, EditOutlined, CheckCircleFilled } from "@ant-design/icons";
import { CheckCircle, CheckIcon, Eye } from "lucide-react";

const { TabPane } = Tabs;
const PAGE_SIZE: number = 6;

interface Ticket {
  location: string;
  ticketID: string;
  subject: string;
  date: string;
  status: string;
}

const allTickets: Record<string, Ticket[]> = {
  open: Array.from({ length: 16 }, (_, i) => ({
    location: "Naar Tower, Mohali",
    avatar: "/images/dummy-property.png",
    ticketID: `#00${i + 1}`,
    subject: `Issue ${i + 1}`,
    date: `18 Jan, 2025`,
    status: "Open",
  })),
  inProgress: Array.from({ length: 10 }, (_, i) => ({
    location: "Naar Tower, Mohali",
    avatar: "/images/dummy-property.png",
    ticketID: `#01${i + 1}`,
    subject: `Problem ${i + 1}`,
    date: `19 Jan, 2025`,
    status: "In Progress",
  })),
  resolved: Array.from({ length: 8 }, (_, i) => ({
    location: "Naar Tower, Mohali",
    avatar: "/images/dummy-property.png",
    ticketID: `#02${i + 1}`,
    subject: `Fixed ${i + 1}`,
    date: `20 Jan, 2025`,
    status: "Resolved",
  })),
};

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: FC<TicketCardProps> = ({ ticket }: any) => (
  <Card className="card_style" hoverable style={{ borderLeft: `7px solid ${ticket.status === "Open" ? "green" : ticket.status === "In Progress" ? "orange" : "blue"} `}}>
    <Tag className="status_icon" color={ticket.status === "Open" ? "green" : ticket.status === "In Progress" ? "orange" : "blue"} style={{ float: "right" }}>
      <CheckCircleFilled /> {ticket.status}
    </Tag>
    <div className="ticket_profile"> 
      <img 
        src={ticket?.avatar} 
        alt="User Avatar" 
      />
      <h3>{ticket?.location}</h3>
    </div>
    <h3>
      Ticket ID:{ticket.ticketID}
    </h3>
    <h3>
      <strong>Subject:</strong> {ticket.subject}
    </h3>
    
    <div className="card_bottom">
      <Row gutter={[16, 16]} >
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <p>{ticket.date}</p>
        </Col>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
        <div style={{ textAlign: "right" }}>
          <Button type="link" icon={<Eye />} />
          <Button type="link" icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.96419 3.16634C4.65252 3.16634 3.58919 4.22967 3.58919 5.54134V13.458C3.58919 14.7697 4.65252 15.833 5.96419 15.833H13.8809C15.1926 15.833 16.2559 14.7697 16.2559 13.458V8.70801C16.2559 8.27077 16.6103 7.91634 17.0475 7.91634C17.4848 7.91634 17.8392 8.27077 17.8392 8.70801V13.458C17.8392 15.6441 16.067 17.4163 13.8809 17.4163H5.96419C3.77807 17.4163 2.00586 15.6441 2.00586 13.458V5.54134C2.00586 3.35522 3.77807 1.58301 5.96419 1.58301H10.7142C11.1514 1.58301 11.5059 1.93745 11.5059 2.37467C11.5059 2.8119 11.1514 3.16634 10.7142 3.16634H5.96419Z" fill="#31AA21" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0515 2.23287C14.4676 1.81677 15.032 1.58301 15.6205 1.58301C16.2089 1.58301 16.7732 1.81677 17.1893 2.23287C17.6054 2.64897 17.8392 3.21332 17.8392 3.80177C17.8392 4.39023 17.6054 4.95458 17.1893 5.37068L16.5694 5.99067C16.2602 6.29984 15.7589 6.29984 15.4498 5.99067L13.4315 3.97245C13.1224 3.66328 13.1224 3.16203 13.4315 2.85286L14.0515 2.23287ZM12.3119 5.09203C12.0028 4.78286 11.5015 4.78286 11.1924 5.09203L7.66049 8.62393C7.55903 8.72535 7.48706 8.85249 7.45226 8.99166L6.77952 11.6827C6.71207 11.9524 6.79111 12.2378 6.98775 12.4345C7.18438 12.6311 7.46977 12.7101 7.73956 12.6427L10.4305 11.97C10.5697 11.9352 10.6969 11.8632 10.7983 11.7617L14.3302 8.22984C14.6394 7.9207 14.6394 7.41942 14.3302 7.11026L12.3119 5.09203Z" fill="#31AA21" />
          </svg>} />
        </div>
        </Col>
  </Row>
  </div>
    
  </Card>
);

const TicketManagement = () => {
  const [currentTab, setCurrentTab] = useState<string>("open");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const tickets = allTickets[currentTab] || [];

  const paginatedTickets = tickets.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div >
      <Tabs activeKey={currentTab} onChange={(key) => { setCurrentTab(key); setCurrentPage(1); }}>
        <TabPane tab="Open Tickets" key="open">
          <TicketList tickets={paginatedTickets} />
        </TabPane>
        <TabPane tab="In Progress" key="inProgress">
          <TicketList tickets={paginatedTickets} />
        </TabPane>
        <TabPane tab="Resolved" key="resolved">
          <TicketList tickets={paginatedTickets} />
        </TabPane>
      </Tabs>

      <Pagination
        current={currentPage}
        onChange={setCurrentPage}
        total={tickets.length}
        pageSize={PAGE_SIZE}
        style={{ textAlign: "center", marginTop: "24px" }}
      />
    </div>
  );
};

interface TicketListProps {
  tickets: Ticket[];
}

const TicketList: FC<TicketListProps> = ({ tickets }) => (
  <Row gutter={[16, 16]} >
    {tickets.length > 0 ? (
      tickets.map((ticket, index) => (
        <Col xs={24} sm={12} md={24} lg={12} xl={8} xxl={6} key={index}>
          <TicketCard ticket={ticket} />
        </Col>
      ))
    ) : (
      <p style={{ textAlign: "center", width: "100%" }}>No tickets found.</p>
    )}
  </Row>
);

export default TicketManagement;