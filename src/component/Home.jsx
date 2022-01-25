import React from 'react';
import Orders from './DataTable';
import Navbar from './Navbar';

const Home =()=>{
    return(<>
    
        <Navbar/>
        <section className="hero-section">
        <Orders/>
      </section> 
    </>)
}

export default Home;
