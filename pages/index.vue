<template>
  <main class="bubble home overflow-hidden">

    <div class="min-h-screen flex items-center py-8">
      <div class="max-w-6xl mx-auto w-full">
        <div class="flex px-12 items-center flex-wrap">
          <div class="md:w-1/2 md:pr-24">
            <h2 class="subheading">
              <strong>
                WELCOME
              </strong>
            </h2>

            <p class="text-lg leading-normal">Hi pleased to meet you, my name is
              Louis Thomas, I am a Sydney based
              product designer born in Manchester,
              England.</p>
          </div>
          <div class="md:w-1/2">
            <h1 class="text-6xl md:text-r5 leading-tight">
              <span class="text-stroke">
                UX / UI
                DESIGNER
              </span>
              <br>
              <span>
                &amp; CREATIVE
                <strong>
                  THINKER.
                </strong>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>

    <div
      class="hero js loadingOff"
      id="work"
    >
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
              {{$prismic.asText(post.data.project_short)}}
            </h2>
          </header>
          <div class="content__item-copy">
            <p class="content__item-copy-text">
              {{$prismic.asText(post.data.project_copy)}}
            </p>
            <nuxt-link
              :to="'/projects/' + post.uid"
              class="content__item-copy-more js-slide-close"
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
    <!-- <div class="hero__screen"></div> -->
    <!--  -->
    <div
      class="min-h-screen flex items-center"
      id="contact"
    >
      <div class="max-w-6xl mx-auto w-full">
        <div class="flex px-12 items-center flex-wrap">
          <div class="md:w-1/2 md:pr-24">
            <h2 class="text-6xl md:text-r5 leading-tight">
              <span class="text-stroke">
                PLEASE <br> SAY
              </span>
              <br>
              <span>
                <strong>
                  HI.
                </strong>
              </span>
            </h2>
          </div>
          <div class="md:w-1/2 py-8">
            <p class="subheading">get in touch</p>
            <ul>
              <li>
                [email]
              </li>
              <li>
                [social]
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- <slices-block :slices="body" /> -->

  </main>
</template>

<script>
//Importing all the slices components
import SlicesBlock from "~/components/SlicesBlock.vue";
// import BlogWidget from "~/components/BlogWidget.vue";
// import { initLayout } from "./../animation/animation";
export default {
  name: "Home",
  // layout: "animated",
  components: {
    // SlicesBlock,
    // BlogWidget
  },
  mounted() {
    // window.initLayout();
    if (!window.animation) {
      // console.log("====");
      // console.log(window.animation);
      // console.log("====");

      window.animation = true;
      setTimeout(window.animationSetup, 1000);
    }
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
      ],
      script: [
        {
          hid: "anim1",
          src: "/animation/charming.min.js",
          defer: true
        },
        // {
        //   hid: "anim4",
        //   defer: true,
        //   src: "/animation/TweenMax.min.js"
        // },
        {
          hid: "anim3",
          defer: true,
          src: "/animation/imagesloaded.pkgd.min.js"
        },
        {
          hid: "anim2",
          src: "/animation/animation.js",
          defer: true
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