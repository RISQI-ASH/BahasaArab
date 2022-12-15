import React from "react";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen2Style.css";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";

const Video =({play, handlePlayAgain})=> {
 return (
   <div className="ScreenContainer">
      <div className="IntroContainer">
          <p>nah supaya adik adik lebih paham dan hafal serta lancar dalam pelafalan mengenai kosa kata bahasa arab di lingkungan sekolah kita, yuk mari kita simak video berikut</p>
          <iframe src='https://www.youtube.com/embed/P0hSzcBEPZg'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  tittle='video'
                  />
      </div>
      <div className="ArrowContainer">
        <Link  className="Link" to="/Masjid">
                    <img onClick={handlePlayAgain} src={ArrowLeft} alt='panah' />
        </Link>
          <Link className="Link" to="/Bquizz">
                    <img onClick={play} src={ArrowRight} alt='panah' />
          </Link>
        </div>
    </div>
 )
}


export default Video