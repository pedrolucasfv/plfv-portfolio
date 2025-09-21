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
    title: 'Education',
    items: [
      'Computer Engineering - Federal University of Ouro Preto - Brazil (Incomplete)',
      'Course: Advanced React: Build applications with NextJS, Strapi, and more',
      'Mentee at the CoDe community'
    ]
  }

  const experienceInfoCard = {
    icon: <Book size={20} />,
    title: 'Experience',
    description:
      'Full stack developer at EvoluServices Meios de Pagamentos - (May 2023 - Present)',
    items: [
      'Responsible for implementing new features and fixing bugs in customer service system.',
      'Responsible for the frontend and backend using NodeJS and ReactJs.',
      'Developed plugins and applications using the Twilio ecosystem.',
      'Managed cloud infrastructure using AWS services such as Lambda, SQS, SNS, and S3.',
      'Collaborated on tasks using Git, Gerrit, Jira, and Notion to ensure smooth team operations.',
      'Built and integrated AI assistents to increase productivity and streamline internal processes.'
    ]
  }

  const skillsCard = {
    icon: <Rocket size={20} />,
    title: 'Knowledge',
    items: [
      'Typescript, Javascript, Html, Css',
      'ReactJS, NextJs',
      'Styled-Components, Tailwild',
      'Storybook',
      'GraphQl, StrapiCMS',
      'NodeJS, Express',
      'AWS (S3, Lambda, SQS, SNS, API Gateway, DynamoDB, DocumentDB)',
      'Serverless Framework, SAM',
      "Twilio (Flex, Conversations, TaskRouter, Studio, API's)",
      'Basic experience with Java, C, C# (Unity3D), React Native, Arduíno and others (University)'
    ]
  }
  const Resume = {
    icon: <Download size={20} />,
    title: 'Resume',
    titleButton: 'DOWNLOAD',
    link: '/resume/Pedro_Vieira_Resume_EN.pdf',
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
        <PageSection title="About me">
          <S.Content>
            <S.LeftContent>
              <S.Card>
                <InfoCard {...formationInfoCard} />
              </S.Card>
              <S.Card>
                <InfoCard {...experienceInfoCard} />
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
              {/* <Text id="text1">
                Hello, my name is <span>Pedro Lucas Ferreira Vieira</span>, born
                in 1996. I discovered programming in college and quickly fell in
                love with it, which led me to switch from Production Engineering
                to Computer Engineering to dive deeper into this world.
              </Text>
              <Text id="text2">
                I started by focusing on frontend development, building several
                projects to sharpen my skills and create a strong portfolio.
                Over time, I also worked on freelance jobs and social
                initiatives like <span>Projeto A Rede</span>.
              </Text>
              <Text id="text3">
                My career took a big step forward when I joined{' '}
                <span>EvoluServices</span> in 2023. Although I began as a frontend
                trainee, I quickly grew into a full-stack role, learning backend
                and cloud. There, I developed Twilio Flex plugins, built AWS
                microservices, created AI assistants, and even led the
                implementation of customer segmentation, helping the team win
                the <span>XXIV Prêmio ABT</span>, the most important
                customer relationship award in Brazil.
              </Text>
              <Text id="text4">
                Today I see myself as a passionate full-stack developer, always
                eager to learn and share knowledge. Check out my projects for
                more details about my journey!
              </Text> */}
              <Text id="text1">
                Hello, my name is <span>Pedro Lucas Ferreira Vieira</span>, born
                in 1996. I discovered programming during college and quickly
                fell in love with it. At first, I studied Production
                Engineering, but after writing my very first program in C, I
                realized that technology was where I truly belonged. This led me
                to switch to Computer Engineering so I could explore programming
                in depth and build a solid foundation for my career.
              </Text>
              <Text id="text2">
                I started by dedicating myself to frontend development, creating
                multiple projects that allowed me to improve my technical
                skills, learn best practices, and start shaping a professional
                portfolio. Along the way, I also worked on freelance projects
                and contributed to social initiatives such as
                <span> Projeto A Rede</span>, which gave me the opportunity to
                apply my knowledge while making a positive impact.
              </Text>
              <Text id="text3">
                My career reached a turning point when I joined{' '}
                <span>EvoluServices</span>. Although I initially entered as a
                frontend trainee, I quickly evolved into a full-stack role by
                learning backend and cloud technologies. During this time, I
                developed Twilio Flex plugins, built AWS microservices, designed
                event-driven architectures, and created AI assistants to
                optimize workflows. I also led the implementation of customer
                segmentation, a project that helped the company deliver
                personalized service to key clients. These contributions played
                a role in the team receiving the prestigious
                <span> XXIV Prêmio ABT</span>, the most important recognition
                for customer relationship in Brazil.
              </Text>
              <Text id="text4">
                Today, I see myself as a passionate full-stack developer with a
                strong drive for continuous learning, problem-solving, and
                collaboration. I enjoy sharing knowledge with teammates,
                mentoring new developers, and exploring innovative ways to use
                technology to solve real-world problems. Feel free to explore my
                projects to see in detail how I’ve grown throughout my journey
                and the impact I aim to create as a developer.
              </Text>
            </S.RightContent>
          </S.Content>
        </PageSection>
      </S.Container>
    </S.Wrapper>
  )
}
export default AboutMe
