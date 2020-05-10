<template>
  <div class="relative bg-white text-dark min-h-screen p-4">
    <img
      class="absolute top-0 w-full"
      src="/img/bg1.png"
      alt=""
    >
    <div class="max-w-3xl mx-auto relative py-20">
      <div class="row items-center">

        <div class="col md:w-1/2">
          <h1 class="text-5xl mb-10">Quick and Easy</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil quaerat, ipsam distinctio deleniti unde nulla quisquam labore neque ullam dicta!
          </p>
          <div class="my-8 flex">
            <a
              href="#"
              class="px-6 py-2 shadow-lg rounded-sm bg-pink hover:text-white mr-4"
            >Click here</a>
            <a
              href="#"
              class="px-6 py-2 shadow-lg rounded-sm"
            >Click here</a>
          </div>
        </div>
        <div class="col md:w-1/2">
          <img
            src="/img/vid.png"
            alt=""
          >
        </div>
      </div>
    </div>
    <div class="my-10 text-center max-w-sm mx-auto">
      <h2 class="text-2xl mb-4">Heading</h2>
      <p class="leading-none">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem, doloribus.</p>
    </div>

    <div class="wrap relative py-20">
      <div class="row items-centerO">
        <div
          class="col md:w-1/3 mb-4"
          v-for="p in posts"
          :key="p.id"
        >
          <nuxt-link
            exact
            :to="'/blog/'+p.uid"
          >
            <ImageR
              class="opacity-75 lg:opacity-50 hover:opacity-100"
              :imageObj="p.data.post_image"
            ></ImageR>
            <h3 class="text-right">{{p.data.title[0].text}}</h3>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // layout: "empty",
  head() {
    return {
      title: "Quick demo dribbble"
    };
  },
  // data() {
  //   return {
  //     colorClass: "bg-pink"
  //   };
  // },
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
        // posts: blogPosts.results.slice(0, 3),
        image: pageContent.image.url
      };
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
