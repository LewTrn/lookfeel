type MakeUrlArgs = {
  url: string;
  params: URLSearchParams;
  colours: string[];
};

export const makeColoursUrl = ({ url, params, colours }: MakeUrlArgs) => {
  const newParams = new URLSearchParams(params);
  newParams.set("colors", colours.join("-").replaceAll("#", ""));
  return `${url}?${newParams.toString()}`;
};
