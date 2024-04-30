"use client";

import { RedoIcon, UndoIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { Button } from "~/components/ui/button";
import { IconButton } from "~/components/ui/icon-button";
import { strings } from "~/locales/generate";

import { useGenerateStore } from "../../_store/useGenerateStore";

export const Header = () => {
  const generateRef = useRef<HTMLButtonElement>(null);
  const generatePalette = useGenerateStore((state) => state.generatePalette);

  useEffect(() => {
    const onSpace = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        generatePalette();
      }
    };

    document.addEventListener("keydown", onSpace);

    return () => {
      document.removeEventListener("keydown", onSpace);
    };
  }, [generatePalette]);

  return (
    <header className="mx-2 mb-4 flex h-16 items-center justify-between gap-8">
      <Link href="/" className="w-[19.5rem] text-2xl font-bold">
        lookfeel
      </Link>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2">
          <IconButton Icon={UndoIcon} variant="ghost" />
          <IconButton Icon={RedoIcon} variant="ghost" />
          <Button
            ref={generateRef}
            variant="ghost"
            onClick={() => {
              generatePalette();
              generateRef.current?.blur();
            }}
          >
            {strings.visualise.header.generate.action}
          </Button>
        </div>
        <Button>{strings.visualise.header.publish.action}</Button>
      </div>
    </header>
  );
};
