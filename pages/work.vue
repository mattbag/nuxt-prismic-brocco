<template>
  <div class="max-w-6xl mx-auto relative my-16">
    <section class="flex flex-wrap">
      <div
        class="md:w-1/2 px-4 mb-6"
        v-for="post in works"
        :key="'card_' + post.id"
      >
        <nuxt-link :to="'/projects/' + post.uid">
          <img
            height="400"
            width="600"
            :src="
              post.data.project_image.url +
                '?auto=compress&fit=crop&h=400&w=600'
            "
            loading="lazy"
            :alt="$prismic.asText(post.data.project_name)"
          />
          <div class="flex items-center my-1">
            <hr class="border-black w-8" />
            <h2 class="text-black text-xl px-4">
              {{ $prismic.asText(post.data.project_name) }}
            </h2>
          </div>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "work",
  async asyncData({ $prismic, error, store }) {},
  computed: {
    works() {
      return this.$store.state.projects;
    }
  }
};
</script>

<style></style>
