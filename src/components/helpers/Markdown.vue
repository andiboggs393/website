<template>
    <div class="vsd-markdown">
        <section class="page-section">
            <div class="container" v-html="markdown">
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'vsd-markdown',
    props: {
        markdown: {
            type: String
        }
    }
}
</script>
