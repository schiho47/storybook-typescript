import Pagination from "../components/Navigation/Pagination";

export default {
  title: "Navigation/Pagination",
  component: Pagination,
};

const Template = (args) => <Pagination {...args} />;

export const MuiPagination = Template.bind({});

MuiPagination.args = {
  count: 10,
  defaultPage: 1,
  color: "primary",
};
