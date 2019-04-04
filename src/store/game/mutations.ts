import { MutationTree } from 'vuex';

import { IGameState } from '@/types';
import { initialState } from './index';

export const mutations: MutationTree<IGameState> = {
    changeDirection(state, payload) {
        state.direction = payload;
    },

    startGame(state) {
        state.intervalId = null;
        state.enable = true;
    },

    resetGame(state) {
        state = initialState;
    }
};
