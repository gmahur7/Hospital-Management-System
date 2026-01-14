"use client";

import * as React from "react";
import {
  Calendar,
  HeartPulse,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Typography } from "@/components/ui/typography";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
      isActive: true,
      // items: [
      //   {
      //     title: "History",
      //     url: "#",
      //   },
      //   {
      //     title: "Starred",
      //     url: "#",
      //   },
      //   {
      //     title: "Settings",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Inbox",
      url: "/inbox",
      icon: Inbox,
      // items: [
      //   {
      //     title: "Genesis",
      //     url: "#",
      //   },
      //   {
      //     title: "Explorer",
      //     url: "#",
      //   },
      //   {
      //     title: "Quantum",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Calendar",
      url: "/calendar",
      icon: Calendar,
      // items: [
      //   {
      //     title: "Introduction",
      //     url: "#",
      //   },
      //   {
      //     title: "Get Started",
      //     url: "#",
      //   },
      //   {
      //     title: "Tutorials",
      //     url: "#",
      //   },
      //   {
      //     title: "Changelog",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Search",
      url: "/search",
      icon: Search,
      // items: [
      //   {
      //     title: "General",
      //     url: "#",
      //   },
      //   {
      //     title: "Team",
      //     url: "#",
      //   },
      //   {
      //     title: "Billing",
      //     url: "#",
      //   },
      //   {
      //     title: "Limits",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  return (
    <Sidebar collapsible="icon" {...props} suppressHydrationWarning>
      <SidebarHeader>
        <SidebarGroupLabel
          className={`mx-auto flex transition-all duration-200 ${
            isCollapsed ? "pt-4 pb-6" : "pt-8 pb-6"
          }`}
        >
          <div className="text-primary flex items-center justify-center gap-2">
            <HeartPulse
              size={isCollapsed ? 32 : 48}
              strokeWidth={2}
              className="transition-all duration-200"
            />
            {!isCollapsed && (
              <Typography
                variant="h4"
                weight="bold"
                className="transition-opacity duration-200"
              >
                <span className="text-primary">Pulse</span>
              </Typography>
            )}
          </div>
        </SidebarGroupLabel>

        {!isCollapsed && (
          <div className="mx-auto space-y-4 pb-4 transition-all duration-200">
            <Avatar className="border-destructive mx-auto h-24 w-24 border-4">
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
        )}

        {isCollapsed && (
          <div className="mx-auto pb-4 transition-all duration-200">
            <Avatar className="border-destructive mx-auto h-8 w-8 border-2">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="text-xs">CN</AvatarFallback>
            </Avatar>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
