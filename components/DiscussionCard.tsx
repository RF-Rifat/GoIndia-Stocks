import Image from "next/image";
import { GrFavorite } from "react-icons/gr";
import { FaRegMessage } from "react-icons/fa6";
import { Chip } from "@material-tailwind/react";
import { FiEye } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
const DiscussionCard = () => {
  return (
    <>
      {" "}
      <article className="rounded-xl border-2 border-gray-100 bg-white shadow-xl relative">
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
          <a href="#" className="block shrink-0">
            <Image
              src="/user.png"
              alt=""
              width={600}
              height={600}
              className="size-10 rounded-lg object-cover"
            />
          </a>
          <div>
            <h3 className="font-medium sm:text-lg flex gap-6">
              <div>Lorem ipsum dolor sit amet.</div>
              {/* @ts-ignore*/}
              <Chip
                color="blue"
                size="sm"
                className="rounded-full hidden sm:block"
                value="sector 3"
              />
            </h3>
            <p className="line-clamp-2 text-sm text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, accusantium temporibus iure delectus.
            </p>
            <div className="mt-2 grid grid-flow-col sm:gap-2 lg:space-x-6">
              <div className="flex items-center gap-2">
                <GrFavorite />
                <p>2k</p>
              </div>
              <div className="flex items-center gap-2">
                <FiEye />
                <p>2k</p>
              </div>
              <div className="flex items-center gap-2">
                <FiShare2 />
                <p>14 comments</p>
              </div>
              <div className="flex items-center gap-2">
                <FaRegMessage />
                <p>share</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute text-blue-600 top-6 right-6 font-bold">
          2 min ago
        </div>
      </article>
    </>
  );
};

export default DiscussionCard;
