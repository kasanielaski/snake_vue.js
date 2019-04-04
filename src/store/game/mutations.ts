import { MutationTree } from 'vuex';

import { IGameState, Coord } from '@/types';
import { initialState } from './index';

export const mutations: MutationTree<IGameState> = {
    changeDirection(state, payload: Coord) {
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
