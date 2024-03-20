"use client";
import Image from "next/image";
import Sidebar from "@/components/sidebar";
import { BiSolidRightArrow } from "react-icons/bi";
import { useState } from "react";
export default function Home() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      <div
        onClick={() => setSideBarOpen(!sideBarOpen)}
        className={`absolute ${
          sideBarOpen ? "left-72" : "left-0 md:left-72"
        } transition-transform duration-500 top-[45%] h-16 w-6 p-[6px] cursor-pointer text-white bg-[#13294f] flex items-center justify-center`}
      >
        <BiSolidRightArrow className="w-4 h-4" />
      </div>
    </>
  );
}
