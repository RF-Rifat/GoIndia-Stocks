"use client";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import { BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";
import DiscussionForm from "@/components/DiscussionForm";
import MarketCard from "@/components/MarketCard";
import Market from "@/components/Market";
import { TabsDefault } from "@/components/Tab";
export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <div className="flex">
      <div className={`absolute lg:hidden ${sideBarOpen && "z-40"}`}>
        <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      </div>
      <div className={`relative lg:block hidden ${sideBarOpen && "z-40"}`}>
        <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      </div>
      <div
        onClick={() => setSideBarOpen(!sideBarOpen)}
        className={`absolute ${
          sideBarOpen ? "left-72" : "left-0"
        } transition-transform duration-500 top-[45%] h-16 w-6 p-[6px] cursor-pointer text-white bg-[#13294f] flex items-center justify-center z-50`}
      >
        <BiSolidRightArrow className="w-4 h-4" />
      </div>

      {/*           Discussion   form       */}
      <div className="hidden lg:flex lg:flex-wrap xl:flex-nowrap gap-8 px-6">
        <div>
          <h2 className="text-3xl py-1 font-bold text-deep-orange-600 bg-gray-200 text-center w-80 rounded-lg my-4">
            Discussion Form
          </h2>
          <DiscussionForm />
        </div>
        <div>
          <h2 className="text-2xl py-1 font-bold text-deep-orange-600 bg-gray-200 text-center w-80 rounded-lg my-4">
            Market Stories
          </h2>
          <Market />
        </div>
      </div>
      <div className="lg:hidden z-10">
        <TabsDefault />
      </div>
    </div>
  );
}
