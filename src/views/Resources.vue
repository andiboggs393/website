<template>
    <div class="resources">
        <VsdMarkdown :url="url" />
    </div>
</template>

<script>
import VsdMarkdown from '@/components/helpers/Markdown'

export default {
    name: 'resources',
    components: {
        VsdMarkdown
    },
    data: () => ({
        url: "https://raw.githubusercontent.com/VueSD/website/master/README.md"
    })
}
</script>
