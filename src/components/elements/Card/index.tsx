import { ReactNode } from 'react'
import { Container } from './styles'

interface CardProps {
  children: ReactNode
  align?: 'left' | 'center' | 'right'
  full?: boolean
  special?: boolean

}
export const Card: React.FC<CardProps> = ({ children, align, full, special }) => {
  return (
    <Container align={align} full={full} special={special}>
      {children}
    </Container>
  )
}
