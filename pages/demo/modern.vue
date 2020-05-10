<template>
  <div class="flex flex-wrap height">
    <div
      class="w-full lg:w-1/4 p-4 flex flex-col justify-center"
      :class="colorClass"
    >
      <div
        class="heading relative z-10 lg:ml-20 my-8"
        :class="{'text-dark':colorClass=='bg-pink','text-white':colorClass=='bg-dark'}"
      >
        <h1 class="text-6xl font-serif pb-8 leading-none text-dark">
          <span class="hl bg-white px-4 py-2 pb-4 rounded-md">
            <span class="opacity-75">
              Modern <br> apartments
            </span>
          </span>
        </h1>
        <p class="leading-none my-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, facere!</p>
        <div class="mt-16">
          <a
            class="btn shadow-lg hover:text-white rounded-md px-6 py-4"
            target="_blank"
            href="https://dribbble.com/shots/10702370-Modern-apartments-n-2/attachments/2386590?mode=media"
          >See more</a>
          <br>
          <button
            class="btn rounded-full my-10 px-4 py-3 leading-none text-lg"
            @mouseenter="colorClass = colorClass == 'bg-dark'?'bg-pink':'bg-dark'"
          >+</button>
        </div>
      </div>
    </div>
    <div
      class="w-full lg:w-1/4 relative window"
      v-for="p in posts"
      :key="p.id"
    >
      <div class="lg:absolute top-0 bottom-0 window__view">
        <prismic-image
          class="h-full max-w-none w-auto opacity-75 lg:opacity-50 hover:opacity-100"
          :field="p.data.post_image"
        ></prismic-image>
      </div>
      <nuxt-link
        exact
        :to="'/blog/'+p.uid"
      >
        <div class="caption absolute bottom-0 p-8">
          <hr class="absolute left-0 z-10">
          <span class="opacity-75 text-xs">
            {{p.data.date.split("-").reverse().join("-")}}
          </span>
          <h2 class="text-3xl font-serif capitalize">
            {{p.data.title[0].text}}
          </h2>
        </div>
      </nuxt-link>
    </div>

    <!-- <pre class="w-full">{{posts}}</pre> -->
  </div>
</template>

<script>
export default {
  // layout: "empty",
  head() {
    return {
      title: "Mordern demo dribbble"
    };
  },
  data() {
    return {
      colorClass: "bg-pink"
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
        posts: blogPosts.results.slice(0, 3),
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
.heading
  h1
    min-width: 380px
    z-index: 1
.height
  height: calc(100vh - 4.8vw)
  height: 800px
.btn
  box-shadow: -4px -10px 15px -3px rgba(255,255,255, 0.1), -2px -4px 6px -2px rgba(255,255,255, 0.05), 2px 10px 15px -3px rgba(0,0,0, 0.1), 4px 4px 6px -2px rgba(0,0,0, 0.05)
hr
  transform: rotate(90deg)
  width: 60px
  left: 3px
  top: -1rem
  border-color: #fff
.hl
  box-decoration-break: clone
.window__view
  transition: transform 2000ms ease
.window
  overflow: hidden
  &:hover
    .window__view
      transform: translateX(-60%)
</style>