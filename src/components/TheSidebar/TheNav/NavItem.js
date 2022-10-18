import { useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavItem = ({
  classes,
  icon,
  children: label,
  path,
  mainPath,
  onClick,
}) => {
  const labelRef = useRef();
  const location = useLocation();

  const handleClick = (e) => {
    if (!onClick) return;
    e.preventDefault();
    onClick(labelRef.current);
  };

  const activeNavItemClasses = {
    color: "white",
    backgroundColor: "#282828",
  };

  return (
    <NavLink
      to={path}
      className={classes}
      onClick={handleClick}
      style={({ isActive }) => {
        if (location.pathname.includes(mainPath)) isActive = true;

        return isActive && path !== "#" ? activeNavItemClasses : undefined;
      }}
      end={path === "/" && true}
    >
      {icon}
      <span ref={labelRef} className="ml-4 text-sm font-semibold">
        {label}
      </span>
    </NavLink>
  );
};

export default NavItem;
