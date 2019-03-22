<template>
  <div>
    <p v-if="hasError">Something went wrong</p>

    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    hasError: false
  }),

  errorCaptured() {
    this.hasError = true;
  }
};
</script>
