import { CalculatorProvider } from "../context/context";
import { CalculatorTip } from "./calculator-tip";
import { TipResult } from "./tip-result";

export const CalculatorCard = () => {
  return (
    <CalculatorProvider>
      <div className="rounded-2xl sm:w-full sm:h-full md:w-[700px] md:h-[400px] lg:h-[410px] lg:w-[700px] bg-white">
        <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 sm:flex sm:flex-col p-10">
          <CalculatorTip />
          <TipResult />
        </div>
      </div>
    </CalculatorProvider>
  );
};
