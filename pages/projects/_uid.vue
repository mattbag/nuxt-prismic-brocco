<template>
  <main class="projects-uid bg-black text-white">
    <div class="top relative text-center">
      <!-- <ImageR :imageObj="pageContent.project_image" /> -->

      <prismic-image
        class="h-full w-auto max-h-screen mx-auto w-full"
        v-if="pageContent.project_image_full"
        :field="pageContent.project_image_full"
      />
      <div
        v-else
        class="py-32"
      ></div>
      <div class="absolute w-full h-full top-0 flex items-center justify-center">
        <div class="text-center text-white">
          <h1
            class="blog-title text-6xl my-4 font-bold lowercase"
            style="white-space:nowrap"
          >{{ $prismic.asText(pageContent.project_name) }}</h1>

          <p class="text-2xl">{{ $prismic.asText(pageContent.project_copy) }}</p>
        </div>
      </div>
    </div>

    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" />
    <!--  -->
    <div class="back py-12 text-center">
      <nuxt-link
        exact
        to="/#work"
      >
        VIEW ALL
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
        slices: post.body
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
  head() {
    return {
      title: this.$prismic.asText(this.pageContent.project_name) + " | Work"
    };
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
.top
</style>