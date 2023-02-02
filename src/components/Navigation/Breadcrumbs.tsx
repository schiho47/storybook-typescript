import * as React from "react";
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

interface ActiveLastBreadcrumbProps {
  breadcrumb: {
    id: number;
    title: string;
    href: string;
  }[];
}

const Breadcrumbs: React.FC<ActiveLastBreadcrumbProps> = ({ breadcrumb }) => {
  return (
    <div role="presentation" onClick={handleClick}>
      <MuiBreadcrumbs aria-label="breadcrumb">
        {breadcrumb.map((bread) => {
          return (
            <Link
              key={bread.id}
              underline="hover"
              color="inherit"
              href={bread.href}
            >
              {bread.title}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </div>
  );
};

export default Breadcrumbs;
