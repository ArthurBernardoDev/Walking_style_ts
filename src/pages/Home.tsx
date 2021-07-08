import tenis1Img from '../assets/images/tenis1.svg'
import tenis2Img from '../assets/images/tenis2.svg'
import tenis3Img from '../assets/images/tenis3.svg'
import prabaixoImg from '../assets/images/icons/praBaixo.svg'

import '../styles/home.scss'

export function Home() {
    return (
        <div className="Container">
            <div className="banner">
                <div className="texto">
                    <span> Único destino de tênis no Brasil</span>
                    <span>O jordan que pertence a você,</span>
                    <span>você encomenda aqui!!</span>
                    <span>Faça a sua encomenda por nossas redes sociais</span>
                </div>
            </div>

            <div className="img-tenis">
                <img src={tenis1Img} alt="" />
                <img src={tenis2Img} alt="" />
                <img src={tenis3Img} alt="" />
            </div>



            {/* Tela 2 */}
            <div className="container-home2">
                <section className="banner1">
                    <span id="banner1">PERGUNTAS FREQUENTES</span>
                </section>
                <div className="container-perguntas">
                    <section className="perguntas">
                        <div className="pergunta1">
                            <span> Como realizo uma compra neste site? </span>
                            <img src={prabaixoImg} alt="" />
                        </div>
                        <div className="respostas">
                            <p>
                                Para realizar uma compra em nosso site você deve entrar em contato
                                com o vendedor pelo Whatsapp, Instagram ou Facebook informando o
                                nome do tênis desejado e o número. Os contatos estão disponiveis
                                no topo do site e em cada tênis .
                            </p>
                        </div>
                    </section>
                    <section className="perguntas">
                        <div className="pergunta1">
                            <span> Quais são os meios de pagamento aceitos? </span>
                            <img src={prabaixoImg} alt="" />
                        </div>
                        <div className="respostas">
                            <p>
                                Você poderá pagar via PicPay, PIX, PagSeguro, Paypal ou
                                Tansferência Bancária.
                            </p>
                        </div>
                    </section>
                    <section className="perguntas">
                        <div className="pergunta1">
                            <span> Qual o tempo de entrega do produto? </span>
                            <img src={prabaixoImg} alt="" />
                        </div>
                        <div className="respostas">
                            <p>
                                O tempo de entrega do produto varia de tênis para tênis sendo esse
                                tempo informado abaixo de cada item.
                            </p>
                        </div>
                    </section>
                    <section className="perguntas">
                        <div className="pergunta1">
                            <span> Qual a garantia de que os tênis não são réplicas? </span>
                            <img src={prabaixoImg} alt="" />
                        </div>
                        <div className="respostas">
                            <p>
                                Todos os tênis são enviado com a nota fiscal confirmando a
                                exclusividade de cada tênis
                            </p>
                        </div>
                    </section>
                    <section className="perguntas">
                        <div className="pergunta1">
                            <span> Como posso rastrear meu pedido? </span>
                            <img src={prabaixoImg} alt="" />
                        </div>
                        <div className="respostas">
                            <p>
                                Após recebermos seu produto de nosso fornecedor, faremos o envio
                                via correios e lhe mandaremos o código de rastreio.
                            </p>
                        </div>
                    </section>
                    <section className="perguntas">
                        <div className="pergunta1">
                            <span>
                                Posso escolher uma cor diferente da que aparece na foto?
                            </span>
                            <img src={prabaixoImg} alt="" />
                        </div>
                        <div className="respostas">
                            <p>
                                Nosso site trabalha com produtos de edições exclusivas. Cada tênis
                                tem sua cor padronizada conforme o modelo e edição fabricados.
                            </p>
                        </div>
                    </section>
                </div>
            </div>


            <div className="container-home3">
                <section className="inputs">
                    <form>
                        <div className="spans">
                            <span>Nome:</span>
                            <input type="text" id="name" placeholder="Digite seu nome" />
                        </div>
                        <div className="spans">
                            <span>Comentario: </span>
                            <textarea
                                placeholder="Digite seu comentario"
                                id="description"
                            ></textarea>
                        </div>
                        <div className="spans">
                            <span>Avaliação</span>
                            <input type="range" id="feedback" min="0" max="5" />
                        </div>
                        <button type="button" id="button">Enviar</button>
                    </form>
                </section>
                <section>
                    <div id="show_feedback"></div>
                    <div id="id_prod"></div>
                </section>
            </div>
            {/* div final */}
        </div>



    )
}

