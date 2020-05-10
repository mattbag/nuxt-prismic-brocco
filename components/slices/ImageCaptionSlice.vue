<template>
  <div class="ImageCaptionSlice">
    <template v-if="size === 'image-full-width'">
      <div
        v-if="img"
        class='blog-header single'
        :style="{ 'background-image': 'url(' + img.url + ')'}"
      >
        <template v-if="$prismic.asText(caption) != ''">
          <div class="wrapper">
            <h1>{{ $prismic.asText(caption) }}</h1>
          </div>
        </template>
      </div>
    </template>
    <template v-else>
      <div class='post-part single container'>
        <p
          class="block-img text-center"
          :class="size"
        >
          <prismic-image :field="img" />
        </p>
        <template v-if="$prismic.asText(caption) != ''">
          <span class="image-label opacity-75">{{ $prismic.asText(caption) }}</span>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "image-caption-slice",
  data: function() {
    return {
      img: "",
      caption: "",
      size: ""
    };
  },
  created() {
    // changed from demo, not using default names
    this.img = this.slice.primary.image_banner;
    this.caption = this.slice.primary.description;
    // this.img = this.slice.primary.image;
    // this.caption = this.slice.primary.caption;
    // this.size = this.slice.caption;
  }
};
</script>