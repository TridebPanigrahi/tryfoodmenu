import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
    const [change, setChange] = useState(false)

    function changeState(){
        setChange(!change)
    }

  return (
    <>
        <div className={s.header}>
            <Link className={s.logo} to={"/"}><i className='fa fa-cutlery'></i>TryFood.</Link>
            <div className={change ? `${s.navelement2}`:`${s.navelement}`}>
                <Link className={s.active} to={"/"}>Home</Link>
                <Link to={"/dishes"}>Dishes</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/menu"}>Menu</Link>
                <Link to={"/review"}>Review</Link>
                <Link to={"/order"}>Order</Link>
            </div>
            <div className={s.icons}>
                <p id='menubars' onClick={changeState}>{change ?<i className='fa fa-times'></i>:<i className='fa fa-bars' ></i>}</p>
                {/* <input type='checkbox' id='toggler' className={s.toggler_switch}/>
                <label htmlFor='toggler'><i className='fa fa-bars' ></i></label> */}
                <i className='fa fa-search'></i>
                <i className='fa fa-heart'></i>
                <i className='fa fa-shopping-cart'></i>
            </div>
        </div>
    </>
  )
}

export default Navbar