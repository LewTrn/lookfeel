import { useGenerateStore } from "~/app/generate/_store/useGenerateStore";
import { strings } from "~/locales/generate";

export const ArticleBlock = () => {
  const { primary } = useGenerateStore((state) => state.palette);

  return (
    <section className="flex h-full flex-col gap-4 text-[#32292F]">
      <div>
        <span
          className="text-4xl font-semibold"
          style={{ color: primary.shades[950] }}
        >
          {strings.styleTile.heading.title}
        </span>
      </div>
      <div>
        <span
          className="text-2xl font-medium"
          style={{ color: primary.shades[950] }}
        >
          {strings.styleTile.subheading.title}
        </span>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim
          ut sem viverra aliquet eget. Ornare suspendisse sed nisi lacus sed
          viverra.
        </p>
        <p>
          Lorem dolor sed viverra ipsum. Montes nascetur ridiculus mus mauris.
          Egestas purus viverra accumsan in nisl nisi. Diam volutpat commodo sed
          egestas egestas fringilla phasellus faucibus.
        </p>
      </div>
    </section>
  );
};
