// import Vuex from 'vuex';
// import { expect } from 'chai';
// import { shallowMount, createLocalVue } from '@vue/test-utils';

// import Game from '@/components/Game.vue';

// const localVue = createLocalVue();

// localVue.use(Vuex);

// describe('Game.vue', () => {
//     let getters: any;
//     let store: any;

//     beforeEach(() => {
//         getters = {
//             getFieldConfig: () => { 'width': 40, 'height': 30 },
//             snakeBody: () => [
//                 { x: 0, y: 0 },
//                 { x: 1, y: 0 },
//                 { x: 2, y: 0 },
//                 { x: 3, y: 0 }
//             ]
//         };

//         store = new Vuex.Store({
//             modules: {
//                 ['Game']: {
//                     // @ts-ignore
//                     getters: ['Game'].getters
//                 }
//             }
//         });
//     });

//     it('renders component correctly', () => {
//         const wrapper = shallowMount(Game, { store, localVue });
//         expect(wrapper.find('.game'));
//     });
// });
