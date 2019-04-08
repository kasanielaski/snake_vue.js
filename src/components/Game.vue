<template lang="pug">
.game
    Field.game__field(
        v-for="tile in fieldTiles"
        :style=`{
            'width': cellSize + 'px',
            'height': cellSize + 'px',
            'left': (tile.x * cellSize) + 'px',
            'top': (tile.y * cellSize) + 'px'
        }`
    )
    Snake.game__snake(
        v-for="tile in snakeBody",
        :style=`{
            'width': cellSize + 'px',
            'height': cellSize + 'px',
            'left': (tile.x * cellSize) + 'px',
            'top': (tile.y * cellSize) + 'px'
        }`
    )
    Food.game__food(
        :food="food",
        :cellSize="cellSize"
    )
    .game__info
        Controls.game__info-controls
        .game__info-score
            | {{ score }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, namespace } from 'vuex-class';

import { Coord } from '../types';

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
    @game.Action('moveSnake') moveSnake!: () => void;
    @game.Action('addScore') addScore!: () => void;
    @game.Action('gameOver') gameOver!: () => void;
    @game.Action('enlagreSnake') enlagreSnake!: () => void;

    @game.Getter('getCellSize') cellSize!: number;
    @game.Getter('getFieldConfig') fieldConfig!: {
        width: number;
        height: number;
    };
    @game.Getter('getSnakeHead') snakeHead!: Coord;
    @game.Getter('getSnakeBody') snakeBody!: Coord[];
    @game.Getter('getFood') food!: Coord;
    @game.Getter('getScore') score!: number;
    @game.Getter('getEnable') isEnable!: boolean;

    intervalId: null | number = null;

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

    processGame() {
        const {
            isEnable,
            moveSnake,
            snakeHead,
            snakeBody,
            gameOver,
            fieldConfig,
            food,
            addScore,
            enlagreSnake
        } = this;
        const endGameConition = snakeBody.some(item => {
            return item.x === snakeHead.x && item.y === snakeHead.y;
        });

        if (!isEnable) {
            return;
        }

        moveSnake();

        if (endGameConition) {
            this.intervalId = null;
            gameOver();
            alert('game over');
        }

        if (
            snakeHead.x === fieldConfig.width ||
            snakeHead.y === fieldConfig.height ||
            snakeHead.x < 0 ||
            snakeHead.y < 0
        ) {
            this.intervalId = null;
            gameOver();
            alert('game over');
        }

        if (snakeHead.x === food.x && snakeHead.y === food.y) {
            addScore();
        }

        enlagreSnake();
    }

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

    created() {
        window.addEventListener('keyup', ({ keyCode }: { keyCode: number }) =>
            this.onKeyup(keyCode)
        );
        this.intervalId = setInterval(this.processGame, 100);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.game {
    position: absolute;
}
</style>
