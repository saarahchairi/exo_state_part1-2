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
      }
    };
  }
  change = () => {
    this.setState({
      personnage1:{
        nom: "Chairi",
        prenom : "Zaza",
        age: 30,
      },
      personnage2:{
        nom: "Chairi",
        prenom: "Sam",
        age: 27,
      },
      personnage3:{
        nom: "Chairi",
        prenom: "Nis",
        age: 22,
      }
    })
  }
  render(){
    return(
      <div>
        <Perso name1={this.state.personnage1} name2={this.state.personnage2} name3={this.state.personnage3} onChange={this.change}/>
      </div>
    );
  }
}

export default App;
