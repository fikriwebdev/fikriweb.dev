// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from "@storybook/react";
import "tailwindcss/tailwind.css";

import Input from "./index";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Input",
    component: Input,
    argTypes: {
        leftIcon: {
            type: "function",
        },
        rightIcon: {
            type: "function",
        },
    },
} as ComponentMeta<typeof Input>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { variant: "outline", placeholder: "Outline input" };
