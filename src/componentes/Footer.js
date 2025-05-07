import React from "react";
import './Footer.css';
import Seta from '../assets/imagens/seta.png'

export default function(){
    return(
        <div className="container-button">
            <button className="botao-final">
                <img className="imagem-button" src={Seta} alt="seta" />
                Load more
            </button>
        </div>
    )
}
