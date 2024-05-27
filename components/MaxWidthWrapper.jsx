import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={cn(
        "w-full max-w-screen-xl mx-auto px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
