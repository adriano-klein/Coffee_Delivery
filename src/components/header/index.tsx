import {
  HeaderContainer,
  RightContainer,
  Location,
  ShoppingCardContainer,
} from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Logo Ignite Coffee" />
      </Link>
      <RightContainer>
        <Location>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </Location>
        <ShoppingCardContainer>
          <Link to="checkout">
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </ShoppingCardContainer>
      </RightContainer>
    </HeaderContainer>
  )
}
