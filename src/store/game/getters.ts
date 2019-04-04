import { GetterTree } from 'vuex';

import { IRootState, IGameState, Coord } from '@/types';

export const getters: GetterTree<IGameState, IRootState> = {
    getDirection({ direction }): Coord {
        return direction;
    },

    getFieldConfig({ fieldConfig }): { width: number; height: number } {
        return fieldConfig;
    },

    getCellSize({ cellSize }): number {
        return cellSize;
    }
};
