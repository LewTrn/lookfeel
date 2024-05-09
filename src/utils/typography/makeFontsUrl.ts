type MakeUrlArgs = {
  url: string;
  params: URLSearchParams;
  fonts: string[];
};

export const makeFontsUrl = ({ url, params, fonts }: MakeUrlArgs) => {
  const newParams = new URLSearchParams(params);
  newParams.set("fonts", fonts.join("-"));
  return `${url}?${newParams.toString()}`;
};
