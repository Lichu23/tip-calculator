import { createContext, ReactNode, useState } from "react";

interface CalculatorContextData {
  bill: number;
  setBill: (value: number) => void;
  numberPeople: number;
  setNumberPeople: (value: number) => void;
  tipAmountTotal: number;
  setTipAmounTotal: (value: number) => void;
  totalBillPerPerson: number,
  setTotalBillPerPerson: (value: number) => void;
}

export const CalculatorContext = createContext<CalculatorContextData>({
  bill: 0,
  setBill: () => {},
  numberPeople: 0,
  setNumberPeople: () => {},
  tipAmountTotal: 0,
  setTipAmounTotal: () => {},
  totalBillPerPerson: 0,
  setTotalBillPerPerson: () => {},
});

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [bill, setBill] = useState(0);
  const [numberPeople, setNumberPeople] = useState(0);
  const [tipAmountTotal, setTipAmounTotal] = useState(0);
  const [totalBillPerPerson, setTotalBillPerPerson] = useState(0);

  return (
    <CalculatorContext.Provider
      value={{
        totalBillPerPerson,
        setTotalBillPerPerson,
        bill,
        setBill,
        numberPeople,
        setNumberPeople,
        tipAmountTotal,
        setTipAmounTotal,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
