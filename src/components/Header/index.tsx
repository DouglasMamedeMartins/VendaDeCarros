import {
  HeaderContainer,
  HeaderNav,
  MenuButton,
  MenuLeft,
  MenuLink,
  MenuRight,
} from './styles'
import LogoImg from '../../assets/Logo.png'
import MenuLine from '../../assets/menu-line.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNav>
        <MenuLeft>
          <img src={LogoImg} alt="Logo" />
          <MenuLink href="/">Galeria</MenuLink>
          <MenuLink href="/">Versões</MenuLink>
        </MenuLeft>
        <MenuRight>
          <img alt="Menu mobile" src={MenuLine} />
          <MenuButton>Tenho interesse</MenuButton>
        </MenuRight>
      </HeaderNav>
    </HeaderContainer>
  )
}
