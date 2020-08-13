import React, {Component} from "react";
import {Link} from 'react-router-dom'
import Navitem from './Navitem'
import Dropdown from './Dropdown'
import DropdownItem from "./DropdownItem";
import {CSSTransition} from "react-transition-group";


class NavBar extends Component {

    state = {

        stage: 'main',
        dropdown: ''
    }

    setNavItem  = (navItem)=> {
        this.setState({dropdown: this.state.dropdown === navItem ? "" : navItem})
        this.setState({stage: 'main'})

    }


    onClick = () => {
        this.setState({
            stage: this.state.stage === ""
        })
    }
    render() {
        return (
        <div className="navbar">
                <Navitem link="settings" onClick={()=>this.setNavItem('settings')}>

                  {this.state.dropdown == 'settings' && <Dropdown stage={
                            this.state.stage
                        }>

                <CSSTransition classNames="main"
                        timeout={
                            {
                                enter: 500,
                                exit: 500
                            }
                        }
                        unmountOnExit={true}
                        in={
                            this.state.stage == "main"
                    }

                    onExited={()=> {
                        this.setState({stage: "extra"})
                    }}
                    
                    >
            
               
                <div className="drop">

                      
          
                            <DropdownItem onClick={
                                    this.onClick
                                }
                                iconRight="&rarr;">
                                More
                            </DropdownItem>

                            <DropdownItem onClick={
                                    this.onClick
                                }
                                iconLeft="&copy;">
                                More
                            </DropdownItem>

                            <DropdownItem onClick={
                                    this.onClick
                                }
                                iconLeft="&copy;">
                                Account
                            </DropdownItem>

                            </div> 

       

                     

                       
                        </CSSTransition>

                       

                   
                        <CSSTransition appear={true}
                        classNames="extra"
                        timeout={
                            {
                                enter: 500,
                                exit: 500
                            }
                        }
                        unmountOnExit={true}
                        in={
                            this.state.stage == "extra"
                    }    onExited={()=> {
                        this.setState({stage: "main"})
                    }}>
    
    <div className="drop">
                            <DropdownItem onClick={
                                    this.onClick
                                }
                                iconLeft="&larr;">
                                Back
                            </DropdownItem>

                </div>

                          

                       

                      
            

             </CSSTransition>

             </Dropdown>}
                  
                    

                </Navitem>


                
                <Navitem link="About" onClick={()=> this.setNavItem('about')}>

                  {this.state.dropdown == 'about' && <Dropdown stage={
                            this.state.stage
                        }>

                <CSSTransition classNames="main"
                        timeout={
                            {
                                enter: 500,
                                exit: 500
                            }
                        }
                        unmountOnExit={true}
                        in={
                            this.state.stage == "main"
                    }

                    onExited={()=> {
                        this.setState({stage: "extra"})
                    }}
                    
                    >
            
               
                <div className="drop">

                      
          
                            <DropdownItem onClick={
                                    this.onClick
                                }
                                iconRight="&rarr;">
                                About Me
                            </DropdownItem>

                            <DropdownItem onClick={
                                    this.onClick
                                }
                                iconLeft="&user;">
                                More
                            </DropdownItem>

                            <DropdownItem onClick={
                                    this.onClick
                                }
                                iconLeft="&copy;">
                                Account
                            </DropdownItem>

                            </div> 

       

                     

                       
                        </CSSTransition>

                       

                   
                        <CSSTransition appear={true}
                        classNames="extra"
                        timeout={
                            {
                                enter: 500,
                                exit: 500
                            }
                        }
                        unmountOnExit={true}
                        in={
                            this.state.stage == "extra"
                    }    onExited={()=> {
                        this.setState({stage: "main"})
                    }}>
    
    <div className="drop">
                            <DropdownItem onClick={
                                    this.onClick
                                }
                                iconLeft="&larr;">
                                Back
                            </DropdownItem>

                </div>

                          

                       

                      
            

             </CSSTransition>

             </Dropdown>}
                  
                    

                </Navitem>


    </div>
        );

    }
};

export default NavBar;
