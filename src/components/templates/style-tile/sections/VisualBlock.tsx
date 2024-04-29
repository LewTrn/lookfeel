export const VisualBlock = () => {
  return (
    <div className="grid h-[540px] grid-rows-4 gap-4">
      <div className="flex items-center justify-center rounded-lg bg-[#99E1D9] text-white shadow">
        <span className="text-2xl font-bold">lookfeel</span>
      </div>
      <div className="flex items-center justify-center rounded-lg bg-[#705D56] text-[#32292F] shadow">
        <span className="text-2xl font-bold">lookfeel</span>
      </div>
      <div className="row-span-2 overflow-hidden rounded-lg shadow">
        <img
          src="https://source.unsplash.com/random/800x600"
          alt=""
          className="wh-full object-cover"
        />
      </div>
    </div>
  );
};
