import React from 'react'
import { Link } from 'react-router-dom'

const landingpage = () => {
  return (
    <div>
        <div className='text-center '>
            <div className='text-center'>
            <img className="  "src="https://lh5.googleusercontent.com/Y85G7YZH0TSlaX2M2deUzLc6Z97qiVUtiXBj62KOULYAsSdUamnFeH_7Ht3AFgObu5FzKysKIf0_74o=w1349-h625"alt="shopping"/>
            </div>
          
            <h1 className='text-6xl text-lime-600 font-bold'>SAYLANI WELFARE</h1>
            <h1 className='text-2xl text-sky-900 font-bold'>ONLINE MARKET PLACE</h1>
            <button className='border-2 bg-lime-600 w-48 h-12 rounded-md  '><Link to={'/signup'}>Get Started</Link></button>
        </div>
    </div>
  )
}

export default landingpage
