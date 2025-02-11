import { GridIcon, ListChecksIcon, ListIcon, ToggleRight } from 'lucide-react';
import React, { ReactNode, useState } from 'react';
import '../PropertyList/style.css';
import PropertyManagerTable from './PropertyList';
import PropertyManagerGrid from './propertygrid';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [tab, settab] = useState("List")
  return (
    <div>
      <div className="flex justify-between ...">
        <div>
          <p style={{ marginBottom: 10, fontSize: 14, color: "#666" }}>
            <a href="#">Home</a> &gt; <a href="#">Properties</a> &gt;{" "}
            <span className='main-color' >Property Manager</span>
          </p>
        </div>
        <div className=''>
          <ul className='icon_list_grid gap-2'>
            <li className='cursor-pointer' onClick={() => settab('List')}>
              <ListIcon className={`icon_list ${tab === 'List' && 'acvite'} `} />
            </li>
            <li className='cursor-pointer' onClick={() => settab('Grid')}>
              <GridIcon className={`icon_grid icon_list ${tab === 'Grid' && 'acvite'} `} />
            </li>
          </ul>
        </div>
      </div>
      {tab === 'List' ? <PropertyManagerTable /> : <PropertyManagerGrid />}
    </div>
  );
}
