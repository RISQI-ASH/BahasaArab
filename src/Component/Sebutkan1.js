import React from "react";
import "../ComponentStyle/Screen2Style.css"
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";



const Sebutkan1 = ({play}) => {

    const Nick = (localStorage.getItem("nick"));

    return(
        <div className="ScreenContainer">
            <div className="IntroContainer">
                <p>Baguss dan hebat , untuk lebih jelas nya yuk sama sama kita belajar</p>
            </div>
            <div className="ArrowContainer">
                <Link  className="Link" to="/Sebutkan">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Aula">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
        </div>

    )
}
export default Sebutkan1;