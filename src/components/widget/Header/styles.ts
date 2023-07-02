import styled from 'styled-components'
import { Container as TextStyles } from '@/components/elements/Text/styles'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 940px; 
  margin: 50px auto 32px;
  padding: 0 16px;
  color: #FFF;
`

export const MainLogo = styled.img`
  height: 36px;
  width: 276px;
`

export const CartArea =styled.div`
  display: flex;
  padding: 5px;
`
export const Label =styled(TextStyles)`
`

export const LabelQuantity =styled(TextStyles)`
`

export const InfoCart =styled.div`
  margin-right: 8px;
`