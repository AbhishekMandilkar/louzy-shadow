import {cn} from "@/lib/utils";

function TabHeader({ children, className }: { children: React.ReactNode, className?: string}) {
  return (
    <h2
      className={cn(
        "scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0 py-2 items-center",
        className
      )}
    >
      {children}
    </h2>
  );
}

export default TabHeader;
