import React from 'react';
import { Route,Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

export const MyComponent =() =>
{
  return (
  <>
  <Routes>
    <Route exact path='/' Component={About}/>
    <Route path='/contact' Component={Contact}/>
  </Routes>
{/* <About/>
<Contact/> */}
  </>
  );
} 

export default MyComponent;
