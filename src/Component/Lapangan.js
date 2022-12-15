import React from "react";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css";
import Gambar1 from "../Asset/Lapangan.svg";



const Lapangan =({play})=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenMateriContainer">
                <div className="MateriContainer">
                    <img src={Gambar1} />
                    <div className="card">
                        <h3>Lapangan</h3>
                    </div>
                    <div className="card">
                        <h3>مَلْعَبٌ</h3>
                    </div>
                    <div className="card">
                        <h3>Mal'ab</h3>
                    </div>
                </div>
                
                <div className="ArrowContainer">
                <Link className="Link" to="/Labo">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Perpus">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
            </div> 
    )
}

export default Lapangan;