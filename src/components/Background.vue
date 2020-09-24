<template>
    <div class="background">
        <Layer1 />
    </div>
</template>

<script>
import Layer1 from '@/assets/bg-gradient-1.svg'

export default {
    name: 'Background',
    components: {
        Layer1
    },
    props: {
        icon: String
    }
}
</script>

<style lang="scss" scoped>
.background {
    // border: 4px solid green;
    ::v-deep {
        svg {
            transform-origin: top left;
            transform: scale(2.5);
        }
    }
}
//
</style>
