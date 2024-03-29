import { Book } from '@styled-icons/ionicons-solid/Book'
import { Download } from '@styled-icons/ionicons-solid/Download'
import { Rocket } from '@styled-icons/ionicons-solid/Rocket'
import InfoCard from 'components/InfoCard'
import PageSection from 'templates/PageSection'
import * as S from './styles'

import Divider from 'components/Divider'
import Text from 'components/Text'

const AboutMe = () => {
  const formationInfoCard = {
    icon: <Book size={20} />,
    title: 'Formação',
    items: [
      'Cursando: Engenharia de Computação - Universidade Federal de Ouro Preto - João Monlevade - Minas Gerais',
      'Curso: React Avançado: Crie aplicações com NextJS, Strapi e mais',
      'Mentorado da comunidade CoDe'
    ]
  }
  const skillsCard = {
    icon: <Rocket size={20} />,
    title: 'Conhecimentos',
    items: [
      'Typescript, Javascript, Html, Css',
      'ReactJS, NextJs',
      'Styled-Components',
      'Storybook',
      'GraphQl, StrapiCMS',
      'NodeJS, Express',
      'Experiência básica com Java, C, C# (Unity3D), React Native, Arduíno e afins '
    ]
  }
  const Resume = {
    icon: <Download size={20} />,
    title: 'Currículo',
    titleButton: 'DOWNLOAD',
    link: '/resume/Pedro_Lucas_FV_currículo.pdf',
    download: true
  }
  const Notion = {
    icon: <Book size={20} />,
    title: 'Notion',
    titleButton: 'Notion',
    link: 'https://www.notion.so/pedrolucasfv/925adc68502546b28222b6cf330a25c1?v=9469121632cd48778dfcb1b39012a2ec',
    download: true
  }

  return (
    <S.Wrapper>
      <Divider />
      <S.Container>
        <PageSection title="Sobre mim">
          <S.Content>
            <S.LeftContent>
              <S.Card>
                <InfoCard {...formationInfoCard} />
              </S.Card>
              <S.Card>
                <InfoCard {...skillsCard} />
              </S.Card>
              <S.Card>
                <InfoCard {...Resume} />
              </S.Card>
              <S.Card>
                <InfoCard {...Notion} />
              </S.Card>
            </S.LeftContent>
            <S.RightContent>
              <S.Image />
              <Text id="text1">
                Olá, meu nome é <span> Pedro Lucas Ferreira Vieira</span>, nasci
                em 1996 e sou apaixonado por códigos. Conheci o mundo da
                programação quando entrei na faculdade, até então eu não sabia o
                que era programar iniciei o curso de engenharia de produção e me
                facinei quando fiz meu primeiro programa em C no ciclo básico.
                Me identifiquei com esse mundo e então no 5º período eu decidi
                mudar para Engenharia da computação para ter um contato maior
                com a área.
              </Text>
              <Text id="text2">
                Quando mudei de curso, eu me inscrevi no time de robótica
                <span> Locobots </span>
                da universidade, onde tive um enorme crescimento, trabalhando em
                equipe, fazendo projetos de programação e eletrônica, e também
                fazendo projetos sociais como o robótica sustentável. Até
                montamos uma equipe para a Hackathon SEnC 2020 (USP), feito na
                pandemia, e ficamos em primeiro lugar com o projeto Pinça-me.
              </Text>
              <Text id="text3">
                Até que chegou o momento em que decidi não seguir com a
                eletrônica e focar exclusivamente em ser Dev. Comecei a estudar
                as linguagens e frameworks de front end e entrei na{' '}
                <span>comunidade CoDe</span>, onde aprendi a pensar como um dev,
                melhorar o ambiente para desenvolver, ter um melhor mind-set e
                ser mais organizado. Desde então passei a fazer projetos para
                desenvolver minhas habilidades e popular meu portfólio, para
                mostrar meu conhecimento para o mercado e ter um histórico da
                minha trajetória.
              </Text>
              <Text id="text4">
                Confiram detalhes dos meus projetos no Notion, onde documento
                tudo sobre eles como problemas que encontrei, divisão de tasks e
                como eu guardo informação para eu lembrar nos próximos projetos.
                Ao clicar em um dos cards de projeto, você visualiza detalhes
                dele, recomendo visualizarem a audiophile e-commerce, meu melhor
                projeto.
                <span> Um forte abraço!</span>
              </Text>
            </S.RightContent>
          </S.Content>
        </PageSection>
      </S.Container>
    </S.Wrapper>
  )
}
export default AboutMe
