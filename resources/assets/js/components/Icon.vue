<template>

</template>

<script>

export default {
  name: 'svg-icon',

  props: {
    name: {
      type: String,
      required: true
    }
  },

  data: () => ({
    spin: false
  }),

  created () {
    if (this.name.startsWith('spinner')) {
      this.spin = true
    }
  }
}
</script>

<style scoped>
.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}

.icon-spin {
  animation: icon-spin 2s infinite linear;
}

.btn .icon {
  margin-right: 5px;
  margin-left: -3px;
  vertical-align: middle;
}

@keyframes icon-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}
</style>
