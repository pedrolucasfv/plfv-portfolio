import * as S from './styles'
import { LogoGithub } from '@styled-icons/ionicons-solid/LogoGithub'
import { LogoLinkedin } from '@styled-icons/ionicons-solid/LogoLinkedin'
import { Document } from '@styled-icons/ionicons-solid/Document'

const Footer = () => (
  <S.Wrapper>
    <S.Window>
      <S.BorderWindow>
        <S.Background />
        <S.Glass />
      </S.BorderWindow>
    </S.Window>
    <S.Content>
      <S.Image />
      <S.Line />
      <S.Contact>
        <S.GlassContact />
        <S.IconList>
          <S.Icon>
            <Document size={22} />
          </S.Icon>
          <S.Icon>
            <LogoGithub size={22} />
          </S.Icon>
          <S.Icon>
            <LogoLinkedin size={22} />
          </S.Icon>
        </S.IconList>
      </S.Contact>
      <S.Copyright>
        <S.Text>© Pedro L. F. Vieira, 2023</S.Text>
        <S.Text>Este portfólio foi inspirado no James Ciskanik</S.Text>
      </S.Copyright>
    </S.Content>
  </S.Wrapper>
)

export default Footer
