'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Page() {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [message,setMessage]=useState('')
  const [alert,setAlert]=useState(false)
  const [activeuser,setActiveuser]=useState('')


  useEffect(()=>
  {
    setActiveuser(localStorage.getItem('activeuser'))
  },[activeuser])

  function handleSubmit(e)
  {
    e.preventDefault()
    if(username===''||password==='')
    {
      handlealert(true,'Username and password cannot be empty')
    }
    else
    {
      let user;
      if(typeof window !="undefined"){
        user=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):{};
      }
      if(user?.hasOwnProperty(username))
      {
        document.querySelectorAll('#user').value=''
        document.querySelectorAll('#password').value=''
        handlealert(true,'Username has already taken')
      }
      else if(username.length<3||password.length<3)
      {
        document.querySelectorAll('#user').value=''
        document.querySelectorAll('#password').value=''
        handlealert(true,'Username and password should have minimum of length 3')
      }
      else
      {
        
        user[username]=password
        localStorage.setItem('users',JSON.stringify(user))
        document.querySelector('#user').value=''
        document.querySelector('#password').value=''
        handlealert(false,'Created Successfully')
        setActiveuser(username)
      }
    }

  }

  // function handlereset()
  // {
  //   document.querySelector('#user').value=''
  //   document.querySelector('#password').value=''
  // }

  function handlealert(type,info)
  {
    setAlert(type);
    setMessage(info);
    setTimeout(()=>
    {
      setMessage('')
    },3000)
  }


  return (
    <>{(activeuser==='')?<div className='text-center my-20 p-10'>
        <h1 className='p-4 mb-4 mx-36 text-xl w-fit font-bold bg-yellow-500 rounded-md text-black'>Sign-Up Form</h1>
        <form  className='border-2 rounded-md border-yellow-500  p-4'>
        <div className='flex justify-evenly gap-6'>
            <label className='w-24'>Username</label>
            <input type='text' id='user' className='border-none px-2 bg-white rounded-sm text-black focus:outline-none' required onChange={(e)=>setUsername(e.target.value)}/>
        </div><br/>
        <div className='flex justify-evenly gap-6'>
            <label className='w-24'>Password</label>
            <input type='password' id='password' className='border-none px-2 bg-white rounded-sm text-black focus:outline-none' required onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className='w-32 py-2 border-none bg-yellow-500 my-4 rounded-full text-black' onClick={handleSubmit}>Create</button>
        </form>
        {(message!=='')&&<p className={(alert)?'text-red-700 border-2 p-2 my-2 border-red-700 w-fit':'text-green-700 border-2 p-2 my-2 border-green-700 w-fit'}>{message}</p>}
    </div>:<section className='text-center my-20 p-10 '><p className='my-2'>Log-out to create Account</p><Link href={'/'} className='bg-yellow-500 rounded-md text-black p-2 my-2'>Back to Home</Link></section>}</>
  )
}
