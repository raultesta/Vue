<template>
    <page wrapperClass="page-design">
      <b-row class="hexagon-row-spacing">
        <b-col cols="12" class="d-flex flex-column align-items-center col">
          <h2>Web Design, UX/UI & Web Development</h2>
          <p>Nowadays my work has its focus on web and UX/UI design and also on web development </p>
        </b-col>
        <b-col>
          <hexagon-grid :hexagons="hexagons" size="large"/>
        </b-col>
      </b-row>
      <b-row class="hexagon-row-spacing">
        <b-col cols="12" class="d-flex flex-column align-items-center col">
          <h3>WEBdesign - CITIZEN Dashboard</h3>
          <p>Hidden from the public eye, CITIZEN’s dashboard is designed to be used by a Mayor or other local political figure
who needs to frequently consult the big data of its citizens to make sure his political decisions are what the people need.</p>
        </b-col>
        <b-col>
          <hexagon-grid :hexagons="hexagonsCitizenSite" size="large"/>
        </b-col>
      </b-row>
      <b-row class="hexagon-row-spacing">
        <b-col cols="12" class="d-flex flex-column align-items-center col">
          <h3>WEBdesign - SPEAK website</h3>
          <p>SPEAK aims at solving the migrant social integration problem. Its webs solution had to be easy to use and to enable class enrollment</p>
        </b-col>
        <b-col>
          <hexagon-grid :hexagons="hexagonsSpeakSite" size="large"/>
        </b-col>
      </b-row>
       <b-row class="hexagon-row-spacing">
        <b-col cols="12" class="d-flex flex-column align-items-center col">
          <h3>WEBdesign - SPEAK website</h3>
          <p>SPEAK aims at solving the migrant social integration problem. Its webs solution had to be easy to use and to enable class enrollment</p>
        </b-col>
        <b-col>
          <hexagon-grid :hexagons="hexagonsRandomSites" size="large"/>
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
    hexagonsRandomSites:[
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK1.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK2.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK3.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK4.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK5.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
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
}

.page-design {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
</style>

