import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Link from "next/link";
import { UserContext } from "./Header";
// import { ShowContext } from './Navheader'

export default function Signin({ func }) {
  // const {show,setShow}=useContext(ShowContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState("");
  const {user,setUser}=useContext(UserContext)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUsers(JSON.parse(localStorage.getItem("users")));
      // const user=JSON.parse(localStorage.getItem("users"))
    }
  }, []);

  function handleclick() {
    document.getElementById("signinPopup").classList.toggle("hidden");
    // setShow(prev=>!prev)
  }
  function handlesubmit(e) {
    e.preventDefault();
    if (username === "" || password == "") {
      document.getElementById("message").innerHTML =
        "username and password cannot be empty";
    } else if (password.length < 4 || username.length < 4) {
      document.getElementById("message").innerHTML =
        "username and password should have minimum of length four";
    } else {
      e.preventDefault();
      if (users.hasOwnProperty(username) && users[username] === password) {
        if (typeof window != "undefined") {
          localStorage.setItem("activeuser", username);
        }
        setUser(username)
        handleclick();
      } else {
        document.querySelector("#message").innerHTML =
          "Invalid username and password";
      }
      setTimeout(() => {
        document.getElementById("message").innerHTML = "";
      }, 2000);
      document.querySelector("#user").value = "";
      document.querySelector("#password").value = "";
    }
  }

//   const Comp = useMemo(() => {
//     return [1,2,3,342,342,34,345,3];
//   }, []);

//   const Compon = useCallback(() => {
    
//     return (
//       <div>
//         <p>From useCallback</p>
//         <input type="text" />
//       </div>
//     );
//   },[]);
  return (
    <div className="fixed inset-y-0 inset-x-6 bg-black-st z-30 ">
      <div className="bg-white relative left-35% top-28 w-fit h-fit text-black p-4 rounded-md">
        {/* useMemo */}
        {/* <Comp /> */}
        {/* useCallback */}
        <h1 className="p-4 text-xl  w-full text-center font-bold">
          Login Form
        </h1>
        <form className="border-2 rounded-md border-yellow-500  p-4">
          <div className="flex justify-evenly text-left gap-6 flex-col">
            <label className="w-24 font-semibold">Username</label>
            <input
              type="text"
              id="user"
              className="border-b-2 border-black px-2 bg-white rounded-sm  text-black focus:outline-none"
              placeholder="username"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="flex justify-evenly text-left gap-6 flex-col">
            <label className="w-24 font-semibold">Password</label>
            <input
              type="password"
              id="password"
              className="border-b-2 border-black px-2 bg-white rounded-sm text-black focus:outline-none"
              placeholder="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            className="w-32 py-2 border-none bg-yellow-500 my-4 rounded-full text-black"
            onClick={handlesubmit}
          >
            Submit
          </button>
        </form>
        <p id="message" className="text-red-700 p-2"></p>
        <p>
          {`By signing in, you agree to LOGO's Conditions of`}
          <br />{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline hover:decoration-blue-600"
          >
            Use and Privacy Policy.
          </a>
        </p>
        <Link href={"/signup"}>
          <button
            className="p-2 my-2 rounded-md bg-transparent text-black hover:underline decoration-black hover:bg-slate-300"
            onClick={handleclick}
          >
            Create Account
          </button>
        </Link>
        <button
          className="w-fit rounded-50% absolute top-0 right-0 font-bold bg-white text-black z-30 px-3 py-1"
          onClick={handleclick}
        >
          X
        </button>
      </div>
    </div>
  );
}
