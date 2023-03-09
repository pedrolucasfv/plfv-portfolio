export default [
  {
    projectCard: {
      slug: 'https://audiophile-ecommerce-ols5.vercel.app/',
      description:
        'Audiophile é uma e-commerce com páginas dinâmicas, testes unitários, hooks personalizados, componentes bem escaláveis e tudo bem documentado.',
      name: 'Audiophile e-Commerce',
      image: '/img/audiophile-print.png'
    },
    project: {
      deploy: 'https://audiophile-ecommerce-ols5.vercel.app/',
      github: 'https://github.com/pedrolucasfv/audiophile-ecommerce',
      description: (
        <text>
          <p>
            Audiophile é uma e-commerce de produtos de áudio, o design foi
            retirado de um desafio nível Guru no front-end mentor. Esse projeto
            foi inteiramente planejado antes de ser executado, fui olhando o
            design proposto e separando os componentes. Dividi o projeto em
            tasks e documentei tudo no Notion, coloquei o que pensei, minhas
            dificuldades e funções que posso esquecer em futuros projetos
          </p>
          <p>
            Esse projeto tem componentes feitos no Storybook separadamente, com
            testes unitários, altamente escaláveis e responsivos. Construí hook
            personalizado, usei Context Api e guardei informação no
            LocalStorage. Também usei o poder do NextJs para criar links
            dinâmicos nos produtos.
          </p>
          <p>
            Além disso, tentei aplicar ao máximo o princípio S.O.L.I.D, mas acho
            que feri um principío em um dos componentes, eu falo isso na
            documentação que deixei no Notion. Inclusive, veja lá e entre em
            contato comigo se você acha que feri ou fiz certo, é sempre bom
            ouvir opiniões.
          </p>
        </text>
      ),
      name: 'Audiophile E-commerce',
      image: '/img/audiophile-print.png',
      items: [
        'Typescript, React',
        'NextJS: que me ajudou muito nas rotas',
        'Jest e react-testing-library: usei para fazer os testes unitários',
        'Storybook: usei para fazer os componentes separadamente',
        'Styled-components: usei bastante para criar opções para mudança nos componentes, aumentando a escalabilidade',
        'Context-Api: usei para deixar a informação de carrinho global'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://ecommerce-product-page-vdsz.vercel.app/',
      description:
        'Uma página de produto de uma e-commerce, meu primeiro projeto feito em React, onde meu conhecimento não estava tão maduro.',
      name: 'E-commerce product page',
      image: '/img/ecommerceproductpage-print.png'
    },
    project: {
      deploy: 'https://ecommerce-product-page-vdsz.vercel.app/',
      github: 'https://github.com/pedrolucasfv/ecommerce-product-page',
      description: (
        <text>
          <p>
            Esse projeto foi o meu primeiro utilizando o React. É um desafio do
            front-end mentor para treinar habilidades de componetização e
            responsividade. Nesse projeto eu não tinha o hábito de documentar,
            então ele não tem Notion e apesar de ser o primeiro projeto, eu
            consegui executar tudo que foi proposto.
          </p>
          <p>
            Eu comecei o projeto usando o boilerplate que eu uso do curso
            react-avaçando, esse boilerplate vem com algumas ferramentas para
            desenvolver, mas como era single-page e um projeto pequeno, não teve
            necessidade de usar o NextJs, eu não usei também o jest porque não
            fiz testes unitários. Esse foi o primeiro projeto também que usei o
            Storybook, então foi nesse projeto que me habituei a fazer
            componentes separados.
          </p>
          <p>
            Tive problemas em saber como ia linkar o botão de adicionar o
            carrinho com o carrinho, pois na época eu não sabia passar funções.
            Coonsegui pesquisar e saber como fazer, então aprendi bastante coisa
            com esse projeto.
          </p>
        </text>
      ),
      name: 'E-Commerce Product Page',
      image: '/img/ecommerceproductpage-print.png',
      items: [
        'Typescript, React',
        'NextJS, Jest e react-testing-library: Apesar de ter no projeto, não foi usado',
        'Storybook: usei para fazer os componentes separadamente',
        'Styled-components: usei bastante para criar opções para mudança nos componentes, aumentando a escalabilidade'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://rps-game-livid.vercel.app/',
      description:
        'Um jogo de JoKenPo para treinar bem a lógica e a criação de componentes através do storybook',
      name: 'RPS-Game',
      image: '/img/rps-print.png'
    },
    project: {
      deploy: 'https://rps-game-livid.vercel.app/',
      github: 'https://github.com/pedrolucasfv/rps-game',
      description: (
        <text>
          <p>
            Esse projeto é o Rock, Paper, Scissors Game, o famoso jokenpo. Foi
            nesse projeto que comecei a documentar meus projetos, mas ainda era
            uma documentação crua, houve um começo de divisão de tasks, mas eu
            ia criando as tasks no desenrolar do projeto, e não planejado
            antecipadamente.
          </p>
          <p>
            Eu desenvolvi muito nesse projeto a habilidade de usar hooks do
            React, também melhorei a parte de passar informação de um componente
            para o outro, coisa que eu tive dificuldade no projeto anterior a
            este. Nesse projeto eu tive a constatação que estava dominando o
            storybook, fazendo os componentes muito rapidamente e com opções de
            mudança nos componentes para deixar eles escalaveis. Eu acho que
            pequei nas animações, esse era meu ponto fraco na época, não quis
            voltar nele para dar um upgrade justamente para as pessoas
            acompanharem minha evolução nos projetos
          </p>
          <p>
            Como estava no começo da caminhada, eu usei o boilerplate mas não
            utilizei algumas ferramentas nele, pois não foi necessário. Não fiz
            testes unitários e baguncei muito o código para resolver a lógica do
            game esse projeto vale um refactoring para melhorar o código.
          </p>
        </text>
      ),
      name: 'RPS Game',
      image: '/img/rps-print.png',
      items: [
        'Typescript, React',
        'NextJS, Jest e react-testing-library: Apesar de ter no projeto, não foi usado',
        'Storybook: usei para fazer os componentes separadamente',
        'Styled-components: usei bastante para criar opções para mudança nos componentes, aumentando a escalabilidade'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://rest-countries-api-vafe.vercel.app/',
      description:
        'Esse é um projeto de consulta a informação de países através de uma rest api.',
      name: 'Rest Countries Api',
      image: '/img/restcountriesapi-print.png'
    },
    project: {
      deploy: 'https://rest-countries-api-vafe.vercel.app/',
      github: 'https://github.com/pedrolucasfv/rest-countries-api',
      description: (
        <text>
          <p>
            Esse foi um projeto para eu começar a fazer consultas em uma REST
            API. Nesse projeto eu comecei a organizar melhor a documentação e
            criei uma estrutura no Notion que foi aproveitada e melhorada nos
            próximos.
          </p>
          <p>
            Além da interação com a API, usei esse projeto para treinar a
            habilidade de tema, fazendo o projeto em light e dark mode, porém,
            eu não pensava em criar um estado global, então baguncei bastante o
            código passando o estado de componente a componente. Além disso,
            como foi a primeira interação a API, eu fiz de maneira crua, usando
            fetch, ainda não conhecia o React Query e eu não fiz roteamento de
            páginas, eu apenas colocava uma condicional para exibir a página, o
            que pode ter deixado muito custoso. Esse projeto eu tive que fazer
            um desafio em uma semana, para treinar prazos, então eu não
            implementei a função de procurar países por nome.
          </p>
          <p>
            Acho que esse projeto vale um refactoring, voltar nele para
            implementar a busca de países com nome, fazer a requisição na API de
            uma forma menos custosa e aplicar o scroll infinito nele, para
            carregar os países conforme for descendo a tela. Além dessas funções
            extras, seria bom um refactoring para organizar melhor o código que
            está uma bagunça falando de forma estrutural, por exemplo, expor as
            páginas de país em páginas dinâmicas, usando o NextJs para fazer as
            rotas.
          </p>
        </text>
      ),
      name: 'Rest Countries API',
      image: '/img/restcountriesapi-print.png',
      items: [
        'Typescript, React',
        'NextJS: tem no projeto mas não foi usado',
        'Jest e react-testing-library: Comecei a utilizar os testes unitários, mas de pouco a pouco',
        'Storybook: usei para fazer os componentes separadamente',
        'Styled-components: usei bastante para criar opções para mudança nos componentes, aumentando a escalabilidade'
      ]
    }
  },
  {
    projectCard: {
      slug: '/',
      description: 'Esse é um projeto para fazer chamadas na Spotify API.',
      name: 'Spotify Web Player',
      image: '/img/spotifyweb-print.png'
    },
    project: {
      github: 'https://github.com/pedrolucasfv/spotify-web',
      description: (
        <text>
          <p>
            Esse projeto teve o intuíto de aprimorar as requisições a uma API.
            Foi escolhido a Spotify API, pois com isso, também seria um
            treinamento de clonar um site, que foi o Spotify Web Player. Eu
            Comecei a deixar documentação ainda mais completa, colocando vários
            passos do projeto, o que me ajudou em outros projetos, pois quando
            esquecia de algo, eu voltava na documentação e lembrava como fazer.
          </p>
          <p>
            Eu comecei primeiro tentando conectar a API do spotify, mas com os
            meus conhecimentos da época, foi muito difícil e eu acabei perdendo
            2 dias sem avançar com projeto, pois tinha que fazer vários passos
            para pegar os tokens. Decidi fazer a estrutura visual, para poder
            avançar e recuperar a confiança que já estava se perdendo, e não
            tive problemas, o projeto avançou e fiz a tela rapidinho, já que
            estava bem treinado no storybook. Depois que terminei a tela, tentei
            novamente conectar com a API e depois de algumas tentativas eu
            consegui fazer requisições GET para pegar as playlists e as músicas
            da playlist conectadas a minha conta.
          </p>
          <p>
            Foi aí que vi a importância de tomar decisões que podem mudar o rumo
            do projeto, pois eu não estava rendendo o suficiente por está
            frustado. Quando fiz algo que eu tinha domínio, recuperei a
            confiança e me senti mais calmo para pensar melhor em resolver o
            desafio. Para não esquecer como fiz todo aquele passo a passo, eu
            anotei tudo no Notion, assim podendo ajudar também quem precisar se
            conectar.
          </p>
        </text>
      ),
      name: 'Spotify Web',
      image: '/img/spotifyweb-print.png',
      items: [
        'Typescript, React',
        'NextJS: usei para fazer as requisições com NextRequest e NextResponse',
        'Jest e react-testing-library: tem no projeto mas não foi usado',
        'Storybook: usei para fazer os componentes separadamente',
        'Styled-components: usei bastante para criar opções para mudança nos componentes, aumentando a escalabilidade'
      ]
    }
  },
  {
    projectCard: {
      slug: '/',
      description:
        'Una landing page dinâmica, onde o conteúdo de acordo com a necessidade acessando o /admin.',
      name: 'Landing Page Skeleton',
      image: '/img/landingpageskeleton-print.png'
    },
    project: {
      github: 'https://github.com/pedrolucasfv/landing-page-skeleton',
      description: (
        <text>
          <p>
            Essa é uma landing page dinâmica em que o usuário pode mudar o
            conteúdo como imagens, text e número de componentes usando o /admin.
            Além disso, foi meu primeiro projeto que tive que criar o design por
            conta própria. Como passei a documentar tudo no Notion, eu escrevi
            todo o passo a passo para configurar o backend e integrar ele a
            aplicação.
          </p>
          <p>
            Eu sei o básico de algumas linguagens para fazer o backend, mas
            nesse projeto, eu usei o Strapi CMS para criar um sistema para o
            usuário mudar as informações da página. Guardei os dados no banco
            que criei, utilizando o PostGreSQL e usei o GraphQl para fazer as
            queries do Strapi para a página. Tive um aprendenzidado interessante
            nesse projeto como criar a estrutura da página no Strapi e aprender
            a fazer as queries no GraphQL. Aprendi também a usar as funções do
            NextJS como o getStaticProps, onde carregava as informações da
            página.
          </p>
          <p>
            Tive problema para fazer o deploy, já que o Heroku parou de oferecer
            o plano gratuito, o front-end conseguia fazer na vercel, mas o
            strapi, eu não consegui fazer o deploy, aí o site não funcionava.
          </p>
        </text>
      ),
      name: 'Landing Page Skeleton',
      image: '/img/landingpageskeleton-print.png',
      items: [
        'Typescript, React',
        'NextJS: usei para carregar as informações de forma estática.',
        'Jest e react-testing-library: tem no projeto mas não foi usado',
        'Storybook: usei para fazer os componentes separadamente',
        'Styled-components: usei bastante para criar opções para mudança nos componentes, aumentando a escalabilidade',
        'StrapiCMS: para fazer o backend',
        'GraphQL: para fazer as queries'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://pedrolucasfv.github.io/calculator-app/',
      description:
        'Uma calculadora feita sem framework que tem a opção de mudar o tema.',
      name: 'Calculator App',
      image: '/img/calculatorapp-print.png'
    },
    project: {
      deploy: 'https://pedrolucasfv.github.io/calculator-app/',
      github: 'https://github.com/pedrolucasfv/calculator-app',
      description: (
        <text>
          <p>
            Eu resolvi tirar um tempo de férias no desenvolvimento, para curtir
            minha família que se reuniu e também dar uma respirada. Para não
            ficar 100% parado, eu fiz um projetinho mais tranquilo que não
            demandasse tanto tempo de dedicação.
          </p>
          <p>
            Para melhorar a ideia, eu fiz o projeto em javascript puro, para
            sair um pouco do framework. Assim eu relembrei e treinei um pouco
            caso seja necessário eu ter que implementar um sistema sem
            framework. Fiz uma calculadora simples que tem 3 opções de cores
            para treinar também o css.
          </p>
          <p>
            Foi bem tranquilo e não tive dificuldade, pude curtir minha família,
            respirar e ainda me sentir ocupado. Nem documentei no Notion o
            projeto, pois foi algo bem simples pra mim.
          </p>
        </text>
      ),
      name: 'Calculator App',
      image: '/img/calculatorapp-print.png',
      items: [
        'Javascript: usei a linguagem sem framework para treinar',
        'HTML: meio diferente quando usar puro quando a pessoa ta acostumado com um framework',
        'CSS: foi bom para relembrar, já que eu estou usando muito o Styled-Components'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://pedrolucasfv.github.io/',
      description:
        'Projeto que ganhou o primeiro lugar na hackathon SEnC 2020, feito por mim e mais quatro alunos.',
      name: 'Pinça-me',
      image: '/img/pincame-print.png'
    },
    project: {
      deploy: 'https://www.linkedin.com/feed/',
      github: 'https://pedrolucasfv.github.io/',
      description: (
        <text>
          <p>
            Em 2020 eu fazia parte do time de robótica da universidade,
            estávamos em pandemia e sem aulas. Então eu e mais 4 amigos do time
            de robótica resolvemos nos increver em uma hackathon, uma maratona
            de programação organizada pelos alunos da USP na semana de
            engenharia da computação (SEnC). O desafio era fazer uma aplicação
            mobile que influenciasse na melhora do ensino da faculdade.
          </p>
          <p>
            Tivemos um brainstorm, colocamos todas as ideias no papel e chegamos
            a conclusão que o melhor seria uma espécie de rede social de
            projetos, onde os professores podiam postar projetos no feed e os
            alunos se conectarem aos projetos, já que não existia essa conexão
            de Aluno e Professor.
          </p>
          <p>
            Fizemos a aplicação usando React Native e Expo, e nessa época,
            ninguém do grupo sabia JavaScript, já que os integrantes focavam em
            eletrônicos. Passamos um final de semana aprendendo tecnologia nova
            e aplicando, programando semepre juntos no discord, foi muito
            divertido, um clima super agradável e nem sentíamos o cansaço. Fomos
            premiados com a primeira colocação, que foi uma surpresa na equipe,
            mas que quando analisamos todo o processo, foi muito merecido por
            todos.
          </p>
        </text>
      ),
      name: 'Pinça-me',
      image: '/img/pincame-print.png',
      items: ['React Native', 'Expo CLI', 'Javascript', 'CSS']
    }
  }
]
