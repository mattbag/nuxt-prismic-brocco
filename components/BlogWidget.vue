<template>
  <article
    class="blog-post relative mb-16 mt-6"
    :class="{'text-right':index%2 }"
  >
    <nuxt-link :to="link">
      <div
        class="pic shadow rounded-full overflow-hidden w-30 h-30 absolute"
        :class="{'pic--right':index%2 }"
      >
        <prismic-image
          class="h-full opacity-75 hover:opacity-100 object-cover w-full object-center"
          v-if="post.data.post_image"
          :field="post.data.post_image"
        />
      </div>
    </nuxt-link>
    <div class="relative mb-10">
      <nuxt-link :to="link">
        <h2 class="text-4xl">{{ $prismic.asText(post.data.title) }}</h2>
      </nuxt-link>
      <p class="blog-post-meta text-sm opacity-75"><span class="created-at">{{ formattedDate }}</span></p>
      <p>{{getFirstParagraph(post)}}</p>
      <!-- {{index}} -->
      <hr
        class="w-20 opacity-50"
        :class="{'mr-0 ml-auto':index%2 }"
      >
    </div>
  </article>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js";

export default {
  props: ["post", "index"],
  data: function() {
    return {
      link: "",
      formattedDate: ""
    };
  },
  name: "blog-widget",
  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(post) {
      const textLimit = 300;
      const slices = post.data.body;
      let firstParagraph = "";
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        // console.log("====");
        // console.log(slice);
        // console.log("====");
        if (!haveFirstParagraph && slice.slice_type == "text") {
          slice.primary.text &&
            slice.primary.text.forEach(function(block) {
              if (block.type == "paragraph" && !haveFirstParagraph) {
                firstParagraph += block.text;
                haveFirstParagraph = true;
              }
            });
        }
      });

      const limitedText = firstParagraph.substr(0, textLimit);

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(" ")) + "...";
      } else {
        return firstParagraph;
      }
    }
  },
  created() {
    (this.link = LinkResolver(this.post)),
      (this.formattedDate = Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      }).format(new Date(this.post.data.date)));
  }
};
</script>

<style lang="sass" scoped>
.pic
  width: 6rem
  height: 6rem
  top: -2rem
  left: -3rem
  transition: transform 100ms ease, opacity
  will-change: transform
  &:hover
    transform: scale(1.4) translateX(0%)
    border-radius: 0
    width: 10rem
    z-index: 1
  img
    max-width: none
  &--right
    right: -3rem
    left: auto
</style>