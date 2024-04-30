import { STOPS } from "../constants";

const stops = STOPS;

export function createLightnessScale(
  min = 0,
  max = 100,
  relativeLightness: number,
  stop: number,
) {
  const lightness = relativeLightness * max;

  // Create known stops
  const newValues = [
    { stop: 0, tweak: max },
    { stop, tweak: lightness },
    { stop: 1000, tweak: min },
  ];

  // Create missing stops
  for (const stopValue of stops) {
    if (stopValue === 0 || stopValue === 1000 || stopValue === stop) {
      continue;
    }

    const diff = Math.abs((stopValue - stop) / 100);
    const totalDiff =
      stopValue < stop
        ? Math.abs(stops.indexOf(stop) - stops.indexOf(STOPS[0]!)) - 1
        : Math.abs(
            stops.indexOf(stop) - stops.indexOf(STOPS[STOPS.length - 1]!),
          ) - 1;
    const increment = stopValue < stop ? max - lightness : lightness - min;

    const tweak =
      stopValue < stop
        ? (increment / totalDiff) * diff + lightness
        : lightness - (increment / totalDiff) * diff;

    newValues.push({ stop: stopValue, tweak: Math.round(tweak) });
  }

  newValues.sort((a, b) => a.stop - b.stop);

  return newValues;
}
