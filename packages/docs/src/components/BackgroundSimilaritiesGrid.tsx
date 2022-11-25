import '../styles/backgrounds-grid.css'

import { colors } from '@caju-ds/tokens'
import { getContrast } from 'polished'

interface BackgroundProps {
  colors: string
  title: string
}

export function BackgroundSimilaritiesGrid() {
  // return Object.entries(colors).map(([key, color]) => {

  return (
    <>
      <div
        style={{
          backgroundColor: colors.aipim100,
        }}
        className="bg-item-similar"
      >
        <BackgroundSimilar colors={colors.acucar500} title="acucar" />
        <BackgroundSimilar colors={colors.aipim200} title="aipim200" />
        <BackgroundSimilar colors={colors.aipim300} title="aipim300" />
        <BackgroundSimilar colors={colors.aipim400} title="aipim400" />
        <BackgroundSimilar colors={colors.aipim500} title="aipim500" />
        <BackgroundSimilar colors={colors.aipim600} title="aipim600" />
        <BackgroundSimilar colors={colors.aipim700} title="aipim700" />
        <BackgroundSimilar colors={colors.aipim800} title="aipim800" />
      </div>

      <div
        style={{
          backgroundColor: colors.arroz100,
        }}
        className="bg-item-similar"
      >
        <BackgroundSimilar colors={colors.arroz100} title="arroz100" />
        <BackgroundSimilar colors={colors.arroz200} title="arroz200" />
        <BackgroundSimilar colors={colors.arroz300} title="arroz300" />
        <BackgroundSimilar colors={colors.arroz400} title="arroz400" />
        <BackgroundSimilar colors={colors.arroz500} title="arroz500" />
        <BackgroundSimilar colors={colors.arroz600} title="arroz600" />
        <BackgroundSimilar colors={colors.arroz700} title="arroz700" />
        <BackgroundSimilar colors={colors.arroz800} title="arroz800" />
        <BackgroundSimilar colors={colors.arroz900} title="arroz900" />
      </div>

      <div
        style={{
          backgroundColor: colors.banana100,
        }}
        className="bg-item-similar"
      >
        <BackgroundSimilar colors={colors.arroz100} title="arroz100" />
        <BackgroundSimilar colors={colors.banana200} title="banana200" />
        <BackgroundSimilar colors={colors.banana300} title="banana300" />
        <BackgroundSimilar colors={colors.banana400} title="banana400" />
        <BackgroundSimilar colors={colors.banana500} title="banana500" />
        <BackgroundSimilar colors={colors.banana600} title="banana600" />
        <BackgroundSimilar colors={colors.banana700} title="banana700" />
        <BackgroundSimilar colors={colors.banana800} title="banana800" />
        <BackgroundSimilar colors={colors.banana900} title="banana900" />
      </div>

      <div
        style={{
          backgroundColor: colors.berinjela100,
        }}
        className="bg-item-similar"
      >
        <BackgroundSimilar colors={colors.arroz100} title="arroz100" />
        <BackgroundSimilar colors={colors.berinjela200} title="berinjela200" />
        <BackgroundSimilar colors={colors.berinjela300} title="berinjela300" />
        <BackgroundSimilar colors={colors.berinjela400} title="berinjela400" />
        <BackgroundSimilar colors={colors.berinjela500} title="berinjela500" />
      </div>

      <div
        style={{
          backgroundColor: colors.cogumelo100,
        }}
        className="bg-item-similar"
      >
        <BackgroundSimilar colors={colors.arroz100} title="arroz100" />
        <BackgroundSimilar colors={colors.cogumelo200} title="cogumelo200" />
        <BackgroundSimilar colors={colors.cogumelo300} title="cogumelo300" />
        <BackgroundSimilar colors={colors.cogumelo400} title="cogumelo400" />
        <BackgroundSimilar colors={colors.cogumelo500} title="cogumelo500" />
        <BackgroundSimilar colors={colors.cogumelo600} title="cogumelo600" />
        <BackgroundSimilar colors={colors.cogumelo700} title="cogumelo700" />
        <BackgroundSimilar colors={colors.cogumelo800} title="cogumelo800" />
      </div>

      <div
        style={{
          backgroundColor: colors.horta100,
        }}
        className="bg-item-similar"
      >
        <BackgroundSimilar colors={colors.arroz100} title="arroz100" />
        <BackgroundSimilar colors={colors.horta200} title="horta200" />
        <BackgroundSimilar colors={colors.horta300} title="horta300" />
        <BackgroundSimilar colors={colors.horta400} title="horta400" />
      </div>

      <div
        style={{
          backgroundColor: colors.mirtilo100,
        }}
        className="bg-item-similar"
      >
        <BackgroundSimilar colors={colors.arroz100} title="arroz100" />
        <BackgroundSimilar colors={colors.mirtilo200} title="mirtilo200" />
        <BackgroundSimilar colors={colors.mirtilo300} title="mirtilo300" />
        <BackgroundSimilar colors={colors.mirtilo400} title="mirtilo400" />
        <BackgroundSimilar colors={colors.mirtilo500} title="mirtilo500" />
        <BackgroundSimilar colors={colors.mirtilo600} title="mirtilo600" />
      </div>

      <div
        style={{
          backgroundColor: colors.morango100,
        }}
        className="bg-item-similar"
      >
        <BackgroundSimilar colors={colors.arroz100} title="arroz100" />
        <BackgroundSimilar colors={colors.morango200} title="morango200" />
        <BackgroundSimilar colors={colors.morango300} title="morango300" />
        <BackgroundSimilar colors={colors.morango400} title="morango400" />
        <BackgroundSimilar colors={colors.morango500} title="morango500" />
        <BackgroundSimilar colors={colors.morango600} title="morango600" />
        <BackgroundSimilar colors={colors.morango700} title="morango700" />
        <BackgroundSimilar colors={colors.morango800} title="morango800" />
      </div>
    </>
  )
  // })
}

function BackgroundSimilar({ colors, title }: BackgroundProps) {
  return (
    <div
      style={{
        backgroundColor: colors,
        border: '1px solid',
        padding: '.8rem',
        borderRadius: '2px',
      }}
    >
      <div
        style={{
          color: getContrast(colors, '#fff') < 3.5 ? '#000' : '#fff',
        }}
        className="grid-content-similar"
      >
        <strong>${title}</strong>
      </div>
    </div>
  )
}
