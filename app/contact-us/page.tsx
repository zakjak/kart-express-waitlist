import Image from "next/image";
import { FaEnvelope } from "react-icons/fa6";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const page = () => {
  return (
    <div className={`${roboto.className} p-8`}>
      <div className="md:grid md:grid-cols-2 gap-4 max-w-[80rem] mx-auto">
        <div className="flex flex-col gap-8 items-start justify-center">
          <h1 className="text-6xl font-bold text-zinc-800">
            Always in <span className="text-[#F98005]">Motion.</span> <br />{" "}
            Always here to <br />
            help.
          </h1>
          <p className="w-[80%] text-zinc-500">
            Our kinetic infrasture never sleeps. While our couriers traverse the
            country, our support team ensure your peace of mind through
            streamlined digital communication
          </p>
          <div className="flex items-center gap-4 bg-[#E4F3FC] px-8 py-4 rounded-2xl border-2 border-zinc-200">
            <FaEnvelope className="text-[#F98005]" size={30} />
            <div className="">
              <h2 className="text-zinc-800 font-bold text-lg">
                Direct Response Channel
              </h2>
              <h2 className="font-bold text-lg text-[#914804]">
                kartexpressltd@gmail.com
              </h2>
            </div>
          </div>
        </div>
        <div className="relative w-[80%] h-100 md:w-[80%] md:h-160 rounded-3xl overflow-hidden mt-8">
          <Image
            src="/images/motion-bike.jpg"
            fill
            className="absolute object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;
