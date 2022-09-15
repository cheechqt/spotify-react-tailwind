import { useRef } from "react";
import { Link } from "react-router-dom";

const NavItem = ({ classes, icon, children: label, path, onClick }) => {
  const labelRef = useRef();

  const handleClick = (e) => {
    if (!onClick) return;
    e.preventDefault();
    onClick(labelRef.current);
  };

  return (
    <Link to={path} className={classes} onClick={handleClick}>
      {icon}
      <span ref={labelRef} className="ml-4 text-sm font-semibold">
        {label}
      </span>
    </Link>
  );
};

export default NavItem;
