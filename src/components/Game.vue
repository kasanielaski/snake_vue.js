<template lang="pug">
.game
    Field.game__field(
        :fieldConfig="getFieldConfig",
        :cellSize="getCellSize"
    )
    Snake.game__snake
    Food.game__food
    .game__info
        Controls.game__info-controls
        .game__info-score
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';

import Controls from './Controls.vue';
import Field from './Field.vue';
import Food from './Food.vue';
import Snake from './Snake.vue';

const game = namespace('game');

@Component({
    components: {
        Controls,
        Field,
        Food,
        Snake
    }
})
export default class Game extends Vue {
    @game.Getter('getFieldConfig') getFieldConfig!: () => {
        width: number;
        height: number;
    };
    @game.Getter('getCellSize') getCellSize!: () => number;

    onKeyup(keyCode: number) {
        switch (keyCode) {
            case 37:
                this.$store.dispatch('changeDirection', 'left');
                break;
            case 38:
                this.$store.dispatch('changeDirection', 'up');
                break;
            case 39:
                this.$store.dispatch('changeDirection', 'right');
                break;
            case 40:
                this.$store.dispatch('changeDirection', 'down');
                break;
            default:
                break;
        }
    }

    created() {
        window.addEventListener('keyup', ({ keyCode }: { keyCode: number }) =>
            this.onKeyup(keyCode)
        );
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.game {
    position: absolute;
}
</style>
