import { useRef } from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ classes, icon, children: label, path, onClick }) => {
  const labelRef = useRef();

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
      style={({ isActive }) =>
        isActive && path !== "#" ? activeNavItemClasses : undefined
      }
      end
    >
      {icon}
      <span ref={labelRef} className="ml-4 text-sm font-semibold">
        {label}
      </span>
    </NavLink>
  );
};

export default NavItem;
