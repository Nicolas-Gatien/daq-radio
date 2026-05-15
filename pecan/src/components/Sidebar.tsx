import banner from "../assets/banner.png";
import sidebarIcon from "../assets/sidebar-icon.png"
import SidebarOption from "./SidebarOption";

interface InputProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onOpenSettings: () => void;
}

function Sidebar({ onClose, onOpen, isOpen, onOpenSettings}: Readonly<InputProps>) {
  const handleSettingsClick = () => {
    onOpenSettings();
  };

  if (isOpen) {
    return (
      <div id="sidebar" className="bg-raven-gray z-100 w-[214px] h-full flex flex-col p-[20px] gap-[53px] transition-all overflow-clip">
        <img src={banner} alt="banner" />
        <div className="flex flex-col">
          {/* Could create a global function to close the sidebar and use it in the component rather than passing onClose in every time */}
          <SidebarOption text="Dashboard" path="/dashboard" />
          <SidebarOption text="Accumulator" path="/accumulator" />
          <SidebarOption text="Chargecart" path="/chargecart" />
          <SidebarOption text="Monitor Builder" path="/monitor-builder" />
          <SidebarOption text="System Link" path="/system-link" />
          <button onClick={handleSettingsClick}>
            <span className="text-sidebarfg">Settings</span>
          </button>
        </div>
        <div className="mt-[auto] ml-[auto]">
          {/* Settings - opens modal */}
          <button onClick={onClose}>
            <img src={sidebarIcon} alt="close sidebar" className="w-[25px] hover:brightness-105 hover:scale-105 transition-all ease-in-out" />
          </button>
        </div>
      </div>
    );
  }

  return (
      <div id="sidebar" className="bg-raven-gray z-100 w-[65px] h-full flex flex-col p-[20px] gap-[53px] transition-all  ease-in-out overflow-clip">
        <img src={banner} alt="banner" />
        <div className="flex flex-col">
          {/* Could create a global function to close the sidebar and use it in the component rather than passing onClose in every time */}
        </div>
        <div className="mt-[auto] ml-[auto]">
          {/* Settings - opens modal */}
          <button onClick={onOpen}>
            <div>
              <img src={sidebarIcon} alt="close sidebar" className="w-[25px] hover:brightness-125 hover:scale-105 transition-all  ease-in-out" />
            </div>
          </button>
        </div>
      </div>
    );


}

export default Sidebar;