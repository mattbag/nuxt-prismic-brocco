<template functional>
  <article class="wrap flex flex-wrap my-8 items-center justify-center">
    <prismic-image
      v-for="img in props.slice.items"
      :key="img.gallery_image.url"
      :field="img.gallery_image"
      class="m-4"
    >
    </prismic-image>
  </article>
</template>

<script>
export default {
  props: ["slice"]
};
</script>

<style lang="sass" scoped>
.gallery
  display: grid
  grid-gap: 0.5rem
  grid-template-columns: repeat(auto-fit,minmax(300px, 1fr))
  grid-auto-flow: dense
  // grid-auto-rows: 200px
  > .gallery__item:nth-of-type(1),> .gallery__item:nth-of-type(5)
    grid-column: span 2
    grid-row: span 2
</style>