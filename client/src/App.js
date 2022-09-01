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


import React, { useState, useEffect } from 'react';
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
          Hello world
          
          {itemsData.map(item => (<div>{item.title}</div>))}

          
          





















          {/* temp - testing html and css */}

          <section class="home" id="home">
            <div class="max-width">
              <h1 class="title">Inventory App</h1>
            </div>
          </section>

          <section class="all-items" id="all-items">
            <div class="max-width">
              <h2 class="subtitle">All Items</h2>

                {/* Put rows of data here */}

              </div>
          </section>

        </div>
    )
}

export default Mp;