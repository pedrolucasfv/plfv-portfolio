import InfoCard from 'components/InfoCard'
import PageSection from 'templates/PageSection'
import * as S from './styles'
import { Book } from '@styled-icons/ionicons-solid/Book'
import Divider from 'components/Divider'

const AboutMe = () => {
  const formationInfoCard = {
    icon: <Book size={20} />,
    title: 'Formação',
    items: [
      'Interrompida no 5º período: Engenharia de Produção - Universidade Federal de Ouro Preto - João Monlevade - Minas Gerais',
      'Cursando: Engenharia de Computação - Universidade Federal de Ouro Preto - João Monlevade - Minas Gerais',
      'Curso: React Avançado: Crie aplicações com NextJS, Strapi e mais',
      'Faço parte da comunidade CoDe'
    ]
  }
  const skillsCard = {
    icon: <Book size={20} />,
    title: 'Conhecimentos',
    items: [
      'Typescript, Javascript, Html, Css',
      'ReactJS, NextJs',
      'Styled-Components',
      'Storybook',
      'GraphQl, StrapiCMS',
      'Experiência básica com Java, C, C# (Unity3D), React Native, Arduíno e afins '
    ]
  }
  const Resume = {
    icon: <Book size={20} />,
    title: 'Currículo'
  }
  return (
    <S.Wrapper>
      <Divider />
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
          </S.LeftContent>
          <S.RightContent>
            <S.Image />
            <S.Text>
              Olá, meu nome é <span> Pedro Lucas Ferreira Vieira</span>, e aqui
              você vai encontrar minhas habilidades, formações e meu currículo.
              Conheci o mundo da programação quando entrei na faculdade, iniciei
              o curso de engenharia de produção e me facinei quando fiz meu
              primeiro programa em C no ciclo básico. Desde então, eu comecei a
              querer programar mais e mais, então no 5º período eu decidi mudar
              para Engenharia da computação.
            </S.Text>
            <S.Text>
              Quando mudei de curso, eu me inscrevi no time de robótica
              <span> Locobots </span>
              da universidade, onde tive um enorme crescimento, trabalhando em
              equipe, fazendo projetos de programação e eletrônica, e também
              fazendo projetos sociais como o robótica sustentável. Até montar
              uma equipe para a Hackathon SEnC 2020 (USP), feito na pandemia, e
              ficamos em primeiro lugar com o projeto Pinça-me.
            </S.Text>
            <S.Text>
              Até que chegou o momento em que decidi não seguir com a eletrônica
              e focar exclusivamente em ser Dev Comecei a estudar as linguagens
              e frameworks de front end e entrei na <span>comunidade CoDe</span>
              , onde aprendi como ser verdadeiramente um dev, com melhora de
              ambiente, mind-set e organização. Desde então passei a fazer
              projetos para desenvolver minhas habilidades e popular meu
              portfólio, para mostrar minhas skills para o mercado e ter um
              histórico da minha trajetória.
            </S.Text>
            <S.Text>
              Confiram detalhes dos meus projetos no Notion, onde documento tudo
              sobre eles como problemas que encontrei, divisão de tasks e como
              eu guardo informação para eu lembrar nos próximos projetos. Vejam
              meus códigos no github para entender minha maneira de pensar, e se
              conectem a mim no linkedIn para acompanharem minha jornada.
              <span> Forte abraço!</span>
            </S.Text>
          </S.RightContent>
        </S.Content>
      </PageSection>
    </S.Wrapper>
  )
}
export default AboutMe
