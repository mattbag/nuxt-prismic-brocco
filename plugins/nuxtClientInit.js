export default async ({ app, store }) => {
  // console.log('====')
  // console.log('stg: ', process.env.isStaging)
  // // console.log('draft: ', store.state.version)
  // // console.log('isDraft: ', store.getters.isDraft)
  // // console.log('cv: ', store.state.cacheVersion)
  // console.log('====')

  if (store.getters.isDraft && !store.state.cacheVersion) {
    console.log("= nuxtClientInit");
    // await store.dispatch('nuxtServerInit', store.getters.versionLang)
    // await store.dispatch('loadPosts', store.getters.versionLang)
  }
};
