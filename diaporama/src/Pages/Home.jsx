import Image1 from "../Ressources/images/index-slide01.jpg"
import Image2 from "../Ressources/images/index-slide02.jpg"
import Image3 from "../Ressources/images/index-slide03.jpg"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

//variables globales
let compteur = 0
let timer, elements, slides, slideWidth

window.onload = () => {
    const diapo = document.querySelector(".diapo")
    elements = document.querySelector(".elements")
    slides = Array.from(elements.children)

    //Calcul de la largeur du diaporama
    slideWidth = diapo.getBoundingClientRect().width;
}

function slideNext() {
    compteur++
    if (compteur == slides.length) {
        compteur = 0
    }
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}


function slidePrev() {
    compteur--
    if (compteur < 0) {
        compteur = slides.length - 1
    }
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

export const Home = () => {
    return(
        <main>
            <h1>Diaporama</h1>
            <div className="diapo">
                <div className="elements">
                    <div className="element active">
                        <img src={Image1} alt="Image 1"/>
                        <div className="caption">
                            <h2>Image 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ut!</p>
                        </div>
                    </div>
                    <div className="element">
                        <img src={Image2} alt="Image 2"/>
                        <div className="caption">
                            <h2>Image 2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ut!</p>
                        </div>
                    </div>
                    <div className="element">
                        <img src={Image3} alt="Image 3"/>
                        <div className="caption">
                            <h2>Image 3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, ut!</p>
                        </div>
                    </div>
                </div>
                <FaArrowLeft id="nav-gauche" onClick={slidePrev}/>
                <FaArrowRight id="nav-droite" onClick={slideNext}/>
            </div>
        </main>
    )
}