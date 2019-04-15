<template>
  <main class="container pt-5">
    <header>
      <h1>About VueSD</h1>
    </header>

    <VsdMarkdown :markdown="markdown" />
  </main>
</template>

<script>
import VsdMarkdown from "@/components/helpers/Markdown";
import markdown from "@/markdown/about.md";

export default {
  name: "about",

  components: {
    VsdMarkdown
  },

  data: () => ({
    markdown
  })
};
</script>
