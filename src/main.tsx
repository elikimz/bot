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
import Form from './FormMultipleInput'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Form/>
  </StrictMode>
)
