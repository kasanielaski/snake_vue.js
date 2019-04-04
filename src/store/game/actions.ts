import { ActionTree } from 'vuex';

import { IRootState, IGameState } from '@/types';

export const actions: ActionTree<IGameState, IRootState> = {
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

    startGame({ state, commit }) {
        if (state.endGame === false) {
            commit('startGame');
        }
    },

    resetGame({ commit }) {
        commit('resetGame');
    }
};
