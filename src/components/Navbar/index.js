import React, { useState } from 'react'
import './index.css'

const Navbar = () =>{
    
    const [checked, setChecked] = useState('')
    const style = checked ? 'nav-list' : 'nav-list hide'

    return(

        <nav className="navbar">
            <div className="logo">
                <a>
                    <img src="https://cdn.worldvectorlogo.com/logos/3-suisses-2.svg"></img>
                </a>
            </div>

            <div className={style}>
                <a href="#" className="nav-item">HOME</a>
                <a href="#" className="nav-item">ABOUT</a>
                <a href="#" className="nav-item">PRODUTOS</a>
                <a href="#" className="nav-item">BLOG</a>
                <a href="#" className="nav-item">CONTATO</a>
            </div>

            <button className="menu-toggle" onClick={()=>setChecked(!checked)}>
                <i className="fas fa-bars "></i>
            </button>


        </nav>



    )
}

export default Navbar 