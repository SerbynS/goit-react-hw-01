import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.customTable}>
      <thead>
        <tr>
          <th className={css.tableHeader}>Type</th>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={css.tableRow}>
            <td className={css.tableCell}>{item.type}</td>
            <td className={css.tableCell}>{item.amount}</td>
            <td className={css.tableCell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
