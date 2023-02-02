import Breadcrumbs from "../components/Navigation/Breadcrumbs";

export default {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
};

const Template = (args) => <Breadcrumbs {...args} />;

export const MuiBreadcrumbs = Template.bind({});

MuiBreadcrumbs.args = {
  breadcrumb: [
    { id: 1, title: "MUI", href: "/" },
    {
      id: 2,
      title: "Core",
      href: "/material-ui/getting-started/installation/",
    },
    {
      id: 3,
      title: "Breadcrumbs",
      href: "/material-ui/react-breadcrumbs/",
    },
  ],
};
