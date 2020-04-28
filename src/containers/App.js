import React, {Component} from 'react';
import  './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

//stateful/container  component
class App extends Component { 

  constructor(props){
    super(props);
    console.log('[App.js] inside constructor', props);
    this.state = {
      persons:[
          {id:'id1',name:"Payal",age:24},
          {id:'id2',name:"shri", age:26},
          {id:'id3',name:"ashu", age:24}
      ],
      showPersons:false
    }
  }
  componentWillMount(){
    console.log('[App.js] inside componentWillMount');
  }
  componentDidMount(){
    console.log('[App.js] inside componentDidMount');
  }

  
nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === id;
  })
  const person ={
    ...this.state.persons[personIndex]
  }; 
  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({persons:persons});
}

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;//slice without argument simply copies the full array and returns new one
  //const persons = [...this.state.persons];
  persons.splice(personIndex, 1); //delete 1 element from array
  this.setState({person:persons});
}

togglePersonsHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState({showPersons: !doesShow}); //if false turn true if true turns false
}

  render(){
    console.log('[App.js] inside render');

    let persons = null;
    //best practice use of ternary with toggle btn
    if (this.state.showPersons) {
          persons = <Persons  
                 persons = {this.state.persons}
                 clicked = {this.deletePersonHandler}
                 changed = {this.nameChangedHandler}/>;
    }
    return (
      <div className="App">
        <Cockpit
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}/>
         {persons}
      </div>
    );}
}


export default App ;
