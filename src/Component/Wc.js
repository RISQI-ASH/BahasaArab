import React from "react";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css";
import Gambar1 from "../Asset/Wc.svg";



const Wc =({play})=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenMateriContainer">
                <div className="MateriContainer">
                    <img src={Gambar1} />
                    <div className="card">
                        <h3>Wc</h3>
                    </div>
                    <div className="card">
                        <h3>دَوْرَةُ مِيَاهُ </h3>
                    </div>
                    <div className="card">
                        <h3>Dauroltu Miyyah</h3>
                    </div>
                </div>
                
                <div className="ArrowContainer">
                <Link className="Link" to="/Uks">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Masjid">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
            </div> 
    )
}

export default Wc;