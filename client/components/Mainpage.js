import React, { useState, useEffect } from 'react';


export const Mp = () => {
    const [itemsData, setMp] = useState([])

    const getMp = async () => {

        const result = await fetch('http://localhost:5000')
        const data = await result.json()

        setMp(data)
    }

    useEffect(() => {
        getMp()

    }, [])

    return(
        <div>
            <h1>Hello world</h1>
            <h2>itemsData= {itemsData}</h2>
        </div>


    )
}