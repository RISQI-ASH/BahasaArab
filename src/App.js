import React,{useState,} from "react";
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './Component/Home';
import Screen2 from "./Component/Screen2";
import Screen1 from "./Component/Screen1";
import Error from "./Component/Error";
import Background from "./Component/Background";
import Quizz from "./Component/Quizz";
import Quizz1 from "./Component/Quizz1";
import Quizz2Result from "./Component/Quizz2Result";
import sfx from "./Asset/sfx.mp3";
import Info from "./Component/info";
import Bquizz from "./Component/BeforeQuizz";
import Bquizz1 from "./Component/BeforeQuizz1";
import song from "./Asset/song.mp3"
import AudioNav from "./Component/audio";
import Video from "./Component/Video";
import Screen22 from "./Component/Screen22";
import Aula from "./Component/Aula";
import Halaman from "./Component/Halaman";
import Kantin from "./Component/Kantin";
import Kantor from "./Component/Kantor";
import Kebun from "./Component/Kebun";
import Kelas from "./Component/Kelas";
import Labo from "./Component/Labo";
import Lapangan from "./Component/Lapangan";
import Perpus from "./Component/Perpus";
import Uks from "./Component/Uks";
import Wc from "./Component/Wc";
import Masjid from "./Component/Masjid";
import Sebutkan from "./Component/Sebutkan";
import Sebutkan1 from "./Component/Sebutkan1";


const App =()=> {


  

function play() {
  var audioSfx = document.getElementById("sfx");
    audioSfx.play();
}

function muteSfx() {
  var audioSfx = document.getElementById("sfx");
  if(audioSfx.muted) {
    audioSfx.muted = false ;
  } else {
    audioSfx.muted = true;
  }
}


function playMusic() {
  var audio = document.getElementById("music");
    audio.play();
}

function mute() {
  var audio = document.getElementById("music");
  if(audio.muted) {
    audio.muted = false;
  } else {
    audio.muted=true;
  }
}

const [openNav, setOpenNav] = useState(false)

return(

<HashRouter>
 
  <Background />
  <AudioNav setOpenNav={setOpenNav} open={openNav} muteSfx={muteSfx} mute={mute}/>
  <audio id="sfx" src={sfx} />
  <audio id="music" src={song} loop />
  <Routes>
    <Route path="/" element={<Home setOpenNav={setOpenNav} play={play} playMusic={playMusic}/>}/>
    <Route path="/info" element={<Info/>}/>
    <Route path="/Screen1" element={<Screen1 play={play}/>}/>
    <Route path="/Sebutkan" element={<Sebutkan play={play}/>}/>
    <Route path="/Sebutkan1" element={<Sebutkan1 play={play}/>}/>
    <Route path="/Screen2" element={<Screen2 play={play}  />}/>

    <Route path="/Screen22" element={<Screen22 play={play}  />}/>

    <Route path="/Aula" element={<Aula play={play} />}/>   
    <Route path="/Halaman" element={<Halaman play={play} />}/>   
    <Route path="/Kantin" element={<Kantin play={play} />}/>   
    <Route path="/Kantor" element={<Kantor play={play} />}/>   
    <Route path="/Kebun" element={<Kebun play={play} />}/>   
    <Route path="/Kelas" element={<Kelas play={play} />}/>   
    <Route path="/Labo" element={<Labo play={play} />}/>   
    <Route path="/Lapangan" element={<Lapangan play={play} />}/>   
    <Route path="/Perpus" element={<Perpus play={play} />}/>   
    <Route path="/Uks" element={<Uks play={play} />}/>   
    <Route path="/Wc" element={<Wc play={play} />}/>   
    <Route path="/Masjid" element={<Masjid play={play} />}/>   
    <Route path="/Video" element={<Video play={play} />} />

    <Route path="/Bquizz" element={<Bquizz play={play} />}/>   
    <Route path="/Bquizz1" element={<Bquizz1 play={play} />}/>  
    <Route path="/Quizz" element={<Quizz play={play}/>}/>
    <Route path="/Quizz1" element={<Quizz1/>}/>
    <Route path="/Quizz2" element={<Quizz2Result setOpenNav={setOpenNav}/>}/>
    <Route path="*" element={<Error/>}/>
  </Routes>
</HashRouter>
 ) 
}

export default App;