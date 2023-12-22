import Input from "./Input";
import "./UserInput.css";
export default function UserInput({ onInvestmentChange, investments }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investments;
    console.log('--------');
  console.log(duration);
  console.log('--------');
  return (
    <section id="user-input">
      {duration !== null && duration < 1 && <h1>Duration can't be less than 1</h1>}
      <div className="input-group">
        <Input
          onInvestmentChange={onInvestmentChange}
          initialValue={initialInvestment}
        >
          Initial Investment
        </Input>
        <Input
          onInvestmentChange={onInvestmentChange}
          initialValue={annualInvestment}
        >
          Annual Investment
        </Input>
      </div>
      <div className="input-group">
        <Input
          onInvestmentChange={onInvestmentChange}
          initialValue={expectedReturn}
        >
          Expected Return
        </Input>
        <Input onInvestmentChange={onInvestmentChange} initialValue={duration}>
          Duration
        </Input>
      </div>
    </section>
  );
}
