import React from "react";
import { Button } from "./ui/button";
import { FaCopyright } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-[#F8FAFC] px-6 py-15">
      <div className="grid grid-cols-3 w-[90%] mx-auto gap-4">
        <div className="">
          <h2 className="text-sm font-semibold">Kart Express</h2>
          <p className="text-xs text-zinc-600 mt-4">
            Building the future of African delivery, one kinetic delivery at a
            time
          </p>
        </div>
        <div className="">
          <h2 className="text-[#C2400D] text-sm font-semibold">COMPANY</h2>
          <div className="flex flex-col items-start">
            <Link href="/about-us">
              <Button variant="link" className="p-0 cursor-pointer">
                About us
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button variant="link" className="p-0 cursor-pointer">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        {/* <div className="">
          <h2 className="text-[#C2400D] text-sm font-semibold">LEGAL</h2>
          <div className="flex flex-col items-start">
            <Button variant="link" className="p-0 cursor-pointer">
              Privacy Policy
            </Button>
            <Button variant="link" className="p-0 cursor-pointer">
              Terms of Service
            </Button>
          </div>
        </div> */}
      </div>
      <div className="flex items-center gap-2 text-xs text-zinc-600 mt-4">
        <FaCopyright />
        <span>
          {new Date().getFullYear()} Kart Express Inc. KINETIC INFRASTURE FOR
          AFRICA.
        </span>
      </div>
    </div>
  );
};

export default Footer;
