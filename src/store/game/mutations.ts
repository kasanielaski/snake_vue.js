import { MutationTree } from 'vuex';

import { IGameState, Coord } from '@/types';
import { initialState } from './index';

export const mutations: MutationTree<IGameState> = {
    changeDirection(state, payload: Coord) {
        state.direction = payload;
    },

    moveSnake(state, payload: any) {
        state.snakeHead.x = payload.x;
        state.snakeHead.y = payload.y;
        state.snakeBody = payload.snakeBody;
    },

    enlagreSnake(state) {
        state.snakeBody.push({
            x: state.snakeHead.x,
            y: state.snakeHead.y
        });
    },

    addScore(state) {
        state.score += 1;
        state.food.x = Math.floor(Math.random() * 39) + 1;
        state.food.y = Math.floor(Math.random() * 29) + 1;
    },

    setupGame(state) {
        state.isEnable = true;
    },

    resetGame(state) {
        state = initialState;
    },

    gameOver(state) {
        state.isEnable = false;
        state.isEndGame = true;
    }
};
