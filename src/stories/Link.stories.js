import Link from "../components/Navigation/Link";

export default {
  title: "Navigation/Link",
  component: Link,
};

const Template = (args) => <Link {...args} />;

export const MuiLink = Template.bind({});

MuiLink.args = {
  title: "Link",
  href: "https://mui.com/material-ui/api/link/",
};
