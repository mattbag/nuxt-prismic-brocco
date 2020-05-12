<template>
  <div>
    <Nav />
    <nuxt />
    <footer-prismic />
  </div>

</template>

<script>
import Nav from "~/components/global/Nav.vue";
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
  components: {
    Nav,
    FooterPrismic
  },
  // https://github.com/prismicio/nuxtjs-website/blob/master/layouts/homepage.vue
  //  Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch("getProjects", $prismic);
  }
};
</script>