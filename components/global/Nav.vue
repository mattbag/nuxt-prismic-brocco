<template>
  <div>
    <nav>
      <ul class="p-4 flex justify-between p-1 fixed w-full top-0 left-0 z-10 text-md">
        <li>
          <nuxt-link
            to="/"
            class="text-lg"
          >
            <i>
              <strong>
                louis
              </strong>
              thomas
            </i>
          </nuxt-link>
        </li>
        <li> <button
            id="hamburger"
            class="bg-white p-1 off js-slide-close"
          >menu</button></li>
      </ul>
    </nav>
    <div class="menudrop bg-pink">
      <nav class="menudrop__nav uppercase">
        <ul>
          <li>
            <nuxt-link
              class="js-menu-off text-stroke hover:text-black"
              to="/"
            >Home</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/#work"
              class="js-menu-off text-stroke hover:text-black"
            >Work</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/#contact"
              class="js-menu-off text-stroke hover:text-black"
            >Contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.initNav();
  }
};
</script>

<style>
</style>