import React from "react";
import './Card.css';
import imagem1 from '../assets/imagens/Card-1.png'
import avatar1 from '../assets/imagens/Avatar-1.png'


export default function Content(){
   
    return(
        <div>
            <div className="card-1">
                <img src={imagem1} alt="Imagem do card-1" />
                <div className="content-card1">
                    <p className="texto1-card1">Design</p>
                    <div className="texto2-card1">
                        Ux review presentations &#8599;

                    </div>
                    <p className="texto3-card1">How do you create compelling <br/>
                    presentations that wow your colleagues and <br/>
                    impress your managers?
                    </p>
                </div>

                    <div className="avatar-1">
                        <img src={avatar1} alt="avatar" />

                        <div className="txt-final-card1">
                            <p>Olivia Rhye</p>
                            <p className="texto-claro">20 Jan 2022</p>
                        </div>

                    </div>

            </div>
           
        </div>
    )
    
}