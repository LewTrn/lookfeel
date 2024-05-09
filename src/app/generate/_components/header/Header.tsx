"use client";

import { RedoIcon, UndoIcon } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

import { Button } from "~/components/ui/button";
import { IconButton } from "~/components/ui/icon-button";
import { strings } from "~/locales/generate";
import { GenerateMode } from "~/types/Mode";

import { useGenerateStore } from "../../_store/useGenerateStore";
import { useFontParams } from "../../_utils/params/useFontParams";
import { usePaletteParams } from "../../_utils/params/usePaletteParams";
import { useGenerateHistory } from "./useGenerateHistory";

export const Header = () => {
  const generateRef = useRef<HTMLButtonElement>(null);
  const setPaletteParams = usePaletteParams();
  const setFontParams = useFontParams();

  const mode = useGenerateStore((state) => state.mode);
  const generatePalette = useGenerateStore((state) => state.generatePalette);
  const generateFonts = useGenerateStore((state) => state.generateFonts);
  const { undo, redo, hasUndo, hasRedo } = useGenerateHistory();

  const handleGenerate = useCallback(() => {
    switch (mode) {
      case GenerateMode.Colour:
        const palette = generatePalette();
        setPaletteParams(palette);
        break;
      case GenerateMode.Typography:
        const { heading, body } = generateFonts();
        setFontParams([heading.family, body.family]);
        break;
    }
  }, [generateFonts, generatePalette, mode, setFontParams, setPaletteParams]);

  useEffect(() => {
    const onSpace = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        handleGenerate();
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", onSpace);

    return () => {
      document.removeEventListener("keydown", onSpace);
    };
  }, [handleGenerate]);

  return (
    <header className="sticky top-0 z-50 mx-2 mb-4 flex h-16 items-center justify-between gap-8 bg-background px-8">
      <Link href="/" className="w-[19.5rem] text-2xl font-bold">
        lookfeel
      </Link>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <IconButton
            Icon={UndoIcon}
            variant="ghost"
            onClick={undo}
            disabled={!hasUndo}
          />
          <IconButton
            Icon={RedoIcon}
            variant="ghost"
            onClick={redo}
            disabled={!hasRedo}
          />
          <Button
            ref={generateRef}
            variant="ghost"
            onClick={() => {
              handleGenerate();
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
