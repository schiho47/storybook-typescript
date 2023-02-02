import * as React from "react";
import MuiTreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

interface ThreeViewProps {
  treeItems: {
    id: string;
    label: string;
    smallItems: {
      id: string;
      label: string;
      smallItems?: { id: string; label: string }[];
    }[];
  }[];
}

const ThreeView: React.FC<ThreeViewProps> = ({ treeItems }) => {
  return (
    <MuiTreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
    >
      {treeItems.map((item) => {
        return (
          <TreeItem nodeId={item.id} label={item.label}>
            {item.smallItems.map((i) => {
              return (
                <TreeItem nodeId={i.id} label={i.label}>
                  {i.smallItems &&
                    i.smallItems.map((smallI) => {
                      return (
                        <TreeItem nodeId={smallI.id} label={smallI.label} />
                      );
                    })}
                </TreeItem>
              );
            })}
          </TreeItem>
        );
      })}
    </MuiTreeView>
  );
};

export default ThreeView;
