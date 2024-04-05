import React from 'react'
import './dash-nav.css'
import task from "./cable.svg";
import logo from "./logo.png";
import { Link } from 'react-router-dom';


const DashNav = () => {
  return (
    <div className='dash-nav'>
        <div className='img'>
            <img src={logo}/>
        </div>
        <div className='info'>
            <div className='ball'>

            </div>
            <div className='box'>
                <p>
                Promise International School
                </p>
                <p>
                    Student    
                </p>

            </div>

        </div>

       <Link to={"/dashboard"}>
       <div className='link'>
            <img src={task} alt=''/> <div className='text'>Result</div>
        </div></Link>

    </div>
  )
}

export default DashNav