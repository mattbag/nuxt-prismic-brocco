<template>
  <div>
    <nav>
      <ul class="p-4 flex justify-between p-1 fixed w-full top-0 left-0 z-10 text-md">
        <li>
          <nuxt-link
            to="/"
            class="text-xl text-pink bg-whiteOFF p-1"
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
            class="bg-white-tOFF text-pink p-1 off js-slide-close focus:outline-none"
          >
            <Burger />
            <!-- menu -->
          </button>
        </li>
      </ul>
    </nav>
    <div class="menudrop bg-black">
      <nav class="menudrop__nav uppercase">
        <ul>
          <li>
            <a
              class="js-menu-offo text-stroke-w hover:text-white text-r6"
              href="/#home"
            >
              <strong>home</strong></a>
          </li>
          <li>
            <a
              href="/#work"
              class="js-menu-off text-stroke-w hover:text-white text-r6"
            ><strong>Work</strong></a>
          </li>
          <li>
            <a
              href="/#contact"
              class="js-menu-off text-stroke-w hover:text-white text-r6"
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