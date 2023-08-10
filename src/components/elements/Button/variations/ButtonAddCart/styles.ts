import styled from 'styled-components'
import { Container as Button } from '@/components/elements/Button/styles'
import { Container as TextStyles } from '@/components/elements/Text/styles'
import { metrics } from '@/styles/metrics'

export const Container = styled(Button)`
  border: 0 none;
  background:${metrics.colors.lightPurple};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${metrics.colors.white};
  font-weight: 600;
  border-radius: ${metrics.borderRadius.b4};
`

export const IconContainer = styled.div`
  background: ${metrics.colors.purple};
  height: ${metrics.space.s42};
  display: flex;
  align-items: center;
  padding: ${metrics.space.s10};
  border-radius: ${metrics.borderRadius.b4} 0 0 ${metrics.borderRadius.b4};
`

export const Quantity = styled(TextStyles)`
  margin-left: ${metrics.space.s4};
`
export const Text = styled(TextStyles)`
  flex: 1
`
