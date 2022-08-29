
import React, { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
  import {CgProfile} from "react-icons/cg"
  import {FiArrowRightCircle,FiArrowLeftCircle,FiLogOut } from 'react-icons/fi'
import "react-pro-sidebar/dist/css/styles.css";

const Slide = () => {
    const [menuCollapse, setMenuCollapse] = useState(false)

    function refreshPage() {
        window.location.reload(false);
      }
      
  const menuIconClick = () => {
   
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div className="relative right-[25rem] w-[50rem] top-20">
        <>
      <div id="header" className="h-[38rem] static relative top-7 w-[220px] shadow-lg">
        
        <ProSidebar collapsed={menuCollapse} className="h-screen">
          <SidebarHeader >
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "jk" : "JK" }</p>
            </div>
            <div className="closemenu leading-10 z-[9999] cursor-pointer rounded-md text-[22px] m-4  p-1 " 
            onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} className="bg-[#FBB666]" icon={<CgProfile />}>
                Profile
              </MenuItem>
             
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={refreshPage} className="hover:bg-[#FBB666]">Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
    </div>
  )
}

export default Slide