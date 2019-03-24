<template>
    <div class="vsd-markdown">
        <section class="page-section" id="markdown">
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
    created () {
        this.request(this.url)
    },
    methods: {
        request(url) {
            var self = this
            fetch(url)
                .then(res => {
                    return res.text()
                }).then(text => {
                    console.log(text)
                    self.markdown = text
                })
        }
    }
}
</script>
