import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './assets/css/grid.css'
import './assets/css/base1.css'
import './assets/css/cart.css'
import './assets/css/main.css'
import './assets/css/base1.css'
import './assets/css/reponsive.css'
import './assets/css/reponsive_cart.css'

import { Route, Routes } from 'react-router-dom'
import { RoutePage } from './routers/Routes'
interface IRoute{
  path:string
  element:JSX.Element
}
function App() {
  return (
    <Routes>
      <Route>
        {
          RoutePage.map((item:IRoute,index)=>(
            <Route key={index} path={item.path} element={item.element}></Route>
          ))
        }
      </Route>
    </Routes>
  )
}

export default App
