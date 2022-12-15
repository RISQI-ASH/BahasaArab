import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"
import { Link } from "react-router-dom";


const MenuModal =({open,onClose})=> {
    if(!open) return null
    return(
        <div className="Overlay">
             <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="ButtonContainer">
                <Link to="/Aula" className="BackLink Link">
                    <button onClick={onClose}><h1>Materi</h1></button>
                </Link> 
                <Link to="/Video" className="BackLink Link">
                    <button onClick={onClose}><h1>Video</h1></button>
                </Link> 
                <Link to="/Quizz" className="BackLink Link">
                    <button onClick={onClose}><h1>Quizz</h1></button>
                </Link> 
            </div>
        </div>        
    )
}

export default MenuModal