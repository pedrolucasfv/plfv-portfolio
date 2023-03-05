import Banner from 'components/Banner'
import Menu from 'components/Menu'
import PageSection from 'templates/PageSection'
import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <Banner />
    <Menu />
    <S.Background src="/img/background-interativo.gif" />
    <PageSection title="about me" />
  </S.Wrapper>
)

export default Home
