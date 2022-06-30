import React from "react";
import App from "./App";

class Perso extends React.Component{
    render(){
        return(
            <div>
                <button onClick={()=>console.log(this.props.prenom)}>click</button>
                <p>Bonjour, je m'appelle X X et j'ai X ans</p>
            </div>
        );
    }
}

export default Perso