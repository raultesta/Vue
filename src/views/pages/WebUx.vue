<template>
    <page wrapperClass="page-design">
      <b-row class="hexagon-row-spacing">
        <b-col cols="12" class="d-flex flex-column align-items-center col hexagon-container-copy">
          <h2>Web Design, UX/UI & Web Development</h2>
          <p>Nowadays my work has its focus on web and UX/UI design and also on web development </p>
        </b-col>
        <b-col>
          <hexagon-grid :hexagons="hexagons" size="large"/>
        </b-col>
      </b-row>
      <b-row class="hexagon-row-spacing">
        <b-col cols="12" class="d-flex flex-column align-items-center col hexagon-container-copy">
          <h3>WEBdesign - CITIZEN Dashboard</h3>
          <p>Hidden from the public eye, CITIZEN’s dashboard is designed to be used by a Mayor or other local political figure who needs to frequently consult the big data of its citizens to make sure his political decisions are what the people need.</p>
        </b-col>
        <b-col>
          <hexagon-grid :hexagons="hexagonsCitizenSite" size="large"/>
        </b-col>
      </b-row>
      <b-row class="hexagon-row-spacing">
        <b-col cols="12" class="d-flex flex-column align-items-center col hexagon-container-copy">
          <h3>WEBdesign - SPEAK website</h3>
          <p>SPEAK aims at solving the migrant social integration problem. Its web solution had to be easy to use and to easily enable class enrollment</p>
        </b-col>
        <b-col>
          <hexagon-grid :hexagons="hexagonsSpeakSite" size="large"/>
        </b-col>
      </b-row>
       <b-row class="hexagon-row-spacing">
        <b-col cols="12" class="d-flex flex-column align-items-center col hexagon-container-copy">
          <h3>APPdesign - SPEAK App</h3>
          <p>As SPEAK has a huge broad of personas, its app had to be pretty simple but versatile at the same time</p>
        </b-col>
        <b-col>
          <hexagon-grid :hexagons="hexagonsSpeakApp" size="large"/>
        </b-col>
      </b-row>
       <b-row class="hexagon-row-spacing">
        <b-col cols="12" class="d-flex flex-column align-items-center col hexagon-container-copy">
          <h3>APPdesign - CITIZEN App</h3>
          <p>As SPEAK has a huge broad of personas, its app had to be pretty simple but versatile at the same time</p>
        </b-col>
        <b-col>
          <hexagon-grid :hexagons="hexagonsCitizenApp" size="large"/>
        </b-col>
      </b-row>
       <b-row class="hexagon-row-spacing">
        <b-col cols="12" class="d-flex flex-column align-items-center col hexagon-container-copy">
          <h3>APPdesign - All apps</h3>
          <p>All apps built</p>
        </b-col>
        <b-col>
          <hexagon-grid :hexagons="hexagonsOtherApps" size="large"/>
        </b-col>
      </b-row>
       <b-row class="hexagon-row-spacing">
        <b-col cols="12" class="d-flex flex-column align-items-center col hexagon-container-copy">
          <h3>WEBdev - Porfolio Website</h3>
          <p>Website developed in HTML, CSS and using Vue.js framework</p>
        </b-col>
        <b-col>
          <hexagon-grid :hexagons="hexagonsPortfolioSite" size="large"/>
        </b-col>
      </b-row>
    </page>
</template>

<script>
import HexagonGrid from '@/components/hexagon-grid/HexagonGrid.vue';
import Page from '@/components/page/Page.vue';

export default {
  name: 'webUx',
  components: {
    Page,
    HexagonGrid,
  },
  data: () => ({
    hexagons: [
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex-66.png',
        topText: '',
        bottomLeftText: '',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex-67.png',
        topLeftText: '',
        bottomText: '',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex-68.png',
        topRightText: '',
        topLeftText: '',
        bottomRightText: '',
      },
    ],
    hexagonsSpeakSite:[
      {
        imageSrc: '/src/assets/images/Hex/png/bighex_SpeakSite1.png',
        topLeftText: 'landing page with visual clarity & a clear message hierarchy with an always orange call-to-action button',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enroll) that let them complete GOALS (learn a new language)',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/bighex_SpeakSite2.png',
        topRightText: 'Respecting Gestalt Laws of Common Region and Proximity',
        bottomRightText: 'Component to explain the product’s main hook: to learn a new language. Design Coherence including call to action button color',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/bighex_SpeakSite3.png',
        bottomRightText: 'Small quiz (30s) to help the user know which is his expertise level so he can choose the right class for him/herself',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/bighex_SpeakSite4.png',
        bottomLeftText: 'Usability and simplicity first: 4 clicks away from enrolling in any language and class',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/bighex_SpeakSite5.png',
        bottomRightText: 'SPEAK’s 2012 original conceptand UX storyboard',
      },
    ],
    hexagonsSpeakApp:[
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK1.png',
        bottomLeftText: 'Like Kurosu and Kashimura taught us, an aesthetically pleasing design leads people to believe the app works better.',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK2.png',
        bottomText: 'Communication, Font and Colors Interplatform Continuity to help users find similar actions',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK3.png',
        bottomRightText: 'Design Focus on the main product: Enroll in classes and learn new languages',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK4.png',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK5.png',
      },
    ],
    hexagonsCitizenSite:[
      {
        imageSrc: '/src/assets/images/Hex/png/bighex_citizen1.png',
        topLeftText: 'Original Dashboard Architecture respecting some of UX’s main laws.',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/bighex_citizen2.png',
        topRightText: 'The dashboard comes with a smartphone version to allow users (policy makers) to consult big data anywhere they go.',
        bottomRightText: 'This smartphone version of the dashboard was created with a design similar to CITIZEN’s public app - all for design coherence.',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/bighex_citizen5.png',
        bottomRightText: 'Respecting the Gestalt Laws of Common Region and Proximity',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/bighex_citizen3.png',
        bottomLeftText: 'The Cognitive Bias of Serial Position Effect affects the way users direct their attention towards (the first and last items in a series)',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/bighex_citizen4.png',
        bottomRightText: 'Intuitive and easy to consult and/or to use design.',
      },
    ],
     hexagonsCitizenApp:[
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_citizenApp1.png',
        topLeftText: 'Content organized into smaller chunks to help users process, understand and easily memorize, thus respecting Miller’s Law',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_citizenApp2.png',
        bottomText: 'Citizen original by hand wireframing and storyboard',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_citizenApp3.png',
        topRightText: 'Wireframed and prototyped in Adobe XD',
        bottomRightText: 'Wireframed in Figma',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_citizenApp4.png',
        bottomLeftText: 'User research through a small group of selected users analisys',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_citizenApp5.png',
        bottomRightText: 'Aesthetically pleasing design and a game feel created specifically to retain users',
      },
    ],
      hexagonsPortfolioSite:[
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_PortfolioSite1.png',
        topLeftText: 'Homepage with two ways to move forward: buttons. Aims to create an inception in the users mind about the portfolio’s onwer’s skills',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_PortfolioSite2.png',
        bottomText: 'Pages interely designed by hand before any work is done on Illustrator. This is a personal preference and kind of a ritual.',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_PortfolioSite3.png',
        topRightText: 'Wireframed and prototyped in Figma',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_PortfolioSite4.png',
        bottomLeftText: 'Developed in HTML, CSS and JavaScript with Vue2 which is a fundamental tool for web developing.',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_PortfolioSite5.png',
        bottomRightText: 'All the website’s design and architecture comes from a piece of inspiration found in a kindergarten hexagonal ground',
      },
    ],
    hexagonsOtherApps:[
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_apps1.png',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_apps2.png',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_apps3.png',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_apps4.png',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_apps5.png',
      },
    ]
  }),
}
</script>

<style lang="scss">
.hexagon-row-spacing {
  margin-top: 280px;
  margin-bottom: 100px;

  &:first-child {
    margin-top: 0;
  }

  .hexagon-container-copy {
    p,
    h3 {
      text-align: center;
    }
  }
}

.page-design {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
</style>

