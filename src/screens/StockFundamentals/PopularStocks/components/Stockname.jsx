import logo from "../assets/stock-logo.png";

export const StockName = () => {
  return (
    <div className="flex gap-4 mt-2 items-center w-80">
      <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <h1 className="text-xl font-bold">Grab Holding Ltd</h1>
        <div className="flex gap-2">
          <span className="text-xs font-semibold">$3.44</span>
          <span className="text-xs font-semibold text-red-500">
            ↓ 0.80 (3.2%)
          </span>
        </div>
      </div>
    </div>
  );
};
