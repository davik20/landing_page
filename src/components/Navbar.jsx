import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
          
            <div className="container">
            <nav className="navbar">
                

               
                <div className="logoBox">
                        <span><img className="logoImg" src="img/Vectorlogo.png"/></span>
                        <p className="logoName">Freehand</p>
                </div>

                <div className="navLinks">

                        <li className="navLinks__item"><a>Home</a></li>
                        <li className="navLinks__item"><a>Portfolio</a></li>
                        <li className="navLinks__item"><a>Pages</a></li>
                        <li className="navLinks__item"><a>Blog</a></li>
                </div>
                <div className="authBox">
                    <button className="authBox__signUp">
                        Sign Up
                    </button>

                    <button className="authBox__login">
                        Login
                    </button>
                </div>
                
            </nav>

            </div>
        )
    }
}
