import React from 'react'
import { NavLink } from 'react-router-dom'
import "./header.css"
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div>
        <header>
            <h1 className='headertext'>Pulse<span className='point'>.</span></h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"} className={(navData)=>navData.isActive? "active" :""}>Home</NavLink>
                        <NavLink to={"/about"} className={(navData)=>navData.isActive? "active" :""}>About</NavLink>
                        <NavLink to={"/restaurant"} className={(navData)=>navData.isActive? "active" :""}>Restaurant</NavLink>
                        <NavLink to={"/add"} className={(navData)=>navData.isActive? "active" :""}>Add</NavLink>
                    </li>

                </ul>
  
            </nav>
            <div className='reservation'>
<p style={{color:"rgb(121,97,27)"}}>Reservations</p>
<FaPhoneAlt />
<p>652-345 3222 11</p>
                    </div>
                    <div className='menu'>
                        <p><GiHamburgerMenu />
</p>
                    </div>
        </header>
      
    </div>
  )
}

export default Header
