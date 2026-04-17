import Image from "next/image";

const MultiLayerSection = () => {
  return (
    <div className="md:grid md:grid-cols-2 gap-6 p-10 max-w-7xl mx-auto hidden">
      <div className="w-full md:flex justify-center hidden">
        <div className="relative w-100 h-140 rounded-4xl overflow-hidden">
          <Image
            src="/images/kart-express-1.png"
            fill
            className="absolute object-cover"
            alt="A groups of programmers, which shows we have a team of programs working on each project"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center  col-span-2 md:col-span-1">
        <h1 className="text-4xl font-extrabold">
          Our Multi-Layered <br />
          <span className="text-[#4A53AC]">Assurance.</span>
        </h1>
        <div className="flex gap-2 items-start mt-4">
          <span className="text-3xl md:text-lg md:opacity-100 opacity-50 md:border-2 md:border-[#AB5503] px-3 py-1.5 rounded-lg text-[#AB5503] font-black">
            01
          </span>
          <div className="">
            <h2 className="font-bold text-zinc-700">Vendor Level Checks</h2>
            <p className="md:w-[60%] text-xs text-zinc-600">
              Our first line of defence. Every item is verified for freshness,
              hygiene and authenticity before it even leaves the partner
              facility.
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-start mt-4">
          <span className="text-3xl md:text-lg md:opacity-100 opacity-50 md:border-2 md:border-[#AB5503] px-3 py-1.5 rounded-lg text-[#AB5503] font-black">
            02
          </span>
          <div className="">
            <h2 className="font-bold text-zinc-700">
              Dispatch Level Screening
            </h2>
            <p className="md:w-[60%] text-xs text-zinc-600">
              Our dispatchers perform secondary checks to ensure the packaging
              integrity is maintained and the items meet KartExpress safety
              standards
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-start mt-4">
          <span className="opacity-50 text-3xl md:text-lg md:opacity-100 md:border-2 md:border-[#AB5503] px-3 py-1.5 rounded-lg text-[#AB5503] font-black">
            03
          </span>
          <div className="">
            <h2 className="font-bold text-zinc-700">
              Ultimate Delivery Ecosystem
            </h2>
            <p className="md:w-[60%] text-xs text-zinc-600">
              Continuous real-time tracking and temperature-sensity storage
              ensure your package arrives exactly as it was intended-safe and
              healthy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiLayerSection;
