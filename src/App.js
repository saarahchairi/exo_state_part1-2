import React from "react";
import Perso from "./Perso";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      personnage1:{
        nom: "Chairi",
        prenom : "Sarah",
        age: 25,
      },
      personnage2:{
        nom: "Chairi",
        prenom: "Sami",
        age: 22,
      },
      personnage3:{
        nom: "Chairi",
        prenom: "Nisrine",
        age: 19,
      },
    };
  }
  change = (x) => {
    this.setState({
      prenom: x
    })
  }
  render(){
    return(
      <div>
        <p>je m'appel {this.state.personnage1.prenom} {this.state.personnage1.nom} et j'ai {this.state.personnage1.age}ans.</p>
        <Perso prenom={this.state.personnage1} />
        <Perso prenom={this.state.personnage2} />
        <Perso prenom={this.state.personnage3} />
      </div>
    );
  }
}

export default App;
