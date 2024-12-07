import { AudioWaveform, Bot, BookOpen, ChevronDown, Command, Frame, GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal, Bell } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

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
            title: "Dashboard",
            items: [
                {
                    title: "Dashboard",
                    url: "#",
                    icon: SquareTerminal,
                    isActive: true,
                },
                {
                    title: "User",
                    url: "#",
                    icon: Bot,
                },
                {
                    title: "Documentation",
                    url: "#",
                    icon: BookOpen,
                },
                {
                    title: "Settings",
                    url: "#",
                    icon: Settings2,
                },
            ],
        },
        {
            title: "Projects",
            items: [
                {
                    title: "Design Engineering",
                    url: "#",
                    icon: Frame,
                },
                {
                    title: "Sales & Marketing",
                    url: "#",
                    icon: PieChart,
                },
                {
                    title: "Travel",
                    url: "#",
                    icon: Map,
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
    return (
        <SidebarProvider>
            <div className="flex w-full">
                <Sidebar className="hidden lg:block border-r" collapsible="icon">
                    <SidebarHeader>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className="flex w-full items-center gap-2 rounded-md p-2 text-sm font-medium text-left hover:bg-accent">
                                    <div className="flex h-5 w-5 items-center justify-center rounded-sm border bg-background">
                                        <GalleryVerticalEnd className="h-3 w-3" />
                                    </div>
                                    <ChevronDown className="h-4 w-4 text-muted-foreground opacity-50" />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start" className="w-[180px]">
                                <DropdownMenuItem>
                                    <GalleryVerticalEnd className="mr-2 h-4 w-4" />
                                    Acme Inc
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <AudioWaveform className="mr-2 h-4 w-4" />
                                    Acme Corp
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Command className="mr-2 h-4 w-4" />
                                    Evil Corp
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarHeader>
                    <SidebarContent>
                        {data.navMain.map((section) => (
                            <SidebarGroup key={section.title}>
                                <SidebarGroupLabel className="text-xs font-medium text-muted-foreground">{section.title}</SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {section.items.map((item) => (
                                            <SidebarMenuItem key={item.title}>
                                                <SidebarMenuButton asChild isActive={item.isActive}>
                                                    <a href={item.url} className="flex items-center gap-2 text-sm">
                                                        <item.icon className="h-4 w-4 text-muted-foreground" />
                                                        {item.title}
                                                    </a>
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

