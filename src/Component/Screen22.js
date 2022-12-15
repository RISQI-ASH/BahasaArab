import React from "react";
import "../ComponentStyle/Screen2Style.css"
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";



const Screen22 = ({play}) => {

    const Nick = (localStorage.getItem("nick"));

    return(
        <div className="ScreenContainer">
            <div className="IntroContainer">
                <p>Nah pastinya adik adik sudah hafal dan ingat kan dengan lingkungan di sekolah kita tercinta. pada game edukasi ini kita akan sama sama belajar dan menghafal kosa kata bahasa arab di lingkungan sekolah kita.</p>
            </div>
            <div className="ArrowContainer">
                <Link  className="Link" to="/Screen2">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Sebutkan">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
        </div>

    )
}
export default Screen22;