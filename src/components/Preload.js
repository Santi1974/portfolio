import React, { useEffect} from 'react'
import logo from "../assets/logowhite1.png"
import "./preload.css"
import { preLoaderAnim } from '../animations';

const Preload = () => {

    useEffect(()=>{
        preLoaderAnim()
    },[]);

  return (
    
    <div className='preloader'>
        <img src={logo} alt='santiago-beneitez-logo'></img>
        <span id='text'>...</span>
        <span class="loader"></span>
    </div>
  )
}

export default Preload