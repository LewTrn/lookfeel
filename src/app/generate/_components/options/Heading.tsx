import { type PropsWithChildren } from "react";

import Typography from "~/components/ui/typography";

export const Heading = ({ children }: PropsWithChildren) => {
  return (
    <div className="mb-2 flex items-center justify-between">
      <Typography variant="h2">{children}</Typography>
    </div>
  );
};
