import styled, { keyframes } from 'styled-components'

import { Logo } from '../Logo'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: calc(50vw - 131.5px);
  top: calc(50vh - 20px);
`
const pulse = keyframes`
  0%{
      scale: 1;
    }
    100%{
      scale: 1.1;
    }
`

export const LogoLoading = styled(Logo)`

  animation: 1s ${pulse} alternate infinite;
`
