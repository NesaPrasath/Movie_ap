"use client";
import Logo from "./Logo";
import Menubar from "./Menubar";
import Navheader from "./Navheader";
import Searchbar from "./Searchbar";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export default function Header({children}) {
  // const [signin, setSignin] = useState(false);
  const [user, setUser] = useState("");
  useEffect(()=>
  {
    setUser(localStorage.getItem('activeuser'))
  },[])
  return (
    <><UserContext.Provider value={{user,setUser}}><div className="flex justify-center gap-2 p-2 text-center w-full">
      <Logo />
      <Menubar />
      <Searchbar />
      <Navheader />
    </div>
    {children}</UserContext.Provider></>
  );
}
