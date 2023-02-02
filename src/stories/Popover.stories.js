import Popover from "../components/Utils/Popover";

export default {
  title: "Utils/Popover",
  component: Popover,
};

const Template = (args) => <Popover {...args} />;

export const MuiPopover = Template.bind({});

MuiPopover.args = {
  label: "Open Popover",
  content:
    "Lorem et pariatur deserunt occaecat reprehenderit dolor anim fugiat cupidatat velit. Irure et ad do voluptate eu qui fugiat esse. Eu commodo occaecat quis cillum officia exercitation magna. Incididunt consequat non in voluptate laborum id velit nulla pariatur sint nostrud. Ex labore cillum pariatur commodo est labore laborum dolor laborum anim cupidatat sit. Amet irure nulla duis ex culpa officia pariatur pariatur tempor. Sit in est duis nulla excepteur sunt cillum non et cillum aute.",
};
