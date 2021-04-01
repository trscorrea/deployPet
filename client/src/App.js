import './App.css';
import React from 'react';
import {Router, Link} from '@reach/router';
import AllPets from './components/AllPets';
import PetDetails from './components/PetDetails';
import CreatePet from './components/CreatePet';
import EditPet from './components/EditPet';


function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1><br/>
      <Link to = "/pets">Home</Link> | <Link to = "/pets/new">add a pet to the shelter</Link>
      <hr/>
      <Router>
        <AllPets path="/pets"></AllPets>
        <PetDetails path = "/pets/:id"></PetDetails>
        <CreatePet path = "/pets/new"></CreatePet>
        <EditPet path = "/pets/edit/:id"></EditPet>
      </Router> 
      
    </div>
  );
}

export default App;
