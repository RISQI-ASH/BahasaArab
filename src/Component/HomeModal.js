import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"
import { Link } from "react-router-dom";

const HomeModal =({open,onClose, setOpenNav})=> {
    if(!open) return null

    function close() {
        setOpenNav()
        onClose()
    }

    return(
        <div className="Overlay">
            <div className="HomeModal">
                <h2>Apakah ingin kembali ke halaman awal ?</h2>
                <Link to="/" className="BackLink Link">
                    <button onClick={close}>نعم</button>
                </Link>
                <button onClick={onClose}>لا</button>
            </div>
        </div>
    )
}

export default HomeModal ;