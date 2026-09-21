// rows: [{ label, resolv, competitor }]
// Cell value: string | boolean | { prefix?, text, href } (link to a source).
function Cell({ value }) {
  if (typeof value === 'boolean') {
    return <td className={value ? 'yes' : ''}>{value ? '✓' : '—'}</td>;
  }
  if (value && typeof value === 'object') {
    const external = /^https?:/.test(value.href);
    return (
      <td>
        {value.prefix && <>{value.prefix} </>}
        <a href={value.href} {...(external ? { target: '_blank', rel: 'noopener' } : {})}>{value.text}</a>
      </td>
    );
  }
  return <td>{value}</td>;
}

export default function ComparisonTable({ competitorName, rows }) {
  return (
    <div className="compare-table-wrap">
      <table className="compare-table">
        <caption className="sr-only">tResolv compared with {competitorName}</caption>
        <thead>
          <tr>
            <th scope="col">Capability</th>
            <th scope="col">tResolv</th>
            <th scope="col">{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ label, resolv, competitor }) => (
            <tr key={label}>
              <th scope="row" className="row-label">{label}</th>
              <Cell value={resolv} />
              <Cell value={competitor} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
