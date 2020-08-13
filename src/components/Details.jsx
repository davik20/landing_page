import React from 'react'

function Details() {
    return (
        <div className="container">
            <div className="details">
                <div className="details__text">
                    <h6>Our services</h6>
                    <h4>We build experience </h4>
                    <p>Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros</p>

                </div>

                <div className="details__grid">
                    <div className="box">
                        <div className="imgBox">
                        <img src="img/Vectorspeaker.png"/>
                        </div>
                        
                        <h6>Design</h6>
                        <p>Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros</p>

                        <a>Learn More</a>

                    </div>

                    <div className="box">
                    <div className="imgBox">
                        <img src="img/Vectorspeaker.png"/>
                        </div>
                        <h6>Ecommerce</h6>
                        <p>Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros</p>

                        <a>Learn More</a>

                    </div>

                    <div className="box">
                    <div className="imgBox">
                        <img src="img/Vector.png"/>
                    </div>
                       
                        <h6>Application</h6>
                        <p>Lorem ipsum dolor sit amet, coectetur adipiscing elit. Suspendisse varius enim in eros</p>

                        <a>Learn More</a>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Details
