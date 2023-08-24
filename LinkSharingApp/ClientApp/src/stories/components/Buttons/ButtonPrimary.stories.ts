import type { Meta, StoryObj } from "@storybook/vue3";

import ButtonPrimary from "@/components/Buttons/ButtonPrimary.vue";

const meta: Meta<typeof ButtonPrimary> = {
  component: ButtonPrimary,
  tags: ['autodocs',]
}

export default meta;

type Story = StoryObj<typeof ButtonPrimary>;

export const Active: Story = {
  render: () => ({
    components: { ButtonPrimary },
    template: '<ButtonPrimary />',
  }),
};

export const WithText: Story = {
  render: () => ({
    components: { ButtonPrimary },
    template: '<ButtonPrimary> Your text goes here </ButtonPrimary>',
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { ButtonPrimary },
    template: '<ButtonPrimary disabled="true"> Some text </ButtonPrimary>',
  }),
}