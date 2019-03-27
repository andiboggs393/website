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
        url: {
            type: String
        }
    },
    components: {
        VueShowdown
    },
    data: () => ({
        markdown: ''
    }),
    async mounted () {
        this.markdown = await fetch(this.url).then(res => res.text()).catch(err => {
            return `# Unable to fetch
                    ${err}`
        })
    }
}
</script>
