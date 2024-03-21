import Image from "next/image";

const MarketCard = () => {
  return (
    <>
      <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif]">
        <Image
          width={1000}
          height={1000}
          src="/image.jpg"
          className="h-32 w-full"
          alt={""}
        />
        <div className="px-4 py-2">
          <h3 className="text-[#333] text-xl font-bold">Heading</h3>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </>
  );
};

export default MarketCard;
