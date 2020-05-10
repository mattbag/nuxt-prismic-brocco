export const store = () => ({
  nav: {}
});

export const mutations = {
  SET_NAV(state, nav) {
    state.nav = nav;
  }
};

export const actions = {
  //   async nuxtServerInit({ dispatch }, { req }) {
  //     console.log("====");
  //     console.log("nuxtServerInit");
  //     console.log("====");
  //   },
  async getNav({ commit }, $prismic) {
    try {
      // Query to get nav content
      // careful with this name, not sure how to change
      const nav = (await $prismic.api.getSingle("navbar")).data;

      if (nav) {
        // Query to get posts content to preview
        // console.log("====");
        // console.log(nav);
        // console.log("====");
        commit("SET_NAV", nav.body);
      }
      // Returns data to be used in template
    } catch (e) {
      console.log("====");
      console.log(e);
      console.log("====");

      // Returns error page
      //   error({ statusCode: 404, message: "Page not found" });
    }
  }
};
