import { addDays } from "date-fns";
import { useState } from "react";
import { type DateRange } from "react-day-picker";
import { Badge } from "templates/components/ui/badge";
import { Calendar } from "templates/components/ui/calendar";

import { strings } from "~/locales/generate";

const from = new Date();

export const ComponentBlock = () => {
  const defaultSelected: DateRange = {
    from,
    to: addDays(from, 5),
  };
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected);

  return (
    <div className="flex w-full flex-col gap-8">
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        className="rounded-lg border"
      />
      <div className="flex flex-col gap-4 p-2">
        <div className="flex flex-col text-sm">
          <div>
            <Badge variant="secondary">{strings.styleTile.badge.label}</Badge>
          </div>
        </div>
        <div className="text-sm">
          <h3
            className="mb-1 font-bold"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            Lorem ipsum dolor sit amet
          </h3>
          <p>
            Donec vel dui ac elit interdum mollis. Vivamus gravida porttitor
            nunc eu placerat.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-primary text-sm">
            LF
          </div>
          <div className="text-xs">
            <p className="font-semibold">Luna Forrest</p>
            <p>{strings.styleTile.jobDescription.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
