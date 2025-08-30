import { AudioWaveform, MapPinHouse, BookOpen, ChevronDown, Command, Frame, GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal, Bell, User, Users2, Settings, UserRoundCog, LayoutDashboard, Ticket, Calendar, HandHelping, LogInIcon, User2Icon, SearchIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from '@/components/ui/button'
import { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTitle } from '@/reducers/documentSlice'
import { Link, useLocation } from 'react-router'
import { Home, ChevronUp } from "lucide-react";
import { AudioOutlined, BellFilled } from '@ant-design/icons';
import { Input as antInput, Space, Button as antButton, Badge } from 'antd';
import LoginPage from '@/features/Auth/layout'


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

// This is sample data - replace with your actual data
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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const documentTitle = useSelector((state: any) => state);
    setTitle('Admin Documentation')
    useEffect(() => {
        document.title = `Dashboard || Kozzo Rooms`
    }, [documentTitle]);
    const location = useLocation();
    return (
        <SidebarProvider>
            <div className="flex w-full">
                <Sidebar className="hidden lg:block border-r" collapsible="icon">
                    <SidebarHeader>
                        <img src="/images/logo.png" className='logo-style' alt="" />
                    </SidebarHeader>
                    <SidebarContent className='sidebar_padding h-[100%]'>
                        <div className=" p-4 text-gray-600">
                            <div className="sidebar_link flex --acvite1">
                                <LayoutDashboard className="w-5 h-5 mr-2" />
                                <span className=''>Dashbord</span>
                            </div>
                            {/* Top-Level Menu Item */}
                            <div className="sidebar_link flex --acvite2">
                                <Home className="w-5 h-5 mr-2" />
                                <span className=''>Properties</span>
                                <ChevronUp className="w-4 h-4 ml-auto" />
                            </div>

                            {/* Submenu */}
                            <div className=" ml-6 ">
                                <div className='submenu_border '>
                                    <div className="relative menu_color --acvite3">
                                        <div className="sidebar_sublink">
                                            <div className="absolute border-center"></div>
                                            Manage Properties
                                        </div>
                                    </div>

                                    <div className="relative menu_color">
                                        <div className="absolute  border-center2"></div>
                                        <div className="sub_end_menu">Property Manager</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar_link flex">
                                <Ticket className="w-5 h-5 mr-2" />
                                <span className=''>Ticket</span>
                                <ChevronDown className="w-4 h-4 ml-auto" />
                            </div>
                            <div className="sidebar_link flex">
                                <Calendar className="w-5 h-5 mr-2" />
                                <span className=''>Appointment</span>
                                <ChevronDown className="w-4 h-4 ml-auto" />
                            </div>
                            <div className="sidebar_link flex">
                                <HandHelping className="w-5 h-5 mr-2" />
                                <span className=''>Tenants</span>
                            </div>
                            <div className="sidebar_link flex">
                                <Settings className="w-5 h-5 mr-2" />
                                <span className=''>Settings</span>
                            </div>
                            <div className="sidebar_link flex">
                                <User2Icon className="w-5 h-5 mr-2" />
                                <span className=''>Login Sheet</span>
                            </div>
                        </div>

                    </SidebarContent>
                    <SidebarFooter>
                        <img src="/images/Support.png" className='logo-style' alt="" />
                        {/* <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex w-full items-center gap-2 rounded-md p-2 text-left text-sm bg-accent">
                                    <Avatar className="h-6 w-6">
                                        <AvatarImage src={data.user.avatar} alt={data.user.name} />
                                        <AvatarFallback>SC</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                        <div className="font-medium">{data.user.name}</div>
                                        <div className="text-xs text-muted-foreground">{data.user.email}</div>
                                    </div>
                                    <ChevronDown className="h-4 w-4 text-muted-foreground opacity-50" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-[180px]">
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Log out</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu> */}
                    </SidebarFooter>
                </Sidebar>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <header className="flex items-center justify-between px-6 py-4 ">
                        <div className="flex items-center">
                            <SidebarTrigger />
                            <Search
                                placeholder="What do you search today"
                                variant="borderless"
                                onSearch={onSearch}
                                style={{
                                    width: 500,
                                    background: "rgba(0, 0, 0, 0.06)",
                                    borderRadius: "37px"
                                }}
                                iconRender={() => (
                                    <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 24,
                                        height: 24,
                                        borderRadius: "50%",
                                        background: "linear-gradient(180deg, #0087E5 0%, #156DAB 100%)"
                                    }}
                                    >
                                    <SearchIcon style={{ border: "none", color: "#fff" }} />
                                    </div>
                                )}
                                />
                           <div className='time_date'><p>09:30 AM    Friday, 07 Jan 2025</p></div>
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
                                    src="https://github.com/shadcn.png" // Replace with actual image URL
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

