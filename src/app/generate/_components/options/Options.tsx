import { Colours } from "./colours/Colours";
import { Header } from "./Header";
import { Typography } from "./typography/Typography";

export const Options = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-8">
        <Colours />
        <Typography />
      </div>
    </div>
  );
};
