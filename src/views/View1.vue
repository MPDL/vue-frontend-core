<template>
    <div class="view-1">{{ message }}</div>
</template>

<script>
//
import View1DataHandler from '@/js/View1DataHandler'
const crtl = new View1DataHandler()
//
export default {
    name: 'View1',
    components: {},
    data() {
        return {
            uKey: 0
        }
    },
    created() {},
    mounted() {},
    beforeDestroy() {},
    methods: {
        update() {
            this.uKey = this.uKey > 1000 ? 1 : ++this.uKey
        }
    },
    computed: {
        message() {
            return crtl.sayItWorks()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.view-1 {
    color: rgb(58, 96, 160);
    font-size: 24px;
    width: 100vh;
}
</style>
