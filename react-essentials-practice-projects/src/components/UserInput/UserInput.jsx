export default function UserInput({ onInvestmentChange, investments }) {
  const {initialInvestment, annualInvestment, expectedReturn, duration} = investments;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={
              initialInvestment ? initialInvestment : ""
            }
            onChange={(event) =>
              onInvestmentChange('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            value={
              annualInvestment ? annualInvestment : ""
            }
            onChange={(event) =>
              onInvestmentChange('annualInvestment', event.target.value)
            }
            type="text"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            value={
              expectedReturn ? expectedReturn : ""
            }
            onChange={(event) =>
              onInvestmentChange('expectedReturn', event.target.value)
            }
            type="text"
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            value={
              duration ? duration : ""
            }
            onChange={(event) =>
              onInvestmentChange('duration', event.target.value)
            }
            type="text"
          />
        </p>
      </div>
    </section>
  );
}
