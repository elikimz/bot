import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'

// import Effect from './Effect'
// import Cleanup from './cleanup'
 //import Fetchdata from './fetchdata'
 //import Rendering  from './Rendering'
//import Circuit from './circuit'
//import Form from './form'
//import UseEffectCleanup from './UseEffectCleanup'
 //import ShowAndHide from './ShowAndHide'
//import Form from './FormMultipleInput'
//import UseRef from './UseRef'
//import UseReducer from './Reducer/UseReducer'
//import ValentineLoveLinks from './valentine'
import CheckoutButton from './stripe'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <CheckoutButton/>
  </StrictMode>
)
