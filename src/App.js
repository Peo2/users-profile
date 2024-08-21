import { useEffect, useState } from 'react';
import './App.css';
import { ApiFetch } from './Component/Display';
import { Loading } from './Component/Load';



function App() {
  const[isloading, setIsLoading] = useState(true);
  useEffect (() => {
setTimeout(() => {
  setIsLoading(false);
}, 3000)
  },[])
  return (
   
      <div className='card_container'>
        {isloading ? (<Loading/>) :
      <ApiFetch/>}
    </div>
    
  );
}

export default App;
