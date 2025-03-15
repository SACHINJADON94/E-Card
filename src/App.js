import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Men from './Components/Men'
import Product from './Components/Product'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import Contact from './Components/Contact'
import About from './Components/About'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/men' element={<Men />} />
                    <Route path='/product/:id' element={<Product />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    )
}




// import React from 'react'
// import NavBar from './Components/NavBar'
// import Home from './Components/Home'
// import Product from './Components/Product'
// import Login from './Components/Login'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Footer from './Components/Footer'
// import Signup from './Components/Signup'
// import Men from './Components/Men'
// import Cart from './Components/Cart'
// import Cart from './Components/About'

// export default function App() {
//   return (
//    <>
//    <BrowserRouter>
//    <NavBar/>
//    <Routes>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/product' element={<Product/>}/>
//     <Route path='/login' element={<Login/>}/>
//     <Route path='/signup' element={<Signup/>}/>
//     <Route path='/men' element={<Men/>}/>
//     <Route path='/product/:id' element={<Product/>}/>
//     <Route path='/cart' element={<Cart/>}/>
//     <Route path='/about' element={<About/>}/>
//    </Routes>
//    </BrowserRouter>
//    <Footer/>
//    </>
//   )
// }
