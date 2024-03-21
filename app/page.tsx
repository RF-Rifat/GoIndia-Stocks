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
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div className="flex">
      <div className={`absolute lg:relative ${sideBarOpen && "z-40"}`}>
        <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      </div>
      <div
        onClick={() => setSideBarOpen(!sideBarOpen)}
        className={`absolute ${
          sideBarOpen ? "left-72" : "left-0 lg:left-72"
        } transition-transform duration-500 top-[45%] h-16 w-6 p-[6px] cursor-pointer text-white bg-[#13294f] flex items-center justify-center z-50`}
      >
        <BiSolidRightArrow className="w-4 h-4" />
      </div>

      {/*           Discussion   form       */}
      <div className="hidden lg:flex gap-8 px-6">
        <DiscussionForm />
        <Market />
      </div>
      <div className="lg:hidden z-10">
        <TabsDefault />
      </div>
    </div>
  );
}
