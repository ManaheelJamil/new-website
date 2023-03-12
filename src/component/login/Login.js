import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
export default function Login() {

    return (
        <>
            <div className='text-center mt-10'>
                <div >
                    <h1 className='text-5xl text-lime-600 font-bold'>SAYLANI WELFARE</h1>
                    <h1 className='text-2xl text-sky-900 font-bold'>ONLINE MARKET PLACE</h1><br/><br/><br/>
                    <input type="email" placeholder='UserName' className='w-64 h-10 rounded-md pl-5' /><br />
                    <input type="email" placeholder='Email' className='w-64 h-10 rounded-md pl-5' /><br />
                    <input type="password" placeholder='password' className=' w-64 h-10 rounded-md pl-5' /><br /><br />
                  <p className='text-sky-900 text-xs font-bold mr-32'>Forget Password?</p><br/><br/>
                    <input type={"radio"} /> Sales
                    <input type={"radio"} className="ml-12" /> Purchase

                    <br />
                    <button className='border-black w-64 h-10 mt-10 ring-2 ring-black rounded-md shadow-black' >  <Link to={"/Home"} className='  text-xs'>Signin</Link></button>


                </div>
            </div>
        </>
    )
}