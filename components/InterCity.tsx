import Image from "next/image";

const InterCity = () => {
  return (
    <div className="bg-[#EDF8FF] ">
      <div className="max-w-360 mx-auto grid grid-cols-2 items-center p-3">
        <div className="relative w-[14rem] h-[10rem] rounded-2xl overflow-hidden shadow-2xl border-8 border-[#D5E5EF] block md:hidden">
          <Image
            src="/images/africa.png"
            fill
            className="absolute object-cover"
            alt=""
          />
        </div>

        <div className="px-8 py-20 block md:hidden">
          <h1 className="text-[#243036] text-2xl font-extrabold">
            From <span className="text-[#924601]">Accra</span> to{" "}
            <span className="text-[#4A53AC]">Africa</span>
          </h1>
          <h2 className="text-[#924601] text-2xl font-extrabold">
            Bridging the Gap.
          </h2>
          <div className="flex items-start mt-4">
            <span className="p-2 bg-[#CDE0EA] rounded-lg mr-2 text-[#924601] text-xs font-extrabold">
              01
            </span>
            <div className="">
              <h3 className="text-sm font-bold tracking-wider">
                Localized Infrastructure
              </h3>
              <p className="text-xs text-zinc-500 mt-2">
                {
                  "We don't just use GPS; we use community knowledge. Our 'Walkers' navigate markets where bikes can't reach"
                }
              </p>
            </div>
          </div>
          <div className="flex items-start mt-4">
            <span className="p-2 bg-[#CDE0EA] rounded-lg mr-2 text-[#924601] text-xs font-extrabold">
              02
            </span>
            <div className="">
              <h3 className="text-sm font-bold tracking-wider">
                Continental Expansion
              </h3>
              <p className="text-xs text-zinc-500 mt-2">
                {
                  "Starting in Ghana, we are building the blueprint for high-density delivery across ECOWAS and scaling to Nigeria."
                }
              </p>
            </div>
          </div>
          <div className="flex items-start mt-4">
            <span className="p-2 bg-[#CDE0EA] rounded-lg mr-2 text-[#924601] text-xs font-extrabold">
              03
            </span>
            <div className="">
              <h3 className="text-sm font-bold tracking-wider">
                Sustainable Fleet
              </h3>
              <p className="text-xs text-zinc-500 mt-2">
                {
                  "Integrating electric bikes and bicycle couriers to reduce carbon footprint while maintaining maximum speed"
                }
              </p>
            </div>
          </div>
        </div>
        <div className="px-8 py-20 hidden md:block">
          <h1 className="text-[#243036] text-3xl font-extrabold">
            From <span className="text-[#924601]">Accra</span> to{" "}
            <span className="text-[#4A53AC]">Africa</span>
          </h1>
          <p className="text-zinc-600 text-sm my-4 w-[60%]">
            {
              "We aren't just starting a delivery app; we are building the kinetic infrastructure for the continent. Starting in Ghana, scaling to Nigeria and connecting the West Africa corridor"
            }
          </p>
          <div className="border-y py-2 grid grid-cols-2">
            <div className="">
              <h1 className="text-[#924601] text-2xl font-extrabold">100k+</h1>
              <p className="text-[12px] text-zinc-800 font-bold tracking-wider">
                Planned Users
              </p>
            </div>
            <div>
              <h1 className="text-[#4A53AC] text-2xl font-extrabold">15+</h1>
              <p className="text-[12px] text-zinc-800 font-bold tracking-wider">
                Cities By 2027
              </p>
            </div>
          </div>
        </div>
        <div className="md:block hidden">
          <div className="relative w-92 h-56 lg:w-120 lg:h-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/africa.png"
              fill
              className="absolute object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterCity;
