import Image from "next/image";
import Link from "next/link";
import { BsForkKnife } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { PiFirstAidKitFill } from "react-icons/pi";
import { BsBoxSeamFill } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";

const EssentialComponent = () => {
  return (
    <div className="bg-[#E4F3FC] lg:p-10 p-4" id="delivery">
      <div className="max-w-360 mx-auto">
        <div className="mb-4">
          <h2 className="font-extrabold text-lg">
            Essentials Delivered.{" "}
            <span className="text-[#4C55AD] ">No Friction</span>
          </h2>
          <h3 className="text-zinc-500 font-semibold">
            {
              "Whether it's across the street or across the city, we've got you covered."
            }
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {/* Top section */}
          <div className="grid md:grid-cols-5 gap-4">
            {/* Right */}
            <div className="col-span-3">
              <div className="bg-[#FFFFFF] flex items-start w-fit rounded-2xl overflow-hidden h-full">
                <div className="p-8">
                  <BsForkKnife size={30} className="text-[#924601]" />
                  <h2 className="mt-4 text-2xl font-semibold text-zinc-700">
                    Food & Fresh Groceries
                  </h2>
                  <p className="text-zinc-500 lg:w-[70%] mt-2">
                    From the local market to global chains. Delivered hot and
                    fresh from the source to your door
                  </p>
                  <Link
                    href="/"
                    className="flex items-center mt-4 gap-2 text-[#924601] font-semibold tracking-wider"
                  >
                    Join Waitlist <FaArrowRight size={22} />
                  </Link>
                </div>
                <div className="relative scale-110 w-70 h-60 opacity-40 rounded-4xl overflow-hidden rotate-5 hidden md:block">
                  <Image
                    src="/images/tilapia-dish-1.jpeg"
                    fill
                    className="absolute object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Plantain with tilapia and sauce served on a plate"
                  />
                </div>
              </div>
            </div>

            {/* Left section */}
            <div className="md:col-span-2 col-span-3">
              <div className="bg-[#4A53AC] flex flex-col w-fit items-start rounded-2xl p-8 relative overflow-hidden">
                <PiFirstAidKitFill size={40} className="text-[#CBCEFF]" />
                <h2 className="text-3xl font-semibold text-[#F2F0FE] my-2">
                  Instant Pharmacy
                </h2>
                <p className="lg:w-[70%] mb-4 text-[#CBCEFF] font-black tracking-wide">
                  Prescriptions and wellness essentials delivered with priority
                  handling and care.
                </p>
                <div className="bg-[#6D75BD] text-white px-4 py-2 font-bold tracking-wider rounded-md">
                  Coming Soon...
                </div>
                <div className="absolute w-20 h-20 bg-[#6D75BD] top-0 right-0 rounded-bl-2xl" />
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-2 col-span-3">
              <div className="bg-[#CDE0EA] flex flex-col w-fit items-start rounded-2xl p-10 relative overflow-hidden h-full">
                <BsBoxSeamFill size={40} className="text-[#243036]" />
                <h2 className="text-3xl font-semibold text-[#243036] my-2">
                  Instant Pharmacy
                </h2>
                <p className="w-[70%] mb-4 text-[#839199] font-black tracking-wide">
                  Prescriptions and wellness essentials delivered with priority
                  handling and care.
                </p>
                <div className="text-[#243036] font-bold tracking-wider">
                  Secure & Fast
                </div>
              </div>
            </div>

            <div className="col-span-3">
              <div className="bg-[#FFFFFF] md:grid md:grid-cols-2 items-center w-fit rounded-2xl overflow-hidden">
                <div className="p-8">
                  <FaWalking size={30} className="text-[#4A53AC]" />
                  <h2 className="mt-4 text-2xl font-semibold text-zinc-700">
                    Food & Fresh Groceries
                  </h2>
                  <p className="text-zinc-500 lg:w-[70%] mt-2">
                    {
                      "Our unique 'Walker' and Bicycle networks ensure we can navigate the tightest alleys and most congested markets where cars can't react."
                    }
                  </p>
                  <Link
                    href="/"
                    className="flex items-center mt-4 gap-2 text-[#924601] font-semibold tracking-wider"
                  >
                    Join Waitlist <FaArrowRight size={22} />
                  </Link>
                </div>
                <div className="relative w-100 h-60  rounded-xl overflow-hidden hidden md:block">
                  <Image
                    src="/images/bicycle.jpg"
                    fill
                    className="absolute object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="bicycle tire, showing just the spokes and chain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EssentialComponent;
