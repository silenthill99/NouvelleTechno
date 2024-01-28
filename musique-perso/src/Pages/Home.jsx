import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { CiStop1 } from "react-icons/ci";
import "../css/Home.css"

export const Home = () => {
    const audio = document.querySelector("audio")
    console.log(audio.duration)
    return (
        <main>
            <h1>Musiques personnalisées</h1>
            <div>
                <input type="range" id="track" min={0} defaultValue={0}/>
                <span id="elapsed">0:00</span> / <span id="track-time">1:00</span>
            </div>
            <div>
                <audio src={"KANNA movie version.mp3"} controls/><br/>
                <CiPlay1 className="button" id="play-button"/>
                <CiPause1 className="button" id="pause-button"/>
                <CiStop1 className="button" id="stop-button"/>
            </div>
            <div>
                <input type="range" id="volume" min="0" max="1" step={0.1} defaultValue={1}/>
                <span id="volume-value">100%</span>
            </div>
        </main>
    )
}

const track = document.querySelector("#track")
const elapsed = document.querySelector("#elapsed")
const trackTime = document.querySelector("#track-time")
const playButton = document.querySelector("#play-button")
const pauseButton = document.querySelector("#pause-button")
const stopButton = document.querySelector("#stop-button")
const volume = document.querySelector("#volume")
const volumeValue = document.querySelector("#volume-value")


function buildDuration(duration) {
    let minutes = Math.floor(duration/60)
    console.log(minutes)
}