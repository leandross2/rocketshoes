import styled from 'styled-components'
import { Container as TextStyle } from '@/components/elements/Text/styles'
import { metrics } from '@/styles/metrics'
import { ButtonAddCart as ButtonAddCartDefault } from '@/components/elements/Button/variations/ButtonAddCart'
import { limitLine } from '@/styles/mixins'

export const Image = styled.img`
  border-radius:  ${metrics.borderRadius.b4};
  height: 16.25rem;
  margin: 0 auto ${metrics.space.s16};
  width: 16.25rem;
`

export const Title = styled(TextStyle)`
  color: ${metrics.colors.gray};
  margin-bottom: ${metrics.space.s12};
  overflow: hidden;
  ${limitLine('2.3rem')}
  `

export const Price = styled(TextStyle)`
  color: ${metrics.colors.black};
  margin-bottom: ${metrics.space.s16};
  margin-top: auto;
`
export const ButtonAddCart = styled(ButtonAddCartDefault)`
`
