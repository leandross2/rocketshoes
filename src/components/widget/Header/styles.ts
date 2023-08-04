import styled from 'styled-components'
import { Container as TextStyles } from '@/components/elements/Text/styles'
import { metrics } from '@/styles/metrics'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 940px; 
  margin: ${metrics.space.s50} auto ${metrics.space.s32};
  padding: 0 ${metrics.space.s16};
  color: ${metrics.colors.white};
`

export const MainLogo = styled.img`
  height: ${metrics.space.s36};
  width: ${metrics.space.s276};
`

export const CartArea = styled.div`
  display: flex;
  padding: ${metrics.space.s5};
`
export const Label = styled(TextStyles)`
`

export const LabelQuantity = styled(TextStyles)`
`

export const InfoCart = styled.div`
  margin-right: ${metrics.space.s8};
`
