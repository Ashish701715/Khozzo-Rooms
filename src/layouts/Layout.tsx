import { AudioWaveform, MapPinHouse, BookOpen, ChevronDown, Command, Frame, GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal, Bell, User, Users2, Settings, UserRoundCog } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useEffect, useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTitle } from '@/reducers/documentSlice'
import { Link, useLocation } from 'react-router'

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
                        <img src="https://boostupinfinity.com/imgs/logo.png" className='' alt="" width={50} />
                    </SidebarHeader>
                    <SidebarContent>
                        {data.navMain.map((section) => (
                            <SidebarGroup key={section.title}>
                                <SidebarGroupLabel className="text-xs font-medium text-muted-foreground">{section.title}</SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {section.items.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                                                    <Link to={item.url} className="flex items-center gap-2 text-sm">
                                                        <item.icon className="h-4 w-4 text-muted-foreground" />
                                                        {item.title}
                                                    </Link>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        ))}
                    </SidebarContent>
                    <SidebarFooter>
                        <DropdownMenu>
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
                        </DropdownMenu>
                    </SidebarFooter>
                </Sidebar>
                <div className="flex flex-col flex-1 overflow-hidden">
                    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
                        <div className="flex items-center">
                            <SidebarTrigger />
                            <Input className="ml-4" placeholder="Search..." />
                        </div>
                        <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="icon">
                                <Bell className="h-5 w-5" />
                            </Button>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
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

