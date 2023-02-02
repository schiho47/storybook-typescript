import Tab from "../components/Navigation/Tab";

export default {
  title: "Navigation/Tab",
  component: Tab,
};

const Template = (args) => <Tab {...args} />;

export const MuiTab = Template.bind({});

MuiTab.args = {
  tabs: [
    { title: "Item One", value: 0 },
    { title: "Item Two", value: 1 },
    { title: "Item Three", value: 2 },
  ],
};
