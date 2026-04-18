import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { HiCheckBadge } from "react-icons/hi2";
import { IoShieldCheckmark } from "react-icons/io5";

const TopBanner = () => {
  return (
    <div className="w-full md:grid gap-4 hidden bg-[#EDF8FF] items-center">
      <div className="md:grid grid-cols-2 max-w-[70rem] mx-auto my-10">
        <div className="flex flex-col items-start gap-8 p-4">
          <span className="flex items-center gap-2 bg-[#CBCEFF] text-[#343D96]  font-semibold text-xs px-3 py-1.5 rounded-full">
            <HiCheckBadge size={18} />
            LAUNCHING SOON IN ACCRA
          </span>
          <div className="text-4xl font-black">
            <h1 className="text-zinc-[1000]">
              Your City, Deliveries <br />{" "}
              <span className="text-[#924601]">Truly Matter.</span>
            </h1>
          </div>

          <p className="w-[80%] text-zinc-500 font-semibold text-sm">
            KartExpress is the next gen Ghanaian delivery and e-commerce
            platform designed to offer seamless delivery services with adherence
            to the highest hygiene and quality standards.
          </p>

          <Link href="#waitlist">
            <Button className="bg-linear-to-r from-[#924601] to-[#f57c00] py-6 px-4 font-semibold text-[0.9rem] tracking-wider cursor-pointer">
              <span>Join the Waitlist</span>
            </Button>
          </Link>
        </div>
        <div className="relative">
          <div className="relative w-[70%] h-85 rounded-3xl overflow-hidden">
            <Image
              src="/images/bike-delivery-2.png"
              fill
              className="object-cover"
              loading="eager"
              alt="A picture showing a lady riding a bicycle and a man riding a motorbike, both doing deliveryand together they can navigate in any street."
            />
          </div>
          <div className=" bg-white -bottom-5 -left-10 absolute flex items-center gap-4 p-4 rounded-4xl shadow-2xl">
            <div className="bg-[#DCFCE7] p-2 rounded-lg">
              <IoShieldCheckmark size={25} className="text-[#13803D]" />
            </div>
            <div className="text-sm font-extrabold">
              <h3 className="text-zinc-500">SAFETY LEVEL</h3>
              <h4 className="text-zinc-800">100% Guaranteed</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
