<template>
  <div class='post-part single max-w-lg mx-auto my-12'>
    <prismic-rich-text
      class="textslice"
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
</style>