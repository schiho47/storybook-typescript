import ThreeView from "../components/Lab/ThreeView";

export default {
  title: "Lab/ThreeView",
  component: ThreeView,
};

const Template = (args) => <ThreeView {...args} />;

export const MuiThreeView = Template.bind({});

MuiThreeView.args = {
  treeItems: [
    {
      id: "1",
      label: "Applications",
      smallItems: [{ id: "2", label: "Calender" }],
    },
    {
      id: "5",
      label: "Documents",
      smallItems: [
        { id: "10", label: "OSS" },
        { id: "6", label: "MUI", smallItems: [{ id: "9", label: "index.js" }] },
      ],
    },
  ],
};
