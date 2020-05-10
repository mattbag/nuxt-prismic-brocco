<template>
  <main class="bubble service-uid px-10 wrap">
    <h1
      class="blog-title text-6xl my-8"
      style="white-space:nowrap"
    >{{ $prismic.asText(document.heading) }}</h1>

    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" />
    <!--  -->
    <div class="back my-8 text-right">
      <nuxt-link
        to="/services"
        exact
      >
        <carat>
          More services by Atlas
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
  name: "service",
  components: {
    SlicesBlock
  },
  // head() {
  //   return {
  //     title: this.$prismic.asText(this.document.heading) + " | Atlas Services"
  //   };
  // },
  async asyncData({ $prismic, params, error }) {
    // console.log("====");
    // console.log("async", params.uid);
    // console.log("====");

    try {
      // Query to get post content
      const post = (await $prismic.api.getByUID("service", params.uid)).data;

      // Returns data to be used in template
      return {
        document: post,
        slices: post.body
        // formattedDate: Intl.DateTimeFormat("en-US", {
        //   year: "numeric",
        //   month: "short",
        //   day: "2-digit"
        // }).format(new Date(post.date))
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
  // computed: {
  //   pad() {
  //     return 66;
  //     // return (
  //     //   (100 * this.document.post_image.dimensions.height) /
  //     //     this.document.post_image.dimensions.width +
  //     //   "%"
  //     // );
  //   }
  // }
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