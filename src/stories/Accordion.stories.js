import Accordion from "../components/Surfaces/Accordion";

export default {
  title: "Surfaces/Accordion",
  component: Accordion,
};

const Template = (args) => <Accordion {...args} />;

export const MuiAccordion = Template.bind({});
MuiAccordion.args = {
  number: 1,
  title: "Test test test",
  content:
    "Aute veniam irure cupidatat sunt reprehenderit deserunt qui voluptate officia nulla sint. Cupidatat id Lorem reprehenderit sunt veniam est consectetur cillum id mollit dolore ullamco. Lorem aute duis et laboris voluptate. Ex reprehenderit cillum et tempor minim dolore minim esse sint proident exercitation. Consequat adipisicing deserunt veniam adipisicing sint. Ullamco cillum dolore eiusmod ea velit veniam et nisi qui anim occaecat ut.",
  styles: { width: "90%" },
};
