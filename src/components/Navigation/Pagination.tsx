import * as React from "react";
import MuiPagination from "@mui/material/Pagination";

interface PaginationProps {
  count: number;
  defaultPage?: number;
  color?: "primary" | "secondary" | "standard";
}
const Pagination: React.FC<PaginationProps> = ({
  count,
  color,
  defaultPage,
}) => {
  return (
    <MuiPagination count={count} color={color} defaultPage={defaultPage} />
  );
};

export default Pagination;
