import { cn } from "@/lib/utils";
import React from "react";

export default function IconButton({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      data-slot="button"
      className={cn(
        "flex size-[46px] cursor-pointer items-center justify-center rounded-full transition-all duration-300",
        className,
      )}
      {...props}
    />
  );
}
