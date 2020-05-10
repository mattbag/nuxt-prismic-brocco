<template>
  <div
    class="bg-black relative"
    v-bind="$attrs"
    :style='{"padding-top":pad}'
  >
    <div class="absolute top-0 left-0 w-full h-full">
      <prismic-image
        class="h-full w-full max-w-none"
        v-if="imageObj"
        :field="imageObj"
      />
      <slot></slot>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageObj: {},
    fixed: {
      type: String,
      default: "60%"
    }
  },
  computed: {
    pad() {
      if (this.fixed) {
        return this.fixed;
      }
      return (
        (100 * this.imageObj.dimensions.height) /
          this.imageObj.dimensions.width +
        "%"
      );
    }
  }
};
</script>
