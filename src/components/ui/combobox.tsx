import { Slot } from "@radix-ui/react-slot";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "~/lib/utils";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type Item = {
  value: string;
  label: string;
};

type ComboboxProps<TItem = Item> = React.PropsWithChildren<{
  items: TItem[];
  placeholder?: string;
  emptyDescription?: string;
  asChild?: boolean;
  selectedValue: string;
  getItem?: (item: TItem) => Item | undefined;
  onSelect: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
}>;

const defaultGetItem = (item: Record<string, string>) => {
  if ("value" in item && "label" in item) {
    return { value: item.value, label: item.label } as const;
  }
};

export const Combobox = <TItem extends Record<string, string>>({
  items,
  placeholder,
  emptyDescription,
  asChild,
  children,
  selectedValue,
  onSelect,
  onOpenChange,
  getItem = defaultGetItem,
}: ComboboxProps<TItem>) => {
  const [open, setOpen] = React.useState(true);

  const Comp = asChild ? Slot : "button";

  const handleOpenChange = (value: boolean) => {
    onOpenChange?.(value);
    setOpen(value);
  };

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Comp role="combobox" aria-expanded={open}>
          {children}
        </Comp>
      </PopoverTrigger>
      <PopoverContent
        className="h-56 w-[200px] p-0"
        side="right"
        sideOffset={10}
      >
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandList>
            <CommandEmpty>{emptyDescription}</CommandEmpty>
            <CommandGroup>
              {items.map((_item) => {
                const item = getItem(_item);

                if (!item) return null;

                return (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(selectedValue) => {
                      onSelect(selectedValue);
                      handleOpenChange(false);
                    }}
                    className="relative pr-8"
                  >
                    {item.label}
                    <Check
                      className={cn(
                        "absolute right-2 h-4 w-4",
                        selectedValue === item.value
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
