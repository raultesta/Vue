<template>
    <page wrapperClass="page-design">
      <b-row>
        <b-col class="d-flex flex-column align-items-center">
          <h2>Web Design, UX/UI & Web Development</h2>
          <p>Nowadays my work has its focus on web and UX/UI design and also on web development </p>
        </b-col>
      </b-row>
      <hexagon-grid :hexagons="hexagons" size="large"/>
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
      '/src/assets/images/Hex/png/Hexagons_RT_bighex-66.png',
      '/src/assets/images/Hex/png/Hexagons_RT_bighex-67.png',
      '/src/assets/images/Hex/png/Hexagons_RT_bighex-68.png',
    ],
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

