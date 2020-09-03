import React,{ useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';



function App() {

  useEffect(() => {
    getAdvice();
  }, []);

  const [datas, setData] = useState([])

  const getAdvice = async () => {
    try {
      const response = await axios.get(`https://api.adviceslip.com/advice`); 
      const {advice} = response.data.slip
      
      setData(advice);
     
    } catch(error) {
      console.log('error', error);
    }}
    
   

  return (
    <div className="app">
     <div className="card">
     <h1 className="heading">{datas}</h1>
          <button className="button" onClick={getAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
     </div>
    </div>
  );
}

export default App;
