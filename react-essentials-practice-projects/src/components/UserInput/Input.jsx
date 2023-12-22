export default function Input({ children, onInvestmentChange, initialValue }) {
  let key = children.replace(/[ ]+/, "");
  key = key.charAt(0).toLowerCase() + key.slice(1);
  return (
    <p>
      <label>{children}</label>
      <input
        type="number"
        value={initialValue ? initialValue : ""}
        onChange={(event) =>
          onInvestmentChange(
            key,
            event.target.value
          )
        }
      />
    </p>
  );
}
