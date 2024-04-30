import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useSelector, useDispatch } from 'react-redux';
import { setStore } from '@/slices/storeSlice';

export function ComboBox() {
  const selectedBranch: number = useSelector((state: any) => state.store.selectedBranch);
  const branchs: Branch[] = useSelector((state: any) => state.store.branchs);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
          style={{ color: "rgb(202 138 4 / var(--tw-text-opacity))" }}
        >
          {selectedBranch
            ? branchs.find((branch) => branch.id == selectedBranch)?.name
            : "Select branch..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50 text-black" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search branch..." className="h-9" />
          <CommandEmpty>No branch found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {[{
                id: 0,
                name: 'Select branch...'
              }, ...branchs].map((branch) => (
                <CommandItem
                  key={branch.id}
                  value={branch.name}
                  onSelect={(currentValue) => {
                    const id = branchs.find((branch) => branch.name.toLowerCase() === currentValue)?.id;
                    dispatch(setStore(id));
                    setOpen(false);
                  }}
                >
                  {branch.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedBranch == branch.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
