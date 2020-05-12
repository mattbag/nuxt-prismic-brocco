<template>
  <footer
    class="relative z-1"
    id="contact"
  >
    <div class="min-h-screen flex items-center">
      <div class="max-w-6xl mx-auto w-full">
        <div class="flex px-12 items-center flex-wrap">
          <div class="md:w-1/2 md:pr-24">
            <h2 class="text-6xl md:text-r6 md:text-r leading-tight">
              <span class="text-stroke">
                PLEASE <br> SAY
              </span>
              <br>
              <strong>
                HI.
              </strong>
            </h2>
          </div>
          <div class="md:w-1/2 py-8">
            <p class="subheading">
              <strong>
                get in touch
              </strong>

            </p>
            <ul>
              <li>
                <a
                  class="text-lg"
                  href="mailto:louis-thomas@hotmail.co.uk"
                  target="_blank"
                >louis-thomas@hotmail.co.uk</a>
              </li>
              <li>
                <a
                  class="text-lg"
                  href="https://facebook.com"
                  target="_blank"
                >linkedin</a>
              </li>
              <li>
                <a
                  class="text-lg"
                  href="https://facebook.com"
                  target="_blank"
                >twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer py-6">
      <span>
        [&nbsp;&nbsp;&nbsp;
        <a
          href="https://mattbag.github.io"
          target="_blank"
          rel="noopener"
          style="font-family: monospace, sans-serif"
        >dev by Matt
        </a>
        &nbsp;]
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPrismic"
};
</script>

<style lang="sass" scoped>
.footer
  max-width: 700px
  margin: 0 auto
  text-align: center
  border-top: 1px solid #DADADA

.logo
  width: 100px
</style>