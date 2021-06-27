import React, { useState } from 'react'
import './index.css'

const Anima1 = () => {
    
    const [A, setA] = useState()
        
    setInterval(() => {
        var a = Math.random()*3
        if(a<1){
            setA(<i className="fas fa-hotdog"></i>)
        }
        else if( a>1 && a<2) {
            setA(<i className="fas fa-egg"></i>)
        }
        else {
            setA(<i className="fas fa-ice-cream"></i>)
        }
    }, 2000);
      

    return(
        <div className="Anima1">
            <h1>Animação que pisca</h1>
            <div className="icones">
                {A}
            </div>
        </div>
    )
}

export default Anima1