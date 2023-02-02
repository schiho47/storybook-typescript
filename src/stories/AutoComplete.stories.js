import AutoComplete from "../components/Inputs/AutoComplete";

export default {
  title: "Inputs/AutoComplete",
  component: AutoComplete,
};

const Template = (args) => <AutoComplete {...args} />;

export const MuiAutoComplete = Template.bind({});

MuiAutoComplete.args = {
  options: ["1", "2", "3", "4"],
  id: "number",
  label: "A Group of Numbers",
};
