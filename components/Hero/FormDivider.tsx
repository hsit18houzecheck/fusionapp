import { cn } from "@/lib/utils";

type FormDividerProps = {
  className?: string;
  mobileVisibility?: boolean;
};

export default function FormDivider({ className, mobileVisibility = false }: FormDividerProps) {
  return (
    <>
      <div 
        className={cn("hidden md:block w-px h-12 bg-peach-500", className)} 
        aria-hidden="true" 
      />
      {mobileVisibility && <div 
        className={cn("md:hidden h-px w-full bg-peach-500 my-2.5", className)} 
        aria-hidden="true" 
      />}
    </>
  );
}

