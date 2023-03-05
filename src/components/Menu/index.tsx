import MediaMatch from 'components/MediaMatch'
import { useState } from 'react'
import * as S from './styles'
import { Menu as MenuIcon } from '@styled-icons/ionicons-solid/Menu'
import { Close as CloseIcon } from '@styled-icons/ionicons-solid/Close'

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
        <S.Logo src="/img/Logo.png" />
        <S.LogoTitle>Pedro L. F. Vieira</S.LogoTitle>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink>Home</S.MenuLink>
          <S.MenuLink>About Me</S.MenuLink>
          <S.MenuLink>Projects</S.MenuLink>
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
          <S.MenuLink>Home</S.MenuLink>
          <S.MenuLink>AboutMe</S.MenuLink>
          <S.MenuLink>Projects</S.MenuLink>
        </S.MenuNav>
      </S.MenuToggle>
    </S.Wrapper>
  )
}
export default Menu
