import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import ResultTable from "./components/ResultTable/ResultTable";
import { useState } from "react";

function App() {
  const [investments, setInvestment] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  function handleInvestmentChange(key, value) {
    setInvestment((previousInvestment) => ({
      ...previousInvestment,
      [key]: +value,
    }));
  }
  return (
    <>
      <Header>Investment Calculator</Header>
      <UserInput
        onInvestmentChange={handleInvestmentChange}
        investments={investments}
      />
      <ResultTable investments={investments} />
    </>
  );
}

export default App;
