<template>
  <div class='post-part single wrap QuoteSlice text-center'>
    <blockquote class="block-quotation max-w-80 mx-auto text-4xl py-10 border-white border-t border-b">
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
  &:before, &:after
    font-size: 5rem
    -webkit-text-stroke: 2px #fff
    color: transparent
    line-height: 1
  &:before
    content: "“ "
  &:after
    content: "”"
    margin-left: 10px
</style>