<template>
    <!-- set options via props -->
    <VueShowdown
    markdown="## markdown text"
    flavor="github"
    :options="{ emoji: true }"/>

</template>

<script>
import VueShowdown from 'vue-showdown'

export default {
    components: {
        VueShowdown
    }
}
</script>
