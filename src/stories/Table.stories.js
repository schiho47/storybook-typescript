import Table from "../components/DataDisplay/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default {
  title: "DataDisplay/Table",
  component: Table,
};
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const tableRows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const Template = (args) => (
  <Table {...args}>
    {tableRows.map((row) => {
      return (
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.calories}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.fat}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.carbs}
          </TableCell>
          <TableCell component="th" scope="row">
            {row.protein}
          </TableCell>
        </TableRow>
      );
    })}
  </Table>
);

export const MuiTable = Template.bind({});

MuiTable.args = {
  tableHead: [
    "Dessert (100g serving)",
    "Calories",
    "Fat(g)",
    "Carbs(g)",
    "Protein(g)",
  ],
};
