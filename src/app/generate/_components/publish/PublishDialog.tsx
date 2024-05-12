"use client";

import { useState } from "react";

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
  const [page, setPage] = useState(Page.Tags);

  const { primary, secondary, accent, neutral } = useGenerateStore(
    (state) => state.palette,
  );
  const fonts = useGenerateStore((state) => state.fonts);
  const tags = useGenerateStore((state) => state.tags);
  const setTags = useGenerateStore((state) => state.setTags);

  const { mutate } = api.theme.createTheme.useMutation();

  const onOpen = () => {
    setPage(Page.Tags);
    setTags([]);
  };

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
    <Dialog onOpenChange={onOpen}>
      <DialogTrigger asChild>
        <Button>{strings.publish.action}</Button>
      </DialogTrigger>
      <DialogContent className="flex h-96 flex-col justify-between overflow-clip">
        {page === Page.Tags && <TagsDialogContent onSubmit={handleOnSubmit} />}
        {page === Page.Publish && <PublishDialogContent />}
      </DialogContent>
    </Dialog>
  );
};
