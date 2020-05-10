<template>
  <main class="bubble blog-uid-post px-10 wrap">
    <div class="row my-12 items-end">
      <div class="col md:w-2/3">

        <ImageR :imageObj="document.post_image" />

      </div>

      <div class="col md:w-1/3 flex items-center">
        <div class="relative">
          <!-- Template for page title -->
          <h1
            class="blog-title text-4xl mt-4"
            style="white-space:nowrap"
          >{{ $prismic.asText(document.title) }}</h1>
          <!-- Template for published date -->
          <p class="blog-post-meta opacity-75"><span class="created-at">{{ formattedDate }}</span></p>

        </div>
      </div>
    </div>

    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" />
    <!--  -->
    <div class="back my-8 text-right">
      <nuxt-link
        to="/blog"
        exact
      >
        <carat>
          Back to Blog
        </carat>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
//Importing all the slices components
import SlicesBlock from "~/components/SlicesBlock.vue";

export default {
  name: "post",
  components: {
    SlicesBlock
  },
  head() {
    return {
      title: this.$prismic.asText(this.document.title) + " | Blog"
    };
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const post = (await $prismic.api.getByUID("post", params.uid)).data;

      // Returns data to be used in template
      return {
        document: post,
        slices: post.body,
        formattedDate: Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit"
        }).format(new Date(post.date))
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  computed: {
    pad() {
      return (
        (100 * this.document.post_image.dimensions.height) /
          this.document.post_image.dimensions.width +
        "%"
      );
    }
  }
};
</script>

<style lang="sass" scoped>
.title
  width: 8rem
  height: 8rem
  top: 1rem
.height
  height: 60vh
</style>