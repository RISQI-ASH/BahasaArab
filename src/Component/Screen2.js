import React from "react";
import "../ComponentStyle/Screen2Style.css"
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";



const Screen2 = ({play}) => {

    const Nick = (localStorage.getItem("nick"));

    return(
        <div className="ScreenContainer">
            <div className="IntroContainer">
                <p>Assalamualaikum <span>{Nick}</span>, bagaimana kabarnya hari ini, di game edukasi ini kita akan belajar mengenai kosa kata bahasa arab di lingkungan sekolah kita.</p>
            </div>
            <div className="ArrowContainer">
                <Link  className="Link" to="/Screen1">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Screen22">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
        </div>

    )
}
export default Screen2;