import adidas1Img from '../assets/images/adidas/tenis1.svg'
import adidas2Img from '../assets/images/adidas/tenis2.svg'
import adidas3Img from '../assets/images/adidas/tenis3.svg'
import adidas4Img from '../assets/images/adidas/tenis4.svg'
import adidas5Img from '../assets/images/adidas/tenis5.svg'
import adidas6Img from '../assets/images/adidas/tenis6.svg'

import '../styles/adidas.scss'

export function Adidas() {
    return (
        <>
            {/* primeiro tenis */}
            <div className="adidasContainer">
                <div className="tenis">

                    <img src={adidas1Img} alt="Tenis 1 adidas" />
                    <div>
                        <span>
                            Tênis Christian Dior 2020 Air Jordan 1 Retro High Dior
                        </span>
                        <span>
                            R$ 29.990,00
                        </span>
                        <span>
                            Size 38 - 43 (BR)
                        </span>
                        <span>
                            PRAZO DE ENTREGA : 90 DIAS
                        </span>
                    </div>

                </div>


                {/* Segundo tenis */}
                <div className="tenis">
                    <img src={adidas2Img} alt="Tenis 2 adidas " />

                    <div>
                        <span>
                            Air Jordan 1 Mid University Gold
                        </span>
                        <span>
                            R$ 1.799,99
                        </span>
                        <span>
                            SIZE: 32 - 43 (BR)
                        </span>
                        <span>
                            PRAZO DE ENTREGA: 15 DIAS
                        </span>
                    </div>
                </div>

                {/* Terceiro tenis */}

                <div className="tenis">
                    <img src={adidas3Img} alt="Tenis 3 adidas" />

                    <div>
                        <span>
                            TÊNIS PHARRELL WILLIAMS ULTRABOOST 20
                        </span>
                        <span>
                            R$ 999,00
                        </span>
                        <span>
                            SIZE: 32 - 40 (BR)
                        </span>
                        <span>
                            PRAZO DE ENTREGA: 30 DIAS
                        </span>
                    </div>
                </div>

                {/* Quarto tenis */}
                <div className="tenis">
                    <img src={adidas4Img} alt="Tenis 4 adidas" />

                    <div>
                        <span>
                            TÊNIS ULTRABOOST 21
                        </span>
                        <span>
                            R$ 999,00
                        </span>
                        <span>
                            SIZE: 34 - 42 (BR)
                        </span>
                        <span>
                            PRAZO DE ENTREGA: 25 DIAS
                        </span>
                    </div>
                </div>

                {/* Quinto tenis */}
                <div className="tenis">
                    <img src={adidas5Img} alt="Tenis 6 adidas" />

                    <div>
                        <span>
                            Adidas Disney x UltraBoost 'Goofy' Marathon
                            Running Shoes/Sneakers
                        </span>
                        <span>
                            R$ 1306,28
                        </span>
                        <span>
                            SIZE: 31 - 40 (BR)
                        </span>
                        <span>
                            PRAZO DE ENTREGA: 35 DIAS
                        </span>
                    </div>
                </div>
                {/* Sexto tenis */}
                <div className="tenis">
                    <img src={adidas6Img} alt="Tenis 6 adidas" />

                    <div>
                        <span>
                            TÊNIS ULTRABOOST PB
                        </span>
                        <span>
                            R$ 899,99
                        </span>
                        <span>
                            SIZE: 32 - 43 (BR)
                        </span>
                        <span>
                            PRAZO DE ENTREGA: 30 DIAS
                        </span>
                    </div>
                </div>

                {/* Div final */}
            </div>
        </>
    )
}