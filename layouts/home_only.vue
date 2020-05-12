<template>
  <div>
    <NavScroll />
    <nuxt />
    <footer-prismic />
  </div>

</template>

<script>
import NavScroll from "~/components/global/NavScroll.vue";
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
  components: {
    NavScroll,
    FooterPrismic
  },
  // https://github.com/prismicio/nuxtjs-website/blob/master/layouts/homepage.vue
  //  Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch("getProjects", $prismic);
  }
};
</script>