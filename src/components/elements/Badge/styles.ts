import styled from 'styled-components'
import { Seal } from '@phosphor-icons/react'
import { metrics } from '@/styles/metrics'

export const Container = styled.div`
  position: absolute;
  background: radial-gradient(circle, ${metrics.colors.white} 59%, transparent 50%);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Badge = styled(Seal)`
  path{ 
    fill: none;
    stroke-width: 10px;
    stroke: ${metrics.colors.lightPurple};
  }
`

interface BadgeTextProps {
  colorText?: 'string'
}

export const BadgeText = styled.span<BadgeTextProps>`
  font-size: ${metrics.font.size.xSmall};
  transform: rotate(45deg);
  position: absolute;
  color: ${({ colorText }) => colorText ?? metrics.colors.black};
`
