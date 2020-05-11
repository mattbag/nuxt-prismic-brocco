<template>
  <main class="bubble home">

    <header class="relative wrap rounded-xl overflow-hidden">
      <ImageR
        class="w-full"
        :imageObj="homepageContent.hero_image"
      ></ImageR>
      <div class="title px-12">
        <!-- <hr class="border-pink border w-20 mr-0 ml-auto"> -->
        <!-- Template for page title -->
        <h1 class="blog-title text-4xl mt-4 mb-12 uppercase text-right">
          {{ $prismic.asText(homepageContent.heading_main) }}
        </h1>
      </div>
    </header>

    <div class="wrap">
      <slices-block :slices="body" />

      <section
        class="py-20 px-8 relative max-w-xl mx-auto"
        v-if="posts.length"
      >
        <span
          class="text-vertical absolute left-0 text-xl"
          :class="{'text-3xl -ml-4':posts.length>2}"
        >{{posts_heading}}</span>
        <!-- Here :post="post" passes the data to the component -->
        <div class="max-w-sm mx-auto">
          <blog-widget
            v-for="post in posts"
            :key="post.id"
            :post="post"
          ></blog-widget>
        </div>
        <p class="text-right">
          <nuxt-link to="/blog">
            <carat>
              More
            </carat>
          </nuxt-link>
        </p>
      </section>
    </div>
  </main>
</template>

<script>
//Importing all the slices components
import SlicesBlock from "~/components/SlicesBlock.vue";
import BlogWidget from "~/components/BlogWidget.vue";

export default {
  name: "Home",
  components: {
    SlicesBlock,
    BlogWidget
  },
  head() {
    return {
      title: this.$prismic.asText(this.homepageContent.seo_title),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$prismic.asText(this.homepageContent.seo_description)
        }
      ]
    };
  },
  async asyncData({ $prismic, error }) {
    // console.log("====");
    // console.log("asyncData");
    // console.log("====");

    try {
      // Query to get homepage content
      const homepageContent = (await $prismic.api.getSingle("homepage")).data;
      // articles_to_link
      let postsFeatured = await homepageContent.main_body.find(
        item => item.slice_type == "list_of_articles"
      );
      // console.log("====");
      // console.log($prismic.asText(postsFeatured.primary.title_of_section));
      // console.log("====");

      let posts = [];
      // if (postsFeatured) {
      //   // Query to get posts content to preview
      //   const blogPosts = await $prismic.api.query(
      //     $prismic.predicates.at("document.type", "post"),
      //     {
      //       orderings: "[my.post.date desc]"
      //     }
      //   );
      //   posts = await blogPosts.results.filter(p => {
      //     // console.log("====");
      //     // console.log(p);
      //     // console.log("====");
      //     return postsFeatured.items.find(po => {
      //       // console.log("====");
      //       // console.log(po.articles_to_link.uid);
      //       // console.log("====");
      //       return po.articles_to_link.uid === p.uid;
      //     });
      //   });
      // }
      // Returns data to be used in template
      return {
        homepageContent,
        body: homepageContent.body
        // featured: homepageContent.body1,
        // posts_heading: $prismic.asText(postsFeatured.primary.title_of_section),
        // posts
      };
    } catch (e) {
      console.log("====");
      console.log(e);
      console.log("====");

      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  computed: {}
};
</script>

<style lang="sass">
.text-vertical
  writing-mode: vertical-lr
  text-orientation: upright
.title
  background-color: rgba(0,0,0,0.6)
  position: absolute
  top: auto
  bottom: -4%
  width: 120%
  left: -18%
  transform: rotate(-2deg)
  h1
    transform: rotate(2deg)
</style>