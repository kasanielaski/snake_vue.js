<template lang="pug">
.controls
    button.controls__start
    button.controls__reset
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Controls extends Vue {}
</script>

<style lang="scss" scoped>
.controls {
    display: flex;
}
</style>
