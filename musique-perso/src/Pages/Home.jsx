import { CiPlay1 } from "react-icons/ci";

export const Home = () => {
    return (
        <main>
            <h1>Musiques personnalisées</h1>
            <div>
                <input type="range" id="track" min={0} value={0}/>
                <span id="elapsed">0:00</span> / <span id="track-time">1:00</span>
            </div>
            <div>
                <audio src="KANNA movie version.mp3" controls/>
                <CiPlay1 />
            </div>
        </main>
    )
}