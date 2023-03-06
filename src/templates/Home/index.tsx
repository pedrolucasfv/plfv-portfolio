import Banner from 'components/Banner'
import Divider from 'components/Divider'
import Menu from 'components/Menu'
import AboutMe from 'templates/AboutMe'
import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <Banner />
    <S.Menu>
      <Menu />
    </S.Menu>
    <S.Background src="/img/background-interativo.gif" />
    <Divider />
    <AboutMe />
  </S.Wrapper>
)

export default Home
