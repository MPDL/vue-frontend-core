<template>
    <div id="app">
        <router-view class="view" />
        <Background />
        <!-- <HeadNavigation /> -->
    </div>
</template>

<script>
import Background from '@/components/Background'
import HeadNavigation from '@/components/HeadNavigation'

export default {
    name: 'App',
    components: {
        Background,
        HeadNavigation
    },
    created() {
        console.log('APP:created this.$route.meta = ', this.$route.meta)
    }
}
</script>

<style lang="scss">
@import 'css/basics.scss';
@import 'css/app.scss';
.view {
    position: absolute;
    z-index: 1;
}
</style>
