// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect} from 'react';
import './style.css';

export const Mp = () => {

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
              <p class="tip">*To find the categaory and decscription of a product, hover over the proudct image*</p>

              <div class='show' id='show'>
                {/* Put rows of data here */}
                {itemsData.map(item => (<div class="box"><h2 class="title2">{item.title}<br></br>( {item.category} )</h2><p class='space'><br></br></p><p class="productDesc">{item.description}<br></br><button class='buyBtn'>Buy now</button></p><img class="image" id='a' src={item.image} alt=""/><p class='productTitle'>{item.title}<br></br><div class='price'>£{item.price}</div><br></br><button class='buttonDetails'>Hover for details</button></p></div>))}
              </div>

            </div>
          </section>

          <section class='footer' id='footer'>
            <div class="max-width">
              <p class='footerTxt'>All rights reserved Ⓒ</p>
              <p class='footerTxt2'>Proudced by Yayhe, Sunny & Scott</p>
            </div>
          </section>
        </div>
    )
}

export default Mp;