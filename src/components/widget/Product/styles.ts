import styled from 'styled-components'
import { Container as TextStyle } from '@/components/elements/Text/styles'

export const Container = styled.div`
  background-color: #FFF;
  /* max-width: 300px; */
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  max-width: 260px;
  max-height: 260px;
  margin: 0 auto 16px;
  border-radius:4px;
`

export const Title = styled(TextStyle)`
  color: #333;
  margin-bottom: 4px;
`

export const Price = styled(TextStyle)`
  color: #000;
  margin-bottom: 8px;
  `