import "./App.css";
import FinancingStep from "./components/financingStep/index.tsx";
import Forum from "./components/financingSolver/implementations/forum/index.tsx";
import Santander from "./components/financingSolver/implementations/santander/index.tsx";

function App() {
  return (
    <div className="App">
      <FinancingStep FinancingComponent={Forum} />
    </div>
  );
}

export default App;
