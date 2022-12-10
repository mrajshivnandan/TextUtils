import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import './myStyle.css';
import { useState } from 'react';
import DismissAlert from './components/DismissAlert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
    const [mode,setMode]= useState("light");
    const [alert,setAlert]= useState(null)

    const showAlert= (message,type,time=1000)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=>{setAlert(null)},time);
    }
    const toggleMode=()=>{
      if(mode === "light"){
        setMode("dark")
        document.body.style.backgroundColor= "#353544";
        document.body.style.color= "white";
        document.title= 'TextUtils - Darkmode'
        let elements = document.getElementsByClassName("btn-primary");
        for (let i = 0; i < elements.length; i++) {
            // @ts-ignore
            elements[i].style.backgroundColor="#2f567a";
        }
        showAlert("Dark mode has been enabled.","success",1500)
      }else{
        setMode("light")
        document.body.style.backgroundColor= "white";
        document.body.style.color= "black";
        document.title= 'TextUtils - Lightmode'
        showAlert("Light mode has been enabled.","success",1500)
        setTimeout(()=>{setAlert(null)},2000);
      }
    }

    const NAV_ALERT= (
      <div>
      <Navbar title="TextUtils" menu2="About" mode= {mode} toggleMode={toggleMode}/>
      <DismissAlert alert={alert}/>
      </div>
      );

  return (
      // <>
      // <Navbar title="TextUtils" menu2="About" mode= {mode} toggleMode={toggleMode}/>
      // <DismissAlert alert={alert}/>
      // <div className="container">
      //   <TextForm heading= "Enter the text below: " showAlert={showAlert} mode= {mode}/>
      //   <About/>
      // </div>
      // </>
      
    <BrowserRouter>
    <Routes>
      <Route path="/" element={
      <div>
      {NAV_ALERT}
      <TextForm heading= "Enter the text below: " showAlert={showAlert} mode= {mode}/>
      </div>
      } />
      <Route path="about" element={
      <div>
      {NAV_ALERT}
      <About/> 
      </div>
      } />
      <Route path="*" element={
      <div>
      <h1>Error 404</h1>
      <p>The page you were looking was not found</p>
      </div>
      } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
