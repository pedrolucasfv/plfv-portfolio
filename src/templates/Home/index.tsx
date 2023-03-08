import Banner from 'components/Banner'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import AboutMe from 'templates/AboutMe'
import Projects from 'templates/Projects'
import * as S from './styles'

import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (
        !entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y < 0)
      ) {
        menu.classList.add('fix')
        menu.classList.remove('normal')
      } else {
        menu.classList.remove('fix')
        menu.classList.add('normal')
      }
      console.log('apareeceu', entries)
    })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const menu = document.querySelector('#menu')!
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    intersectionObserver.observe(document.querySelector('#sentinela')!)
    return () => intersectionObserver.disconnect()
  })

  return (
    <S.Wrapper>
      <Banner />
      <div id="sentinela" />
      <S.Menu id="menu">
        <Menu />
      </S.Menu>
      <AboutMe />
      <Projects />
      <Footer />
      <S.Background />
    </S.Wrapper>
  )
}
export default Home
