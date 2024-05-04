type MakeUrlArgs = {
  url: string;
  colours: string[];
};

export const makeColoursUrl = ({ url, colours }: MakeUrlArgs) => {
  const params = new URLSearchParams([
    ["colors", colours.join("-").replaceAll("#", "")],
  ]).toString();
  return `${url}?${params}`;
};
