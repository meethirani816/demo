import React from "react";
import { useUserContext } from "@/context/userContext";

function Sidebar() {
  const { logoutUser } = useUserContext();
  return (
    <div className="w-[20rem] mt-[5rem] h-[calc(100%-5rem)] fixed right-0 top-0 bg-[#f9f9f9] flex flex-col">
        Sidebar
    </div>
  );
}

export default Sidebar;