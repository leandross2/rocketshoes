import { Badge as BadgeIcon, BadgeText, Container } from './styles'
import { IconProps } from '@phosphor-icons/react'

interface BadgeProps extends IconProps {
  colorText?: 'string'
}
export const Badge: React.FC<BadgeProps> = ({ colorText, ...props }) => {
  return (
    <Container>
      <BadgeText colorText={colorText}>Limited</BadgeText>
      <BadgeIcon {...props}/>
    </Container>
  )
}
