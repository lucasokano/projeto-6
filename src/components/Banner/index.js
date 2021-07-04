import React from 'react'
import './index.css'

const Banner = () => {
    
    return(
        <div className="banner">
            <div className="container-heading">
                <h1 className="t1 t-geral">ESTRATÉGIA</h1>
                <h1 className="t2 t-geral">AGILIDADE</h1>
                <h1 className="t3 t-geral">MOTIVAÇÃO</h1>
                <h1 className="t4 t-geral">INOVAÇÃO</h1>
            </div>
            
            <p className="p-banner">
           UMA EMPRESA MOVIDA A RESULTADOS
            </p>

            <button className="button-banner">
            ENTRE EM CONTATO
            </button>
           
        </div>
        
    )
}

export default Banner