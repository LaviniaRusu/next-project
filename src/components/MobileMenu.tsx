import { Button } from "@/components/ui/button";
import { FileText, Menu, User, X } from "lucide-react";
import SearchInput from "./SearchInput";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
  // SheetClose,
} from "@/components/ui/sheet";
import { SheetClose } from "@/components/ui/sheet";

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetTitle />
        <div className="flex items-center justify-end gap-3">
          <User className="w-4 h-4 stroke-black fill-black" />
          <FileText className="w-4 h-4 -scale-y-100 stroke-black" />

          <SheetClose asChild>
            <button className="w-6 h-6 flex items-center justify-center hover:text-red-600 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </SheetClose>
        </div>

        <SearchInput />

        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
