import React from 'react'
import './index.css'

const Navbar = () =>{
    return(


        <nav className="navbar">
            <div className="logo">
                <a>
                    <img src="https://cdn.worldvectorlogo.com/logos/3-suisses-2.svg"></img>
                </a>
            </div>

            <div className="nav-list">
                <a href="#" className="nav-item">HOME</a>
                <a href="#" className="nav-item">ABOUT</a>
                <a href="#" className="nav-item">PRODUTOS</a>
                <a href="#" className="nav-item">BLOG</a>
                <a href="#" className="nav-item">CONTATO</a>

            </div>



        </nav>



    )
}

export default Navbar 