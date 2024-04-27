import { Colours } from "./Colours";
import { Header } from "./Header";
import { Typography } from "./Typography";

export const Options = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-4">
        <Colours />
        <Typography />
      </div>
    </div>
  );
};
