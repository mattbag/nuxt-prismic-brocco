<template>
  <section class="home">
    <article>
      <nuxt-link to="/">
        <div
          class="blog-avatar"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        >
        </div>
      </nuxt-link>

      <header class="my-8">
        <!-- Template for page title -->
        <h1 class="blog-title text-lg">
          {{ $prismic.asText(homepageContent.headline) }}
        </h1>
        <!-- <pre>{{homepageContent}}</pre> -->
        <!-- Template for page description -->
        <p class="blog-description">{{ $prismic.asText(homepageContent.description) }}</p>
      </header>

      <div
        v-if="posts.length !== 0"
        class="blog-main my-4 max-w-sm mx-auto"
      >
        <!-- Template for blog posts -->
        <section
          v-for="post in posts"
          :key="post.id"
          v-bind:post="post"
        >
          <!-- Here :post="post" passes the data to the component -->
          <blog-widget :post="post"></blog-widget>
        </section>

        <div class="my-4 text-right">
          <nuxt-link to="/blog">All posts</nuxt-link>
        </div>
      </div>
      <!-- If no blog posts return message -->
      <div
        v-else
        class="blog-main"
      >
        <p>No Posts published at this time.</p>
      </div>
    </article>
  </section>
</template>

<script>
// Importing blog posts widget
import BlogWidget from "~/components/BlogWidget.vue";

export default {
  name: "Home",
  components: {
    BlogWidget
  },
  head() {
    return {
      title: "Prismic Nuxt.js Blog"
    };
  },
  async asyncData({ $prismic, error }) {
    // console.log("====");
    // console.log("asyncData");
    // console.log("====");

    try {
      // Query to get blog home content
      const homepageContent = (await $prismic.api.getSingle("blog_home")).data;

      // articles_to_link
      let postsFeatured = await homepageContent.body.find(
        item => item.slice_type == "list_of_articles"
      );
      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "post"),
        {
          orderings: "[my.post.date desc]"
        }
      );
      let posts = await blogPosts.results.filter(p => {
        // console.log("====");
        // console.log(p);
        // console.log("====");
        return postsFeatured.items.find(po => {
          // console.log("====");
          // console.log(po.articles_to_link.uid);
          // console.log("====");

          return po.articles_to_link.uid === p.uid;
        });
      });

      // Returns data to be used in template
      return {
        homepageContent,
        // posts: postsFeatured.items,
        posts,
        image: homepageContent.image.url
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>

<style lang="sass" scoped>
</style>