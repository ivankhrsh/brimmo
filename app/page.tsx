import Header from "@/components/header";
import { CardsList } from "@/components/cards";
import ItemsList from "@/components/items-list";
import Chart from "@/components/chart";
import Eye from "@/components/icons/eye";

export default function Home() {
  return (
    <div className="mb-4 flex min-h-screen w-full flex-col items-center justify-center xl:mb-0">
      <main className="flex min-h-screen w-full flex-col pr-4">
        <Header />

        <div className="align-center flex w-full flex-col justify-between gap-4 lg:flex-row lg:gap-3">
          <div className="flex flex-col gap-2">
            <h1 className="font-fixel-display-semibold text-4xl text-black">
              Location-Based Forecasting
            </h1>
            <p className="font-open-sans text-muted-foreground text-sm">
              Robust Rate of Sale forecasting with location-aware calculations
            </p>
          </div>

          <div className="flex flex-row items-center gap-6 font-medium">
            <button className="text-primary hover:text-primary/90 flex cursor-pointer items-center gap-2 text-sm transition-all duration-300 md:text-base">
              <Eye />
              View Forecast Accuracy
            </button>

            <button className="bg-primary hover:bg-primary/90 flex h-fit cursor-pointer items-center gap-2 rounded-full px-[20px] py-[11px] text-sm text-white transition-all duration-300 md:text-base">
              Adjust Forecast Settings
            </button>
          </div>
        </div>

        <div className="mt-[34px] grid w-full grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="col-span-1 flex flex-col gap-2 lg:col-span-8">
            <CardsList />
            <Chart />
          </div>

          <ItemsList />
        </div>
      </main>
    </div>
  );
}
