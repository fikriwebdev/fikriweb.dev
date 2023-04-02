// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import "tailwindcss/tailwind.css";

import Button from "./index";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  argTypes: {
    leftIcon: {
      type: "function",
    },
    rightIcon: {
      type: "function",
    },
  },
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = { variant: "default", children: "Default" };

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  variant: "default",
  children: "Email",
  leftIcon: <AiOutlineMail />,
};
export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  variant: "default",
  children: "Continue",
  rightIcon: <AiOutlineArrowRight />,
};
