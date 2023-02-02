import Card from "../components/Surfaces/Card";
import Button from "../components/Inputs/Button";
export default {
  title: "Surfaces/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const MuiCard = Template.bind({});
MuiCard.args = {
  src: "assets/888.jpeg",
  title: "蠟筆小新",
  content:
    "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
  footer: (
    <>
      <Button label="SHARE" />
      <Button label="LEARN MORE" variant="contained" />
    </>
  ),
};
