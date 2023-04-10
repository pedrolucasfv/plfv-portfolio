import { Close as CloseIcon } from '@styled-icons/ionicons-solid/Close'
import { Menu as MenuIcon } from '@styled-icons/ionicons-solid/Menu'
import MediaMatch from 'components/MediaMatch'
import { useState } from 'react'
import { Link } from 'react-scroll'
import * as S from './styles'

const Menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpenMenu(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <S.Logo src="/img/Logo.png" role="img" aria-label="Logo" />
        <S.LogoTitle>PLFV</S.LogoTitle>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link
            to="banner"
            spy={true}
            smooth={true}
            offset={-117}
            duration={500}
          >
            <S.MenuLink>ÍNICIO</S.MenuLink>
          </Link>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-117}
            duration={500}
          >
            <S.MenuLink>SOBRE MIM</S.MenuLink>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-117}
            duration={500}
          >
            <S.MenuLink>PROJETOS</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      {/* MENU LATERAL NO MOBILE */}
      {isOpenMenu && <S.Sombra> </S.Sombra>}
      <S.MenuToggle aria-hidden={!isOpenMenu} isOpenMenu={isOpenMenu}>
        <CloseIcon
          aria-label="Close Menu"
          onClick={() => setIsOpenMenu(false)}
        />
        <S.MenuNav>
          <Link
            to="banner"
            spy={true}
            smooth={true}
            offset={-117}
            duration={500}
          >
            <S.MenuLink onClick={() => setIsOpenMenu(false)}>ÍNICIO</S.MenuLink>
          </Link>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-117}
            duration={500}
          >
            <S.MenuLink onClick={() => setIsOpenMenu(false)}>
              SOBRE MIM
            </S.MenuLink>
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-117}
            duration={500}
          >
            <S.MenuLink onClick={() => setIsOpenMenu(false)}>
              PROJETOS
            </S.MenuLink>
          </Link>
        </S.MenuNav>
      </S.MenuToggle>
    </S.Wrapper>
  )
}
export default Menu
