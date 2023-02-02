import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import { green } from "@mui/material/colors";
import ComponentStyle from "./components/CompleteStyle/ComponentStyle";
import AutoComplete from "./components/Inputs/AutoComplete";
import Button from "./components/Inputs/Button";
import ButtonGroup from "./components/Inputs/ButtonGroup";
import Checkbox from "./components/Inputs/Checkbox";
import FloatingButton from "./components/Inputs/FloatingButton";
import RadioGroup from "./components/Inputs/RadioGroup";
import theme from "./themes/theme";
import Rating from "./components/Inputs/Rating";
import Select from "./components/Inputs/Select";
import Slider from "./components/Inputs/Slider";
import Switch from "./components/Inputs/Switch";
import TextField from "./components/Inputs/TextField";
import TransferList from "./components/Inputs/TransferList";
import ToggleButton from "./components/Inputs/ToggleButton";
import Avatar from "./components/DataDisplay/Avatar";
import Badge from "./components/DataDisplay/Badge";
import Chip from "./components/DataDisplay/Chip";
import Divider from "./components/DataDisplay/Divider";
import List from "./components/DataDisplay/List";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import Tooltip from "./components/DataDisplay/Tooltip";
import Typography from "./components/DataDisplay/Typography";
import Alert from "./components/Feedback/Alert";
import Backdrop from "./components/Feedback/Backdrop";
import Dialog from "./components/Feedback/Dialog";
import CircularProgress from "./components/Feedback/CircularProgress";
import LineProgress from "./components/Feedback/LineProgress";
import Skeleton from "./components/Feedback/Skeleton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Snackbar } from "@mui/material";
import BottomNavigationAction from "./components/Navigation/BottomNavigationAction";
import Table from "./components/DataDisplay/Table";
import TableCell from "@mui/material/TableCell";
import ImageList from "./components/Layout/ImageList";
import TableRow from "@mui/material/TableRow";

function App() {
  const dataDisplayList = [
    { icon: <InboxIcon />, primary: "Sent mail" },
    { icon: <DraftsIcon />, primary: "Drafts" },
    { icon: <SendIcon />, primary: "Inbox" },
  ];

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }
  const tableHead = [
    "Dessert (100g serving)",
    "Calories",
    "Fat(g)",
    "Carbs(g)",
    "Protein(g)",
  ];
  const tableRows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleBackdropClose = () => {
    setOpenBackdrop(false);
  };
  const handleBackdropToggle = () => {
    setOpenBackdrop(!openBackdrop);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const handleToggleDialog = () => {
    setOpenDialog(!openDialog);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleToggleSnackbar = () => {
    setOpenSnackbar(!openSnackbar);
  };
  const dialogFooter = () => {
    return (
      <div>
        <Button
          label={"DISAGREE"}
          variant={"outlined"}
          style={{ marginRight: "1rem" }}
        />
        <Button label={"AGREE"} variant={"contained"} />
      </div>
    );
  };

  const skeletonData = [
    {
      src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
      title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
      channel: "Don Diablo",
      views: "396k views",
      createdAt: "a week ago",
    },
    {
      src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
      title: "Queen - Greatest Hits",
      channel: "Queen Official",
      views: "40M views",
      createdAt: "3 years ago",
    },
    {
      src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
      title: "Calvin Harris, Sam Smith - Promises (Official Video)",
      channel: "Calvin Harris",
      views: "130M views",
      createdAt: "10 months ago",
    },
  ];
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>INPUTS</h1>
        <ComponentStyle>
          <>
            <h3>AutoComplete </h3>
            <AutoComplete
              options={["1", "2", "3"]}
              id={"numbers"}
              label={"A Group of Number"}
              onChange={() => {}}
              open={true}
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Button</h3>
            <Button label="button" variant="outlined" />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Button Group</h3>
            <ButtonGroup
              variant="contained"
              buttonOne="One"
              buttonTwo="Two"
              buttonThree="Three"
              color="secondary"
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Checkbox</h3>
            <Checkbox
              label="Monday"
              onChange={() => {}}
              value="checked"
              id="one"
              checked
            />
            <Checkbox
              label="Tuesday"
              onChange={() => {}}
              value="checked"
              id="two"
              checked={false}
            />
            <Checkbox
              label="Wednesday"
              onChange={() => {}}
              value="checked"
              id="three"
              checked
            />
            <Checkbox
              label="Thursday"
              onChange={() => {}}
              value="checked"
              id="four"
              checked={false}
            />
            <Checkbox
              label="Five"
              onChange={() => {}}
              value="checked"
              id="five"
              checked
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>FloatingButton</h3>
            <FloatingButton
              color="secondary"
              onClick={() => {}}
              children={<AddIcon />}
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Radio Group</h3>
            <RadioGroup
              title={"Choose a Fruit"}
              labelOne={"Apple"}
              labelTwo={"Banana"}
              labelThree={"Cherry"}
              valueOne={"apple"}
              valueTwo={"banana"}
              valueThree={"cherry"}
              radioName={"chooseFruit"}
              groupId={"fruit"}
              onChange={() => {}}
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Rating</h3>
            <Rating
              title="How do you feel about this?"
              max={7}
              value={2}
              onChange={() => {}}
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Select</h3>
            <Select
              onChange={() => {}}
              defaultValue="10"
              title="Age"
              selection={[
                { name: "Ten", value: "10" },
                { name: "Twenty", value: "20" },
                { name: "Thirty", value: "30" },
              ]}
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Slider</h3>
            <Slider value={20} />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Switch</h3>
            <Switch
              label="LABEL"
              defaultCheck={true}
              onChange={() => {}}
              color="error"
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Text Field</h3>
            <TextField
              required={false}
              disabled={false}
              error={false}
              id={"id1"}
              label={"How old are you"}
              variant={"outlined"}
              onChange={() => {}}
              color={"info"}
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>TransferList</h3>
            <TransferList
              leftList={[
                { title: "蘋果", value: 1 },
                { title: "蘋果派", value: 2 },
                { title: "葡萄柚", value: 3 },
                { title: "鳳梨", value: 4 },
              ]}
              rightList={[
                { title: "西瓜", value: 5 },
                { title: "草莓", value: 6 },
                { title: "草莓牛奶", value: 7 },
                { title: "西瓜牛奶", value: 8 },
              ]}
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Toggle Button</h3>
            <ToggleButton onChange={() => {}} />
          </>
        </ComponentStyle>
        <h1>Data Display</h1>
        <ComponentStyle>
          <>
            <h3>Avatar Image</h3>
            <Avatar
              isImageAvatar={true}
              imageSrc={"/assets/888.jpeg"}
              alt="肥嘟嘟左衛門"
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Avatar Word</h3>
            <Avatar isImageAvatar={false} color={green[600]}>
              PIG
            </Avatar>
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Badge</h3>
            <Badge label={<ShoppingCartIcon />} alt="shopping cart" count={2} />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Chip</h3>
            <Chip label="Chip Outlined" />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Divider</h3>
            <Divider
              classes={{
                width: "10rem",
                height: "1px",
                marginTop: "30px",
              }}
              color="primary"
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>List</h3>
            <List dataDisplayList={dataDisplayList} />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Table</h3>
            <Table tableHead={tableHead}>
              {tableRows.map((row) => {
                return (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
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
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Tooltip</h3>
            <Tooltip title="delete">
              <button>"Delete Something"</button>
            </Tooltip>
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Typography</h3>
            <Typography variant="h1">I am h1</Typography>
            <Typography variant="body1">I am body1</Typography>
          </>
        </ComponentStyle>
        <h1>Feedback</h1>
        <ComponentStyle>
          <>
            <h3>Alert</h3>
            <Alert
              severity={"error"}
              color={"error"}
              onClose={() => {}}
              content={"This is a test alert!"}
              open={true}
            />
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Backdrop</h3>
            <Button
              label={"Show Backdrop"}
              variant={"text"}
              onClick={handleBackdropToggle}
            />
            <Backdrop open={openBackdrop} onClose={handleBackdropClose}>
              HAPPY DAY
            </Backdrop>
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Dialog</h3>
            <Button
              label={"Open dialog"}
              variant={"contained"}
              onClick={handleToggleDialog}
            />
            <Dialog
              open={openDialog}
              id={"1"}
              onClose={handleDialogClose}
              title="This is a Great Article"
              footer={dialogFooter()}
            >
              <Typography variant="body1">
                Commodo ullamco aliqua in aliquip.Officia consequat do anim et.
                Ut incididunt officia anim laboris ea ipsum reprehenderit magna
                pariatur sunt. Ullamco consectetur commodo non minim anim
                voluptate officia. Sint ipsum sit dolore esse consectetur cillum
                do nostrud tempor commodo esse qui laborum. Veniam dolor do sint
                reprehenderit deserunt enim commodo laborum officia voluptate
                consequat.
              </Typography>
            </Dialog>
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>CircularProgress</h3>
            {/* <CircularProgress /> */}
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>LineProgress</h3>
            {/* <LineProgress style={{ width: "60%", margin: "1rem" }} /> */}
          </>
        </ComponentStyle>
        <ComponentStyle>
          <>
            <h3>Skeleton</h3>
            {skeletonData.map((item, index) => {
              return (
                <Skeleton
                  key={index}
                  style={{ width: "300px" }}
                  src={item.src}
                  title={item.title}
                  channel={item.channel}
                  views={item.views}
                  createdAt={item.createdAt}
                  variant={"caption"}
                  color={"primary"}
                />
              );
            })}
          </>
        </ComponentStyle>

        <ComponentStyle>
          <>
            <h3>Snackbar</h3>
            <Button
              label={"Open Snackbar"}
              variant={"outlined"}
              color="info"
              onClick={handleToggleSnackbar}
            />
            <Snackbar open={openSnackbar} onClose={handleSnackbarClose}>
              <div>
                <Alert
                  severity="info"
                  color="info"
                  onClose={handleSnackbarClose}
                  content={"I AM A SNACKBAR"}
                  open={openSnackbar}
                />
              </div>
            </Snackbar>
          </>
        </ComponentStyle>
        <h1>SURFACES</h1>
        <h1>NAVIGATION</h1>
        <ComponentStyle>
          <>
            <h3>ButtonNavigationAction</h3>
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          </>
        </ComponentStyle>
        <h1>Layout</h1>
        <ComponentStyle>
          <ImageList itemData={itemData} style={{ width: 500, height: 450 }} />
        </ComponentStyle>
      </div>
    </ThemeProvider>
  );
}

export default App;
