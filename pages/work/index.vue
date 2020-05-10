<template>
  <main class="bubble work-vue">
    <div>
      <!-- Template for page title -->
      <div class="text-center my-8">
        <h1 class="blog-title text-6xl uppercase">
          <carat>
            {{ $prismic.asText(pageContent.heading) }}
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
        <section class="wrap py-10 px-10">
          <!-- Here :post="post" passes the data to the component -->
          <ul class="row">
            <li
              class="w-full md:w-1/2 px-10 mb-10"
              v-for="(post,i) in posts"
              :key="post.id"
              :index="i"
            >
              <nuxt-link :to="'/work/'+post.uid">
                <prismic-image :field="post.data.featured_image"></prismic-image>
                <h2 class="my-2">
                  <carat>
                    {{$prismic.asText(post.data.heading)}}
                  </carat>
                </h2>
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
        <p>No work published at this time.</p>
      </div>
    </div>
  </main>
</template>

<script>
// Importing blog posts widget
// import BlogWidget from "~/components/BlogWidget.vue";
import seo from "@/mixins/seo";
export default {
  mixins: [seo],
  components: {
    // BlogWidget
  },
  // head() {
  //   return {
  //     title: "Work by Atlas Agency"
  //   };
  // },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      const pageContent = (await $prismic.api.getSingle("work_list")).data;

      // Query to get posts content to preview
      const works = await $prismic.api.query(
        $prismic.predicates.at("document.type", "work"),
        { orderings: "[my.post.date desc]" }
      );

      // Returns data to be used in template
      return {
        pageContent,
        posts: works.results
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
