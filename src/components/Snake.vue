<template lang="pug">
.snake
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Snake extends Vue {}
</script>

<style scoped lang="scss">
.snake {
    position: absolute;
    background-color: salmon;
    border: 1px solid #c3c3c3;
}
</style>
