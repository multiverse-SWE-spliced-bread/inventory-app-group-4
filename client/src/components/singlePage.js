import '../style.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mp } from '../App'

export const SinglePage = () => {
    const navigate = useNavigate()

    var data = sessionStorage.getItem("data")
    console.log(data)
    
    return (
        <div>
            <section class="home" id="home">
            <div class="max-width">
              <h1 class="title">View Item</h1>
              <p>{data}</p>

              {/*{itemsData.slice(2, 3).map(item => (<div>{item.id} {item.title}</div>))}*/}

              <button onClick={() => navigate(-1)}>Back</button>
            </div>
          </section>
        </div>
    )
}

export default SinglePage;