import { useEffect, useState } from 'react'
import './Nav.css'
const Nav = () => {
const [show, setShow] = useState(false)

const transitionNavBar = () => {
  if(window.scrollY > 100){
    setShow(true)
  }else{
    setShow(false)
  }
}
useEffect(() => {
  window.addEventListener("scroll",transitionNavBar)
  return () => {
    window.removeEventListener("scroll",transitionNavBar)
  }

}, [])

  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <div className='nav-contents'>

        <img src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456' className='nav-logo' alt='sorry'></img>
        <img src='https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png' className='nav-avatar' alt='sorry'></img>
        </div>
    </div>
  )
}

export default Nav