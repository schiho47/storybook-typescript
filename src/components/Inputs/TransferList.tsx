import { useState } from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

// function intersection(a: readonly number[], b: readonly number[]) {
//   return a.filter((value) => b.indexOf(value) !== -1);
// }

interface ListItemType {
  title: string;
  value: number;
}

interface TransferListProps {
  leftList: ListItemType[];
  rightList: ListItemType[];
  btnVariant?: "contained" | "outlined" | "text";
  btnSize?: "small" | "medium" | "large";
}

// function not(a: readonly number[], b: readonly ListItemType[]) {
//   return a.filter((value) => b.map(i=>i.value).indexOf(value) === -1);
// }

function intersection(a: readonly number[], b: readonly ListItemType[]) {
  return a.filter((value) => b.map((i) => i.value).indexOf(value) !== -1);
}
const TransferList: React.FC<TransferListProps> = ({
  leftList: originalLeftList,
  rightList: originalRightList,
  btnVariant = "outlined",
  btnSize = "small",
}) => {
  const [checked, setChecked] = useState<readonly number[]>([]);
  const [leftList, setLeftList] = useState<ListItemType[]>(originalLeftList);
  const [rightList, setRightList] = useState<ListItemType[]>(originalRightList);

  //   const [left, setLeft] = useState<readonly number[]>(
  //     leftList.map((list) => list.value)
  //   );
  //   const [right, setRight] = useState<readonly number[]>(
  //     rightList.map((list) => list.value)
  //   );

  const leftChecked = intersection(checked, leftList);
  const rightChecked = intersection(checked, rightList);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRightList((prev) => [...prev, ...leftList]);
    setLeftList([]);
    // setRight(right.concat(left));
    // setLeft([]);
  };

  const handleCheckedRight = () => {
    const targetItem = leftList.filter((item) =>
      leftChecked.includes(item.value)
    );

    setRightList((prev) => [...prev, ...targetItem]);
    setLeftList((prev) =>
      prev.filter((item) => !leftChecked.includes(item.value))
    );
    // setLeftList(not(leftList, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    const targetItem = rightList.filter((item) =>
      rightChecked.includes(item.value)
    );

    setLeftList((prev) => [...prev, ...targetItem]);
    setRightList((prev) =>
      prev.filter((item) => !rightChecked.includes(item.value))
    );
    // setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeftList((prev) => [...prev, ...rightList]);
    setRightList([]);
  };

  const customList = (items: readonly ListItemType[]) => (
    <Paper sx={{ width: 200, height: 230, overflow: "auto" }}>
      <List dense component="div" role="list">
        {items.map((item: ListItemType) => {
          const labelId = `transfer-list-item-${item.value}-label`;

          return (
            <ListItem
              key={item.value}
              role="listitem"
              button
              onClick={handleToggle(item.value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(item.value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={item.title} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList(leftList)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant={btnVariant}
            size={btnSize}
            onClick={handleAllRight}
            disabled={leftList.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant={btnVariant}
            size={btnSize}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant={btnVariant}
            size={btnSize}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant={btnVariant}
            size={btnSize}
            onClick={handleAllLeft}
            disabled={rightList.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(rightList)}</Grid>
    </Grid>
  );
};

export default TransferList;
