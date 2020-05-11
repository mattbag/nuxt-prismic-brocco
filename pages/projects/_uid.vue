<template>
  <main class="bubble blog-uid-post px-10 wrap">
    <div class="row my-12 items-end">
      <div
        class="col md:w-2/3"
        v-if="pageContent.featured_image"
      >
        <ImageR :imageObj="pageContent.featured_image" />
      </div>

      <div class="col md:w-1/3 flex items-center">
        <div class="relative">
          <!-- Template for page title -->
          <h1
            class="blog-title text-4xl mt-4"
            style="white-space:nowrap"
          >{{ $prismic.asText(pageContent.project_name) }}</h1>

        </div>
      </div>
    </div>

    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" />
    <slices-block :slices="gallery" />
    <!--  -->
    <div class="back my-8 text-right">
      <nuxt-link
        exact
        to="/work"
      >
        <carat>
          More work
        </carat>
      </nuxt-link>
    </div>
  </main>
</template>

<script>
//Importing all the slices components
import SlicesBlock from "~/components/SlicesBlock.vue";

import seo from "@/mixins/seo";
export default {
  mixins: [seo],
  components: {
    SlicesBlock
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const post = (await $prismic.api.getByUID("project", params.uid)).data;

      // Returns data to be used in template
      return {
        pageContent: post,
        slices: post.body1,
        gallery: post.body
        // formattedDate: Intl.DateTimeFormat("en-US", {
        //   year: "numeric",
        //   month: "short",
        //   day: "2-digit"
        // }).format(new Date(post.date))
      };
    } catch (e) {
      console.log(e);

      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  computed: {
    pad() {
      return (
        (100 * this.pageContent.post_image.dimensions.height) /
          this.pageContent.post_image.dimensions.width +
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