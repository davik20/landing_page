import React from 'react'

function Page({color= "black", class}) {
    return (
        <div className={class} style={{backgroundColor: color}}>
            
        </div>
    )
}

export default Page
