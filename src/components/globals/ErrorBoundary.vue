<script>
export default {
  name: "ErrorBoundary",

  data: () => ({
    error: null
  }),

  errorCaptured(error /* vm, info */) {
    this.error = {
      name: error.name,
      message: error.message,
      fileName: error.fileName,
      lineNumber: error.lineNumber,
      columnNumber: error.columnNumber,
      stack: error.stack
    };
  },

  render(create) {
    const { error } = this;
    let content;

    if (error) {
      content = this.$scopedSlots.error({ ...error });
    } else {
      content = this.$slots.default;
    }

    if (content.length) {
      return create("div", [content]);
    }
    return content;
  }
};
</script>
