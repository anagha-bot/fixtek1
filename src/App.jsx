import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes}from 'react-router-dom'
import Navbar from'./Components/Navbar';
import Homepage from './Components/Homepage';
import Services from './Components/Services';
import Footersection from './Components/Footersection';
import Booking from './Components/Booking';
import Whoweare from './Components/Whoweare';
import Partnerwithus from './Components/Partnerwithus';
import Faqs from './Components/Faqs';
import ServiceBooking from './Components/serviceBooking';



function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/"element={<Homepage/>}/>
       <Route path="Services"element={<Services/>}/>
     <Route path="Footersection"element={<Footersection></Footersection>}/>
      <Route path="/booking"element={<Booking/>}/>
       <Route path="/who-we-are"element={<Whoweare/>}/>
        <Route path="/partner-with-us"element={<Partnerwithus/>}/> 
        <Route path="/faqs"element={<Faqs/>}/>
        <Route path="service-booking"element={<ServiceBooking/>}/>
      </Routes>
    </Router>
  )
}
export default App;
