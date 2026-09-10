import React, { use, useEffect, useState } from 'react'

export default function Time() {

    const initialTime = new Date().toLocaleTimeString()
    
    const [currentTime, setCurrentTime] = useState(initialTime)

    setInterval(() => {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        setCurrentTime(timeString)
    }, 1000);


    return (
        <div>
            <p>
                current time is : {currentTime}
            </p>
        </div>
    )
}
