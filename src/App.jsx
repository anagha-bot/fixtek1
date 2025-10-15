import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useRef } from 'react';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage';
import Services from './Components/Services';
import Footersection from './Components/Footersection';
import Booking from './Components/Booking';
import Whoweare from './Components/Whoweare';
import Partnerwithus from './Components/Partnerwithus';
import Faqs from './Components/Faqs';
import ServiceBooking from './Components/ServiceBooking';

function App() {
  const serviceRef = useRef(null);

  return (
    <Router>
      {/* Pass the ref to Navbar */}
      <Navbar scrollToServiceRef={serviceRef} />

      <Routes>
        <Route path="/" element={<Homepage serviceRef={serviceRef} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/footersection" element={<Footersection />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/who-we-are" element={<Whoweare />} />
        <Route path="/partner-with-us" element={<Partnerwithus />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/service-booking" element={<ServiceBooking />} />
      </Routes>
    </Router>
  );
}

export default App;


