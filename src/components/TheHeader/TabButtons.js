import { NavLink } from "react-router-dom";
import { LIBRARYTABS } from "data";

function TabButtons() {
 return (
   <nav className="pl-6">
     {LIBRARYTABS.map((item) => {
       return (
         <NavLink
           key={item.title}
           className="mr-2 text-white relative inline-block md:py-3 md:px-4 py-2 px-3 rounded"
           to={item.path}
           exact
           activeClassName="activeTabBtn"
         >
           <p className="text-sm font-bold leading-4 m-0">{item.title}</p>
         </NavLink>
       );
     })}
   </nav>
 );
};

export default TabButtons