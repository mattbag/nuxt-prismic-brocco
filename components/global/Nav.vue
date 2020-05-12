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
      <nav class="menudrop__nav">
        <ul>
          <li>
            <button
              @click="clickNav('/','#home')"
              class="js-menu-off font-bold font-sans text-stroke-w hover:text-white text-r6 uppercase focus:outline-none"
            >home</button>
          </li>
          <li>
            <button
              @click="clickNav('/','#work')"
              class="js-menu-off font-bold font-sans text-stroke-w hover:text-white text-r6 uppercase focus:outline-none"
            >work</button>
          </li>
          <li>
            <button
              @click="clickNav('','#contact')"
              class="js-menu-off font-sans text-stroke-w hover:text-white text-r6 uppercase focus:outline-none"
            >contact</button>
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
  },
  methods: {
    scroller(offset) {
      window.scroll({
        top: offset,
        left: 0,
        behavior: "smooth"
      });
    },
    clickNav(route, hash) {
      let $item = document.querySelector(hash);
      if ($item) {
        setTimeout(_ => {
          this.scroller($item.offsetTop);
        }, 500);
      } else {
        if (route) {
          this.$router.push(route, function() {
            setTimeout(() => {
              // console.log("====");
              // console.log("oncomplete", document.querySelector(hash));
              // console.log("====");
              let $item = document.querySelector(hash);
              // this.scroller($item.offsetTop);
              window.scroll({
                top: $item.offsetTop,
                left: 0,
                behavior: "smooth"
              });
            }, 1000);
          });
        }
      }
    }
  }
};
</script>

<style>
</style>