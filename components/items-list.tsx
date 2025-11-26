import Image from "next/image";

type ListItem = {
  title: string;
  description: string;
  icon: string;
};

const listItems: ListItem[] = [
  {
    title: "Robust Rate of Sale",
    description:
      "Consistent forecasting methodology that considers location-specific demand patterns and provides reliable predictions across all inventory items.",
    icon: "icons/list-item-1.svg",
  },
  {
    title: "Location Awareness",
    description:
      "Forecasts are generated per location, allowing for accurate inventory projections that account for location-specific demand variations.",
    icon: "icons/list-item-2.svg",
  },
  {
    title: "Manual Overrides",
    description:
      "When automatic forecasting needs adjustment, manual overrides can be applied at the variant level for specific time periods.",
    icon: "icons/list-item-3.svg",
  },
];

export default function ItemsList() {
  return (
    <div className="relative col-span-1 w-full overflow-hidden rounded-3xl bg-white/50 p-[14px] pt-5 lg:col-span-4">
      <div className="pointer-events-none absolute top-1/3 left-2/3 h-[160px] w-[260px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,#D9F7FF_1%,rgba(255,255,255,0)_100%)]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[160px] w-[260px] -translate-x-1/2 bg-[radial-gradient(circle_at_center,#CEDCFF_1%,rgba(255,255,255,0)_100%)]" />
      <div className="relative z-10 flex flex-col gap-2">
        <h2 className="font-fixel-display-semibold text-foreground text-xl">
          How Forecasting Works
        </h2>
        <p className="font-open-sans text-muted-foreground text-base">
          The forecasting system has been streamlined to use the robust rate of
          sale method across all locations for improved consistency and
          reliability.
        </p>
      </div>
      <div className="relative z-10 mt-[22px] flex flex-col gap-[12px]">
        {listItems.map((item) => (
          <Item key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

function Item({ item }: { item: ListItem }) {
  return (
    <div className="flex flex-col gap-6 rounded-[12px] bg-white p-[18px] transition-all duration-300 hover:shadow-sm">
      <div className="flex flex-row items-center">
        <Image src={item.icon} alt={item.title} width={42} height={42} />
      </div>
      <div className="flex flex-col gap-[10px]">
        <div className="font-fixel-display-semibold text-foreground text-xl">
          {item.title}
        </div>
        <div className="font-open-sans text-muted-foreground text-xs">
          {item.description}
        </div>
      </div>
    </div>
  );
}
