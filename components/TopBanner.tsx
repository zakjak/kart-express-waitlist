import Image from "next/image";
import { MdOutlinePedalBike } from "react-icons/md";
import { FaMotorcycle } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { RiFlashlightFill } from "react-icons/ri";
import { Button } from "./ui/button";
import Link from "next/link";
import { HiCheckBadge } from "react-icons/hi2";

const TopBanner = () => {
  return (
    <div className="w-full bg-red-50 h-[70vh] relative">
      <Image
        src="/images/banner-image.png"
        fill
        className="object-cover"
        loading="eager"
        alt="A picture showing a lady riding a bicycle and a man riding a motorbike, both doing deliveryand together they can navigate in any street."
      />
      <div className="absolute bottom-10 md:bottom-24 left-15 md:left-30 text-white flex flex-col items-start gap-6 ">
        <span className="flex items-center gap-2 bg-[#CBCEFF] text-[#343D96]  font-semibold text-xs px-3 py-1.5 rounded-full">
          <HiCheckBadge size={18} />
          LAUNCHING SOON IN ACCRA
        </span>
        <div className="text-2xl md:text-6xl font-extrabold">
          <h1>DELIVER ANYTHING.</h1>
          <h1>ANYWAY YOU MOVE.</h1>
        </div>

        <p className="w-[80%] md:w-[50%] font-extrabold tracking-widest text-white md:block hidden">
          Hyper-local delivery engineered for the speed of life. From hot jollof
          to life-saving meds, we bridge the gap with motorbikes, bicycles and
          the power of the community
        </p>
        <p className="w-[80%] md:w-[50%] font-extrabold tracking-widest text-white block hmd:idden">
          Fast, reliable delivery for food, medicine, and essentials—powered by
          bikes and community.
        </p>
        <div className="grid grid-cols-2 md:flex gap-4 font-semibold tracking-widest text-sm items-center">
          <span className="inline-flex items-center gap-2 bg-green-700  rounded-full w-fit px-4 py-2 ">
            <MdOutlinePedalBike />
            Bikes
          </span>
          <span className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full ">
            <FaMotorcycle />
            Motorbikes
          </span>
          <span className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full">
            <FaWalking />
            Walking
          </span>
          <span className="flex items-center gap-2 bg-amber-600 rounded-full text-black px-4 py-2 whitespace-nowrap">
            <RiFlashlightFill />
            15-min Delivery
          </span>
        </div>
        <Link href="#waitlist">
          <Button className="bg-linear-to-r from-[#924601] to-[#f57c00] py-6 md:py-8 px-4 font-semibold text-[1.1rem] cursor-pointer">
            <span>Join the Waitlist</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TopBanner;
