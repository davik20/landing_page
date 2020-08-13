import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

export default class Hero extends Component {
    state = {
        img: "img-1",
        count: 0


    }

    images = ['img-1', 'img-2', 'img-3']

    changeImagePositive =()=> {
    
        const count =  Math.min(this.state.count + 1, this.images.length -1)
        this.setState({
            count
        })
        this.setState({
            img: this.images[count]
        })

       
    }

    changeImageNegative =()=> {
        const count = Math.max(this.state.count - 1, 0)
        this.setState({
            count
        })
        this.setState({
            img: this.images[count]
        })
    }




    render() {
        return (
            
                <div className="container">
                    <div className="hero">
                  <div className="hero__text">
                            <h6>Freehand Your Brand with a beautiful website</h6>
                            <p>Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros</p>
                            <button className="hero__button">
                                View Projects
                            </button>
                            <button className="hero__button--1">
                                Learn more
                            </button>
                  </div>
                  <div className="hero__carousel">
                       <img className="carouselLeft" src="img/left.png" onClick={()=> this.changeImageNegative()}/>

                       <img className="carouselRight" src="img/right.png" onClick={()=> this.changeImagePositive()}/>
                       <CSSTransition  in={this.state.img === "img-1"} timeout={500} classNames="IMG-1" unmountOnExit={true}  mountOnEnter={true}  >
                       <img className="img" src="img/Rectanglepeople.png"/>
                       </CSSTransition>
                       <CSSTransition  in={this.state.img === "img-2"} timeout={500} classNames="IMG-2" unmountOnExit={true}  mountOnEnter={true}  >
                       <img className="img" src="img/Rectanglelaptop.png"/>
                       </CSSTransition>
                       <CSSTransition  in={this.state.img === "img-3"} timeout={500} classNames="IMG-3" unmountOnExit={true}  mountOnEnter={true}  >
                       <img  className="img" src="img/Rectangleperson.png"/>
                       </CSSTransition>
                       
                  </div>
                </div>
            </div>
        )
    }
}
