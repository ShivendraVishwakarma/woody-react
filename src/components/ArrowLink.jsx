import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function ArrowLink({
  to,
  children,
  className = "",
  variant = "line",
  onClick,
}) {
  const classes = ["arrow-link", `arrow-link-${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Link to={to} className={classes} onClick={onClick}>
      <span>{children}</span>
      <span className="arrow-link-icon" aria-hidden="true">
        <ArrowUpRight size={15} strokeWidth={1.7} />
      </span>
    </Link>
  );
}

export default ArrowLink;
