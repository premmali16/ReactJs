import React from 'react'
import './Dashboard.css'; // Assuming you have a CSS file for styling
import Navbar from './Navbar'; // Import your Navbar component
import Display from './Display'; // Import your Display component
import Footer from './Footer'; // Import your Navbar component
import About from './About';
import Categories from './Categories'; // Import your Categories component
import Testimonial from './Testimonial'; // Import your Testimonial component
const Dashboard = () => {
  

  return (
  <div className="dashboard">
 <Navbar />
 <Display/>
 <Categories />
 <About />
 <Testimonial />
 <Footer />
</div>


  )
}

export default Dashboard