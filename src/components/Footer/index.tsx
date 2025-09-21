import { Document } from '@styled-icons/ionicons-solid/Document'
import { LogoGithub } from '@styled-icons/ionicons-solid/LogoGithub'
import { LogoLinkedin } from '@styled-icons/ionicons-solid/LogoLinkedin'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Container>
      <S.Content>
        <S.Contact>
          <S.GlassContact />
          <S.IconList>
            <S.Icon
              href="https://pedrolucasfv.notion.site/925adc68502546b28222b6cf330a25c1?v=9469121632cd48778dfcb1b39012a2ec"
              target="_blank"
            >
              <Document size={22} />
            </S.Icon>
            <S.Icon href="https://github.com/pedrolucasfv" target="_blank">
              <LogoGithub size={22} />
            </S.Icon>
            <S.Icon
              href="https://www.linkedin.com/in/pedrolucasfv/"
              target="_blank"
            >
              <LogoLinkedin size={22} />
            </S.Icon>
          </S.IconList>
        </S.Contact>
        <S.Image />
        <S.Line />
        <S.Copyright>
          <S.Text>© Pedro L. F. Vieira, 2023</S.Text>
          <S.Text>
            This portfolio was inspired by{' '}
            <a href="https://www.jfcwebdesign.com/">James Ciskanik</a>
          </S.Text>
        </S.Copyright>
      </S.Content>
    </S.Container>
    <S.Glass />
    <S.BorderGlass />
  </S.Wrapper>
)

export default Footer
