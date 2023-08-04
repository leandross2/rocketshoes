import { Container, LogoSnecker, LogoText } from './styles'

export const Logo: React.FC = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <LogoText />
      <LogoSnecker/>
    </Container>
  )
}
