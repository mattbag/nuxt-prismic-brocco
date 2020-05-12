<template>
  <div>
    <nav>
      <ul class="p-4 flex justify-between p-1 fixed w-full top-0 left-0 z-10 text-md">
        <li>
          <nuxt-link
            to="/"
            class="text-xl bg-white p-1"
          >
            <i>
              <strong>
                louis
              </strong>
              thomas
            </i>
          </nuxt-link>
        </li>
        <li>
          <button
            id="hamburger"
            class="bg-white p-1 off js-slide-close"
          >
            <Burger />
            <!-- menu -->
          </button>
        </li>
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
            <a
              href="#contact"
              class="js-menu-off text-stroke hover:text-black"
            >Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Burger from "./Burger";
export default {
  components: { Burger },
  mounted() {
    window.initNav();
  }
};
</script>

<style>
</style>