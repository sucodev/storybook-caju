import '../styles/typography-grid.css'

import { colors, fonts, fontSizes, fontWeights, radii } from '@caju-ds/tokens'

const OpenSans = () => {
  return (
    <div className="container">
      <div
        className="content"
        style={{
          backgroundColor: colors.mirtilo900,
          color: colors.acucar500,
          borderRadius: radii.md,
        }}
      >
        <div className="content-title">
          <p
            style={{
              fontFamily: fonts.base,
              fontSize: fontSizes.sm,
              color: colors.morango300,
              fontWeight: fontWeights.bold,
            }}
          >
            {'fonts.$base'}
          </p>
          <h2 style={{ fontFamily: fonts.base, fontSize: fontSizes.xxxl }}>
            Open Sans
          </h2>
        </div>

        <div className="tokens">
          <h3
            style={{
              fontFamily: fonts.base,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.lg,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Bold / LG</span>
              Heading Medium
            </div>
          </h3>
          <h4
            style={{
              fontFamily: fonts.base,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.md,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Bold / MD</span>
              Heading Small
            </div>
          </h4>
          <h5
            style={{
              fontFamily: fonts.base,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.xs,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Bold / XS</span>
              Heading X-Small
            </div>
          </h5>
          <p
            style={{
              fontFamily: fonts.base,
              fontWeight: fontWeights.regular,
              fontSize: fontSizes.lg,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Regular / LG</span>
              Subtitle Large
            </div>
          </p>
          <p
            style={{
              fontFamily: fonts.base,
              fontWeight: fontWeights.regular,
              fontSize: fontSizes.md,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Regular / MD</span>
              Subtitle Small
            </div>
          </p>
          <p
            style={{
              fontFamily: fonts.base,
              fontWeight: fontWeights.regular,
              fontSize: fontSizes.sm,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Regular / SM</span>
              Paragraph Large
            </div>
          </p>
          <p
            style={{
              fontFamily: fonts.base,
              fontWeight: fontWeights.regular,
              fontSize: fontSizes.xs,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Regular / XS</span>
              Paragraph Small
            </div>
          </p>
          <p
            style={{
              fontFamily: fonts.base,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.xxxs,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Bold / XXXS</span>
              Paragraph X-Small
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

const Oswald = () => {
  return (
    <div className="container">
      <div
        className="content"
        style={{
          backgroundColor: colors.mirtilo900,
          color: colors.acucar500,
          borderRadius: radii.md,
        }}
      >
        <div className="content-title">
          <p
            style={{
              fontFamily: fonts.fallback,
              fontSize: fontSizes.sm,
              color: colors.morango300,
              fontWeight: fontWeights.regular,
            }}
          >
            {'fonts.$fallback'}
          </p>
          <h2 style={{ fontFamily: fonts.fallback, fontSize: fontSizes.xxxl }}>
            Oswald
          </h2>
        </div>

        <div className="tokens">
          <h2
            style={{
              fontFamily: fonts.fallback,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.giant,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Bold / GIANT</span>
              Heading Display
            </div>
          </h2>
          <h3
            style={{
              fontFamily: fonts.fallback,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.xxxl,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Bold / XXXL</span>
              Heading X-Large
            </div>
          </h3>
          <h4
            style={{
              fontFamily: fonts.fallback,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.xxl,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Bold / XXL</span>
              Heading Large
            </div>
          </h4>
          <h5
            style={{
              fontFamily: fonts.fallback,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.lg,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Bold / LG</span>
              Heading Medium
            </div>
          </h5>
        </div>
      </div>
    </div>
  )
}

const Bellfort = () => {
  return (
    <div className="container">
      <div
        className="content"
        style={{
          backgroundColor: colors.mirtilo900,
          color: colors.acucar500,
          borderRadius: radii.md,
        }}
      >
        <div className="content-title">
          <p
            style={{
              fontFamily: fonts.brand,
              fontSize: fontSizes.sm,
              color: colors.morango300,
              fontWeight: fontWeights.bold,
            }}
          >
            {'fonts.$brand'}
          </p>
          <h2 style={{ fontFamily: fonts.brand, fontSize: fontSizes.xxxl }}>
            Bellfort
          </h2>
        </div>

        <div className="tokens">
          <h2
            style={{
              fontFamily: fonts.brand,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.giant,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Bold / GIANT</span>
              Heading Display
            </div>
          </h2>
          <h3
            style={{
              fontFamily: fonts.brand,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.xxxl,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Bold / XXXL</span>
              Heading X-Large
            </div>
          </h3>
          <h4
            style={{
              fontFamily: fonts.brand,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.xxl,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Bold / XXL</span>
              Heading Large
            </div>
          </h4>
          <h5
            style={{
              fontFamily: fonts.brand,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.lg,
            }}
          >
            <div className="tokens-title">
              <span style={{ color: colors.morango300 }}>Bold / LG</span>
              Heading Medium
            </div>
          </h5>
        </div>
      </div>
    </div>
  )
}

export function TypographyGrid() {
  return (
    <>
      <OpenSans />
      <Oswald />
      <Bellfort />
    </>
  )
}
