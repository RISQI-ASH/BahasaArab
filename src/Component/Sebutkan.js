import React from "react";
import "../ComponentStyle/Screen2Style.css"
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";



const Sebutkan = ({play}) => {

    const Nick = (localStorage.getItem("nick"));

    return(
        <div className="ScreenContainer">
            <div className="IntroContainer">
                <p>sebelum  masuk ke materi pembelajaran , coba {Nick} sebutkan 3 saja, lingkungan disekolah kita ?</p>
                <form className="NameForm">
                    <input type="text" maxLength={12}  required/>
                    <input type="text" maxLength={12}  required/>
                    <input type="text" maxLength={12}  required/>
                </form>
            </div>
            <div className="ArrowContainer">
                <Link  className="Link" to="/Screen22">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Sebutkan1">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
        </div>

    )
}
export default Sebutkan;