import { type PropsWithChildren, useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

import { useGenerateStore } from "../../_store/useGenerateStore";
import { PublishDialogContent } from "./PublishDialogContent";
import { TagsDialogContent } from "./TagsDialogContent";

enum Page {
  Tags = "tags",
  Publish = "publish",
}

export const PublishDialog = ({ children }: PropsWithChildren) => {
  const [page, setPage] = useState(Page.Tags);

  const setTags = useGenerateStore((state) => state.setTags);

  const onOpen = () => {
    setPage(Page.Tags);
    setTags([]);
  };

  return (
    <Dialog onOpenChange={onOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex h-96 flex-col justify-between overflow-clip">
        {page === Page.Tags && (
          <TagsDialogContent onNext={() => setPage(Page.Publish)} />
        )}
        {page === Page.Publish && <PublishDialogContent />}
      </DialogContent>
    </Dialog>
  );
};
