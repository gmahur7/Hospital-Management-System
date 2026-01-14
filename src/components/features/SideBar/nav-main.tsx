"use client";

import { type LucideIcon } from "lucide-react";

import { Collapsible } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();
  // const router = useRouter();

  // const handleRouting = (url: string) => {
  //   if (url) {
  //     router.push(url);
  //   }
  // };

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              {/* <CollapsibleTrigger asChild> */}
              <SidebarMenuButton
                size={"lg"}
                tooltip={item.title}
                className={`hover:bg-primary mx-auto my-0.5 max-w-44 cursor-pointer py-5 ${pathname === item.url ? "bg-primary" : "bg-transparent"}`}
                // onClick={() => handleRouting(item?.url)}
              >
                <Link
                  className="flex items-center gap-2 text-white"
                  href={item.url}
                >
                  {item.icon && <item.icon className="pl-2" />}
                  <span>
                    <Typography variant="small" color="default">
                      {item.title}
                    </Typography>
                  </span>
                </Link>
                {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
              </SidebarMenuButton>
              {/* </CollapsibleTrigger> */}
              {/* <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent> */}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
