import Link from "next/link";
import { BiChevronDown } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type NavLink } from "../types";

type MobileLinkProps = {
  link: NavLink;
  expandedItem: string | null;
  toggleExpand: (label: string) => void;
  setIsOpen: (isOpen: boolean) => void;
};

const getSubmenuId = (label: string) =>
  `submenu-${label.replace(/\s+/g, "-").toLowerCase()}`;

const MobileLink = ({
  link,
  expandedItem,
  toggleExpand,
  setIsOpen,
}: MobileLinkProps) => {
  const isExpanded = expandedItem === link.label;
  const hasChildren = !!link.children?.length;
  const submenuId = getSubmenuId(link.label);

  if (!hasChildren) {
    return (
      <Link
        href={link.url  || "/"}
        className={cn(
          "block w-full py-4 px-3 font-bold text-right rounded-md text-xs lg:text-sm hover:text-foreground text-foreground",
        )}
        onClick={() => setIsOpen(false)}
      >
        {link.label}
      </Link>
    );
  }

  return (
    <div className="w-full">
      <Button
        variant="ghost"
        onClick={() => toggleExpand(link.label)}
        className={cn(
          "w-full flex items-center justify-end gap-2 py-4 h-auto text-right rounded-md text-xs lg:text-sm transition-colors text-foreground",
          {
            "font-bold": !isExpanded,
            "font-extrabold": isExpanded,            
          }
        )}
        aria-expanded={isExpanded}
        aria-controls={submenuId}
        aria-label={`${link.label} menu`}
      >
        <span>{link.label}</span>
        <BiChevronDown
          className={cn("w-5 h-5 transition-transform", {
            "rotate-180": isExpanded,
          })}
          aria-hidden="true"
        />
      </Button>

      {isExpanded && (
        <nav
          className="flex flex-col items-end pr-4 pb-2"
          id={submenuId}
          role="navigation"
          aria-label={`${link.label} submenu`}
        >
          {link.children!.map((child, childIndex) => (
            <Link
              key={childIndex}
              href={child.url  || "/"}
              className={cn(
                "py-3 font-semibold text-foreground text-right rounded-md transition-colors text-xs lg:text-sm"
              )}
              onClick={() => setIsOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default MobileLink;
