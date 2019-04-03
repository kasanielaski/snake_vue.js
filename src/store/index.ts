import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { IRootState } from '@/types';

import { game } from './game';

Vue.use(Vuex);

const store: StoreOptions<IRootState> = {
    state: {},
    modules: {
        game
    }
};

export default new Vuex.Store<IRootState>(store);