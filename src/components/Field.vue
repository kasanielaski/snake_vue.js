<template lang="pug">
.field
    | field
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Coord } from '../types';

@Component
export default class Field extends Vue {
    @Prop({
        required: true,
        type: Object
    })
    config!: Coord;

    created() {
        // eslint-disable-next-line
        console.log(this.config);
    }
}
</script>

<style scoped lang="scss">
.field {
    background-color: aqua;
}
</style>
