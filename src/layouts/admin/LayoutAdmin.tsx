import { AudioWaveform, MapPinHouse, BookOpen, ChevronDown, Command, Frame, GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal, Bell, User, Users2, Settings, UserRoundCog, LayoutDashboard, Ticket, Calendar, HandHelping, LogInIcon, User2Icon, SearchIcon, ChevronRight, ChevronLeft } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/component/ui/dropdown-menu"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/component/ui/sidebar"
import { Button } from '@/component/ui/button'
import { Minus } from 'lucide-react';
import AnimateHeight from 'react-animate-height';
import { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTitle } from '@/reducers/documentSlice'
import { Link, Links, useLocation } from 'react-router'
import { Home, ChevronUp } from "lucide-react";
import { AudioOutlined, BellFilled } from '@ant-design/icons';
import { Input as antInput, Space, Button as antButton, Badge } from 'antd';



const { Search } = antInput;

const onSearch = (value: string) => console.log(value);
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);


const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/placeholder.svg?height=32&width=32",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",

        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    navMain: [
        {

            title: "Home page",
            items: [
                {
                    title: "Dashboard",
                    url: "/dashboard/admin",
                    icon: SquareTerminal,
                    isActive: true,
                },
                {
                    title: "Propertys",
                    url: "/properties/managment",
                    icon: MapPinHouse,
                },
                {
                    title: "Manager",
                    url: "#",
                    icon: User,
                },
                {
                    title: "Tenets",
                    url: "#",
                    icon: Users2,
                },
            ],
        },
        {
            title: "Payment - Services",
            items: [
                {
                    title: "Paymment History",
                    url: "#",
                    icon: Frame,
                },
                {
                    title: "Payment Settings",
                    url: "#",
                    icon: PieChart,
                },
                {
                    title: "Payment Reports",
                    url: "#",
                    icon: Map,
                },
            ],
        },
        {
            title: "Settings & Permissions",
            items: [
                {
                    title: "Property",
                    url: "#",
                    icon: Settings,
                },
                {
                    title: "User Management",
                    url: "#",
                    icon: UserRoundCog,
                },
                {
                    title: "Property Manager",
                    url: "#",
                    icon: UserRoundCog,
                },
            ],
        },
    ],
}

export default function RootLayoutAdmin({
    children,
}: {
    children: React.ReactNode
}) {

    const documentTitle = useSelector((state: any) => state);
    setTitle('Admin Documentation')
    useEffect(() => {
        document.title = `Dashboard || Kozzo Rooms`
    }, [documentTitle]);

    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1 , setIsOpen1] = useState(false);
    const isActive = (path: string) => location.pathname === path ? "--acvite1 bg-gray-200 dark:bg-gray-700 text-primary" : "";

    const location = useLocation();
    const [toggle, setToggle] = useState(false)


    const toggleHandle = () => {
        setToggle((prev) => !prev);
    };
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };
    return (
        <SidebarProvider>
            <div className="flex w-full">
                {/* Sidebar */}
                <Sidebar className={` lg:block border-r transition-all duration-300 ${toggle ? "w-10" : "w-64"}`} collapsible="icon">
                    <SidebarHeader className="flex justify-between items-center p-2">
                        {/* Show logo only when expanded */}    
                        {!toggle && <img src="/images/logo.png" className="logo-style ml-2" alt="Logo" />}
                    </SidebarHeader>
                    <SidebarContent className="sidebar_padding h-full">
                        <div className="p-4 text-gray-600">
                            <Link to="/dashboard/manager" className={`sidebar_link flex items-center ${isActive("/dashboard/manager")}`}>
                                <LayoutDashboard className="w-6 h-6 min-w-[20px]" />
                                <span className={`ml-3 transition-opacity duration-300 ${toggle ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>
                                    Dashboard
                                </span>
                            </Link>
                            <div>
                                <div
                                    className={`sidebar_link flex items-center cursor-pointer ${isOpen ? "--active1" : ""}`}
                                    onClick={() => setIsOpen(!isOpen)}
                                >
                                    <Home className="w-6 h-6 min-w-[20px]" />
                                    <span className={`ml-3 transition-opacity duration-300 ${toggle ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>
                                        Properties
                                    </span>
                                    {!toggle && (isOpen ? <ChevronUp className="w-4 h-4 ml-auto" /> : <ChevronDown className="w-4 h-4 ml-auto" />)}
                                </div>
                                {isOpen && !toggle && (
                                    <div className="ml-4 transition-all duration-300 ease-in-out relative">
                                
                                        <span className="w-[2px] bg-gray-400 absolute left-2 top-0 h-full"></span>

                                        <ul className="p-1 relative">
                                            <Link to={`/properties`} className={`py-2 flex items-center relative pl-6 ${isActive("/properties")}`}>
                               
                                                <span className="w-[12px] h-[2px] bg-gray-400 absolute left-2 top-1/2"></span>
                                                <span className="font-semibold">All Properties</span>
                                            </Link>

                                            <Link to={`/properties`} className={`py-2 flex items-center relative pl-6 ${isActive("/properties")}`}>
                                                <span className="w-[12px] h-[2px] bg-gray-400 absolute left-2 top-1/2"></span>
                                                Approval Requests
                                            </Link>

                                            <Link to={`/property/add`} className={`py-2 flex items-center relative pl-6 ${isActive("/property/add")}`}>
                                                <span className="w-[12px] h-[2px] bg-gray-400 absolute left-2 top-1/2"></span>
                                                Add new Property
                                            </Link>
                                        </ul>
                                    </div>
                                )}


                            </div>

                            <div>
                                <div
                                    className={`sidebar_link flex items-center cursor-pointer ${isOpen1 ? "--active1" : ""}`}
                                    onClick={() => setIsOpen1(!isOpen1)}
                                >
                                    <Home className="w-6 h-6 min-w-[20px]" />
                                    <span className={`ml-3 transition-opacity duration-300 ${toggle ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>
                                        Managers
                                    </span>
                                    {!toggle && (isOpen1 ? <ChevronUp className="w-4 h-4 ml-auto" /> : <ChevronDown className="w-4 h-4 ml-auto" />)}
                                </div>
                                {isOpen1 && !toggle && (
                                    <div className="ml-4 transition-all duration-300 ease-in-out relative">
                                
                                        <span className="w-[2px] bg-gray-400 absolute left-2 top-0 h-full"></span>

                                        <ul className="p-1 relative">
                                            <Link to={`/dashboard/manager`} className={`py-2 flex items-center relative pl-6 ${isActive("/dashboard/manager")}`}>
                               
                                                <span className="w-[12px] h-[2px] bg-gray-400 absolute left-2 top-1/2"></span>
                                                <span className="font-semibold">All Managers</span>
                                            </Link>
                                            <Link to={`/properties/managment`} className={`py-2 flex items-center relative pl-6 ${isActive("/properties/managment")}`}>
                                                <span className="w-[12px] h-[2px] bg-gray-400 absolute left-2 top-1/2"></span>
                                                Add New Manager
                                            </Link>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <Link to="/tenant" className={`sidebar_link flex items-center ${isActive("/tenant")}`}>
                                <HandHelping className="w-6 h-6 min-w-[20px]" />
                                <span className={`ml-3 transition-opacity duration-300 ${toggle ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>
                                    Tenants
                                </span>
                            </Link>
                            <Link to="/appointment" className={`sidebar_link flex items-center ${isActive("/appointment")}`}>
                                <Calendar className="w-6 h-6 min-w-[20px]" />
                                <span className={`ml-3 transition-opacity duration-300 ${toggle ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>
                                    Inquiries
                                </span>
                            </Link>
                            <Link to="/settings" className={`sidebar_link flex items-center ${isActive("/settings")}`}>
                                <Settings className="w-6 h-6 min-w-[20px]" />
                                <span className={`ml-3 transition-opacity duration-300 ${toggle ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>
                                    Payments
                                </span>
                            </Link>
                            <Link to="/settings" className={`sidebar_link flex items-center ${isActive("/settings")}`}>
                                <Settings className="w-6 h-6 min-w-[20px]" />
                                <span className={`ml-3 transition-opacity duration-300 ${toggle ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>
                                    Settings
                                </span>
                            </Link>
                            <Link to="/login-sheet" className={`sidebar_link flex items-center ${isActive("/login-sheet")}`}>
                                <User2Icon className="w-6 h-6 min-w-[20px]" />
                                <span className={`ml-3 transition-opacity duration-300 ${toggle ? "opacity-0 w-0" : "opacity-100 w-auto"}`}>
                                    Login Sheet
                                </span>
                            </Link>
                        </div>
                    </SidebarContent>
                    <SidebarFooter className="p-2">
                        {!toggle && <img src="/images/Support.png" className="logo-style" alt="Support" style={{ width: "67%" }} />}
                    </SidebarFooter>
                </Sidebar>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <header className="flex items-center justify-between px-6 py-4 ">
                        <div className="flex items-center">
                            <SidebarTrigger onClick={toggleHandle} />
                            <Search
                                placeholder="What do you search today"
                                variant="borderless"
                                onSearch={onSearch}
                                style={{
                                    width: 500,
                                    background: "rgba(0, 0, 0, 0.06)",
                                    borderRadius: "37px"
                                }}
                            />
                            <div className='time_date'><p>09:30 AM    Friday, 07 Jan 2025</p></div>
                            <div className='TIME-DATE'></div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Badge count={5}>
                                <Button className="bellicon_btn" variant="ghost" size="icon">
                                    <BellFilled className="bellicon" />
                                </Button>
                            </Badge>
                            <span className='pipe'></span>
                            <div className="relative flex items-center">
                                {/* Profile Image */}
                                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                                    <img
                                        src="https://github.com/shadcn.png"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* User Details */}
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold text-gray-800">Garp Jhons</h3>
                                    <p className="text-sm text-gray-500">Property Manager</p>
                                </div>


                            </div>
                        </div>
                    </header>
                    <main className="flex-1 overflow-y-auto p-6">
                        {children}
                    </main>
                </div>
            </div>
        </SidebarProvider >
    )
}

