export const state = () => ({
  nav: {},
  projects: null
});

export const mutations = {
  SET_NAV(state, nav) {
    state.nav = nav;
  },
  SET_PROJECTS(state, projects) {
    // console.log("====");
    // console.log(projects);
    // console.log("====");

    state.projects = projects;
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
  },
  async getProjects({ commit }, $prismic) {
    try {
      // Query to get projects
      // careful with this name, not sure how to change
      const projects = await $prismic.api.query(
        $prismic.predicates.at("document.type", "project"),
        {
          orderings: "[my.post.date desc]"
        }
      );

      commit("SET_PROJECTS", projects.results);
    } catch (e) {
      console.log("====");
      console.log(e);
      console.log("====");

      // Returns error page
      //   error({ statusCode: 404, message: "Page not found" });
    }
  }
};
