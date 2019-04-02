import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialState = {
    score: 0,
    direction: {
        x: 1,
        y: 0
    },
    cellSize: 20,
    field: [],
    enable: false,
    intervalId: null,
    mapWidth: 40,
    mapHeight: 30,
    snakeHead: {
        x: 3,
        y: 0
    },
    snakeBody: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }],
    food: {
        x: Math.floor(Math.random() * 39) + 1,
        y: Math.floor(Math.random() * 29) + 1
    },
    endGame: false
};

export default new Vuex.Store({
    state: initialState,

    actions: {
        changeDirection({ state, commit }, payload: string) {
            const { x, y } = state.direction;

            switch (payload) {
                case 'left':
                    if (x === 1 && y === 0) {
                        return;
                    }

                    commit('changeDirection', {
                        x: -1,
                        y: 0
                    });
                    break;
                case 'up':
                    if (x === 0 && y === 1) {
                        return;
                    }

                    commit('changeDirection', {
                        x: 0,
                        y: -1
                    });
                    break;
                case 'right':
                    if (x === -1 && y === 0) {
                        return;
                    }

                    commit('changeDirection', {
                        x: 1,
                        y: 0
                    });
                    break;
                case 'down':
                    if (x === 0 && y === -1) {
                        return;
                    }

                    commit('changeDirection', {
                        x: 0,
                        y: 1
                    });
                    break;
                default:
                    break;
            }
        },

        initGame({ state, commit }) {
            const fieldTiles = [];
            for (let y = 0; y < state.mapHeight; y++) {
                for (let x = 0; x < state.mapWidth; x++) {
                    fieldTiles.push({
                        x,
                        y
                    })
                }
            }

            commit('initGame', fieldTiles);
        },

        startGame({ state, commit }) {
            if (state.endGame === false) {
                commit('startGame');
            }
        },

        resetGame({ commit }) {
            commit('resetGame');
        }
    },

    mutations: {
        changeDirection(state, payload) {
            state.direction = payload;
        },

        initGame(state, payload) {
            state.field = payload;
        },

        startGame(state) {
            state.intervalId = null;
            state.enable = true;
        },

        resetGame(state) {
            state = initialState;
        }
    },

    getters: {
        getDirection({ direction }) {
            return direction;
        }
    }
});
