import { NavLink } from "react-router-dom";
import { LIBRARYTABS } from "data";

function TabButtons() {
  const activeNavItemClasses = {
    color: "white",
    backgroundColor: "#282828",
  };

  return (
    <nav className="pl-6">
      {LIBRARYTABS.map((tab) => {
        return (
          <NavLink
            key={tab.title}
            className="mr-2 text-white relative inline-block md:py-3 md:px-4 py-2 px-3 rounded"
            to={tab.path}
            style={({ isActive }) =>
              isActive ? activeNavItemClasses : undefined
            }
            end
          >
            <p className="text-sm font-bold leading-4 m-0">{tab.title}</p>
          </NavLink>
        );
      })}
    </nav>
  );
}

export default TabButtons;
