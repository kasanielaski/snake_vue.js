<template lang="pug">
.game
    Field.game__field
    Snake.game__snake
    Food.game__food
    .game__info
        Controls.game__info-controls
        .game__info-score
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Controls from './Controls.vue';
import Field from './Field.vue';
import Food from './Food.vue';
import Snake from './Snake.vue';

@Component({
    components: {
        Controls,
        Field,
        Food,
        Snake
    }
})
export default class Game extends Vue {
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

        this.$store.dispatch('initGame');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
