// Destructuring

import { NavLink } from "react-router";

function NavItems({ menu, activeTab, handleClick }) {
    return (
        <div className="flex gap-x-8">
            {menu.map((item, index) => (
                <NavLink
                    className={({ isActive }) =>
                        isActive ? "text[#19918F] font-bold" : "text-black"
                    }
                    key={index}
                    to={item.link}
                >
                    {item.title}
                </NavLink>
            ))}
        </div>
    );
}

export default NavItems;