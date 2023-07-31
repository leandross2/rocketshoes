import styled from 'styled-components'
import { Seal } from '@phosphor-icons/react'

export const Container = styled.div`
  position: absolute;
  background: radial-gradient(circle, #FFF 59%, transparent 50%);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Badge = styled(Seal)`
  path{ 
    fill: none;
    stroke-width: 10px;
    stroke: #7159c1;
  }
`

interface BadgeTextProps {
  colorText?: 'string'
}

export const BadgeText = styled.span<BadgeTextProps>`
  font-size: 10px;
  transform: rotate(45deg);
  position: absolute;
  color: ${({ colorText }) => colorText ?? '#000'}

`
