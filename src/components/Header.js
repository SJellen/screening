import React from 'react'
import '../style/Header.css';





function Header() {



        return (
            <div className="header">
            <div className="header-left-container">
                <span className="title">Screening</span>
                    <div className="menu-box">
                         <i className="im im-menu"></i>
                        <span className="menu-span">Menu</span> 
                    </div>
            </div>
                
                
                <div className="input-container">
                    <input
                        className="input"
                        type="text"
                        placeholder="Search Screening"
                        maxLength="20"
                    
                     />
                </div>
            </div>
        )
}



export default Header