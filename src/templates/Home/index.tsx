import Banner from 'components/Banner'
import Menu from 'components/Menu'
import AboutMe from 'templates/AboutMe'
import Projects from 'templates/Projects'
import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <Banner />
    <S.Menu>
      <Menu />
    </S.Menu>
    <AboutMe />
    <Projects />
    <S.Background src="/img/background-interativo.gif" />
  </S.Wrapper>
)

export default Home
