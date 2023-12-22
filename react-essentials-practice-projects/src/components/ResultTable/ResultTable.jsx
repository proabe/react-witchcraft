import { calculateInvestmentResults } from "../../util/investment";
import "./ResultTable.css";
import { formatter } from "../../util/investment";

function derivedInvestments(investments) {
  if (Object.values(investments).every(Boolean)) {
    console.log(investments);
    return calculateInvestmentResults(investments);
  }
  return null;
}

export default function ResultTable({ investments }) {
  const result = derivedInvestments(investments);
  const initialInvestment =
    result ? result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment : 0;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody className="center">
        {result &&
          result.map((row, index) => {
            const totalInterest =
              row.valueEndOfYear -
              row.annualInvestment * row.year -
              initialInvestment;

            const totalAmountInvested = row.valueEndOfYear - totalInterest;
            return (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{formatter.format(row.valueEndOfYear)}</td>
                <td>{formatter.format(row.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
