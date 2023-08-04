import { metrics } from '@/styles/metrics'
import styled from 'styled-components'

interface TextProps {
  size?: 'small' | 'regular' | 'large'
  weight?: 'regular' | 'bold'
  align?: 'left' | 'center' | 'right'
}

const setFontSize = ({ size }: TextProps) => {
  switch (size) {
    case 'small':{
      return `font-size: ${metrics.font.size.small}`
    }
    case 'regular':{
      return `font-size: ${metrics.font.size.regular}`
    }
    case 'large':{
      return `font-size: ${metrics.font.size.large}`
    }
    default:{
      return `font-size: ${metrics.font.size.regular}`
    }
  }
}

const setFontWeight = ({ weight }: TextProps) => {
  switch (weight) {
    case 'regular':{
      return `font-weight: ${metrics.font.weight.regular}`
    }
    case 'bold':{
      return `font-weight: ${metrics.font.weight.bold}`
    }
    default:{
      return `font-weight: ${metrics.font.weight.regular}`
    }
  }
}
const setAlign = ({ align }: TextProps) => {
  switch (align) {
    case 'left':{
      return 'justify-content: flex-start'
    }
    case 'center':{
      return 'justify-content: center'
    }
    default:{
      return 'justify-content: flex-start'
    }
  }
}

export const Container = styled.p<TextProps>`
  ${(props) => (setFontSize(props))};
  ${(props) => (setFontWeight(props))};
  ${(props) => (setAlign(props))};
`
