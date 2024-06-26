"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { useLandingStore } from "~/app/_store/useLandingStore";
import { ViewThemeContainer } from "~/app/theme/_components/ViewThemeContainer";
import { Drawer, DrawerContent } from "~/components/ui/drawer";

import { ThemeDrawerHeader } from "./_components/ThemeDrawerHeader";

export default function ThemeDrawer({ params }: { params: { id: string } }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const selectedTheme = useLandingStore((state) => state.selectedTheme);
  const selectedLikes = useLandingStore((state) => state.selectedLikes) ?? {
    liked: false,
    likeCount: 0,
  };
  const setSelectedTheme = useLandingStore((state) => state.setSelectedTheme);

  const handleClose = () => {
    // Wait for drawer close animation
    setTimeout(() => {
      setSelectedTheme(null);
      router.back();
    }, 300);
  };

  if (!selectedTheme) return null;

  // Close drawer when navigating away theme page
  if (!pathname.includes("/theme")) {
    return null;
  }

  return (
    <Drawer
      open={Boolean(selectedTheme) && open}
      onOpenChange={setOpen}
      onClose={handleClose}
    >
      <DrawerContent className="h-[calc(100%-64px)]">
        <div className="overflow-y-auto">
          <ThemeDrawerHeader
            id={params.id}
            theme={selectedTheme}
            likes={selectedLikes}
            onBack={() => setOpen(false)}
          />
          <ViewThemeContainer theme={selectedTheme} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
