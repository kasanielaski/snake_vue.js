<template lang="pug">
.snake
    | snake
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Snake extends Vue {}
</script>

<style scoped lang="scss">
.snake {
    background-color: salmon;
}
</style>
