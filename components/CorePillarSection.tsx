import Image from "next/image";
import { BsFillHeartPulseFill, BsShieldFillCheck } from "react-icons/bs";
import { MdHandshake, MdHealthAndSafety } from "react-icons/md";
import { RiFirstAidKitFill } from "react-icons/ri";

const CorePillarSection = () => {
  return (
    <div className="bg-[#E4F3FC] w-[90%] md:max-w-280 mx-auto 0 p-10 ">
      <h1 className="text-[#243036] text-3xl font-black">The Core Pillars</h1>
      <p className="mt-2 text-sm text-zinc-600">
        We form the lifeline to your safest delivery ecosystem that you can
        trust
      </p>
      <div className="md:grid md:grid-cols-3 flex  flex-col gap-4 lg:gap-8 mt-10">
        <div className="md:col-span-2 shadow-2xl relative bg-white p-10 flex flex-col items-start gap-4 rounded-2xl">
          <div className="bg-[#F98005] p-2 rounded-lg">
            <MdHealthAndSafety size={30} className="text-zinc-800" />
          </div>
          <h2 className="text-2xl font-semibold text-zinc-800">Safety First</h2>
          <p className=" w-[80%] lg:w-[60%] text-zinc-500 text-sm">
            {
              "Your delivery's safety is guaranteed through our multy-layered quality checks at the vendor and dispatch levels. We prioritize your well-being."
            }
          </p>
          <BsShieldFillCheck
            size={90}
            className="absolute right-4 bottom-4 text-zinc-500 opacity-25"
          />
        </div>
        <div className="col-span-1 shadow-2xl relative overflow-hidden bg-[#4A53AC] p-10 flex flex-col items-start gap-4 rounded-2xl">
          <div className="bg-[#F98005] p-2 rounded-lg">
            <RiFirstAidKitFill size={30} className="text-zinc-800" />
          </div>
          <h2 className="text-2xl font-semibold text-[#F2F0FE]">
            Health Matters
          </h2>
          <p className="lg:w-[90%] text-[#9CA2E2] text-sm">
            {
              "Medicine, food, or groceries-every items is treated as a lifeline. We don't just deliver, we protect"
            }
          </p>
          <BsFillHeartPulseFill
            size={90}
            className="absolute -right-5 -rotate-15 -bottom-5 text-zinc-500 opacity-25"
          />
        </div>
      </div>
      <div className="bg-[#DBEBF4] p-8 mt-8 rounded-2xl md:grid md:grid-cols-2">
        <div className="flex flex-col gap-2 items-start">
          <div className="bg-[#F7C229] p-2 rounded-xl">
            <MdHandshake size={30} />
          </div>
          <h1 className="text-2xl font-bold text-zinc-800">Unwavering Trust</h1>

          <p className=" text-xs text-[#273238] w-[80%] md:w-[90%]">
            While competitors call it deliveries, we call it a promise. Safety
            and priority over profits define every single interaction we have
            with you.
          </p>
        </div>
        <div className="hidden md:flex gap-4">
          <div className="w-40 h-30  rounded-2xl overflow-hidden shadow-xl ">
            <Image
              src="/images/about-4.jpeg"
              width={240}
              height={240}
              className="object-cover w-full h-full"
              alt="Hands of a delivery person holding a bag of groceries in a paper bag"
            />
          </div>
          <div className="w-40 h-30 rounded-2xl overflow-hidden shadow-xl mt-10">
            <Image
              src="/images/about-5.jpeg"
              width={240}
              height={240}
              className=" object-cover w-full h-full"
              alt="A delivery man carrying a basket of groceries"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorePillarSection;
