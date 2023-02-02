import Select from "../components/Inputs/Select";

export default {
  title: "Inputs/Select",
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const MuiSelect = Template.bind({});

MuiSelect.args = {
  defaultValue: "10",
  title: "Age",
  selection: [
    { name: "Ten", value: "10" },
    { name: "Twenty", value: "20" },
    { name: "Thirty", value: "30" },
  ],
};
