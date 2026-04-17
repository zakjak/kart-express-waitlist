"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-20 bg-whie">
      <div className="flex items-center justify-between relative bottom-4 w-[90%] mx-auto">
        {/* <div className=" bottom-11 relative"> */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={240}
            height={240}
            className="w-40 h-30"
            alt="Kart exporess Logo"
          />
        </Link>

        <div className="hidden md:flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/about-us" className="hover:underline">
            About Us
          </Link>
          <Link href={"#delivery"} className="hover:underline">
            Delivery
          </Link>
        </div>

        <div className="hidden md:flex">
          <Link href={"#wait-list-section"}>
            <Button className="bg-linear-to-r from-[#924601] to-[#f57c00] py-8 px-4 font-semibold text-[1.1rem]">
              <span>Join the Waitlist</span>
            </Button>
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="block md:hidden">
            <IoMenu size={30} />
          </SheetTrigger>
          <SheetContent
            side="top"
            className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh] p-10"
          >
            <Link
              href="/"
              className="hover:underline"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="hover:underline"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <Link
              href={"#delivery"}
              className="hover:underline"
              onClick={() => setOpen(false)}
            >
              Delivery
            </Link>
            <Link href={"#wait-list-section"} onClick={() => setOpen(false)}>
              <Button
                className="bg-linear-to-r w-full from-[#924601] to-[#f57c00] py-6
               px-4 font-semibold text-[1.1rem] cursor-pointer"
              >
                <span>Join the Waitlist</span>
              </Button>
            </Link>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
