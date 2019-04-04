<template lang="pug">
.field
    .field__tile(
        v-for="tile in fieldTiles"
        :style=`{
            'width': cellSize + 'px',
            'height': cellSize + 'px',
            'left': (tile.x * cellSize) + 'px',
            'top': (tile.y * cellSize) + 'px'
        }`
    )
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
    fieldConfig!: { width: number; height: number };

    @Prop({
        required: true,
        type: Number
    })
    cellSize!: number;

    get fieldTiles(): Coord[] {
        const { fieldConfig } = this;
        const fieldTiles = [];

        for (let y = 0; y < fieldConfig.height; y++) {
            for (let x = 0; x < fieldConfig.width; x++) {
                fieldTiles.push({
                    x,
                    y
                });
            }
        }

        return fieldTiles;
    }
}
</script>

<style scoped lang="scss">
.field {
    &__tile {
        position: absolute;
        border: 1px solid gray;
    }
}
</style>
