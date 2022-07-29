import React, { FC } from "react";
import { IFinancingSolver } from "../financingSolver/iFinancingSolver";

type FinancingStepProps = {
  FinancingComponent: IFinancingSolver;
};

const FinancingStep: FC<FinancingStepProps> = (props: FinancingStepProps) => {
  const { FinancingComponent } = props;
  const amount = "$30.000.000";

  return (
    <div>
      <h1>abajo de la línea va el solver:</h1>
      <hr />
      <div>
        <FinancingComponent amount={amount} />
      </div>
    </div>
  );
};

export default FinancingStep;
