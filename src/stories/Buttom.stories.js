import { userEvent,within } from "@storybook/testing-library";
import Button from "../components/Inputs/Button";


const argTypeChanged = {
  label: {
    name: "labelLABEL",
    type: { required: false },
    description: "這裡應該要填button裡面的字",
    table: {
      type: { summary: "string", detail: "string 就是字串的意思" },
      defaultValue: { summary: "Hello" },
    },
    control: {
      type: "color",
    },
  },
};
export default {
  title: "Inputs/Button",
  component: Button,
  args: {
    label: "Button",
  }, //將 args 提升到component 層級，設定一次label即可設定此份多button的label
  argTypes: argTypeChanged,
  parameters: {
    docs: {
      description: {
        component: "這是一個關於按鈕的component",
   
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const MuiButton = Template.bind({});

MuiButton.args = {
  // label: "Button",
  color: "primary",
  variant: "outlined",
};

MuiButton.parameters = {
  backgrounds: {
    values: [
      { name: "red", value: "#f00" },
      { name: "green", value: "#0f0" },
      { name: "blue", value: "#00f" },
    ],
  },
};

MuiButton.play=async({canvasElement})=>{
    // Assigns canvas to the component root element
  const canvas=within(canvasElement);
   // Starts querying from the component's root element
   const clickButton=await canvas.getByRole('button',{name:/Button/i})
  await userEvent.click(clickButton);
}

export const MuiSecondaryButton = Template.bind({});

MuiSecondaryButton.args = {
  //label: "Button",
  color: "secondary",
  variant: "contained",
};
