import Banner from 'components/Banner'
import Menu from 'components/Menu'
import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <Banner />
    <Menu />
    <S.Background src="/img/background-interativo.gif" />
  </S.Wrapper>
)

export default Home
