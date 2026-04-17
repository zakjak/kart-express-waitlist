import Image from "next/image";
import { LiaCoinsSolid } from "react-icons/lia";
import { BsShieldFillCheck } from "react-icons/bs";
import { LuClock } from "react-icons/lu";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const TheWhy = () => {
  return (
    <div className="p-5">
      <h1 className="text-center text-2xl md:text-3xl font-semibold">
        Why Choose KartExpress?
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
        <div className="flex gap-4 items-center md:border-r-2 border-r-zinc-600">
          <div className="relative min-w-10 h-10 md:w-15 md:h-15 rounded-full overflow-hidden">
            <Image
              src="/images/ghana-map.webp"
              fill
              className="object-cover mt"
              alt="Ghana map with green background absolute"
            />
          </div>
          <div className="">
            <h2 className="md:font-semibold md:text-lg text-sm font-extrabold">
              Built for Ghana
            </h2>
            <p className="md:text-sm text-zinc-700 font-semibold text-xs">
              By Ghanaians, for Africans
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center md:border-r-2 border-r-zinc-600">
          <div className="flex items-center justify-center min-w-10 h-10 md:w-15 md:h-15 p-1 md:p-0 rounded-full overflow-hidden bg-[#F75B08] text-white">
            <LiaCoinsSolid size={40} />
          </div>
          <div className="">
            <h2 className="font-semibold md:text-lg text-sm">Earn More</h2>
            <p className="md:text-sm text-zinc-700 font-semibold text-xs">
              Best rates for riders
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center md:border-r-2 border-r-zinc-600">
          <div className="flex items-center justify-center min-w-10 h-10 md:w-15 md:h-15 p-1 md:p-0 rounded-full overflow-hidden bg-[#145BB2] text-white">
            <BsShieldFillCheck size={26} />
          </div>
          <div className="">
            <h2 className="font-semibold md:text-lg text-sm ">
              Safe & Insured
            </h2>
            <p className="md:text-sm text-xs text-zinc-700 font-semibold">
              Your security matters
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center md:border-r-2 border-r-zinc-600">
          <div className="flex items-center justify-center min-w-10 h-10 md:w-15 md:h-15 p-1 md:p-0 rounded-full overflow-hidden bg-[#FDA80B] text-black">
            <LuClock size={26} />
          </div>
          <div className="">
            <h2 className="font-semibold md:text-lg text-sm">Live Tracking</h2>
            <p className="text-xs md:text-sm text-zinc-700 font-semibold">
              Real-time updates
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center justify-center min-w-10 h-10 md:w-15 md:h-15 p-1 md:p-0 rounded-full overflow-hidden bg-red-500 text-white">
            <TfiHeadphoneAlt size={26} />
          </div>
          <div className="">
            <h2 className="font-semibold md:text-lg text-sm">24/7 Support</h2>
            <p className="text-xs md:text-sm text-zinc-700 font-semibold">
              Always here to help
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheWhy;
