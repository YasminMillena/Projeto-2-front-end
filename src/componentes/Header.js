import React from "react";
import './Header.css'

export default function header(){
    return(
        <div className="header-container">
            <p className="header-content1">Our Blog</p>
            <p className="header-content2">Resources and insights</p>
            <p className="header-content3">The latest industry news, interviews, technologies, and resources.</p>

            <div className="search-box">
            <i className="fas fa-search"></i>
            <input type="search" placeholder="Search" className="search" />

            </div>
            

        </div>

       
    )
}