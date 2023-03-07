import * as S from './styles'
import { Book } from '@styled-icons/ionicons-solid/Book'

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
        <S.Title>Entre em contato</S.Title>
        <S.IconList>
          <S.Icon>
            <Book size={22} />
          </S.Icon>
          <S.Icon>
            <Book size={22} />
          </S.Icon>
          <S.Icon>
            <Book size={22} />
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
