<template>
  <div class="resources container">
    <VsdMarkdown :markdown="markdown" />
  </div>
</template>

<script>
import VsdMarkdown from "@/components/helpers/Markdown";
import markdown from "../markdown/resources.md";

export default {
  name: "resources",
  components: {
    VsdMarkdown
  },
  data: () => ({
    markdown
  })
};
</script>
