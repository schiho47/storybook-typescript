import Stack from "../components/Layout/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export default {
  title: "Layout/Stack",
  component: Stack,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Template = (args) => (
  <Stack {...args}>
    <Item>Item1</Item>
    <Item>Item2</Item>
    <Item>Item3</Item>
  </Stack>
);

export const MuiStack = Template.bind({});

MuiStack.args = {};
