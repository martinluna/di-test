import { FC }  from "react";

export type FinancingSolverProps = {
  amount: string;
}

export interface IFinancingSolver extends FC<FinancingSolverProps> {
  (props: FinancingSolverProps): JSX.Element;
}