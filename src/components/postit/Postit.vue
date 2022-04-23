<template>
  <div class="postit-wrapper" :class="position">
    <div class="postit-container">
      <div class="postit">
        <svg width="0" height="0">
          <defs>
            <clipPath id="postitClip" clipPathUnits="objectBoundingBox">
              <path
                d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
                stroke-linejoin="round"
                stroke-linecap="square"
              />
            </clipPath>
          </defs>
        </svg>
        <div class="postit-content">
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'postit',
  props: {
    content: String,
    position: String,
  },
}
</script>

<style lang="scss">
// TODO : Styling for ACTUAL postits
// https://dev.to/thormeier/fully-responsive-html-css-sticky-note-4okl
.postit-wrapper {
  position: absolute;
  width: 158px;
  display: flex;
  align-items: center;
  z-index: 99;
  text-align: center;
  
  .postit-container {
    position: relative;
    display: flex;
    padding-top: 92.5925926%;
    width: 100%;
    height: 173px;

    .postit {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      /* Shadow behind the postit note */
      &:before {
        box-shadow: -2px 2px 15px 0 rgba(0, 0, 0, 0.5);
        background-color: rgba(0, 0, 0, 0.25);
        content: '';
        width: 90%;
        left: 5px;
        height: 83%;
        position: absolute;
        top: 30%;
      }

      /* The postit note itself */
      .postit-content {
        background: linear-gradient(180deg, rgb(243, 194, 77) 0%, rgb(245, 202, 100) 12%, rgb(243, 204, 112) 75%, rgb(241 204 117) 100%);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        clip-path: url(#postitClip);
        padding: 5px;
        padding-right: 10px;
        font-size: 14px;
      }

      /* Add responsiveness */
      @media screen and (min-width: 640px) {
      &before {
          height: 71%;
          width: 90%;
        }
      }

      @media screen and (min-width: 768px) {
        &:before {
          height: 83%;
          width: 90%;
        }
      }

      @media screen and (min-width: 1024px) {
        &:before {
          height: 85%;
          width: 90%;
        }
      }
    }
  }

  &.topText {
    top: -80px;
    right: 165px;
  }
  
  &.topRightText {
    top: 0;
    right: 0;
  }
  
  &.topLeftText {
    top: 0;
    left: 0;
  }
  
  &.bottomRightText {
    bottom: -59px;
    right: 0;
  }
  
  &.bottomLeftText {
    bottom: -59px;
    left: 0;
  }
  
  &.bottomText {
    bottom: -145px;
    right: 165px;
  }
}
</style>


