<template>
    <div class="vsd-markdown">
        <section class="page-section">
            <div class="container">
                <VueShowdown
                :markdown='markdown'
                flavor="github"
                :options="{ emoji: true }"/> 
            </div>
        </section>
    </div>
</template>

<script>
import { VueShowdown } from 'vue-showdown'

export default {
    name: 'vsd-markdown',
    props: {
        markdown: {
            type: String
        }
    },
    components: {
        VueShowdown
    }
}
</script>
