<template>
    <page wrapperClass="page-design">
      <b-row>
        <b-col class="d-flex flex-column align-items-center">
          <h2>Designing Logos & Brands</h2>
          <p>NGO’s, businesses, local governments and politics</p>
        </b-col>
      </b-row>
      <hexagon-grid :hexagons="hexagons"/>
    </page>
</template>

<script>
import HexagonGrid from '@/components/hexagon-grid/HexagonGrid.vue';
import Page from '@/components/page/Page.vue';

export default {
  name: 'design',
  components: {
    Page,
    HexagonGrid,
  },
  data: () => ({
    hexagons: [
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-01.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-02.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-03.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-04.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-05.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-06.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-07.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-08.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-09.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-10.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-11.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-12.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-13.svg',
      },
      {
        imageSrc: '/src/assets/images/Hex/svg/Hexagons_RT_logo-14.svg',
      },
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-15.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-16.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-17.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-18.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-19.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-20.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-21.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-22.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-23.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-24.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-25.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-26.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-27.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-28.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-29.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-30.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-31.svg',
      // '/src/assets/images/Hex/svg/Hexagons_RT_logo-32.svg',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-34.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-35.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-36.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-37.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-38.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-39.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-40.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-41.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-42.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-43.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-44.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-45.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-46.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-47.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-48.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-49.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-50.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-51.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-52.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-53.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-54.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-55.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-56.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-57.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-58.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-59.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-60.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-61.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-62.png',
      // '/src/assets/images/Hex/png/Hexagons_RT_design-63.png',
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

