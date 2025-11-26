import Image from "next/image";
import IconButton from "./ui/icon-button";
import Sun from "./icons/sun";
import Ring from "./icons/ring";
import Search from "./icons/search";

export default function Header() {
  return (
    <header className="sticky top-0 flex w-full flex-row items-center justify-between bg-[#E7EDF8] py-[14px]">
      <IconButton className="hover:text-primary flex h-[46px] w-12 items-center justify-center rounded-full bg-[#DEE5F0] hover:bg-white hover:opacity-80">
        <Search />
      </IconButton>
      <div className="flex flex-row items-center justify-between gap-3">
        <IconButton className="hover:text-primary flex h-[46px] w-12 items-center justify-center rounded-full bg-[#DEE5F0] hover:bg-white hover:opacity-80">
          <Ring />
        </IconButton>
        <IconButton className="hover:text-primary flex h-[46px] w-12 items-center justify-center rounded-full bg-[#DEE5F0] hover:bg-white hover:opacity-80">
          <Sun />
        </IconButton>
        <IconButton className="flex h-[46px] w-12 items-center justify-center rounded-full bg-[#DEE5F0] hover:opacity-80">
          <Image
            src="/images/person.png"
            alt="user avatar"
            width={46}
            height={46}
          />
        </IconButton>
      </div>
    </header>
  );
}
