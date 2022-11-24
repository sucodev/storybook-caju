// eslint-disable-line no-console

import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$xs',
  fontSize: '$xs',
  fontWeight: '$medium',
  fontFamily: '$base',
  textAlign: 'center',
  minWidth: 121,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  gap: '$nano',
  border: '1px solid transparent',

  '&:disabled': {
    backgroundColor: '$arroz500',
    color: '$arroz600',
    cursor: 'not-allowed',
  },

  svg: {
    width: '20px',
    height: '20px',
  },

  '&:disabled svg': {
    width: '20px',
    height: '20px',
  },

  '&:disabled svg path': {
    fill: '$arroz600',
  },

  '&:not(:disabled):focus': {
    border: '1px solid $mirtilo500',
  },

  variants: {
    primary: {
      horta: {
        backgroundColor: '$horta500',
        color: '$acucar500',
        transition: '.3s ease-in-out',
        '&:not(:disabled) svg path': {
          fill: '$acucar500',
        },
        '&:not(:disabled):focus': {
          backgroundColor: '$horta500',
          color: '$acucar500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$horta600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$horta700',
          transition: '.3s ease-in-out',
        },
      },
      aipim: {
        backgroundColor: '$aipim500',
        color: '$acucar500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$aipim500',
          color: '$acucar500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$aipim600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$aipim700',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
      },
      arroz: {
        backgroundColor: '$arroz100',
        color: '$aipim500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):hover': {
          backgroundColor: '$arroz200',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$arroz300',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
      },
      banana: {
        backgroundColor: '$banana500',
        color: '$aipim500',
        transition: '.3s ease-in-out',

        '&:not(:disabled):focus': {
          backgroundColor: '$banana500',
          color: '$aipim500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$banana600',
          transition: '.3s ease-in-out',
          color: '$aipim700',
        },
        '&:not(:disabled) svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$banana800',
          transition: '.3s ease-in-out',
          color: '$acucar500',
        },
      },
      berinjela: {
        backgroundColor: '$berinjela500',
        color: '$acucar500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$berinjela500',
          color: '$acucar500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$berinjela600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$berinjela700',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
      },
      cogumelo: {
        backgroundColor: '$cogumelo500',
        color: '$cogumelo900',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$cogumelo500',
          color: '$cogumelo900',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$cogumelo600',
          transition: '.3s ease-in-out',
          color: '$acucar500',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$cogumelo700',
          transition: '.3s ease-in-out',
          color: '$acucar500',
        },

        '&:not(:disabled) svg path': {
          fill: '$cogumelo900',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
      },
      mirtilo: {
        backgroundColor: '$mirtilo500',
        color: '$acucar500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$mirtilo500',
          color: '$acucar500',
          border: '2px solid $mirtilo700',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$mirtilo600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$mirtilo700',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
      },
      morango: {
        backgroundColor: '$morango500',
        color: '$acucar500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$morango500',
          color: '$acucar500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$morango600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$morango700',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$acucar500',
          transition: '.3s ease-in-out',
        },
      },
    },

    secondary: {
      horta: {
        backgroundColor: '$horta100',
        color: '$horta500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$horta100',
          color: '$horta500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$horta200',
          color: '$horta500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$horta300',
          transition: '.3s ease-in-out',
          color: '$horta800',
        },

        '&:not(:disabled) svg path': {
          fill: '$horta500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$horta800',
          transition: '.3s ease-in-out',
        },
      },
      aipim: {
        backgroundColor: '$aipim100',
        color: '$aipim500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$aipim100',
          color: '$aipim500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$aipim200',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$aipim300',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$aipim800',
          transition: '.3s ease-in-out',
        },
      },
      banana: {
        backgroundColor: '$banana100',
        color: '$banana800',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$banana100',
          color: '$banana800',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$banana200',
          transition: '.3s ease-in-out',
          color: '$banana800',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$banana300',
          transition: '.3s ease-in-out',
          color: '$banana900',
        },

        '&:not(:disabled) svg path': {
          fill: '$banana800',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$banana800',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$banana900',
          transition: '.3s ease-in-out',
        },
      },
      berinjela: {
        backgroundColor: '$berinjela100',
        color: '$berinjela600',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$berinjela100',
          color: '$berinjela600',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$berinjela200',
          color: '$berinjela700',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$berinjela300',
          color: '$berinjela800',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$berinjela600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$berinjela700',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$berinjela800',
          transition: '.3s ease-in-out',
        },
      },
      cogumelo: {
        backgroundColor: '$cogumelo100',
        color: '$cogumelo800',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$cogumelo100',
          color: '$cogumelo800',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$cogumelo200',
          transition: '.3s ease-in-out',
          color: '$cogumelo800',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$cogumelo300',
          transition: '.3s ease-in-out',
          color: '$cogumelo900',
        },

        '&:not(:disabled) svg path': {
          fill: '$cogumelo800',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$cogumelo800',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$cogumelo900',
          transition: '.3s ease-in-out',
        },
      },
      mirtilo: {
        backgroundColor: '$mirtilo100',
        color: '$mirtilo700',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$mirtilo100',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$mirtilo200',
          color: '$mirtilo600',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled):active': {
          backgroundColor: '$mirtilo300',
          color: '$mirtilo800',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$mirtilo700',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$mirtilo600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$mirtilo800',
          transition: '.3s ease-in-out',
        },
      },
      morango: {
        backgroundColor: '$morango100',
        color: '$morango600',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$morango100',
          color: '$morango600',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$morango200',
          color: '$morango800',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$morango300',
          color: '$morango800',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$morango600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$morango800',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$morango800',
          transition: '.3s ease-in-out',
        },
      },
    },

    tertiary: {
      horta: {
        color: '$horta500',
        border: '1px solid $horta500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$horta500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$horta200',
          color: '$horta500',
          transition: '.3s ease-in-out',
          border: '1px solid $horta500',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$horta300',
          transition: '.3s ease-in-out',
          border: '1px solid $horta600',
          color: '$horta800',
        },

        '&:not(:disabled) svg path': {
          fill: '$horta500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$horta500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$horta800',
          transition: '.3s ease-in-out',
        },
      },
      aipim: {
        color: '$aipim500',
        border: '1px solid $aipim500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$aipim500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$aipim200',
          border: '1px solid $aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$aipim300',
          border: '1px solid $aipim600',
          color: '$aipim800',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$aipim800',
          transition: '.3s ease-in-out',
        },
      },
      arroz: {
        color: '$aipim500',
        border: '1px solid $arroz500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$aipim500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$arroz200',
          border: '1px solid $arroz500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$arroz500',
          border: '1px solid $arroz600',
          color: '$aipim500',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
      },
      banana: {
        color: '$banana500',
        transition: '.3s ease-in-out',
        border: '1px solid $banana500',
        '&:not(:disabled):focus': {
          color: '$banana500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$banana200',
          transition: '.3s ease-in-out',
          color: '$banana500',
          border: '1px solid $banana500',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$banana300',
          transition: '.3s ease-in-out',
          color: '$banana800',
          border: '1px solid $banana600',
        },

        '&:not(:disabled) svg path': {
          fill: '$banana500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$banana500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$banana800',
          transition: '.3s ease-in-out',
        },
      },
      berinjela: {
        color: '$berinjela500',
        border: '1px solid $berinjela500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$berinjela500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$berinjela200',
          color: '$berinjela500',
          border: '1px solid $berinjela500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$berinjela300',
          border: '1px solid $berinjela600',
          color: '$berinjela800',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$berinjela500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$berinjela500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$berinjela800',
          transition: '.3s ease-in-out',
        },
      },
      cogumelo: {
        color: '$cogumelo700',
        border: '1px solid $cogumelo700',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          backgroundColor: '$cogumelo100',
          color: '$cogumelo800',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$cogumelo200',
          transition: '.3s ease-in-out',
          color: '$cogumelo700',
          border: '1px solid $cogumelo700',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$cogumelo300',
          transition: '.3s ease-in-out',
          color: '$cogumelo800',
          border: '1px solid $cogumelo700',
        },

        '&:not(:disabled) svg path': {
          fill: '$cogumelo700',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$cogumelo700',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$cogumelo800',
          transition: '.3s ease-in-out',
        },
      },
      mirtilo: {
        color: '$mirtilo500',
        transition: '.3s ease-in-out',
        border: '1px solid $mirtilo500',
        '&:not(:disabled):focus': {
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$mirtilo200',
          color: '$mirtilo500',
          transition: '.3s ease-in-out',
          border: '1px solid $mirtilo500',
        },

        '&:not(:disabled):active': {
          backgroundColor: '$mirtilo300',
          color: '$mirtilo800',
          border: '1px solid $mirtilo600',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$mirtilo500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$mirtilo500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$mirtilo800',
          transition: '.3s ease-in-out',
        },
      },
      morango: {
        color: '$morango500',
        border: '1px solid $morango500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$morango500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          backgroundColor: '$morango200',
          color: '$morango500',
          border: '1px solid $morango500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          backgroundColor: '$morango300',
          border: '1px solid $morango600',
          color: '$morango800',
          transition: '.3s ease-in-out',
        },

        '&:not(:disabled) svg path': {
          fill: '$morango500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$morango500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$morango800',
          transition: '.3s ease-in-out',
        },
      },
    },

    dash: {
      horta: {
        color: '$horta500',
        border: '1px dashed $horta500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$horta500',
          border: '1px dashed $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$horta600',
          transition: '.3s ease-in-out',
          border: '1px dashed $horta600',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          border: '1px dashed $horta700',
          color: '$horta600',
        },

        '&:not(:disabled) svg path': {
          fill: '$horta500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$horta500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$horta600',
          transition: '.3s ease-in-out',
        },
      },
      banana: {
        color: '$banana500',
        border: '1px dashed $banana500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$banana500',
          border: '1px dashed $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$banana600',
          transition: '.3s ease-in-out',
          border: '1px dashed $banana600',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          border: '1px dashed $banana700',
          color: '$banana600',
        },

        '&:not(:disabled) svg path': {
          fill: '$banana500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$banana500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$banana600',
          transition: '.3s ease-in-out',
        },
      },
      cogumelo: {
        color: '$cogumelo700',
        border: '1px dashed $cogumelo700',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$cogumelo700',
          border: '1px dashed $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$cogumelo800',
          transition: '.3s ease-in-out',
          border: '1px dashed $cogumelo800',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          border: '1px dashed $cogumelo900',
          color: '$cogumelo900',
        },

        '&:not(:disabled) svg path': {
          fill: '$cogumelo700',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$cogumelo800',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$cogumelo900',
          transition: '.3s ease-in-out',
        },
      },
      aipim: {
        color: '$aipim500',
        border: '1px dashed $aipim500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$aipim500',
          border: '1px dashed $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$aipim600',
          transition: '.3s ease-in-out',
          border: '1px dashed $aipim500',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          border: '1px dashed $aipim800',
          color: '$aipim800',
        },

        '&:not(:disabled) svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$aipim600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$aipim800',
          transition: '.3s ease-in-out',
        },
      },
      berinjela: {
        color: '$berinjela500',
        border: '1px dashed $berinjela500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$berinjela500',
          border: '1px dashed $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$berinjela600',
          transition: '.3s ease-in-out',
          border: '1px dashed $berinjela600',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          border: '1px dashed $berinjela700',
          color: '$berinjela700',
        },

        '&:not(:disabled) svg path': {
          fill: '$berinjela500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$berinjela600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$berinjela700',
          transition: '.3s ease-in-out',
        },
      },
      mirtilo: {
        color: '$mirtilo500',
        border: '1px dashed $mirtilo500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$mirtilo500',
          border: '1px dashed $mirtilo700',
        },
        '&:not(:disabled):hover': {
          color: '$mirtilo600',
          transition: '.3s ease-in-out',
          border: '1px dashed $mirtilo600',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          border: '1px dashed $mirtilo700',
          color: '$mirtilo700',
        },

        '&:not(:disabled) svg path': {
          fill: '$mirtilo500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$mirtilo600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$mirtilo700',
          transition: '.3s ease-in-out',
        },
      },
      morango: {
        color: '$morango500',
        border: '1px dashed $morango500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$morango500',
          border: '1px dashed $morango500',
        },
        '&:not(:disabled):hover': {
          color: '$morango700',
          transition: '.3s ease-in-out',
          border: '1px dashed $morango700',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          border: '1px dashed $morango800',
          color: '$morango800',
        },

        '&:not(:disabled) svg path': {
          fill: '$morango500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$morango700',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$morango800',
          transition: '.3s ease-in-out',
        },
      },
    },

    invisible: {
      horta: {
        color: '$horta500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$horta500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$horta600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$horta600',
        },

        '&:not(:disabled) svg path': {
          fill: '$horta500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$horta600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$horta600',
          transition: '.3s ease-in-out',
        },
      },
      banana: {
        color: '$banana500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$banana500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$banana600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$banana600',
        },

        '&:not(:disabled) svg path': {
          fill: '$banana500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$banana600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$banana600',
          transition: '.3s ease-in-out',
        },
      },
      cogumelo: {
        color: '$cogumelo700',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$cogumelo700',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$cogumelo800',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$cogumelo900',
        },

        '&:not(:disabled) svg path': {
          fill: '$cogumelo700',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$cogumelo800',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$cogumelo900',
          transition: '.3s ease-in-out',
        },
      },
      aipim: {
        color: '$aipim500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$aipim500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$aipim600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$aipim800',
        },

        '&:not(:disabled) svg path': {
          fill: '$aipim500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$aipim600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$aipim800',
          transition: '.3s ease-in-out',
        },
      },
      berinjela: {
        color: '$berinjela500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$berinjela500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$berinjela600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$berinjela700',
        },

        '&:not(:disabled) svg path': {
          fill: '$berinjela500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$berinjela600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$berinjela700',
          transition: '.3s ease-in-out',
        },
      },
      mirtilo: {
        color: '$mirtilo500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$mirtilo500',
          border: '1px solid $mirtilo700',
        },
        '&:not(:disabled):hover': {
          color: '$mirtilo600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$mirtilo700',
        },

        '&:not(:disabled) svg path': {
          fill: '$mirtilo500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$mirtilo600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$mirtilo700',
          transition: '.3s ease-in-out',
        },
      },
      morango: {
        color: '$morango500',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$morango500',
          border: '1px solid $morango500',
        },
        '&:not(:disabled):hover': {
          color: '$morango700',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$morango800',
        },

        '&:not(:disabled) svg path': {
          fill: '$morango500',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):hover svg path': {
          fill: '$morango700',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active svg path': {
          fill: '$morango800',
          transition: '.3s ease-in-out',
        },
      },
    },

    link: {
      horta: {
        color: '$horta500',
        textDecoration: 'underline',
        transition: '.3s ease-in-out',
        '&:not(:disabled):focus': {
          color: '$horta500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$horta600',
          transition: '.3s ease-in-out',
          fontWeight: '$bold',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$horta500',
        },
      },
      banana: {
        color: '$banana500',
        transition: '.3s ease-in-out',
        textDecoration: 'underline',
        '&:not(:disabled):focus': {
          color: '$banana500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$banana600',
          transition: '.3s ease-in-out',
          fontWeight: '$bold',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$banana500',
        },
      },
      cogumelo: {
        color: '$cogumelo500',
        transition: '.3s ease-in-out',
        textDecoration: 'underline',
        '&:not(:disabled):focus': {
          color: '$cogumelo700',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$cogumelo600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$cogumelo500',
        },
      },
      aipim: {
        color: '$aipim500',
        transition: '.3s ease-in-out',
        textDecoration: 'underline',
        '&:not(:disabled):focus': {
          color: '$aipim500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$aipim600',
          transition: '.3s ease-in-out',
          fontWeight: '$medium',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$aipim500',
          fontWeight: '$bold',
        },
      },
      arroz: {
        color: '$arroz500',
        transition: '.3s ease-in-out',
        textDecoration: 'underline',
        '&:not(:disabled):focus': {
          color: '$arroz500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$arroz600',
          transition: '.3s ease-in-out',
          fontWeight: '$medium',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$arroz500',
          fontWeight: '$bold',
        },
      },
      berinjela: {
        color: '$berinjela500',
        transition: '.3s ease-in-out',
        textDecoration: 'underline',
        fontWeight: '$medium',
        '&:not(:disabled):focus': {
          color: '$berinjela500',
          border: '1px solid $mirtilo500',
        },
        '&:not(:disabled):hover': {
          color: '$berinjela600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$berinjela500',
          fontWeight: '$bold',
        },
      },
      mirtilo: {
        color: '$mirtilo500',
        transition: '.3s ease-in-out',
        textDecoration: 'underline',
        fontWeight: '$medium',
        '&:not(:disabled):focus': {
          color: '$mirtilo500',
          border: '1px solid $mirtilo700',
        },
        '&:not(:disabled):hover': {
          color: '$mirtilo600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$mirtilo500',
          fontWeight: '$bold',
        },
      },
      morango: {
        color: '$morango500',
        transition: '.3s ease-in-out',
        textDecoration: 'underline',
        fontWeight: '$medium',
        border: '1px solid transparent',
        '&:not(:disabled):focus': {
          color: '$morango500',
          fontWeight: '$medium',
          border: '1px solid $morango500',
        },
        '&:not(:disabled):hover': {
          color: '$morango600',
          transition: '.3s ease-in-out',
        },
        '&:not(:disabled):active': {
          transition: '.3s ease-in-out',
          color: '$morango500',
          fontWeight: '$bold',
        },
      },
    },

    size: {
      small: {
        minWidth: 53,
        height: 37,
        padding: '$nano',
        fontSize: '$xxs',
        lineHeight: '$lg',
      },
      medium: {
        minWidth: '$20',
        height: '$10',
        padding: '$nano',
        fontSize: '$xs',
        lineHeight: '$lg',
      },
      large: {
        padding: '$xs',
        height: '$14',
        fontSize: '$xs',
        lineHeight: '$lg',
        minWidth: 164,
        minHeight: 56,
      },
    },
  },

  defaultVariants: {
    size: 'large',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
