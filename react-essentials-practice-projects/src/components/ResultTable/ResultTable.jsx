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
        <tr>
          <td>1</td>
          <td>1000</td>
          <td>4000</td>
          <td>12</td>
          <td>3134</td>
        </tr>
      </tbody>
    </table>
  );
}
