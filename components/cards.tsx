import Image from "next/image";

type Card = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
};

const cards: Card[] = [
  {
    title: "ROBUST_ROS",
    subtitle: "Forecasting Method",
    description:
      "A forecasting method that uses sales velocity and demand smoothing to deliver consistent, location-aware predictions across all SKUs.",
    icon: "icons/card-1.svg",
  },
  {
    title: "Multi-Location",
    subtitle: "Location Support",
    description:
      "A forecasting method that uses sales velocity and demand smoothing to deliver consistent, location-aware predictions across all SKUs.",
    icon: "icons/card-2.svg",
  },
  {
    title: "Available",
    subtitle: "Override Support",
    description:
      "A forecasting method that uses sales velocity and demand smoothing to deliver consistent, location-aware predictions across all SKUs.",
    icon: "icons/card-3.svg",
  },
];

function CardsList() {
  return (
    <div className="flex w-full flex-col gap-2 xl:flex-row">
      {cards.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </div>
  );
}

function Card({ card }: { card: Card }) {
  return (
    <div className="flex h-fit flex-col gap-10 rounded-[20px] bg-white/50 px-[18px] py-[20px] transition-all duration-300">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1">
          <div className="font-open-sans text-foreground">{card.subtitle}</div>
          <div className="font-fixel-display-semibold text-foreground text-2xl">
            {card.title}
          </div>
        </div>

        <Image src={card.icon} alt={card.title} width={42} height={42} />
      </div>
      <div className="font-open-sans text-muted-foreground text-sm">
        {card.description}
      </div>
    </div>
  );
}

export { CardsList, Card };
