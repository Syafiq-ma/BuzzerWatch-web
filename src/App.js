import './App.css';
import React, {useState} from 'react'

const url = 'http://'

const App = () => {
  const [hastag,setHastag] = useState()
  const [data,setData] = useState()
  const send= async () => async(dispatch) => {
    const response = await fetch(url,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify({data:hastag})
    })
    const result = await response.json()
    {result&& setData(result)}
    {data&& console.log(data)}
  }
  return (
    <div className="App">
      <div className='container mt-5'>
        <h1 className='mb-5'>BuzzerWatch</h1>
        <div className="input-group input-group-lg">
          <input type="text" className="form-control border border-success" onChange={(e)=>setHastag(e.target.value)} placeholder='#hashtag' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
          <button className="btn btn-success" type="button" id="button-addon2" onClick={()=>send()}>Analyze</button>
        </div>
      </div>
    </div>
  );
}

export default App;
