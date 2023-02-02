import Badge from "../components/DataDisplay/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default {
  title: "DataDisplay/Badge",
  component: Badge,
};

const Template = (args) => <Badge {...args} />;

export const MuiBadge = Template.bind({});

MuiBadge.args = {
  label: <ShoppingCartIcon />,
  alt: "shopping cart",
  count: 2,
};
