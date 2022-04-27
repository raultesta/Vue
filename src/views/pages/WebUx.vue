<template>
    <page wrapperClass="page-design">
      <b-row>
        <b-col class="d-flex flex-column align-items-center col" style="margin-bottom: 100px;">
          <h2>Web Design, UX/UI & Web Development</h2>
          <p>Nowadays my work has its focus on web and UX/UI design and also on web development </p>
        </b-col>
      </b-row>
      <hexagon-grid :hexagons="hexagons" size="large"/>
          <b-row>
        <b-col class="d-flex flex-column align-items-center col" style="margin-top: 280px; margin-bottom: 100px;
">
          <h3>WEBdesign - SPEAK website</h3>
          <p>SPEAK aims at solving the migrant social integration problem. Its webs solution had to be easy to use and to enable class enrollment</p>
        </b-col>
      </b-row>
      <hexagon-grid :hexagons="hexagonsSPEAKsite" size="large"/>
       <b-row>
        <b-col class="d-flex flex-column align-items-center col" style="margin-top: 280px; margin-bottom: 100px;
">
          <h3>WEBdesign - SPEAK website</h3>
          <p>SPEAK aims at solving the migrant social integration problem. Its webs solution had to be easy to use and to enable class enrollment</p>
        </b-col>
      </b-row>
      <hexagon-grid :hexagons="hexagonsrandomsites" size="large"/>
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
        // topRightText: 'Usability and simplicity first: 4 clicks away from enroling in any language and class',
        // topLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomRightText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: '',
        // bottomText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex-67.png',
        // topText: 'landing page with visual clarity & a clear message hierarchy with a different call to action button color',
        // topRightText: 'landing page with visual clarity & a clear message hierarchy with a different call to action button color',
        topLeftText: '',
        // bottomRightText: 'landing page with visual clarity & a clear message hierarchy with a different call to action button color',
        // bottomLeftText: 'landing page with visual clarity & a clear message hierarchy with a different call to action button color',
        bottomText: '',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex-68.png',
        // topText: 'landing page with visual clarity & a clear message hierarchy with a different call to action button color',
        topRightText: '',
        topLeftText: '',
        bottomRightText: '',
        // bottomLeftText: 'landing page with visual clarity & a clear message hierarchy with a different call to action button color',
        // bottomText: 'landing page with visual clarity & a clear message hierarchy with a different call to action button color',
      },
    ],
    hexagonsSPEAKsite:[
      {
        imageSrc: '/src/assets/images/Hex/png/bighex_random-sites1.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // topRightText: 'Usability and simplicity first: 4 clicks away from enroling in any language and class',
        // topLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomRightText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK2.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // topRightText: 'Usability and simplicity first: 4 clicks away from enroling in any language and class',
        // topLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomRightText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK3.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // topRightText: 'Usability and simplicity first: 4 clicks away from enroling in any language and class',
        // topLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomRightText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK4.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // topRightText: 'Usability and simplicity first: 4 clicks away from enroling in any language and class',
        // topLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomRightText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK5.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // topRightText: 'Usability and simplicity first: 4 clicks away from enroling in any language and class',
        // topLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomRightText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
    ]
    hexagonsrandomsites:[
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK1.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // topRightText: 'Usability and simplicity first: 4 clicks away from enroling in any language and class',
        // topLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomRightText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK2.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // topRightText: 'Usability and simplicity first: 4 clicks away from enroling in any language and class',
        // topLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomRightText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK3.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // topRightText: 'Usability and simplicity first: 4 clicks away from enroling in any language and class',
        // topLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomRightText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK4.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // topRightText: 'Usability and simplicity first: 4 clicks away from enroling in any language and class',
        // topLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomRightText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
      {
        imageSrc: '/src/assets/images/Hex/png/Hexagons_RT_bighex SPEAK5.png',
        topText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // topRightText: 'Usability and simplicity first: 4 clicks away from enroling in any language and class',
        // topLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomRightText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        bottomLeftText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
        // bottomText: 'designed factoring in the need for tools to users to achieve TASKS (enrol) that let them complete GOALS (learn a new language',
      },
    ]
  }),
}
</script>



<style lang="scss">
.page-design {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
</style>

