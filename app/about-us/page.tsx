import { Roboto } from "next/font/google";
import MultiLayerSection from "@/components/MultiLayerSection";
import MultiDefenceSection from "@/components/MultiDefenceSection";
import WaitListForm from "@/components/WaitListForm";
import AboveProfitSection from "@/components/AboveProfitSection";
import CorePillarSection from "@/components/CorePillarSection";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const AboutPage = () => {
  return (
    <div className={`${roboto.className} bg-[#E8F3FC]`}>
      <AboveProfitSection />

      <CorePillarSection />

      <div className="">
        <MultiLayerSection />
        <MultiDefenceSection />
      </div>
      <div id="waitlist-form" className="">
        <WaitListForm />
      </div>
    </div>
  );
};

export default AboutPage;
