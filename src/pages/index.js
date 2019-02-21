import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => ( 
    <div style={{ color: `teal`}}>
    <Link to="/contact/">Contact</Link> 
    <Link to="/about/">About</Link>
    <Header headerText="SUP, Mane?!" />
    <h1>Sup?! I'm your friendly neighborhood Coop!</h1>
    <p>What a world. That shit slap, don't it?</p>
    <img src="https://source.unsplash.com/random/1200x600" alt="" />
    
    </div>
    )