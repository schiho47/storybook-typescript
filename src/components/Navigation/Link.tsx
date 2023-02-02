import MuiLink from "@mui/material/Link";

interface LinkProps {
  title: string;
  href: string;
  underline?: "always" | "hover" | "none";
  variant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "inherit"
    | "overline"
    | "subtitle1"
    | "subtitle2";
  color?: string;
  titleColor: string;
}
const Link: React.FC<LinkProps> = ({
  title,
  href,
  underline = "hover",
  variant = "inherit",
  color,
  titleColor,
}) => {
  return (
    <MuiLink href={href} underline={underline} variant={variant} color={color}>
      {title}
    </MuiLink>
  );
};

export default Link;
