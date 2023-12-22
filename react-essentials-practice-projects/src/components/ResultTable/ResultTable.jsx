import { formatter } from "../../util/investment";
export default function ResultTable({ result }) {
  console.log(result);
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
      <tbody>
        {result && result.map((row) =>
          (
            <tr>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>{formatter.format(row.totalInterest)}</td>
              <td>{formatter.format(row.investmentCapital)}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
