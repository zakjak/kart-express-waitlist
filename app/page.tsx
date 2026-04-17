import EssentialComponent from "@/components/EssentialComponent";
import InterCity from "@/components/InterCity";
import TheWhy from "@/components/TheWhy";
import TopBanner from "@/components/TopBanner";
import WaitListForm from "@/components/WaitListForm";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className={roboto.className}>
      <TopBanner />
      <TheWhy />
      <EssentialComponent />
      <InterCity />
      <WaitListForm />
    </div>
  );
}
