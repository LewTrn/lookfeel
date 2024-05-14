"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ViewThemeContainer } from "~/app/theme/_components/ViewThemeContainer";
import { Drawer, DrawerContent } from "~/components/ui/drawer";

import { ViewThemeHeader } from "./_components/ThemeDrawerHeader";

export default function ThemeDrawer() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  // Wait for drawer close animation
  const delayBack = () => setTimeout(() => router.back(), 300);

  return (
    <Drawer open={open} onOpenChange={setOpen} onClose={delayBack}>
      <DrawerContent className="h-[calc(100%-64px)]">
        <div className="overflow-y-auto">
          <ViewThemeHeader onBack={() => setOpen(false)} />
          <ViewThemeContainer />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
