<template>
  <main class="bubble home">

    <div class="hero js loading">
      <div
        class="content"
        id="projects_content"
      >
        <!-- {% for prj in collections.projects %} -->
        <article
          class="content__item"
          v-for="(post) in posts"
          :key="'full_'+post.id"
        >
          <div class="img-wrap img-wrap--content">
            <div
              class="img img--content"
              :style="'background-image: url('+ post.data.project_image.url +');'"
            ></div>
          </div>
          <header class="content__item-header">
            <span class="content__item-header-meta">{{$prismic.asText(post.data.project_name)}}</span>
            <h2 class="content__item-header-title">
              <!-- {{ post.data.project_short }} -->
              [short]
            </h2>
          </header>
          <div class="content__item-copy">
            <p class="content__item-copy-text">
              <!-- {{ post.data.project_copy }} -->
              [copy]
            </p>
            <nuxt-link
              :to="'/projects/' + post.uid"
              class="content__item-copy-more"
            >more +</nuxt-link>
          </div>
        </article>

      </div>
      <!-- end content -->

      <div class="revealer">
        <div class="revealer__inner"></div>
      </div>

      <!--  -->
      <div
        class="grid grid--slideshow"
        id="projects"
      >
        <figure
          class="grid__item grid__item--slide"
          v-for="(post,i) in posts"
          :key="'item_'+post.id"
        >
          <span class="number">0{{ i+1 }}</span>
          <div class="img-wrap">
            <div
              class="img"
              :style="'background-image: url('+ post.data.project_image.url +');'"
            ></div>
          </div>
          <figcaption class="caption">{{$prismic.asText(post.data.project_name)}}</figcaption>
        </figure>

        <!--  -->
        <div class="titles-wrap">
          <div class="grid grid--titles">
            <!-- {% for prj in collections.projects %} -->
            <h3
              class="grid__item grid__item--title"
              v-for="(post) in posts"
              :key="'title_'+post.id"
            >
              {{$prismic.asText(post.data.project_name)}}
            </h3>
            <!-- {% endfor %} -->
          </div>
        </div>

        <div class="grid grid--interaction">
          <div class="grid__item grid__item--cursor grid__item--left"></div>
          <div class="grid__item grid__item--cursor grid__item--center"></div>
          <div class="grid__item grid__item--cursor grid__item--right"></div>
        </div>

      </div>
    </div>
    <!--  -->
    <div class="hero__screen"></div>
    <!--  -->
    <div class="body wrap bg-black">
      <section
        class="py-20 px-8 relative max-w-xl mx-auto"
        v-if="posts.length"
      >
        <span
          class="text-vertical absolute left-0 text-xl"
          :class="{'text-3xl -ml-4':posts.length>2}"
        >{{"posts_heading"}}</span>
        <!-- Here :post="post" passes the data to the component -->
        <div class="max-w-sm mx-auto">
          <div
            v-for="(post,i) in posts"
            :key="post.id"
          >
            <span>{{i++}}</span>
            <span>{{$prismic.asText(post.data.project_name)}}</span>
            <div
              class="img img--content"
              :style="'background-image: url('+ post.data.project_image.url +');'"
            ></div>
            <!-- <pre>{{post}}</pre> -->
          </div>
        </div>
        <p class="text-right">
          <nuxt-link to="/blog">
            <carat>
              More
            </carat>
          </nuxt-link>
        </p>
      </section>
    </div>

    <slices-block :slices="body" />
  </main>
</template>

<script>
//Importing all the slices components
import SlicesBlock from "~/components/SlicesBlock.vue";
import BlogWidget from "~/components/BlogWidget.vue";
// import { initLayout } from "./../animation/animation";
export default {
  name: "Home",
  layout: "animated",
  components: {
    SlicesBlock,
    BlogWidget
  },
  mounted() {
    // window.initLayout();
    setTimeout(window.initLayout, 1000);
  },
  head() {
    return {
      title: this.$prismic.asText(this.homepageContent.seo_title),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$prismic.asText(this.homepageContent.seo_description)
        }
      ]
    };
  },
  async asyncData({ $prismic, error }) {
    // console.log("====");
    // console.log("asyncData");
    // console.log("====");

    try {
      // Query to get homepage content
      const homepageContent = (await $prismic.api.getSingle("homepage")).data;
      // articles_to_link
      // let postsFeatured = await homepageContent.main_body.find(
      //   item => item.slice_type == "list_of_articles"
      // );
      // console.log("====");
      // console.log($prismic.asText(postsFeatured.primary.title_of_section));
      // console.log("====");

      let posts = [];

      // Query to get posts content to preview
      const blogPosts = await $prismic.api.query(
        $prismic.predicates.at("document.type", "project"),
        {
          orderings: "[my.post.date desc]"
        }
      );

      // Returns data to be used in template
      return {
        homepageContent,
        body: homepageContent.body,
        // featured: homepageContent.body1,
        // posts_heading: $prismic.asText(postsFeatured.primary.title_of_section),
        posts: blogPosts.results
      };
    } catch (e) {
      console.log("====");
      console.log(e);
      console.log("====");

      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  computed: {}
};
</script>

<style lang="sass">
.text-vertical
  writing-mode: vertical-lr
  text-orientation: upright
.title
  background-color: rgba(0,0,0,0.6)
  position: absolute
  top: auto
  bottom: -4%
  width: 120%
  left: -18%
  transform: rotate(-2deg)
  h1
    transform: rotate(2deg)
</style>