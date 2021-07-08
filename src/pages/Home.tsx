import tenis1Img from '../assets/images/tenis1.svg'
import tenis2Img from '../assets/images/tenis2.svg'
import tenis3Img from '../assets/images/tenis3.svg'

import '../styles/home.scss'

export function Home() {
    return (
        <div className="Container">
            <div className="banner">

                <span>
                    Único destino de tênis do Brasil!
                    jordan que pertence a você,
                    você encomenda aqui!!
                    Faça a sua encomenda por nossas redes sociais
                </span>
            </div>
            <div className="tenis">
                <img src={tenis1Img} alt="" />
                <img src={tenis2Img} alt="" />
                <img src={tenis3Img} alt="" />
            </div>

        </div>
    )
}

