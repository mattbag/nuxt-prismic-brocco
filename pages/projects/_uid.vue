<template>
  <main class="projects-uid bg-black text-white">
    <div class="top relative text-center">
      <!-- <ImageR :imageObj="pageContent.project_image" /> -->

      <prismic-image
        class="h-full w-auto max-h-screen mx-auto w-full opacity-50"
        v-if="pageContent.project_image_full.length || Object.keys(pageContent.project_image_full).length > 0"
        :field="pageContent.project_image_full"
      />

      <div
        v-else
        class="py-32"
      ></div>
      <div class="absolute w-full h-full top-0 flex items-center justify-center">
        <div class="text-center text-white">
          <h1 class="blog-title text-6xl my-4 lowercase tracking-wider">
            <strong>
              {{ $prismic.asText(pageContent.project_name) }}
            </strong>
          </h1>

          <p class="text-2xl">{{ $prismic.asText(pageContent.project_copy) }}</p>
        </div>
      </div>
    </div>

    <!-- Slice Block Componenet tag -->
    <slices-block :slices="slices" />
    <!--  -->
    <div class="back py-12 text-center flex flex-wrap items-center justify-between px-8">
      <div class="flex-grow">
        <nuxt-link
          class="text-stroke-w text-r6 uppercase"
          v-if="prevNext.prev"
          :to="prevNext.prev.uid"
        >
          pre
        </nuxt-link>
      </div>
      <div class="flex-grow text-2xl">
        <nuxt-link
          exact
          to="/#work"
        >
          VIEW ALL
        </nuxt-link>
      </div>
      <div class="flex-grow">
        <nuxt-link
          class="text-stroke-w text-r6 uppercase"
          v-if="prevNext.next"
          :to="prevNext.next.uid"
        >
          nxt
        </nuxt-link>
      </div>
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
      const post = await $prismic.api.getByUID("project", params.uid);

      // Returns data to be used in template
      return {
        pageContent: post.data,
        slices: post.data.body,
        projectID: post.id
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
    prevNext() {
      const current = this.$store.state.projects.find(
        prj => prj.id === this.projectID
      );

      const currentIndex = this.$store.state.projects.indexOf(current);
      const _length = this.$store.state.projects.length;

      return {
        currentIndex,
        _length,
        prev: this.$store.state.projects[
          currentIndex - 1 < 0 ? _length - 1 : currentIndex - 1
        ],
        next: this.$store.state.projects[
          currentIndex + 1 > _length - 1 ? 0 : currentIndex + 1
        ]
      };
    }
    // pad() {
    //   return (
    //     (100 * this.pageContent.post_image.dimensions.height) /
    //       this.pageContent.post_image.dimensions.width +
    //     "%"
    //   );
    // }
  }
};
</script>

<style lang="sass" scoped>
</style>