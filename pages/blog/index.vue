<template>
  <main class="bubble blog-vue">
    <div>
      <!-- Template for page title -->
      <div class="text-center my-8">
        <h1 class="blog-title text-6xl uppercase">
          <carat>
            {{ $prismic.asText(pageContent.headline) }}
          </carat>
        </h1>
        <!-- Template for page description -->
        <p class="blog-description">{{ $prismic.asText(pageContent.description) }}</p>
      </div>
      <!-- Check blog posts exist -->
      <div
        v-if="posts.length !== 0"
        class="blog-main"
      >
        <!-- Template for blog posts -->
        <section class="max-w-sm mx-auto py-10">
          <!-- Here :post="post" passes the data to the component -->
          <blog-widget
            v-for="(post,i) in posts"
            :key="post.id"
            :post="post"
            :index="i"
          ></blog-widget>
        </section>

      </div>
      <!-- If no blog posts return message -->
      <div
        v-else
        class="blog-main"
      >
        <p>No Posts published at this time.</p>
      </div>
    </div>
  </main>
</template>

<script>
// Importing blog posts widget
import BlogWidget from "~/components/BlogWidget.vue";

export default {
  name: "Blog",
  components: {
    BlogWidget
  },
  head() {
    return {
      title: "Blog"
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      const pageContent = (await $prismic.api.getSingle("blog_home")).data;

      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "post"),
        { orderings: "[my.post.date desc]" }
      );

      // Returns data to be used in template
      return {
        pageContent,
        posts: blogPosts.results,
        image: pageContent.image.url
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