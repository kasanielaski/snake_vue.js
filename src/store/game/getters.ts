import { GetterTree } from 'vuex';

import { IRootState, IGameState } from '@/types';

export const getters: GetterTree<IGameState, IRootState> = {
    getDirection({ direction }) {
        return direction;
    },

    getFieldConfig({ fieldConfig }) {
        return fieldConfig;
    }
}