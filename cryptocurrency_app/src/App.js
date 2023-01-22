 import './App.css';
 import  {useEffect, useState} from 'react'; 
 import Axios from 'axios';
 import Coin from './component/Coin';
 function App(){
   const [listOfCoins, setlistOfCoins] = useState([]);
   const [searchWord,setSearchWord] = useState("");
    useEffect(()=>{
       Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then ((response)=>{
          setlistOfCoins(response.data.coins);
       }
       );
    }, []);
    const filteredCoins = listOfCoins.filter((coin)=>{
       return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    })
    return( <div className="App">
     <div className= "cryptoHeader">
      <input type="text" 
      placeholder= "Bitcoin..." 
      onChange={(event)=>{setSearchWord(event.target.value);
      }}/>
     </div>
     <div className= "cryptoDisplay">
      {filteredCoins.map((e)=>{
      return (
      <Coin 
      name={e.name} 
      icon={e.icon} 
      price={e.price} 
      symbol={e.symbol}
      />);
     })}</div>
    </div>
    );
 }
 export default App;