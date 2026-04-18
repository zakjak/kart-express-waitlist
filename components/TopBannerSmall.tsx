import Link from "next/link";
import { HiCheckBadge } from "react-icons/hi2";
import { Button } from "./ui/button";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

const TopBannerSmall = () => {
  return (
    <div className="w-full bg-red flex flex-col items-start md:hidden gap-5">
      <div className="flex flex-col  p-4 items-start gap-5">
        <span className="flex items-center gap-2 bg-[#CBCEFF] text-[#343D96]  font-semibold text-xs px-3 py-1.5 rounded-full">
          <HiCheckBadge size={18} />
          NOW EXPANDING ACROSS GHANA
        </span>
        <h1 className="text-5xl font-extrabold text-zinc-700">
          Your City, <br />
          <span className="bg-linear-to-r from-[#954900] to-[#CD6704] bg-clip-text text-transparent">
            Delivered in
          </span>
          <br />
          <span className="bg-linear-to-r from-[#BD5F03] to-[#F47C05] bg-clip-text text-transparent">
            Minutes
          </span>
        </h1>
        <p className="text-gray-600 text-sm w-[90%]">
          Redifining delivery with hyper-local intelligence. Fast, reliable
          delivery across Ghana and the continent, built for the kinetic energy
          of the modern Ghanaian city.
        </p>
        <div className="w-full flex flex-col gap-4">
          <Link href={"#wait-list-section"} className="w-full">
            <Button className="bg-linear-to-r from-[#924601] shadow-xl to-[#f57c00] w-[90%] py-5 px-4 font-semibold text-[0.9rem] tracking-wider">
              <span>Join the Waitlist</span>
              <FaArrowRight />
            </Button>
          </Link>
          <Link href={"#delivery"} className="w-full">
            <Button className="bg-[#D5E5EF] text-black w-[90%] py-5 px-4 font-semibold text-[0.9rem] tracking-wider">
              <span>See Our Services</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative w-full flex  justify-center">
        <div className="w-[85%] h-104 rounded-2xl overflow-hidden relative">
          <Image
            src="/images/bike-delivery-1.png"
            fill
            className="absolute object-cover z-10"
            alt=""
          />
        </div>
        <div className="w-50 h-50 absolute bg-[#E6B17A] left-0 bottom-0 rounded-t-[4rem]" />
        <div className="w-50 h-50 absolute border-2 border-[#D6E1F2] right-0 -top-5 rounded-tl-xl" />
      </div>
    </div>
  );
};

export default TopBannerSmall;
