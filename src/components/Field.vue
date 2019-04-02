<template lang="pug">
.field
    | field
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Field extends Vue {}
</script>

<style scoped lang="scss">
.field {
    background-color: aqua;
}
</style>
