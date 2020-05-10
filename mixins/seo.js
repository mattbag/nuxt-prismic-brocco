// https://vuejs.org/v2/guide/mixins.html
export default {
  head() {
    let src = this.pageContent || this.document;
    return {
      title:
        this.$prismic.asText(src.seo_title) ||
        this.$prismic.asText(src.title) ||
        this.$prismic.asText(src.heading),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$prismic.asText(src.seo_description)
        }
      ]
    };
  }
};
