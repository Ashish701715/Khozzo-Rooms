import { useState } from "react";
import { Button, Card, Tabs, Tab, Avatar } from "@nextui-org/react";
import { Bell, ChevronLeft, ChevronRight } from "lucide-react";

const allAppointments = Array(20).fill(null).map((_, index) => ({
  id: index.toString(),
  VisitorName: "John Doe",
  AppointmentDate: "Mar 23, 2024, 13:00 PM",
  PropertyDetails: "2 Bedrooms",
  PropertyLocation: "Naar Tower, Mohali",
  Status: ["Pending", "Confirmed", "Completed"][index % 3],
  ScheduledBy: { name: "Ashish Singh", avatar: "https://via.placeholder.com/40" },
}));

export default function AppointmentDashboard() {
  const [selectedTab, setSelectedTab]:any = useState("Pending");
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 8;

  // Filter appointments based on selected status
  const filteredAppointments = allAppointments.filter(appointment => appointment.Status === selectedTab);
  
  // Pagination Logic
  const totalPages = Math.ceil(filteredAppointments.length / appointmentsPerPage);
  const displayedAppointments = filteredAppointments.slice((currentPage - 1) * appointmentsPerPage, currentPage * appointmentsPerPage);

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen">

      {/* Tabs for Appointment Status */}
      <div className="mt-4">
        <Tabs selectedKey={selectedTab} onSelectionChange={(key) => { setSelectedTab(key); setCurrentPage(1); }}>
          <Tab key="Pending" title="Pending" />
          <Tab key="Confirmed" title="Confirmed" />
          <Tab key="Completed" title="Completed" />
        </Tabs>
      </div>

      {/* Appointments Grid */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        {displayedAppointments.map((appointment, index) => (
          <Card key={index} className={`p-4 border-l-4 ${appointment.Status === "Pending" ? "border-yellow-500" : appointment.Status === "Confirmed" ? "border-blue-500" : "border-green-500"}`}>
            <div className="flex items-center space-x-2">
              <Avatar src={appointment.ScheduledBy.avatar} />
              <div>
                <h3 className="font-semibold">{appointment.VisitorName}</h3>
                <p className="text-gray-500">{appointment.PropertyDetails} - {appointment.PropertyLocation}</p>
                <p className="text-gray-500">Appointment: {appointment.AppointmentDate}</p>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
              <span>Scheduled by: {appointment.ScheduledBy.name}</span>
              <span className={appointment.Status === "Pending" ? "text-yellow-500" : appointment.Status === "Confirmed" ? "text-blue-500" : "text-green-500"}>
                ● {appointment.Status}
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <Button variant="light" startContent={<ChevronLeft />} disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
        <div className="space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <Button key={index} variant={currentPage === index + 1 ? "solid" : "light"} onClick={() => setCurrentPage(index + 1)}>
              {index + 1}
            </Button>
          ))}
        </div>
        <Button variant="light" endContent={<ChevronRight />} disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
      </div>
    </div>
  );
}
