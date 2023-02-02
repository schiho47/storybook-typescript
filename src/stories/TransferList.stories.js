import TransferList from "../components/Inputs/TransferList";

export default {
  title: "Inputs/TransferList",
  component: TransferList,
};

const Template = (args) => <TransferList {...args} />;

export const MuiTransferList = Template.bind({});

MuiTransferList.args = {
  leftList: [
    { title: "蘋果", value: 1 },
    { title: "蘋果派", value: 2 },
    { title: "葡萄柚", value: 3 },
    { title: "鳳梨", value: 4 },
  ],
  rightList: [
    { title: "西瓜", value: 5 },
    { title: "草莓", value: 6 },
    { title: "草莓牛奶", value: 7 },
    { title: "西瓜牛奶", value: 8 },
  ],
};
