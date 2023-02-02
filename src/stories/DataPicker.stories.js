import DatePicker from "../components/MUIX/DatePicker";

export default {
  title: "MUIX/DataPicker",
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

export const MuiDataPicker = Template.bind({});

MuiDataPicker.args = {
  label: "Date desktop",
  dateValue: "2014-08-18T21:11:54",
  width: "300px",
};
