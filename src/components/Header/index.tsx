import logoImg from '../../assets/images/logo.svg'
import wppImg from '../../assets/images/wpp.svg'
import instaImg from '../../assets/images/insta.svg'
import faceImg from '../../assets/images/face.svg'


import './style.scss'

export function Header() {
    return (
        <div>
         <header className="headerContainer">
            <div className="logo">
            <img src={logoImg} alt="logo" />
            </div>

            <div className="menu">
            <a href="#">
                Home
            </a>
            <a href="#">
                Adidas
            </a>
            <a href="#">
                Jordan
            </a>
            <a href="#">
                Balenciaga
            </a>
            <a href="#">
                Nike
            </a>
            <a href="#">
                <img src={wppImg} alt="wpp" />
            </a>
            <a href="#">
                <img src={instaImg} alt="instagram" />
            </a>
            <a href="#">
                <img src={faceImg} alt="facebook" />
            </a>
            </div>
        </header>

        </div>
    )
}