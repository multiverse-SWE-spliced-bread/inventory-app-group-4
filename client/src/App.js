import React, { useState, useEffect} from 'react';
import './style.css';
import {Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import SinglePage from './components/singlePage';
 


export const Mp = () => {
  const navigate = useNavigate();

    const [itemsData, setMp] = useState([])

    const getMp = async () => {
      try{
        const result = await fetch('http://localhost:5000')
        const data = await result.json()
        setMp(data)
      } catch (err) {
        console.log("Oh no an error! ", err)
      }
    }
    

    useEffect(() => {
        getMp()

    }, [])

    const [temp, setSinglePage] = useState([])

    const getSinglePage = async (id) => {
      try{
        const result = await fetch(`http://localhost:5000/${id}`)
        var data = await result.json()
        setSinglePage(data)
        sessionStorage.setItem("data", JSON.stringify(data))
        var obj = JSON.parse(sessionStorage.data)
        navigate("view")
        console.log(data)
      } catch (err) {
        console.log("Oh no an error! ", err)
      }
    }

    useEffect(() => {
        getSinglePage()

    }, [])

    return(
        <div>

          {/* temp - testing html and css */}

          <section class="home" id="home">
            <div class="max-width">
              <h1 class="title">Inventory App</h1>
            </div>
          </section>

          <section class="all-items" id="all-items">
            <div class="max-width">
              <h2 class="subtitle">All Items</h2>
              <p class="details">Use the buttons below to add, update and delete products</p>
              <div class='buttons'>
                <button class='add'>Add Item</button>
                <button class='update'>Update Item</button>
                <button class='delete'>Delete Item</button>
              </div>

              <div class="form">
                <form enctype="text/plain" action="submit.php" method="POST">
                  <div class="fields">
                    <div class="field name">
                      <input id="productName" type="text" name="productName" placeholder="Item Name..." required></input>
                    </div>
                    <div class="field email">
                        <select id="productCategory" name="productCategory" required>
                        <option value="" disabled selected hidden>Choose Category...</option>
                          <option value="Men's Clotihng">men's clothing</option>
                          <option value="Women's Clotihng">women's clothing</option>
                          <option value="electronics">electronics</option>
                          <option value="jewelery">jewelery</option>
                        </select>
                    </div>
                  </div>
                  <div class="field textarea">
                    <textarea id="textarea" cols="30" rows="10" name="productDescription" placeholder="Description..." required></textarea>
                  </div>
                  <div class="field">
                    <input id="productImage" type="url" name="productImage" placeholder="Image URL..." required></input>
                  </div>
                  {/*<div class="button">
                    <button type="submit" value="submit">Submit</button>
                  </div>*/}
                  <br></br>
                </form>
              </div>

              <p class="tip">*To find the categaory and decscription of a product, hover over the proudct image*</p>


              <div class='show' id='show'>
                {/* Put rows of data here */}
                {itemsData.map((item) => (<div class="box"><h2 class="title2">{item.title}<br></br>( {item.category} )</h2><p class='space'><br></br></p><p class="productDesc">{item.description}<br></br><button class='buyBtn' onClick={() => {getSinglePage(item.id)}}>More Details</button></p><img class="image" id='a' src={item.image} alt=""/><p class='productTitle'>{item.title}<br></br><div class='price'>£{item.price}</div><br></br><button class='buttonDetails'>Hover for details</button></p></div>))}
              </div>

            </div>
          </section>

          <section class='footer' id='footer'>
            <div class="max-width">
              <p class='footerTxt'>All rights reserved Ⓒ Inventory App</p>
              <p class='footerTxt2'>Produced by Yayhe, Sunny & Scott</p>
            </div>
          </section>
        </div>
    )
}

export default Mp;