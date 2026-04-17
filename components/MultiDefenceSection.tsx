import Image from "next/image";

const MultiDefenceSection = () => {
  return (
    <div className=" p-10 max-w-[80rem] mx-auto block md:hidden bg-[#dcf1f6]">
      <div className="flex flex-col gap-4 justify-center w-[90%]">
        <h1 className="text-4xl font-extrabold text-center">
          The Multi-Layered <br /> Defense
        </h1>
        <p className="text-center text-lg text-zinc-600">
          &ldquo;We call it a lifeline. You call it peace of mind.&rdquo;
        </p>
        <div className="flex gap-4 items-start mt-4">
          <span className="text-4xl opacity-50 px-3 py-1.5 text-[#AB5503] font-black">
            01
          </span>
          <div className="">
            <h2 className="font-bold text-zinc-700">
              Vendor Level Sanitization
            </h2>
            <p className="md:w-[60%] text-xs text-zinc-600 mt-2">
              Every partner vendor undergoes rigorous hygiene training. Items
              are sealed in tamper-proof, medical-grade packaging before
              dispatch
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start mt-4">
          <span className="text-4xl opacity-50 px-3 py-1.5 text-[#AB5503] font-black">
            02
          </span>
          <div className="">
            <h2 className="font-bold text-zinc-700">Dispatch Verification</h2>
            <p className="md:w-[60%] text-xs text-zinc-600 mt-2">
              Our riders are more than drivers; they are safety stewards. Every
              item is verified for seal integrity before it leaves the station.
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-start mt-4">
          <span className="text-4xl opacity-50 px-3 py-1.5 text-[#AB5503] font-black">
            03
          </span>
          <div className="">
            <h2 className="font-bold text-zinc-700">
              Real-time Environmental Monitoring
            </h2>
            <p className="md:w-[60%] text-xs text-zinc-600 mt-2">
              Using smart sensors, we track the storage conditions of food and
              medicine to ensure they stay within safe temperature ranges
            </p>
          </div>
        </div>
        <div className="relative w-[80%] h-[15rem] mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/medical-1.png"
            fill
            className="absolute object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MultiDefenceSection;
