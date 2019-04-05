<template lang="pug">
.field
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Field extends Vue {}
</script>

<style scoped lang="scss">
.field {
    position: absolute;
    background-color: bisque;
    border: 1px solid #c3c3c3;
}
</style>
