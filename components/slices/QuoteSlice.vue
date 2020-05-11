<template>
  <div class='post-part single wrap QuoteSlice text-center'>
    <blockquote class="block-quotation max-w-80 mx-auto text-2xl py-10 border-white border-t border-b">
      {{ $prismic.asText(slice.primary.quote) }}
    </blockquote>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "quote-slice"
};
</script>

<style lang="sass" scoped>
.block-quotation
  &:before
    content: "« "
  &:after
    content: " »"
</style>