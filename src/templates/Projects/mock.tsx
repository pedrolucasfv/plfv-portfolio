export default [
  {
    projectCard: {
      slug: '/',
      description:
        'Experience at EvoluServices as a full-stack developer, building solutions to improve customer service efficiency.',
      name: 'EvoluServices Fintech',
      image: '/img/logo-evoluservices.png',
      type: 'none' as
        | 'none'
        | 'Best Project'
        | 'Freelance'
        | 'Refactored'
        | 'Hackathon'
        | 'Social Project'
    },
    project: {
      description: (
        <text>
          <p>
            I joined EvoluServices as a trainee in a newly created team. Our
            goal was to build a system that would make customer service easier
            and more efficient for agents. We faced many challenges, including
            organizing priorities and fixing numerous bugs in the existing
            platform.
          </p>
          <p>
            Our stack was React and Node.js, integrated with Twilio to develop
            custom plugins for Twilio Flex. I contributed several ideas, such as
            a conversation summary plugin and a sentiment analysis feature
            powered by AI. I also built AWS microservices that handled the
            registration of interactions, contacts, and messages using Lambda
            and DocumentDB. In addition, I developed an event-driven
            microservice architecture using SQS, SNS, and Lambdas.
          </p>
          <p>
            One of my key achievements was leading the implementation of a
            customer segmentation feature (Carteirização), which enabled special
            support for specific clients. Thanks to this initiative, our team
            won the twenty-fourth ABT Award—the most important recognition for
            customer relationship in Brazil.
          </p>
          <p>
            I also created AI assistants to help the non-technical side of the
            team solve problems more efficiently. Beyond technical
            contributions, I was deeply involved in training new team members,
            always ready to answer questions and share knowledge, ensuring
            smooth onboarding and growth.
          </p>
          <p>
            This experience at EvoluServices allowed me to contribute directly
            to impactful solutions, while also strengthening my skills in
            leadership, innovation, and teamwork.
          </p>
        </text>
      ),
      name: 'EvoluServices',
      image: '/img/logo-oficial.png',
      github: 'https://github.com/EvoluServices',
      items: [
        'React, Node.js',
        'Twilio Flex Plugins: built features like conversation summary and sentiment analysis',
        'AWS: developed microservices with Lambda and DocumentDB',
        'Event-driven architecture: implemented with SQS, SNS, and Lambdas',
        'Customer Segmentation (Carteirização): led the full implementation',
        'Artificial Intelligence: created assistants to support the non-technical team',
        'Teamwork: trained and supported new members, fostering knowledge sharing'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://audiophile-ecommerce-ols5.vercel.app/',
      description:
        'Audiophile is an e-commerce with dynamic pages, unit tests, custom hooks, highly scalable components, and everything well documented.',
      name: 'Audiophile e-Commerce',
      image: '/img/audiophile-print.png',
      type: 'Best Project' as
        | 'none'
        | 'Best Project'
        | 'Freelance'
        | 'Refactored'
        | 'Hackathon'
        | 'Social Project'
    },
    project: {
      notion:
        'https://www.notion.so/pedrolucasfv/Audiophile-ecommerce-5c4533fd917b48f5b81da6e81642dcea',
      deploy: 'https://audiophile-ecommerce-ols5.vercel.app/',
      github: 'https://github.com/pedrolucasfv/audiophile-ecommerce',
      description: (
        <text>
          <p>
            Audiophile is an e-commerce for audio products. The design was taken
            from a Guru-level challenge on Frontend Mentor. This project was
            planned in full before being executed: I reviewed the proposed
            design and split out the components. I divided the work into tasks
            and documented everything in Notion—what I thought, my difficulties,
            and functions I might forget in future projects.
          </p>
          <p>
            This project has components built in Storybook separately, with unit
            tests, and they’re highly scalable and responsive. I built a custom
            hook, used the Context API, and stored information in LocalStorage.
            I also leveraged Next.js to create dynamic links for the products.
          </p>
          <p>
            I also tried to apply the S.O.L.I.D principles as much as possible,
            but I think I broke one of them in a component. I talk about this in
            the documentation on Notion. Take a look and contact me if you think
            I broke it or got it right—its always good to hear opinions.
          </p>
        </text>
      ),
      name: 'Audiophile E-commerce',
      image: '/img/audiophile-print.png',
      items: [
        'TypeScript, React',
        'Next.js: helped a lot with routing and statically loading pages',
        'Node.js: used via Next.js to build a system where the site admin can add products to the store',
        'Jest and React Testing Library: used for unit tests',
        'Storybook: used to build components separately',
        'Styled-components: used extensively to create options for changing components, increasing scalability',
        'Context API: used to make cart information global',
        'Stripe.js and NextAuth: used for authentication and payment flow'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://audiophile-ecommerce-ols5.vercel.app/',
      description:
        'A website for a law firm focused on mobile, styled with Tailwind.',
      name: 'Rangel Martins Adv',
      image: '/img/rangelmartins-print.png',
      type: 'Freelance' as
        | 'none'
        | 'Best Project'
        | 'Freelance'
        | 'Refactored'
        | 'Hackathon'
        | 'Social Project'
    },
    project: {
      deploy: 'https://rangel-martins-advocacia.vercel.app/',
      github: 'https://github.com/pedrolucasfv/rangel-martins-advocacia',
      description: (
        <text>
          <p>
            This project was developed to meet the needs of a law firm that
            wanted to improve its website—making it more modern and attractive
            to clients. The goal was to create a clean, elegant site that
            represented the seriousness of the legal field, while still having
            subtle animations to catch the user’s attention. The focus was the
            mobile version, but I made adaptations so the site wouldn’t break on
            larger screens.
          </p>
          <p>
            Since the project wasn’t very complex, I decided to challenge myself
            and implement it using a different styling approach. Throughout my
            journey as a dev, I’ve styled my projects using Styled-Components,
            but this time I used Tailwind, which came in the default setup of a
            Next.js project.
          </p>
          <p>
            I learned a lot about using Tailwind—it’s a very practical and easy
            way to style a project. There’s also the standardization factor:
            using Tailwind’s spacing and color scales can make the project look
            nicer. I’ll still stick with Styled-Components overall, but in
            projects where I won’t have much time to style, Tailwind will
            definitely be on the table.
          </p>
        </text>
      ),
      name: 'Rangel Martins Advocacia',
      image: '/img/rangelmartins-print.png',
      items: [
        'TypeScript, React',
        'Next.js: helped with routing',
        'Tailwind: helped me style components and pages quickly and consistently'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://pedrolucasfv.github.io/',
      description:
        'This was a social project I decided to create to help a nonprofit increase donations.',
      name: 'Projeto A Rede',
      image: '/img/projetoarede-print.png',
      type: 'Social Project' as
        | 'none'
        | 'Best Project'
        | 'Freelance'
        | 'Refactored'
        | 'Hackathon'
        | 'Social Project'
    },
    project: {
      deploy: 'https://projeto-a-rede.vercel.app/',
      github: 'https://github.com/pedrolucasfv/projeto-a-rede',
      description: (
        <text>
          <p>
            When building portfolio projects, we often run into the problem of
            ideas. Then I thought: why not build something for a charity? That’s
            when I met Projeto A Rede, an NGO that helps children and the local
            population achieve a better quality of life.
          </p>
          <p>
            I loved this project because of the motivation and because the
            client gave me creative freedom. I was able to put my personal touch
            on it, adding some animations to practice my CSS. I also practiced
            more of what it’s like to work with a client: deadlines and
            post-production—exactly how the market works.
          </p>
          <p>
            I hid my logo on the site for those who like Easter eggs—it’s fun to
            look for—and there’s even a reward if you find it. I also invite you
            to donate $1, $2, or $5 to them, because when many people donate a
            small amount, it becomes a big amount for the kids. PIX CNPJ: 40 291
            675 0001 51 – Missão Urbana A Rede – Bank: Sicred.
          </p>
        </text>
      ),
      name: 'Projeto A Rede',
      image: '/img/projetoarede-print.png',
      items: [
        'TypeScript, React',
        'Next.js: used to improve SEO',
        'Styled-components: used extensively to create options for changing components, increasing scalability'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://pedrolucasfv.github.io/',
      description:
        'A project to increase the reach of a vehicle towing company.',
      name: 'RF-Reboque',
      image: '/img/rfreboque-print.png',
      type: 'Freelance' as
        | 'none'
        | 'Best Project'
        | 'Freelance'
        | 'Refactored'
        | 'Hackathon'
        | 'Social Project'
    },
    project: {
      deploy: 'https://rf-reboque.vercel.app/',
      github: 'https://github.com/pedrolucasfv/rf-reboque',
      description: (
        <text>
          <p>
            The company’s manager wanted a very simple page, with a mobile-first
            focus. He wanted the main concern to be SEO, so customers could
            search keywords on Google and find the company.
          </p>
          <p>
            With that in mind, and since I was already used to it, I developed
            it in Next.js, which has strong SEO capabilities. I set up the
            custom domain and configured it in Google Search Console to index
            and show Google’s crawlers that the site is there. I leveraged the
            structure of my Landing Page Skeleton project and added some details
            that are becoming my signature, like the fixed background with the
            words “RF reboque”.
          </p>
          <p>
            This project taught me more things outside programming, like putting
            a 100% production-ready app online and understanding the promotion
            mechanisms Google provides. I learned to improve SEO and add
            keywords—whether in text or in images’ alternative text.
          </p>
        </text>
      ),
      name: 'RF-REBOQUE',
      image: '/img/rfreboque-print.png',
      items: [
        'TypeScript, React',
        'Next.js: used to improve SEO',
        'Styled-components: used to create options for changing components, increasing scalability'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://pedrolucasfv.github.io/calculator-app/',
      description:
        'A calculator built without a framework, with theme switching.',
      name: 'Calculator App',
      image: '/img/calculatorapp-print.png',
      type: 'none' as
        | 'none'
        | 'Best Project'
        | 'Freelance'
        | 'Refactored'
        | 'Hackathon'
        | 'Social Project'
    },
    project: {
      deploy: 'https://pedrolucasfv.github.io/calculator-app/',
      github: 'https://github.com/pedrolucasfv/calculator-app',
      description: (
        <text>
          <p>
            I decided to take a little vacation from development to enjoy time
            with my family and catch my breath. To avoid going 100% idle, I made
            a small project that wouldn’t demand much time.
          </p>
          <p>
            To make it more worthwhile, I built it in plain JavaScript to step
            away from frameworks. That way I could review and train in case I
            ever need to implement a system without a framework. I built a
            simple calculator with three color options to practice CSS too.
          </p>
          <p>
            It was very straightforward and I had no difficulties. I got to
            enjoy my family, take a breather, and still feel productive. I
            didn’t even document it in Notion because it was very simple for me.
          </p>
        </text>
      ),
      name: 'Calculator App',
      image: '/img/calculatorapp-print.png',
      items: [
        'JavaScript: I used the language without a framework to practice',
        'HTML: it’s a bit different to use it plain when you’re used to a framework',
        'CSS: good refresher, since I’ve been using Styled-Components a lot'
      ]
    }
  },
  {
    projectCard: {
      slug: '/',
      description:
        'A dynamic landing page where content changes as needed via /admin.',
      name: 'Landing Page Skeleton',
      image: '/img/landingpageskeleton-print.png',
      type: 'none' as
        | 'none'
        | 'Best Project'
        | 'Freelance'
        | 'Refactored'
        | 'Hackathon'
        | 'Social Project'
    },
    project: {
      notion:
        'https://www.notion.so/pedrolucasfv/Landing-Page-Skeleton-26cd9985719146f79a9ed6cd70279c80',
      github: 'https://github.com/pedrolucasfv/landing-page-skeleton',
      description: (
        <text>
          <p>
            This is a dynamic landing page where the user can change content
            such as images, text, and the number of components using /admin. It
            was also my first project where I had to create the design myself.
            Since I started documenting everything in Notion, I wrote a full
            step-by-step to configure the backend and integrate it with the app.
          </p>
          <p>
            I know the basics of some backend languages, but in this project I
            used Strapi CMS to build a system that lets the user change the
            page’s information. I stored the data in a database I created using
            PostgreSQL and used GraphQL to make the Strapi-to-page queries. An
            interesting learning here was how to create the page structure in
            Strapi and how to write GraphQL queries. I also learned to use
            Next.js functions like getStaticProps to load the page’s
            information.
          </p>
          <p>
            I had trouble deploying it, since Heroku stopped offering the free
            plan. I could deploy the frontend on Vercel, but I couldn’t deploy
            Strapi, so the site wouldn’t work.
          </p>
        </text>
      ),
      name: 'Landing Page Skeleton',
      image: '/img/landingpageskeleton-print.png',
      items: [
        'TypeScript, React',
        'Next.js: used to statically load the information',
        'Jest and React Testing Library: present in the project but not used',
        'Storybook: used to build components separately',
        'Styled-components: used extensively to create options for changing components, increasing scalability',
        'Strapi CMS: used for the backend',
        'GraphQL: used for the queries'
      ]
    }
  },
  {
    projectCard: {
      slug: '/',
      description: 'A project to make requests to the Spotify API.',
      name: 'Spotify Web Player',
      image: '/img/spotifyweb-print.png',
      type: 'none' as
        | 'none'
        | 'Best Project'
        | 'Freelance'
        | 'Refactored'
        | 'Hackathon'
        | 'Social Project'
    },
    project: {
      notion:
        'https://www.notion.so/pedrolucasfv/Spotify-Web-Page-b7a11fc3d7b640c1bb216ed475ec09ab',
      github: 'https://github.com/pedrolucasfv/spotify-web',
      description: (
        <text>
          <p>
            This project aimed to improve my HTTP requests to an API. I chose
            the Spotify API so it would also be a training exercise in cloning a
            website—the Spotify Web Player. I began making my documentation even
            more complete, adding many project steps, which helped me in other
            projects when I forgot something: I could go back to the docs and
            remember how to do it.
          </p>
          <p>
            I started by trying to connect to Spotify’s API, but with my
            knowledge at the time it was very hard, and I ended up losing two
            days without making progress since there were many steps to get the
            tokens. I decided to build the visual structure first, so I could
            move forward and regain confidence—and I had no problems. The
            project advanced and I built the screen quickly since I was well
            trained with Storybook. After finishing the screen, I tried again to
            connect to the API and, after a few attempts, I was able to make GET
            requests to fetch playlists and tracks from the playlist connected
            to my account.
          </p>
          <p>
            That’s when I saw the importance of making decisions that can change
            the course of a project. I wasn’t being productive because I was
            frustrated. When I switched to something I had mastery over, I
            regained confidence and felt calmer to think through the challenge.
            To avoid forgetting all those steps, I wrote everything down in
            Notion—hopefully it helps anyone else who needs to connect too.
          </p>
        </text>
      ),
      name: 'Spotify Web',
      image: '/img/spotifyweb-print.png',
      items: [
        'TypeScript, React',
        'Next.js: used to make requests with NextRequest and NextResponse',
        'Jest and React Testing Library: present in the project but not used',
        'Storybook: used to build components separately',
        'Styled-components: used extensively to create options for changing components, increasing scalability'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://rest-countries-api-vafe.vercel.app/',
      description: 'A project to fetch country information through a REST API.',
      name: 'Rest Countries Api',
      image: '/img/restcountriesapi-print.png',
      type: 'Refactored' as
        | 'none'
        | 'Best Project'
        | 'Freelance'
        | 'Refactored'
        | 'Hackathon'
        | 'Social Project'
    },
    project: {
      notion:
        'https://www.notion.so/pedrolucasfv/REST-COUNTRIES-API-6305992152264f339868919a61da23e2',
      deploy: 'https://rest-countries-api-vafe.vercel.app/',
      github: 'https://github.com/pedrolucasfv/rest-countries-api',
      description: (
        <text>
          <p>
            This project was my starting point for making requests to a REST
            API. Here I began organizing the documentation better and created a
            structure in Notion that I reused and improved in the following
            projects.
          </p>
          <p>
            Besides the API interaction, I used this project to practice theming
            by building both light and dark modes. However, I wasn’t thinking
            about creating global state at the time, so I made the code messy by
            passing state down component by component. Since it was my first API
            interaction, I did it the raw way using fetch—I didn’t know React
            Query yet. I also didn’t implement proper routing; I just used
            conditionals to display the page, which could be very costly. I had
            a one-week deadline to practice time constraints, so I didn’t
            implement the “search by country name” feature.
          </p>
          <p>
            I think this project deserves a refactor: go back and implement
            country search by name, make the API requests in a less costly way,
            and apply infinite scrolling to load countries as the user scrolls
            down. Beyond those extra features, a refactor would also help to
            organize the messy code structure—for example, exposing country
            pages as dynamic pages and using Next.js for routing.
          </p>
        </text>
      ),
      name: 'Rest Countries API',
      image: '/img/restcountriesapi-print.png',
      items: [
        'TypeScript, React',
        'Next.js: present in the project but not used',
        'Jest and React Testing Library: I started adding unit tests little by little',
        'Storybook: used to build components separately',
        'Styled-components: used extensively to create options for changing components, increasing scalability'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://rps-game-livid.vercel.app/',
      description:
        'A Rock–Paper–Scissors game to train logic and component creation with Storybook.',
      name: 'RPS-Game',
      image: '/img/rps-print.png',
      type: 'none' as
        | 'none'
        | 'Best Project'
        | 'Freelance'
        | 'Refactored'
        | 'Hackathon'
        | 'Social Project'
    },
    project: {
      notion:
        'https://www.notion.so/pedrolucasfv/RPS-game-5160a492106c4e62a94311c171188a35',
      deploy: 'https://rps-game-livid.vercel.app/',
      github: 'https://github.com/pedrolucasfv/rps-game',
      description: (
        <text>
          <p>
            This project is the classic Rock, Paper, Scissors game (jokenpo).
            It’s where I started documenting my projects, though the docs were
            still raw. There was an initial task breakdown, but I was creating
            tasks as the project unfolded rather than planning them in advance.
          </p>
          <p>
            I developed my skill with React hooks a lot here and improved at
            passing information between components—something I struggled with in
            the prior project. In this project I realized I was mastering
            Storybook, building components very quickly and with options to make
            them scalable. I think I fell short on animations—that was my weak
            spot at the time. I chose not to go back and upgrade it so people
            could track my evolution across projects.
          </p>
          <p>
            Since I was early in my journey, I used a boilerplate but didn’t use
            some of the tools in it because they weren’t necessary. I didn’t do
            unit tests and I made the code quite messy to solve the game’s
            logic—this project deserves a refactor to improve the code.
          </p>
        </text>
      ),
      name: 'RPS Game',
      image: '/img/rps-print.png',
      items: [
        'TypeScript, React',
        'Next.js, Jest, and React Testing Library: present in the project but not used',
        'Storybook: used to build components separately',
        'Styled-components: used extensively to create options for changing components, increasing scalability'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://ecommerce-product-page-vdsz.vercel.app/',
      description:
        'A product page for an e-commerce—my first React project, when my knowledge wasn’t very mature yet.',
      name: 'E-commerce product page',
      image: '/img/ecommerceproductpage-print.png',
      type: 'none' as
        | 'none'
        | 'Best Project'
        | 'Freelance'
        | 'Refactored'
        | 'Hackathon'
        | 'Social Project'
    },
    project: {
      deploy: 'https://ecommerce-product-page-vdsz.vercel.app/',
      github: 'https://github.com/pedrolucasfv/ecommerce-product-page',
      description: (
        <text>
          <p>
            This project was my first using React. It’s a Frontend Mentor
            challenge to practice componentization and responsiveness. I didn’t
            have the habit of documenting back then, so there’s no Notion page,
            but even as my first project I was able to implement everything that
            was proposed.
          </p>
          <p>
            I started the project using the boilerplate from a course I follow,
            which comes with several tools to help development. But since this
            was a small single-page project, there was no need to use Next.js. I
            also didn’t use Jest because I didn’t write unit tests. It was also
            my first project using Storybook, so this is where I got used to
            building components separately.
          </p>
          <p>
            I had trouble figuring out how to link the “add to cart” button with
            the cart because at the time I didn’t know how to pass functions
            between components. I researched how to do it and managed—so I
            learned a lot from this project.
          </p>
        </text>
      ),
      name: 'E-Commerce Product Page',
      image: '/img/ecommerceproductpage-print.png',
      items: [
        'TypeScript, React',
        'Next.js, Jest, and React Testing Library: present in the project but not used',
        'Storybook: used to build components separately',
        'Styled-components: used extensively to create options for changing components, increasing scalability'
      ]
    }
  },
  {
    projectCard: {
      slug: 'https://pedrolucasfv.github.io/',
      description:
        'Project that won first place at the SEnC 2020 hackathon, built by me and four other students.',
      name: 'Pinça-me',
      image: '/img/pincame-print.png',
      type: 'Hackathon' as
        | 'none'
        | 'Best Project'
        | 'Freelance'
        | 'Refactored'
        | 'Hackathon'
        | 'Social Project'
    },
    project: {
      deploy: 'https://www.linkedin.com/feed/',
      github: 'https://pedrolucasfv.github.io/',
      description: (
        <text>
          <p>
            In 2020 I was part of the university’s robotics team during the
            pandemic, with no classes. So I and four friends from the team
            decided to sign up for a hackathon—a programming marathon organized
            by USP students during the Computer Engineering Week (SEnC). The
            challenge was to build a mobile application that would help improve
            the university’s teaching.
          </p>
          <p>
            We brainstormed, put all ideas on paper, and concluded the best
            approach would be a kind of project social network where professors
            could post projects on a feed and students could connect to them,
            since there wasn’t that student–professor connection.
          </p>
          <p>
            We built the app using React Native and Expo, and at the time no one
            in the group knew JavaScript, since most members focused on
            electronics. We spent a weekend learning new tech and applying it,
            always coding together on Discord. It was a lot of fun, the vibe was
            great, and we didn’t even feel the fatigue. We were awarded first
            place, which surprised the team at first, but looking back at the
            process, it was well deserved by everyone.
          </p>
        </text>
      ),
      name: 'Pinça-me',
      image: '/img/pincame-print.png',
      items: ['React Native', 'Expo CLI', 'JavaScript', 'CSS']
    }
  }
]
