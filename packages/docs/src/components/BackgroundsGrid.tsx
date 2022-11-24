import '../styles/backgrounds-grid.css'

import { colors } from '@caju-ds/tokens'
import { getContrast } from 'polished'

export function BackgroundGrid() {
  // return Object.entries(colors).map(([key, color]) => {

  return (
    <>
      <div
        style={{
          backgroundColor: colors.acucar500,
        }}
        className="bg-item"
      >
        <div
          style={{
            color:
              getContrast(colors.acucar500, '#fff') < 3.5 ? '#000' : '#fff',
          }}
          className="grid-content"
        >
          <strong>$acucar</strong>
          <span>{colors.acucar500}</span>
        </div>
      </div>
      <div className="bg-item" style={{ backgroundColor: colors.aipim100 }}>
        <div
          style={{
            color: getContrast(colors.aipim100, '#fff') < 3.5 ? '#000' : '#fff',
          }}
          className="grid-content"
        >
          <strong>$aipim100</strong>
          <span>{colors.aipim100}</span>
        </div>
      </div>
      <div className="bg-item" style={{ backgroundColor: colors.arroz100 }}>
        <div
          style={{
            color: getContrast(colors.arroz100, '#fff') < 3.5 ? '#000' : '#fff',
          }}
          className="grid-content"
        >
          <strong>$arroz100</strong>
          <span>{colors.arroz100}</span>
        </div>
      </div>
      <div className="bg-item" style={{ backgroundColor: colors.banana100 }}>
        <div
          style={{
            color:
              getContrast(colors.banana100, '#fff') < 3.5 ? '#000' : '#fff',
          }}
          className="grid-content"
        >
          <strong>$banana100</strong>
          <span>{colors.banana100}</span>
        </div>
      </div>
      <div className="bg-item" style={{ backgroundColor: colors.berinjela100 }}>
        <div
          style={{
            color:
              getContrast(colors.berinjela100, '#fff') < 3.5 ? '#000' : '#fff',
          }}
          className="grid-content"
        >
          <strong>$berinjela100</strong>
          <span>{colors.berinjela100}</span>
        </div>
      </div>
      <div className="bg-item" style={{ backgroundColor: colors.cogumelo100 }}>
        <div
          style={{
            color:
              getContrast(colors.cogumelo100, '#fff') < 3.5 ? '#000' : '#fff',
          }}
          className="grid-content"
        >
          <strong>$cogumelo100</strong>
          <span>{colors.cogumelo100}</span>
        </div>
      </div>
      <div className="bg-item" style={{ backgroundColor: colors.horta100 }}>
        <div
          style={{
            color: getContrast(colors.horta100, '#fff') < 3.5 ? '#000' : '#fff',
          }}
          className="grid-content"
        >
          <strong>$horta100</strong>
          <span>{colors.horta100}</span>
        </div>
      </div>
      <div className="bg-item" style={{ backgroundColor: colors.mirtilo100 }}>
        <div
          style={{
            color:
              getContrast(colors.mirtilo100, '#fff') < 3.5 ? '#000' : '#fff',
          }}
          className="grid-content"
        >
          <strong>$mirtilo100</strong>
          <span>{colors.mirtilo100}</span>
        </div>
      </div>
      <div className="bg-item" style={{ backgroundColor: colors.morango100 }}>
        <div
          style={{
            color:
              getContrast(colors.morango100, '#fff') < 3.5 ? '#000' : '#fff',
          }}
          className="grid-content"
        >
          <strong>$morango100</strong>
          <span>{colors.morango100}</span>
        </div>
      </div>
    </>
  )
  // })
}
