<template lang="pug">
.food
    | food
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Food extends Vue {}
</script>

<style scoped lang="scss">
.food {
    background-color: seagreen;
}
</style>
