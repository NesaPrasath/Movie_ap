"use client";
import Link from "next/link";
import React, {useContext } from "react";
import Signin from "./Signin";
import { UserContext } from './Header';

export default function Navheader() {
  const {user,setUser}=useContext(UserContext)
  // console.log(activeuser)np
  // const getCntx = useContext(UserContext);

  function handleSignin() {
    document.getElementById("signinPopup").classList.toggle("hidden");
    console.log("clicked sigin")
    // setShow((prev) => !prev);
  }
  // function handleuser()
  // {
  //   setActiveuser(localStorage.getItem('activeuser'))
  // }
  function handlelogout()
  {
    setUser('')
    localStorage.setItem('activeuser','')
  }
  return (
    <div className="inline-flex">
      {(user==='')&&<button
        className="border-none p-4 mx-1 rounded-md text-center text-white hover:underline underline-offset-4 hover:bg-slate-800"
        onClick={handleSignin}
      >
        Sign in
      </button>}
      {(user!=='')&&<p
        className="border-none p-4 mx-1 rounded-md text-center text-white"
      >
        {localStorage.getItem('activeuser')}
      </p>}
      <Link href="/about">
        <button className="border-none p-4 mx-1 rounded-md text-center text-white hover:underline underline-offset-4 hover:bg-slate-800">
          About
        </button>
      </Link>
      {(user!=='')&&<button
        className="border-none p-4 mx-1 rounded-md text-center text-white hover:underline underline-offset-4 hover:bg-slate-800"
        onClick={handlelogout}
      >
        Logout
      </button>}
        <div id="signinPopup" className={"hidden"}>
          <Signin/>
        </div>
    </div>
  );
}
