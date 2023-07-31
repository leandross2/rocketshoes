import styled from 'styled-components'
import { metrics } from '@/styles/metrics'
import { Container as TextStyle } from '@/components/elements/Text/styles'

export const Image = styled.img`
  border-radius:  ${metrics.borderRadius.b4};
  height: 16.25rem;
  margin: 0 auto ${metrics.space.s16};
  width: 16.25rem;
`

export const Title = styled(TextStyle)`
  margin-top: auto;
  color: #333;
  margin-bottom: ${metrics.space.s12};
`

export const Price = styled(TextStyle)`
  color: #000;
  margin-bottom: ${metrics.space.s16};
`
