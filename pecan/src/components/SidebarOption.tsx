import { NavLink } from "react-router";

interface InputProps {
  text: string;
  path: string;
}

function SidebarOption({text, path}: Readonly<InputProps>) {
  /*
  className={({ isActive }) =>
          `flex items-center box-border px-3 !no-underline ${isActive
            ? "bg-option-select md:rounded-r-md md:mr-[-2%]"
            : "bg-option hover:bg-white/10 transition-colors duration-450"
          }`
        }
  */  

  return (
      <NavLink className="!no-underline" to={path}>
        <span className="font-heading text-[20px] text-clip text-nowrap font-bold text-raven-light-gray hover:text-white ">{text}</span>
      </NavLink>
  );
}

export default SidebarOption;
