"use client";

import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";
import { strings } from "~/locales/generate";
import { api } from "~/trpc/react";

import { useGenerateStore } from "../../_store/useGenerateStore";
import { PublishDialogContent } from "./PublishDialogContent";
import { TagsDialogContent } from "./TagsDialogContent";

enum Page {
  Tags = "tags",
  Publish = "publish",
}

export const PublishDialog = () => {
  const params = useSearchParams();

  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(Page.Tags);

  const { primary, secondary, accent, neutral } = useGenerateStore(
    (state) => state.palette,
  );
  const fonts = useGenerateStore((state) => state.fonts);
  const tags = useGenerateStore((state) => state.tags);
  const setTags = useGenerateStore((state) => state.setTags);

  const { mutate, data, variables } = api.theme.createTheme.useMutation();

  const onOpen = useCallback(
    (value: boolean) => {
      setOpen(value);

      if (value) {
        setPage(Page.Tags);
        setTags([]);
      }
    },
    [setTags],
  );

  useEffect(() => {
    if (params.get("publish") === "true") {
      onOpen(true);
    }
  }, [onOpen, params]);

  const handleOnSubmit = () => {
    setPage(Page.Publish);

    mutate({
      palette: {
        primary: primary.baseColour,
        secondary: secondary.baseColour,
        accent: accent.baseColour,
        neutral: neutral.baseColour,
      },
      fonts,
      tags,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpen}>
      <DialogTrigger asChild>
        <Button>{strings.publish.action}</Button>
      </DialogTrigger>
      <DialogContent className="flex h-96 flex-col justify-between overflow-clip">
        {page === Page.Tags && <TagsDialogContent onSubmit={handleOnSubmit} />}
        {page === Page.Publish && variables && (
          <PublishDialogContent id={data?.id} {...variables} />
        )}
      </DialogContent>
    </Dialog>
  );
};
