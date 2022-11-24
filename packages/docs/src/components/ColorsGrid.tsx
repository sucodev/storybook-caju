import { colors } from '@caju-ds/tokens'
import { getContrast } from 'polished'

import '../styles/backgrounds-grid.css'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    console.log(key)
    return (
      <div key={key} style={{ backgroundColor: color }} className="bg-item">
        <div
          style={{
            color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
          }}
          className="grid-content"
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
