import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Field from '@/components/Field.vue';

describe('Field.vue', () => {
    it('renders component correctly', () => {
        const wrapper = shallowMount(Field);
        expect(wrapper.find('.field'));
    });
});
