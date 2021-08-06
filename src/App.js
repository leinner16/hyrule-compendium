import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/userInterface/Header';
import SearchBar from './components/userInterface/SearchBar';
import About from './components/userInterface/About';
import CardsList from './components/cards/CardsList';


import './App.css';

const App = () => {
  const [items,setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState ([]);  
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState('')
 

  useEffect( ()=> {
    const fetchItems = async () => {
      const creatures = await 
      axios(`https://botw-compendium.herokuapp.com/api/v2/category/creatures`);
      const equipment = await 
      axios(`https://botw-compendium.herokuapp.com/api/v2/category/equipment`);
      const materials = await 
      axios(`https://botw-compendium.herokuapp.com/api/v2/category/materials`);
      const monsters = await 
      axios(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`);
      const treasure = await 
      axios(`https://botw-compendium.herokuapp.com/api/v2/category/treasure`);
      
      const creaturesFoodInfo = ((creatures.data).data).food;
      const creaturesNonFoodInfo = ((creatures.data).data).non_food;
      const equipmentInfo = (equipment.data).data;
      const materialsInfo = (materials.data).data;
      const monstersInfo = (monsters.data).data;
      const treasureInfo = (treasure.data).data;

      let fetched = creaturesFoodInfo.concat(creaturesNonFoodInfo,equipmentInfo,materialsInfo,monstersInfo,treasureInfo) ;
      fetched = fetched.sort((a,b) => a.id - b.id);
            
      setItems(fetched);
      setOriginalItems(fetched);
      setIsLoaded(true);
    }
    fetchItems();

  },[]);

  useEffect(()=>{
// eslint-disable-next-line
    setItems(originalItems.filter((consult)=>{return(consult.id==query || ((consult.name).toUpperCase()).includes(query.toUpperCase()))}));
    }
  ,[query]);

  return (
    <main className="container">
      <Router>
      <Header />

      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/">
          <SearchBar onKeyChange={(value)=>{setQuery(value)}}/>
          <CardsList isLoaded={isLoaded} items={items}/>
        </Route>
      </Switch>
      </Router>
      
      
    </main>
  );
} 

export default App;