import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  showMetric?: boolean
}

export function TokensGrid({
  tokens,
  hasRemValue = false,
  showMetric = false,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {showMetric && <th></th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>
                  {+value.replace('rem', '') * 16}
                  px
                </td>
              )}
              {showMetric && (
                <td className="pixels">
                  <div
                    style={{
                      width: +value.replace('rem', '') * 16,
                    }}
                  ></div>
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
