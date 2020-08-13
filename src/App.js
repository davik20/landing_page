import React, {Component, Fragment} from "react";
import {CSSTransition} from "react-transition-group";



import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Details from "./components/Details";


class App extends Component {
    state = {
        page: "hero",
        navbar: true,
        count: 0,
       

    }

    pages = ['hero', 'details']

    render() {
        return (
            <div className="app">
         <CSSTransition  in={this.state.navbar} timeout={{enter: 1000, exit: 200}} classNames="NAV"> 
           <NavBar/>
        </CSSTransition>
        <CSSTransition   in={this.state.page=="hero"} timeout={{enter: 1000, exit: 500}} classNames="HERO" unmountOnExit={true} mountOnEnter={true} >
           <Hero/>
        </CSSTransition>
        <CSSTransition in={this.state.page=="details"} timeout={{enter: 1000, exit: 500}} classNames="DETAILS" unmountOnExit={true} mountOnEnter={true}>
           <Details/>
        </CSSTransition>
        <div className="navigatorBox">
            <button className="navigator navigator--prev" onClick={()=> {
                      const count = Math.max(this.state.count - 1, 0)
                      this.setState({
                          count
                      })
                      this.setState({
                          page: this.pages[count]
                      })

              
            }}>
                Prev
            </button>

            <button className="navigator navigator--next glowNext" onClick={()=> {
                     const count =  Math.min(this.state.count + 1, this.pages.length -1)
                     this.setState({
                         count
                     })
                     this.setState({
                         page: this.pages[count]
                     })

              
            }}>
                Next
            </button>
            </div>
           </div>
        );
    }
}



export default App;
