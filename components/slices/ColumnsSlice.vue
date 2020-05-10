<template>
  <div class='ColumnsSlice wrap row justify-centerOFF mt-8'>
    <!-- <prismic-rich-text
      class="textslice"
      :field="slice.primary.text"
    /> -->
    <div
      v-for="(s,i) in slice.items"
      :key="i + '_column'"
      class="w-full px-4 mb-8"
      :class="columnWidthClass(s.col_width)"
    >
      <!-- {{s.col_width}} -->
      <div
        v-for="(val,key) in s"
        :key="key"
      >

        <template v-if="key == 'column_image'">
          <div class="text-center">
            <prismic-image
              :field="val"
              class="column_image"
            />
          </div>

        </template>
        <template v-if="key == 'column_text'">
          <!-- {{val}} -->
          <prismic-rich-text
            class="column_text"
            :field="val"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slice"],
  name: "columns-slice",
  methods: {
    columnWidthClass(value) {
      switch (value) {
        case "4":
          return "md:w-1/3";
          break;
        case "6":
          return "md:w-1/2";
          break;
        case "8":
          return "md:w-2/3";
          break;

        default:
          return "";
          break;
      }
    }
  }
};
</script>

<style lang="sass">
.textslice
  a
    text-decoration: underline
</style>