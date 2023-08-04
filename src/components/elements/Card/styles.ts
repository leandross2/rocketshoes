import { metrics } from '@/styles/metrics'
import styled, { css, keyframes } from 'styled-components'

interface ContainerProps {
  align?: 'left' | 'center' | 'right'
  full?: boolean
  special?: boolean
}
const fullContent = (full?: boolean) => {
  if (full) {
    return css`
    max-width: 56.25rem;
    margin: 0 auto;
    `
  }
}

const animation = keyframes`
  0%{
      background-position: 0;
    }
    100%{
      background-position: 300%;

    }
`
const borderOnHover = () => {
  return css`
    &::before, &::after{
      content:'';
      opacity:0;
      transition: opacity .5s;
    }

    &:hover{
      &::before, &::after{
        opacity:1;
        position: absolute;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        background: linear-gradient(45deg, #5a479a, #FFF, #5a479a, #FFF, #5a479a, #FFF, #5a479a, #FFF);
        background-size: 300%;
        top: -10px;
        left: -10px;
        z-index: -1;
        border-radius: ${metrics.borderRadius.b4};
        animation: 8s ${animation} linear infinite;
      }
    }`
}
export const Container = styled.div<ContainerProps>`
  background-color: #FFF;
  padding: ${metrics.space.s12};
  border-radius: ${metrics.borderRadius.b4};
  display: flex;
  flex-direction: column;
  text-align: ${({ align = 'left' }) => align};
  position: relative;

  ${(props) => fullContent(props.full)}
  ${(props) => props.special && borderOnHover()}
`
