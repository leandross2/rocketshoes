import { Container } from './styles'

interface TextProps {
  children: string
  size?: 'small' | 'regular' | 'large'
  weight?: 'regular' | 'bold'
  align?: 'left' | 'center' | 'right'
}

export const Text: React.FC<TextProps> = ({ children, size, weight, align }) => {
  return (
    <Container size={size} weight={weight} align={align}>
      {children}
    </Container>
  )
}
