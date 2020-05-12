<template>

  <footer>
    <div
      class="min-h-screen flex items-center"
      id="contact"
    >
      <div class="max-w-6xl mx-auto w-full">
        <div class="flex px-12 items-center flex-wrap">
          <div class="md:w-1/2 md:pr-24">
            <h2 class="text-6xl md:text-r5 leading-tight">
              <span class="text-stroke">
                PLEASE <br> SAY
              </span>
              <br>
              <span>
                <strong>
                  HI.
                </strong>
              </span>
            </h2>
          </div>
          <div class="md:w-1/2 py-8">
            <p class="subheading">get in touch</p>
            <ul>
              <li>
                <a
                  class="text-2xl"
                  href="mailto:lou@russel.com"
                  target="_blank"
                >lou@russel.com</a>
              </li>
              <li>
                <a
                  class="text-2xl"
                  href="facebook.com"
                  target="_blank"
                >facebook</a>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">

      <a
        href="https://mattbag.github.io"
        target="_blank"
        rel="noopener"
      >
        [made by Matt]
      </a>
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
  padding: 40px 0
  max-width: 700px
  margin: 0 auto
  text-align: center
  border-top: 1px solid #DADADA

.logo
  width: 100px
</style>