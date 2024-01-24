import { BrowserRouter, Route, Routes } from "react-router-dom"
import QRCode from "./components/qrCode.jsx"


function App() {
 

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<QRCode/>} />
        </Routes>
       
       </BrowserRouter>
    </>
  )
}

export default App
