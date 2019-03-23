<template>
    <div class="markdown">
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
    name: 'markdown',
    components: {
        VueShowdown
    },
    data: () => ({
        markdown: 'text'
    }),
    created () {
        this.request("https://raw.githubusercontent.com/VueSD/website/master/README.md")
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
