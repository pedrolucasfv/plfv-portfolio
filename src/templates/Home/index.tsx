import Banner from 'components/Banner'
import Divider from 'components/Divider'
import Menu from 'components/Menu'
import PageSection from 'templates/PageSection'
import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <Banner />
    <S.Menu>
      <Menu />
    </S.Menu>
    <S.Background src="/img/background-interativo.gif" />
    <Divider />
    <PageSection title="about me" />
  </S.Wrapper>
)

export default Home
