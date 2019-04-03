import { Module } from 'vuex';

import { IRootState, IGameState } from '@/types';

import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';

export const initialState = {
    score: 0,
    direction: {
        x: 1,
        y: 0
    },
    cellSize: 20,
    field: [],
    enable: false,
    intervalId: null,
    fieldConfig: {
        width: 40,
        height: 30
    },
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

export const state: IGameState = initialState;
const namespaced: boolean = true;

export const game: Module<IGameState, IRootState> = {
    state,
    actions,
    mutations,
    getters,
    namespaced
}
