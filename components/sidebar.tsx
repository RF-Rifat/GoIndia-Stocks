"use client";
import { IoHome } from "react-icons/io5";
import {
  Badge,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaLightbulb } from "react-icons/fa";
import { AiOutlineDollarCircle } from "react-icons/ai";
import Link from "next/link";
const icon = {
  className: "w-5 h-5 text-inherit",
};
import { FaUser } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: JSX.Element;
}

export function SideNav({ sideBarOpen }: any) {
  const [dropdown, setDropdown] = useState(Boolean);
  const navigationItems: NavItem[] = [
    { label: "Audience", href: "/audience", icon: <AiOutlineDollarCircle /> },
    { label: "Posts", href: "/posts", icon: <BiSolidMessageDetail /> },
    { label: "Schedules", href: "/schedules", icon: <BiSolidMessageDetail /> },
    { label: "Promote", href: "/promote", icon: <BiSolidMessageDetail /> },
    {
      label: "Earnings and taxes",
      href: "/earnings-and-taxes",
      icon: <BiSolidMessageDetail />,
    },
    { label: "Refunds", href: "/refunds", icon: <BiSolidMessageDetail /> },
    { label: "Profile", href: "/profile", icon: <BiSolidMessageDetail /> },
    { label: "Logout", href: "/logout", icon: <BiSolidMessageDetail /> },
  ];
  return (
    <aside
      className={`${
        sideBarOpen ? "translate-x-0 z-30 " : "-translate-x-80 lg:w-0"
      } "fixed inset-0 z-50 h-fit overflow-y-auto w-72 transition-transform duration-100 xl:translate-x-0 shadow-md shadow-blue-gray-500/5 dark:bg-dark"`}
    >
      <nav className="bg-[#13294f] relative h-screen top-0 left-0 py-6 font-[sans-serif]">
        <div className="px-4">
          <Link href="/">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <FaUser className="w-8 h-8 text-white" />
                <span className="text-white items-center"> Hello User</span>
              </div>
              <Badge color="red">
                <IoNotifications className="w-8 h-8 text-white" />
              </Badge>
            </div>
          </Link>
        </div>
        <div className="overflow-auto py-6 mt-4">
          <div className="space-y-1">
            <li onClick={() => setDropdown(!dropdown)}>
              <div className="text-white hover:text-white text-[15px] flex items-center hover:bg-[#0d0d2b] px-4 py-3 transition-all gap-2 text-lg">
                <span>
                  <BiSolidMessageDetail />
                </span>
                <span>Discussion Form</span>
                <BiSolidRightArrow
                  className={`size-3 ml-10 ${
                    dropdown ? "rotate-0" : "rotate-90"
                  } duration-200`}
                />
              </div>
            </li>
            <ul className={`${dropdown ? "hidden" : "block"} duration-200`}>
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <div className="text-white hover:text-white text-[15px] flex items-center hover:bg-[#0d0d2b] px-8 py-3 transition-all gap-2 text-lg">
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default SideNav;
