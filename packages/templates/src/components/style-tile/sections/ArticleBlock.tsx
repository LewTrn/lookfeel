import { strings } from "~/locales/lookfeel";
import { type Palette } from "~/types/Palette";

type ArticleBlockProps = {
  palette: Palette;
};

export const ArticleBlock = ({ palette }: ArticleBlockProps) => {
  const { primary } = palette;

  return (
    <section className="mb-4 flex flex-col">
      <div className="mb-4">
        <span
          className="text-4xl font-semibold"
          style={{
            color: primary.shades[950],
            fontFamily: "var(--heading-font)",
          }}
        >
          {strings.styleTile.heading.title}
        </span>
      </div>
      <div className="mb-2">
        <span
          className="text-2xl font-medium"
          style={{ color: primary.shades[950] }}
        >
          {strings.styleTile.subheading.title}
        </span>
      </div>
      <div>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim
          ut sem viverra aliquet eget.
        </p>
        <p>
          Lorem dolor sed viverra ipsum. Montes nascetur ridiculus mus mauris.
          Egestas purus viverra accumsan in nisl nisi.
        </p>
      </div>
    </section>
  );
};
