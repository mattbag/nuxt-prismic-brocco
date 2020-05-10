<template functional>
  <span class="trigger">
    <span class="hover">> </span>
    <slot></slot>
    <span class="hover ">
      <span class="carat">
        _
      </span>
    </span>
  </span>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.hover
    opacity: 0

.carat
    opacity: 0
    animation: carat 500ms infinite

.trigger:hover
    .hover
        opacity: 1

@keyframes carat
    to
        opacity: 1
</style>