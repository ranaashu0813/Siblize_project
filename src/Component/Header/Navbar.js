import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="max-width navbars">
       
      <img src="/logo.png" alt="siblize-logo"
      className="header-logo"/>
    
    
    <div className="navbar-centerr">
        <div className="navbar-center-search-containerr">
            <div className="property-types">
                <div className="containers">
                <span className="cpt" >Choose property type</span>
                <span className="sup">Select Your Property</span>
                </div>
                <div className="drop-down-icon">
                <i className="fa-sharp fa-solid fa-caret-down"></i>
                </div>
                <div className="seperators"></div>
                <div className="location-search-bars">
                <div className="containers">
                <span className="cpt" >Find In and Around</span>
                <span className="sup">Enter college/office/city/Locality</span>
                </div>
                <div className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>

                </div>
            </div>
           
            </div>
             

        </div>
    </div>
    <div className="navbar-rightside">
    <div className="knowmoreee">
                <span className="knowmore-head">Know more</span>
                <div className="drop-downs">
                <i className="fa-sharp fa-solid fa-caret-down"></i>
                </div>
             </div>
             <div className="calls">
                <div className=" whatsapp-logo">
                <i className="fa-brands fa-whatsapp"></i>
                </div>
                <span className="requests"> Request A Callback</span>
             </div>
    </div>
    
    </div>
    </>
  )
}

export default Navbar
