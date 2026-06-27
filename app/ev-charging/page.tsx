import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { GiSolarPower, GiElectric, GiScooter } from "react-icons/gi";
import { LuScanQrCode, LuLeaf, LuSmartphoneCharging } from "react-icons/lu";
import { BsHandbagFill } from "react-icons/bs";

const EvCharging = () => {
  return (
    <div className="">
      <div className="w-full md:grid md:grid-cols-2">
        <div className="pl-10 py-20 bg-green-50  lg:gap-4">
          <span className="bg-[#E4F4E6] text-xs text-[#20481F] px-2 rounded-2xl">
            EV CHARGING
          </span>
          <h1 className="lg:text-4xl text-2xl w-[60%] font-bold text-zinc-800 pt-2 lg:pt-0">
            Powering Ghana{"'s"} Future,{" "}
            <span className="text-[#0C4A25]">One Charge</span> at a Time.
          </h1>
          <h4 className="lg:w-[50%] w-[80%] text-zinc-800 mt-2">
            KartExpress is building a reliable and accessible EV charging
            network to support clean mobility, reduce emissions and power a
            sustainable future.
          </h4>
          <div className="hidden md:flex gap-4 mt-4">
            <div className="flex items-start gap-2">
              <div className="text-[#0c4a25] border border-[#0c4a25] rounded-2xl p-2">
                <FaLocationDot />
              </div>
              <div className="">
                <h1 className="font-semibold">100%</h1>
                <p className="text-xs lg:w-[60%]">
                  Charging points and growing
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-[#0c4a25] border border-[#0c4a25] rounded-2xl p-2">
                <GiSolarPower />
              </div>
              <div className="">
                <h1 className="font-semibold">100%</h1>
                <p className="text-xs lg:w-[60%]">Renewable Energy Powered</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="text-[#0c4a25] border border-[#0c4a25] rounded-2xl p-2">
                <GiElectric />
              </div>
              <div className="">
                <h1 className="font-semibold">100%</h1>
                <p className="text-xs lg:w-[60%]">Smart Secure. Always On.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[30rem]">
          <div className="absolute w-[25%] hidden md:block h-full bg-linear-to-r border-r-transparent from-green-50 to-transparent md:left-0  z-50" />
          <div className="absolute w-full block md:hidden h-[8rem] bg-linear-to-b border-r-transparent from-green-50 to-transparent top-0  z-50" />
          <Image
            src="/images/charging-station.png"
            alt=""
            className="w-full object-cover absolute"
            fill
          />
        </div>
      </div>
      <div className="w-full">
        <div className="lg::w-[70rem] mx-auto py-10">
          <h1 className="text-center text-xl lg:text-3xl font-semibold text-zinc-700">
            How KartExpress EV Charging Works
          </h1>
          <div className="md:flex mt-4 flex flex-col lg:flex-row px-10">
            <div className="">
              <div className="flex items-start gap-2">
                <div className="text-[#3A8625] border border-[#CBDCCE] rounded-full p-2">
                  <FaLocationDot size={40} />
                </div>
                <div className="">
                  <h1 className="font-semibold">1. Find a Station</h1>
                  <p className="text-xs w-[60%]">
                    Locate nearby KartExpress charging stations on our app or
                    website
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4 ">
              <div className="flex items-start gap-2">
                <div className="text-[#3A8625] border border-[#CBDCCE] rounded-full p-2">
                  <LuScanQrCode size={40} />
                </div>
                <div className="">
                  <h1 className="font-semibold">2. Scan & Plug In</h1>
                  <p className="text-xs w-[60%]">
                    Scan the QR code, connect your vehicle and start charging
                    instantly.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4 ">
              <div className="flex items-start gap-2">
                <div className="text-[#3A8625] border border-[#CBDCCE] rounded-full p-2">
                  <LuSmartphoneCharging size={40} />
                </div>
                <div className="">
                  <h1 className="font-semibold">3. Pay Seamlessly</h1>
                  <p className="text-xs w-[60%]">
                    Pay securely through the app with multiple convenient
                    payment options.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-2 mt-4 ">
              <div className="flex items-start gap-2">
                <div className="text-[#3A8625] border border-[#CBDCCE] rounded-full p-2">
                  <LuLeaf size={40} />
                </div>
                <div className="">
                  <h1 className="font-semibold">4. Drive Green</h1>
                  <p className="text-xs w-[60%]">
                    Enjoy a clean, reliable and affordable charging experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 lg:gap-2 items-center lg:w-[70rem] lg:h-[12rem] mx-auto bg-[#E9F4EA] overflow-hidden p-6">
          <div className="overflow-hidden hidden lg:block">
            <div className="relative w-[10rem] h-[20rem] left-10 top-20">
              <Image
                src="/images/ev-phone.png"
                fill
                className="object-cover absolute"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">All in One App</h2>
            <h3 className="text-sm font-semibold tracking-wide text-green-800">
              Deliverires. Shopping. EV Charging
            </h3>
            <p className="text-xs font-semibold w-[80%]">
              The KartExpress app gives you access to delivery, shopping and
              reliable EV charging anytime, anywhere.
            </p>
          </div>
          <div className="flex mt-4 gap-8 lg:justify-center">
            <div className="flex items-start flex-col gap-2">
              <div className="bg-white p-4 text-[#148C1F] rounded-lg">
                <BsHandbagFill size={30} />
              </div>
              <p className="text-xs">Multi-Store Shopping</p>
            </div>
            <div className="flex items-start flex-col gap-2">
              <div className="bg-white p-4 text-[#148C1F] rounded-lg">
                <GiScooter size={30} />
              </div>
              <p className="text-xs">Fast & Relaible Delivery</p>
            </div>
            <div className="flex items-start flex-col gap-2">
              <div className="bg-white p-4 text-[#148C1F] rounded-lg">
                <GiElectric size={30} />
              </div>
              <p className="text-xs">EV Charging Network</p>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 text-lg sm:text-sm font-bold text-zinc-500 ">
            <h1>Download the App</h1>
            <p>Coming Soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvCharging;
