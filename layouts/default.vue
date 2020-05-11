<template>
  <div>

    <Nav />
    <!-- <pre class="text-white">
      {{$store.state.nav}}
    </pre> -->
    <nuxt keep-alive />
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
  }
  // https://github.com/prismicio/nuxtjs-website/blob/master/layouts/homepage.vue
  //  Called before rendering the layout (even for error page)
  // async middleware({ store, $prismic }) {
  //   await store.dispatch("getNav", $prismic);
  // }
};
</script>