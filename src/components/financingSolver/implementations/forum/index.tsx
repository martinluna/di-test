import React, { useEffect, useState } from "react";
import { IFinancingSolver, FinancingSolverProps } from "../../iFinancingSolver";

const Forum: IFinancingSolver = (props: FinancingSolverProps) => {
  const { amount } = props;
  return (
    <div>
      <h2>Forum</h2>
      <p>amount: {amount}</p>
    </div>
  );
};

export default Forum;
