// rows: [{ label, resolv: string|boolean, competitor: string|boolean }]
function Cell({ value }) {
  if (typeof value === 'boolean') {
    return <td className={value ? 'yes' : ''}>{value ? '✓' : '—'}</td>;
  }
  return <td>{value}</td>;
}

export default function ComparisonTable({ competitorName, rows }) {
  return (
    <div className="compare-table-wrap">
      <table className="compare-table">
        <thead>
          <tr>
            <th>Capability</th>
            <th>tResolv</th>
            <th>{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ label, resolv, competitor }) => (
            <tr key={label}>
              <td className="row-label">{label}</td>
              <Cell value={resolv} />
              <Cell value={competitor} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
