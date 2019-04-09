import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Snake from '@/components/Snake.vue';

describe('Snake.vue', () => {
    it('renders component correctly', () => {
        const wrapper = shallowMount(Snake);
        expect(wrapper.find('.snake'));
    });
});
