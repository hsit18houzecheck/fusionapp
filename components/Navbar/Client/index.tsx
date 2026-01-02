"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MdMenu, MdOutlineLocalPhone } from "react-icons/md";
import { cn } from "@/lib/utils";
import MobileLink from "./MobileLink";
import type { Logo, NavLink } from "../types";

type NavBarProps = {
  links: NavLink[];
  logo: Logo;
  logoMobile: Logo;
  partnerLink: {
    label: string;
    url: string;
  };
  contactNumber: string;
};

const NavBarClient = ({
  links,
  logo,
  logoMobile,
  partnerLink,
  contactNumber,
}: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setIsOpen(false);
        setExpandedItem(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper to render a single desktop menu item (dropdown or direct link)
  const renderDesktopItem = (link: NavLink) => {
    const hasChildren = !!link.children?.length;
    return (
      <NavigationMenuItem>
        {hasChildren ? (
          <>
            <NavigationMenuTrigger
              className="h-12 px-3.5 py-3.5 rounded-[10px] bg-transparent text-foreground font-semibold text-xs xl:text-sm"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>{link.label}</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent
              className="outline-none border-0"
              role="menu"
              aria-label={`${link.label} submenu`}
            >
              <ul className="w-[250px] bg-white-100 rounded-[10px]">
                {link.children!.map((child, childIndex) => (
                  <li key={childIndex} role="none">
                    <NavigationMenuLink asChild>
                      <Link
                        href={child.url || "/"}
                        className="block select-none rounded-md p-3 no-underline outline-none text-foreground font-medium text-xs xl:text-sm"
                        role="menuitem"
                      >
                        {child.label}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </>
        ) : (
          <NavigationMenuLink asChild>
            <Link
              href={link.url || "/"}
              className="inline-flex h-12 items-center justify-center rounded-[10px] bg-transparent px-3.5 py-3.5 font-semibold transition-colors text-foreground text-xs xl:text-sm"
              role="menuitem"
            >
              {link.label}
            </Link>
          </NavigationMenuLink>
        )}
      </NavigationMenuItem>
    );
  };

  return (
    <nav
      className="w-full backdrop-blur-xl bg-yellow-100/80 py-6 sticky top-0 z-50 font-semibold shadow-md"
      role="navigation"
      aria-label="Main navigation"
      style={{
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
      }}
    >
      <div className="flex items-center justify-between md:max-w-[110rem] px-6 md:px-10 mx-auto">
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="Houzecheck homepage"
          >
            <Image
              src={logo?.url}
              alt="Houzecheck logo"
              width={133}
              height={32}
              className="md:hidden"
              priority
            />
            <Image
              src={logo?.url}
              alt="Houzecheck logo"
              width={153}
              height={36}
              className="hidden md:block"
              priority
            />
          </Link>
        </div>

        <div
          className="hidden lg:flex items-center justify-center flex-1"
          role="menubar"
          aria-label="Main menu"
        >
          <NavigationMenu className="relative z-10" viewport={false}>
            <NavigationMenuList className="flex gap-2">
              {links?.map((link, index) => (
                <div key={index}>{renderDesktopItem(link)}</div>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div
          className="hidden lg:flex items-center gap-2"
          role="group"
          aria-label="Contact actions"
        >
          <Button
            variant="ghost"
            className="h-12 px-3.5 py-3.5 rounded-[10px] bg-transparent text-foreground font-semibold text-xs xl:text-sm"
            asChild
          >
            <Link href={partnerLink.url || "/"} aria-label={partnerLink.label}>
              {partnerLink.label}
            </Link>
          </Button>
          <Button
            className="h-12 px-3.5 py-3.5 rounded-[10px] bg-yellow-500 text-foreground font-semibold text-xs lg:text-sm"
            asChild
          >
            <Link
              href={`tel:${contactNumber.replace(/\s+/g, "")}`}
              aria-label={`Call us at ${contactNumber}`}
            >
              <MdOutlineLocalPhone className="w-5 h-5" aria-hidden="true" />
              <span>{contactNumber}</span>
            </Link>
          </Button>
        </div>

        <div
          className="flex lg:hidden items-center gap-2"
          role="group"
          aria-label="Mobile contact and menu"
        >
          <Button
            className={cn(
              "h-11 w-11 p-3 rounded-[10px] bg-yellow-500 text-foreground"
            )}
            size="icon"
            asChild
          >
            <Link
              href={`tel:${contactNumber.replace(/\s+/g, "")}`}
              aria-label={`Call us at ${contactNumber}`}
            >
              <MdOutlineLocalPhone className="w-5 h-5" aria-hidden="true" />
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "h-11 w-11 p-3 rounded-[10px] bg-transparent text-foreground"
                )}
                size="icon"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <MdMenu className="w-6 h-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] backdrop-blur-xl bg-background/80 border-l border-yellow-500/20 p-0 shadow-lg"
              overlayProps={{ className: "hidden" }}
              id="mobile-menu"
              aria-label="Mobile navigation menu"
              style={{
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
              }}
            >
              <div className="flex flex-col h-full">
                <div className="pt-6 px-6 pb-4">
                  <Link
                    href="/"
                    aria-label="Houzecheck homepage"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src={logo?.url}
                      alt="Houzecheck logo"
                      width={133}
                      height={32}
                    />
                  </Link>
                </div>
                <nav
                  className="flex flex-col w-full px-6 items-end flex-1"
                  role="navigation"
                  aria-label="Mobile menu items"
                >
                  {links?.map((link, index) => (
                    <MobileLink
                      key={index}
                      link={link}
                      expandedItem={expandedItem}
                      toggleExpand={toggleExpand}
                      setIsOpen={setIsOpen}
                    />
                  ))}
                  <MobileLink
                    key="partner"
                    link={partnerLink}
                    expandedItem={expandedItem}
                    toggleExpand={toggleExpand}
                    setIsOpen={setIsOpen}
                  />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBarClient;
