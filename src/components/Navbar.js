import React from 'react'
import {Link,NavLink} from 'react-router-dom';
// import PropTypes from 'prop-types'


export default function Navbar(props) {
  const changeTheme=(bgColor)=>{
    document.body.style.backgroundColor= bgColor;
    let elements = document.getElementsByClassName("btn-primary");
    if(bgColor==="#5e1e19"){
      for (let i = 0; i < elements.length; i++) {
          // @ts-ignore for red button
          elements[i].style.backgroundColor="#d11616";
          // @ts-ignore
          elements[i].style.border= "1px solid red";
      }
    }
    else if(bgColor==="#353544"){
      for (let i = 0; i < elements.length; i++) {
          // @ts-ignore for grey button
          elements[i].style.backgroundColor="#2f567a";
          // @ts-ignore
          elements[i].style.border= "1px solid black";
      }
    }else{
      for (let i = 0; i < elements.length; i++) {
          // @ts-ignore for blue button
          elements[i].style.backgroundColor="blue";
          // @ts-ignore
          elements[i].style.border= "1px solid grey";
      }
        
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">{props.menu2}</NavLink>
            </li>

          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          {props.mode==="dark" &&
          <div className="colorOptions">
          <div onClick={()=>changeTheme("#353544")} className="border border-success p-2 round_circle bg_dark m-2"></div>
          <div onClick={()=>changeTheme("#191c5e")} className="border border-success p-2 round_circle bg_darkblue m-2"></div>
          <div onClick={()=>changeTheme("#5e1e19")} className="border border-success p-2 round_circle bg_darkred m-2 me-3"></div>
          </div>}
          <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
            <input className="form-check-input" type="checkbox" onChange={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Navbar.propTypes = {
//   title: PropTypes.string,
//   menu2: PropTypes.string
// }
// Navbar.defaultProps = {
//   title: "Title",
//   menu2: "menu2"
// }
