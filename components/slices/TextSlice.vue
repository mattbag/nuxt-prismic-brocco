<template>
  <div class='post-part single max-w-lg mx-auto my-20 px-4'>
    <prismic-rich-text
      class="textslice text-xl"
      :field="slice.primary.text"
    />
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "text-slice"
};
</script>

<style lang="sass">
.textslice
  a
    text-decoration: underline
  p
    @apply leading-tight
</style>