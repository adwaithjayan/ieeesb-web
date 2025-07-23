import { cn } from "@/lib/utils";
import { ComponentPropsWithRef, FC } from "react";

type PropType = ComponentPropsWithRef<"button"> & {
  selected?: boolean;
};

export const DotButton: FC<PropType> = (props) => {
  const { children, selected, className, ...restProps } = props;

  return (
    <button
      type="button"
      className={cn(
        "w-3 h-3 rounded-full transition-all duration-500 ease-in-out ",
        selected ? "bg-blue-600  w-8" : "bg-black hover:bg-gray-400",
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
};
