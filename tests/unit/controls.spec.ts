import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Controls from '@/components/Controls.vue';

describe('Controls.vue', () => {
    it('renders component correctly', () => {
        const wrapper = shallowMount(Controls);
        expect(wrapper.find('.controls'));
        expect(wrapper.find('.controls__start'));
        expect(wrapper.find('.controls__reset'));
    });

    it('emits correct events', () => {
        const wrapper = shallowMount(Controls);
        const setupButton = wrapper.find('.controls__start');
        const resetButton = wrapper.find('.controls__reset');

        setupButton.trigger('click');
        expect(wrapper.emitted('setupGame')).to.exist;
        resetButton.trigger('click');
        expect(wrapper.emitted('resetGame')).to.exist;
    });
});
