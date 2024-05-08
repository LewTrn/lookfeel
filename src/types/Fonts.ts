export enum Typography {
  Heading = "heading",
  Body = "body",
}

export type FontType = {
  family: string;
  category: "sans-serif" | "serif" | "display" | "handwriting" | "monospace";
};

export type Fonts = {
  [Typography.Heading]: FontType;
  [Typography.Body]: FontType;
};
