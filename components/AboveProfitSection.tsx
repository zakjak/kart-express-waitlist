import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const AboveProfitSection = () => {
  return (
    <div className="w-full md:h-[60vh] flex">
      <div className="max-w-280  md:grid md:grid-cols-2 mx-auto">
        <div className="flex flex-col justify-center items-start ml-10 gap-6">
          <span className="text-xs bg-[#CBCEFF] text-[#8186CB] p-1 font-semibold rounded-full mt-5 md:mt-0">
            NEXT GEN DELIVERY
          </span>
          <h1 className="text-6xl font-bold text-zinc-700">
            Your Health <br />{" "}
            <span className="text-[#924601]">Above Profits</span>
          </h1>
          <p className="text-zinc-500 text-sm lg:w-[70%] w-[90%]">
            KartExpress is the next gen Ghanaian delivery and e-commerce
            platform designed to offer seamless delivery services with adherence
            to the highest hygiene and quality standards. At KartExpress, your
            delivery’s safety is guaranteed through our multi-layered quality
            checks at the vendor and dispatch levels. We form the lifeline to
            your safest delivery ecosystem that you can trust and while our
            competitors call it deliveries: we say your health matters, and most
            importantly the safety of your delivered items assume priority over
            profits. At KartExpress, every item we deliver (food, medicine,
            everyday groceries and essentials) is treated as the ultimate
            package which forms the lifeline to our very existence, for your
            deliveries truly matter.
          </p>
          <Link href="#waitlist-form">
            <Button className="bg-linear-to-r from-[#A15002] to-[#E97605] p-6 cursor-pointer font-bold tracking-wider">
              Join the Waitlist
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center mt-8 md:mt-0">
          <div className="lg:w-120 h-80 lg:h-140 w-[80%] md:w-[20rem] md:h-100 md:rotate-6 rounded-2xl relative overflow-hidden shadow-2xl">
            <Image
              src="/images/about-1.jpeg"
              className="object-cover absolute"
              fill
              alt="man smiling on a motorbike for delivery"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveProfitSection;
