import React from "react";
import { IFinancingSolver, FinancingSolverProps } from "../../iFinancingSolver";

const Santander: IFinancingSolver = (props: FinancingSolverProps) => {
  const { amount } = props;
  return (
    <div>
      <h2>Santander</h2>
      <p>amount: {amount}</p>
    </div>
  );
};

export default Santander;
