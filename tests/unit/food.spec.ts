import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Food from '@/components/Food.vue';

describe('Food.vue', () => {
    it('renders component correctly', () => {
        const wrapper = shallowMount(Food, {
            propsData: {
                food: {
                    x: 1,
                    y: 1
                },
                cellSize: 20
            }
        });
        expect(wrapper.find('.food'));
        expect(
            wrapper
                .find('.food')
                .html()
                .includes(`width: 20px`)
        );
        expect(
            wrapper
                .find('.food')
                .html()
                .includes(`height: 20px`)
        );
        expect(
            wrapper
                .find('.food')
                .html()
                .includes(`left: 20px`)
        );
        expect(
            wrapper
                .find('.food')
                .html()
                .includes(`top: 20px`)
        );
    });
});
