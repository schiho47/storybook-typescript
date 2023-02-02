import * as React from "react";
import MuiStack from "@mui/material/Stack";

interface StackProps {
  direction?: "column-reverse" | "column" | "row-reverse" | "row";
  spacing?: number;
  children: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({
  direction = "row",
  spacing = 2,
  children,
}) => {
  return (
    <div>
      <MuiStack direction={direction} spacing={spacing}>
        {children}
      </MuiStack>
    </div>
  );
};

export default Stack;
