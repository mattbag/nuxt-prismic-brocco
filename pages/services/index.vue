<template>
  <main class="bubble services-vue">
    <div>
      <!-- Template for page title -->
      <div class="text-center my-8">
        <h1 class="blog-title text-2xl uppercase">
          {{ $prismic.asText(pageContent.headline) }}
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
          <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              class="text-4xl text-center my-6"
            >
              <nuxt-link :to="'/services/'+post.uid">
                <carat>
                  {{$prismic.asText(post.data.heading)}}
                </carat>
              </nuxt-link>
            </li>
          </ul>
          <!-- <pre>{{posts}}</pre> -->
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
// import BlogWidget from "~/components/BlogWidget.vue";

export default {
  components: {
    // BlogWidget
  },
  head() {
    return {
      title: "Services by Atlas Agency"
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      const pageContent = (await $prismic.api.getSingle("services_list")).data;

      // Query to get posts content to preview
      const servs = await $prismic.api.query(
        $prismic.predicates.at("document.type", "service")
        // { orderings: "[my.post.date desc]" }
      );

      // Returns data to be used in template
      return {
        pageContent,
        posts: servs.results
        // image: pageContent.image.url
      };
    } catch (e) {
      console.log("====");
      console.log(e);
      console.log("====");

      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
