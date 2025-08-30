import { FilterIcon, GridIcon, ListChecksIcon, ListIcon, ToggleRight } from 'lucide-react';
import React, { ReactNode, useState } from 'react';
import '../Ticket/style.css';
import TicketTable from './Ticketlist';
import TicketGrid from './Ticketgrid';
import {
  Button,
} from "@nextui-org/react";
import { Filter, MoreVertical, Eye, PhoneCall, Edit2Icon } from "lucide-react";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout() {
  const [tab, settab] = useState("List")
  return (
    <div className='p-0'>
      <div className="flex justify-between ...">
        <div>
            {/* Breadcrumb */}
                <p style={{ marginBottom: 10, fontSize: 14, color: "#666" }}>
                  <a href="#">Home</a> &gt; <span style={{ color: "#007bff" }}>Ticket</span>
                </p>
        </div>
        <div className='flex'>
          <ul className='icon_list_grid gap-2'>
            <li className='cursor-pointer' onClick={() => settab('List')}>
              <ListIcon className={`icon_list ${tab === 'List' && 'acvite'} `} />
            </li>
            <li className='cursor-pointer' onClick={() => settab('Grid')}>
              <GridIcon className={`icon_grid icon_list ${tab === 'Grid' && 'acvite'} `} />
            </li>
          </ul>
          <div className="flex justify-between mb-4">
        <Button className='filter_top_btn'><FilterIcon/> Filters</Button>
      </div>
        </div>
      </div>
      {tab === 'List' ? <TicketTable /> : <TicketGrid />}
    </div>
  );
}
