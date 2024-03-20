import MarketCard from "./MarketCard";

const Market = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 place-items-center gap-4">
      <MarketCard />
      <MarketCard />
      <MarketCard />
    </div>
  );
};

export default Market;
