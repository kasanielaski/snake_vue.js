<template lang="pug">
.controls
    button.controls__start(
        @click="setupGame"
    )
        | start game

    button.controls__reset(
        @click="resetGame"
    )
        | reset game
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Controls extends Vue {
    startGame() {
        this.$emit('setupGame');
    }

    resetGame() {
        this.$emit('resetGame');
    }
}
</script>

<style lang="scss" scoped>
.controls {
    display: flex;
}
</style>
