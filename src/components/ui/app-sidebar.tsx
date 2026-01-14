import {
  Calendar,
  HeartPulse,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Typography } from "./typography";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import { Button } from "./button";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mx-auto flex pt-8 pb-12">
            <div className="text-primary flex items-center justify-center gap-2">
              <HeartPulse size={48} strokeWidth={2} />
              <Typography variant="h4" weight="bold">
                <p className="text-primary">Pulse</p>
              </Typography>
            </div>
          </SidebarGroupLabel>

          <SidebarGroupContent className="relative flex h-full flex-col items-center justify-center gap-12">
            <div className="mx-auto space-y-4">
              <Avatar className="border-destructive h-24 w-24 border-4">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <Typography align="center" variant="h3" color="destructive">
                  Arceus
                </Typography>
                <Typography align="center" variant="muted" weight="semibold">
                  Admin
                </Typography>
              </div>
            </div>
            <SidebarMenu className="space-y-2 px-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="bg-input text-foreground hover:bg-border flex justify-center py-6"
                  >
                    <Link href={item.url}>
                      <div className="text-primary hover:text-primary">
                        <item.icon size={24} strokeWidth={2} />
                      </div>
                      <Typography variant="muted" color="primary">
                        {item.title}
                      </Typography>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarContent className="absolute bottom-0 w-full">
        <SidebarGroup>
          <SidebarGroupContent className="px-5">
            <Button className="w-full">
              <Typography variant="p">Logout</Typography>
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
