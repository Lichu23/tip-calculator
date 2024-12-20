import { useContext } from "react";
import { CalculatorContext } from "../context/context";
import { formatPriceArg } from "../utils/formatPrice";

export const TipResult = () => {
  const { setTotalBillPerPerson, setTipAmounTotal } = useContext(CalculatorContext);
    
  const handleReset = () => {
    setTotalBillPerPerson(0);
    setTipAmounTotal(0);
  };
  const { tipAmountTotal, totalBillPerPerson } = useContext(CalculatorContext);
  
  return (
    <div className="bg-[#00494d] w-full h-[330px] rounded-2xl">
      <div className="flex flex-col px-8 py-5">
        <div className="flex justify-between items-center mt-4">
          <div className="flex-col">
            <p className="text-white text-sm">Tip Amount</p>
            <p className="text-slate-400 text-sm">/ person</p>
          </div>
          <p className="text-4xl text-[#26c0ab]">
            {formatPriceArg.format(tipAmountTotal)}
          </p>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="flex-col">
            <p className="text-white text-sm">Total</p>
            <p className="text-slate-400 text-sm">/ person</p>
          </div>
          <p className="text-4xl text-[#26c0ab]">
            {formatPriceArg.format(totalBillPerPerson)}
          </p>
        </div>
        <button
          onClick={handleReset}
          className="bg-[#1a666e] text-[#1e4a4f] p-2 mt-32 rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
