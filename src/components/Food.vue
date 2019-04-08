<template lang="pug">
.food(
    :style=`{
        'width': cellSize + 'px',
        'height': cellSize + 'px',
        'left': (food.x * cellSize) + 'px',
        'top': (food.y * cellSize) + 'px'
    }`
)
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Coord } from '../types';

@Component
export default class Food extends Vue {
    @Prop({
        required: true,
        type: Object
    })
    food!: Coord;

    @Prop({
        required: true,
        type: Number
    })
    cellSize!: number;
}
</script>

<style scoped lang="scss">
.food {
    position: absolute;
    background-color: seagreen;
    border: 1px solid #c3c3c3;
}
</style>
