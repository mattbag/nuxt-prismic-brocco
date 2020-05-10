<template functional>
  <article class="gallery my-8 items-center">
    <ImageR
      v-for="img in props.slice.items"
      :key="img.gallery_image.url"
      class="gallery__item rounded-sm overflow-hidden shadow-lg"
      :imageObj="img.gallery_image"
      :fixed="'60%'"
    >
      <nuxt-link
        class="absolute w-full h-full z-10 left-0 top-0"
        v-if="img.linked && img.linked.type"
        :to="'/'+img.linked.type +'/'+ img.linked.slug"
      >
      </nuxt-link>

    </ImageR>
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