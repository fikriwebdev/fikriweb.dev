// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from "@storybook/react";
import "tailwindcss/tailwind.css";

import Alert from "./index";

export default {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: "Alert",
    component: Alert,
    parameters: {
        backgrounds: { default: "dark" },
    },
} as ComponentMeta<typeof Alert>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Alert> = args => <Alert {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { status: "info", children: "Info alert" };
