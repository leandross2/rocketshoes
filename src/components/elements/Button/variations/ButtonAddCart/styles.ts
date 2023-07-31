import styled from 'styled-components'
import {Container as Button} from '@/components/elements/Button/styles'
import { Container as TextStyles } from '@/components/elements/Text/styles';

export const Container = styled(Button)`
  border: 0 none;
  background: #7159C1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFF;
  font-weight: 600;
  border-radius: 4px;
`;

export const IconContainer = styled.div`
  background: #5a479a;
  height: 42px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px 0 0 4px;
`

export const Quantity = styled(TextStyles)`
  margin-left: 4px
`
export const Text = styled(TextStyles)`
  flex: 1
`