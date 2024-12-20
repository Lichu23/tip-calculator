import { useContext, useState } from "react";
import { CalculatorContext } from "../context/context";

export const CalculatorTip = () => {
  const [isError, setIsError] = useState(false);
  const {
    bill,
    setBill,
    numberPeople,
    setNumberPeople,
    tipAmountTotal,
    setTipAmounTotal,
    setTotalBillPerPerson,
  } = useContext(CalculatorContext);

  const handleCalculateTipAmount = (tipPercentage: number) => {
    if (!bill || !numberPeople) {
      return setIsError(true);
    }
    const calculateTipAmount = (bill * tipPercentage) / 100;
    setTipAmounTotal(calculateTipAmount);
  };

  const handleCalculateTipAmountPerPerson = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!bill || !numberPeople) {
      return setIsError(true);
    }

    const totalBillPerPerson = bill / numberPeople;

    const totalTipAmount = tipAmountTotal;
    const totalTipAmountPerPerson = totalTipAmount / numberPeople;

    setTotalBillPerPerson(totalBillPerPerson);
    setTipAmounTotal(totalTipAmountPerPerson);
    setIsError(false);
  };

  return (
    <div className="flex flex-col w-full lg:h-[430px] md:h-[430px] sm:h-[350px] sm:w-full pr-6">
      <form
        onSubmit={handleCalculateTipAmountPerPerson}
        className="flex flex-col gap-2  mb-10"
      >
        <label htmlFor="">Bill</label>
        <input
          className={`${isError ? "border-2 border-red-500" : "border-2 border-green-500"} bg-[#f4fafa]  w-full py-2 px-2 rounded-lg`}
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
          placeholder="$"
          type="text"
        />

        <div className="mt-6">
          <h2>Select Tip %</h2>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <button
              onClick={() => handleCalculateTipAmount(5)}
              className="bg-[#00494d] hover:bg-[#61b5be] hover:text-[#00494d]  p-2.5 rounded-lg text-white"
            >
              5%
            </button>
            <button
              onClick={() => handleCalculateTipAmount(10)}
              className="bg-[#00494d] hover:bg-[#61b5be] hover:text-[#00494d] p-2.5 rounded-lg text-white"
            >
              10%
            </button>
            <button
              onClick={() => handleCalculateTipAmount(15)}
              className="bg-[#00494d] hover:bg-[#61b5be] hover:text-[#00494d]  p-2.5 rounded-lg text-white"
            >
              15%
            </button>
            <button
              onClick={() => handleCalculateTipAmount(25)}
              className="bg-[#00494d] hover:bg-[#61b5be] hover:text-[#00494d]  p-2.5 rounded-lg text-white"
            >
              25%
            </button>
            <button
              onClick={() => handleCalculateTipAmount(50)}
              className="bg-[#00494d] hover:bg-[#61b5be] hover:text-[#00494d]  p-2.5 rounded-lg text-white"
            >
              50%
            </button>
            <button className="bg-[#f4fafa] text-[#5e7a7d] p-2.5 rounded-lg ">
              Custom
            </button>
          </div>
        </div>
        <label>Number of People</label>
        <input
          className={` ${
            isError ? "border-2 border-red-600" : "border-2 border-green-600"
          }  bg-[#f4fafa]  w-full py-2 px-2 rounded-lg `}
          value={numberPeople}
          onChange={(e) => setNumberPeople(+e.target.value)}
          placeholder="eg: 2"
        />
      </form>
    </div>
  );
};
