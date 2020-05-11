<template>
  <div>
    <nav class="px-8">
      <ul class="flex justify-end p-1 fixed w-full top-0 left-0 z-10 text-md uppercase">
        <li>
          <carat>
            <nuxt-link
              exact
              to="/"
              class="p-1"
            >Home</nuxt-link>
          </carat>
        </li>

        <li
          class="relative"
          v-for="l in $store.state.nav"
          :key="l.primary.link_text"
        >
          <carat>
            <nuxt-link
              v-if="l.primary.nav_link.link_type == 'Document'"
              :to="'/'+(l.primary.nav_link.uid || l.primary.nav_link.slug)"
              class="p-1"
            >{{l.primary.link_text}}</nuxt-link>
            <a
              v-else
              :href="l.primary.nav_link.url || '/#'"
            >{{l.primary.link_text}}</a>
          </carat>
          <!-- <div v-if="l.items.length">
          <ul>
            <li
              v-for="i in l.items"
              :key="i.second_level_link.uid"
            >
              <nuxt-link
                v-if="i.second_level_link.link_type != 'Web'"
                :to="'/'+i.second_level_link.type +'/'+i.second_level_link.uid"
                class="p-1"
              >
                {{i.second_level_link_text}}
              </nuxt-link>
            </li>
          </ul>
        </div> -->
        </li>
      </ul>
    </nav>
    <!-- <pre class="text-white">
      {{$store.state.nav}}
    </pre> -->
    <nuxt keep-alive />
    <footer-prismic />
  </div>

</template>

<script>
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
  components: {
    FooterPrismic
  }
  // https://github.com/prismicio/nuxtjs-website/blob/master/layouts/homepage.vue
  //  Called before rendering the layout (even for error page)
  // async middleware({ store, $prismic }) {
  //   await store.dispatch("getNav", $prismic);
  // }
};
</script>