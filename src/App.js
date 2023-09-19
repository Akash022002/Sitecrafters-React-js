
import './App.css';
import React from 'react';
import Nav from './components/Nav_block/nav'
import About from './components/About/Aboutmain';
// import for show the error when wrong page source was enterd
import Errorpage from './components/Errorpage/Errorpage';
import Login from './components/Loginpage/Loginmain';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Mainlogin from './components/Loginpage/Mainlogin/Mainloginform';
import Servicespage from './components/Services/Services';
import Contact from './components/Contactpage/Contact';
import Pricing from './components/Pricing/Pricing';

const Router = createBrowserRouter([
  { path:'/', element:<Nav/>,errorElement:<Errorpage/>},
  { path:'/about', element: <About/>},
  { path:'/login?', element:<Login/>},
  { path:'/Mainlogin?', element:<Mainlogin/>},
  { path:'/services?', element:<Servicespage/>},
  { path:'/contact?', element:<Contact/>},
  { path:'/pricing?', element:<Pricing/>}
])

function App() {
  return(
    <RouterProvider router={Router}>
    </RouterProvider>
  );
}

export default App;
