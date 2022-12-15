import React from "react";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css"
import plays from "../Asset/plays.svg";
import info from "../Asset/info.svg";
import tittle from "../Asset/Tittle.png";
import hero from "../Asset/Hero.svg";


const Home =({play, playMusic, setOpenNav})=>{

    function total() {
        setOpenNav(true)
        playMusic()
    }

    return  (
        <div className="homePage">
            <div className="tittle">
                <img alt="tittle" src={tittle}/>
                <img className="hero" src={hero} />
            
            </div>
            <div className="buttonContainer">
                <div className="MainButtonContainer">
                    <Link onClick={total} className="Link" to="/Screen1">
                        <img src={plays} />
                       
                    </Link>
                </div>
                <div className="SecondButtonContainer">
                    <Link onClick={()=> setOpenNav(true)} className="Link" to="/info">
                        <img src={info} />
                    </Link>
                </div>
            </div>
            
        </div>
        
    )

}
export default Home;