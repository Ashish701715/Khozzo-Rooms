import { GridIcon, ListChecksIcon, ListIcon, ToggleRight } from 'lucide-react';
import React, { ReactNode, useState } from 'react';
import '../properties/style.css';
import PropertyAdminTable from './propertyList';
import PropertyAdminGrid from './propertyGrid';
import { useNavigate } from 'react-router';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate()
  const [tab, settab] = useState("List")

  const handleproperties = ()=>{
    navigate('/property/add')
  }


  return (
    <div>
      <div className="flex justify-between ...">
        <div>
          <p style={{ marginBottom: 10, fontSize: 14, color: "#666" }}>
            <a href="#">Home</a> &gt; <a href="#">Properties</a> &gt;{" "}
            <span className='main-color' >Property Manager</span>
          </p>
        </div>
        
    {/* Add Properties Button */}
  

    {/* Icon List/Grid Toggle */}
    <div className="flex gap-4">
        <ul className="flex gap-2">
            <li className="cursor-pointer" onClick={() => settab('List')}>
                <ListIcon className={`icon_list ${tab === 'List' ? 'active' : ''}`} />
            </li>
            <li className="cursor-pointer" onClick={() => settab('Grid')}>
                <GridIcon className={`icon_grid icon_list ${tab === 'Grid' ? 'active' : ''}`} />
            </li>
        </ul>
    </div>


      </div>
      {tab === 'List' ? <PropertyAdminTable /> : <PropertyAdminGrid />}
    </div>
  );
}
