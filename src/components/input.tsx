import { ComponentProps } from "react";
import { cn } from "@/lib/tw-merge"

interface ButtonProps extends ComponentProps<"input"> {
}

export function Input({className, ...props  }: ButtonProps) {
  return (
      <input
        {...props}
        className={cn("bg-transparent text-lg placeholder:zinc-400 w-full outline-none", className)}
      />
  );
}
