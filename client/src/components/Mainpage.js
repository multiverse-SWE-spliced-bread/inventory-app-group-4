import React, { useState, useEffect } from 'react';
import { itemList } from './itemList';


export const Mp = () => {
    const [itemsData, setMp] = useState([])

    const getMp = async () => {

        const result = await fetch('http://localhost:3000/items')
        const data = await result.json()

        setMp(data)
    }

    useEffect(() => {
        getMp()

    }, [])

    return(
        <div>
            <h1>Hello world</h1>
            <itemList items= {items}/>
        </div>


    )
}