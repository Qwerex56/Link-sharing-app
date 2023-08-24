import type { Meta, StoryObj } from '@storybook/vue3';

import ButtonSecondary from '@/components/Buttons/ButtonSecondary.vue';

const meta: Meta<typeof ButtonSecondary> = {
  component: ButtonSecondary,
}
export default meta;

type Story = StoryObj<typeof ButtonSecondary>;

export const Secondary: Story = {
  render: () => ({
    components: { ButtonSecondary },
    template: '<ButtonSecondary> text </ButtonSecondary>'
  }),
}
