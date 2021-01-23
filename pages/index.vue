<template>
  <main class="bubble home" id="home">
    <div class="min-h-screen flex items-center py-8 relative z-1">
      <div class="max-w-6xl mx-auto w-full">
        <div class="flex px-12 items-center flex-wrap">
          <div class="md:w-1/2 md:order-2">
            <h1 class="text-6xl lg:text-r6 leading-tight">
              <span class="text-stroke"> UX / UI DESIGNER </span>
              <br />
              <span>
                &amp; CREATIVE
                <strong> THINKER. </strong>
              </span>
            </h1>
          </div>

          <div class="md:w-1/2 md:pr-24 md:order-1">
            <h2 class="subheading">
              <strong> WELCOME </strong>
            </h2>
            <p class="text-lg leading-normal">
              Hi pleased to meet you, my name is Louis Thomas, I am a Sydney
              based product designer born in Manchester, England.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="overflow-hidden hero js loading" id="work">
      <div class="content" id="projects_content">
        <!-- {% for prj in collections.projects %} -->
        <article
          class="content__item"
          v-for="post in work_featured"
          :key="'full_' + post.id"
        >
          <div class="img-wrap img-wrap--content">
            <div
              class="img img--content"
              :style="
                'background-image: url(' + post.data.project_image.url + ');'
              "
            ></div>
          </div>
          <header class="content__item-header">
            <span class="content__item-header-meta">{{
              $prismic.asText(post.data.project_name)
            }}</span>
            <h2 class="content__item-header-title">
              {{ $prismic.asText(post.data.project_short) }}
            </h2>
          </header>
          <div class="content__item-copy">
            <p class="content__item-copy-text">
              {{ $prismic.asText(post.data.project_copy) }}
            </p>
            <nuxt-link
              :to="'/projects/' + post.uid"
              class="content__item-copy-more js-slide-close underline"
              >Explore project</nuxt-link
            >
          </div>
        </article>
      </div>
      <!-- end content -->

      <div class="revealer">
        <div class="revealer__inner"></div>
      </div>

      <!--  -->
      <div class="grid grid--slideshow" id="projects">
        <figure
          class="grid__item grid__item--slide"
          v-for="(post, i) in work_featured"
          :key="'item_' + post.id"
        >
          <span class="number text-stroke">0{{ i + 1 }}</span>
          <div class="img-wrap">
            <div
              class="img"
              :style="
                'background-image: url(' + post.data.project_image.url + ');'
              "
            ></div>
          </div>
          <figcaption class="caption">
            {{ $prismic.asText(post.data.project_name) }}
          </figcaption>
        </figure>

        <!--  -->
        <div class="titles-wrap">
          <div class="grid grid--titles">
            <!-- {% for prj in collections.projects %} -->
            <h3
              class="grid__item grid__item--title"
              v-for="post in work_featured"
              :key="'title_' + post.id"
            >
              <!-- {{$prismic.asText(post.data.project_name)}} -->
              {{ $prismic.asText(post.data.project_short) }}
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

    <!-- <slices-block :slices="body" /> -->

    <div class="max-w-6xl mx-auto relative mb-4">
      <section class="flex flex-wrap">
        <div
          class="md:w-1/2 px-2 mb-4"
          v-for="post in work_list"
          :key="'card_' + post.id"
        >
          <nuxt-link :to="'/projects/' + post.uid">
            <img
              :src="post.data.project_image.url"
              loading="lazy"
              :alt="$prismic.asText(post.data.project_name)"
            />
            <h2 class="text-black text-xl text-right px-4">
              {{ $prismic.asText(post.data.project_name) }}
            </h2>
          </nuxt-link>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
//Importing all the slices components
// import SlicesBlock from "~/components/SlicesBlock.vue";
// import BlogWidget from "~/components/BlogWidget.vue";
// import { initLayout } from "./../animation/animation";
export default {
  name: "Home",
  // layout: "home_only",
  components: {
    // SlicesBlock,
    // BlogWidget
  },
  mounted() {
    setTimeout(window.animationSetup, 500);
    // if (!window.atlas_setup) {
    //   // console.log("====");
    //   // console.log(window.atlas_setup);
    //   // console.log("====");
    //   setTimeout(window.animationSetup, 500);

    //   window.atlas_setup = true;
    // } else {
    //   window.initLayout();
    // }
  },
  head() {
    return {
      title: this.$prismic.asText(this.homepageContent.seo_title),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$prismic.asText(this.homepageContent.seo_description),
        },
      ],
      script: [
        {
          hid: "anim1",
          src: "/animation/charming.min.js",
          defer: true,
          async: true,
        },
        // {
        //   hid: "anim4",
        //   defer: true,,
        // async:true
        //   src: "/animation/TweenMax.min.js"
        // },
        {
          hid: "anim3",
          src: "/animation/imagesloaded.pkgd.min.js",
          defer: true,
          async: true,
        },
        {
          hid: "anim2",
          src: "/animation/animation.js",
          defer: true,
          async: true,
        },
      ],
    };
  },
  async asyncData({ $prismic, error, store }) {
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

      let projects = [];
      if (!store.state.projects) {
        // Query to get posts content to preview
        // projects = await $prismic.api.query(
        //   $prismic.predicates.at("document.type", "project"),
        //   {
        //     orderings: "[my.post.date desc]"
        //   }
        // );
        // projects = projects.results;
        await store.dispatch("getProjects", $prismic);
        // } else {
        //   projects = store.state.projects;
      }
      // Returns data to be used in template
      return {
        homepageContent,
        body: homepageContent.body,
        // featured: homepageContent.body1,
        // posts_heading: $prismic.asText(postsFeatured.primary.title_of_section),
        // posts: store.state.projects
      };
    } catch (e) {
      console.log("====");
      console.log(e);
      console.log("====");

      // Returns error page
      error({ statusCode: 404, message: "Page not found" });
    }
  },
  computed: {
    posts() {
      return this.$store.state.projects;
    },
    work_featured() {
      // console.log(this.$store.state.projects);
      // make always 4 at least
      return this.$store.state.projects.filter(
        (pr) => pr.data.toggle_project_featured
      );
    },
    work_list() {
      return this.$store.state.projects.filter(
        (pr) => !pr.data.toggle_project_featured
      );
    },
  },
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
