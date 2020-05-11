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
            class="bg-white p-1 off"
          >menu</button></li>
      </ul>
    </nav>
    <div class="menudrop bg-pink">
      <nav class="menudrop__nav uppercase">
        <ul>
          <li>
            <nuxt-link
              class="js-menu-off text-stroke"
              to="/"
            >Home</nuxt-link>
          </li>
          <li><a
              href="#work"
              class="js-menu-off text-stroke"
            >Work</a></li>
          <li><a
              href="#contact"
              class="js-menu-off text-stroke"
            >Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("====");
    window.initNav();
  }
};
</script>

<style>
</style>