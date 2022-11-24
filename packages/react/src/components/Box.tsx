import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$aipim',
  border: '1px solid $gray600',
  color: '#fff',
  fontFamily: '$base',
  fontWeight: '$regular',
})

export interface BoxProps extends ComponentProps<typeof Box> {}
