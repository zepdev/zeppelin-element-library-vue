<script>
import { ZelVueSample } from '@/entry';
export default {
    name:  'ZelVueLibDev', // vue library dev component
    components: {
        ZelVueSample,
    },
}
</script>

<template>
    <div class="zel-vue-lib-dev">
        <zel-vue-sample></zel-vue-sample>
    </div>
</template>

<style scoped>
    .zel-vue-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
