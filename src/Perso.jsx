import React from "react";
import App from "./App";

class Perso extends React.Component{
    render(){
        return(
            <div>
                <button onClick={()=>this.props.onChange()}>click</button>
                <p>Bonjour, je m'appelle {this.props.name1.prenom} {this.props.name1.nom} et j'ai {this.props.name1.age} ans</p>
                <p>Bonjour, je m'appelle {this.props.name2.prenom} {this.props.name2.nom} et j'ai {this.props.name2.age} ans</p>
                <p>Bonjour, je m'appelle {this.props.name3.prenom} {this.props.name3.nom} et j'ai {this.props.name3.age} ans</p>
            </div>
        );
    }
}

export default Perso