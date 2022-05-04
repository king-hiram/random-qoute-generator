import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  const [qoute, setQoute] = useState([]);

  useEffect(() => {
    let data = async () => {
     let res = await  axios.get("http://api.quotable.io/random") 
     setQoute(res.data)
    }
    data()
  }, [])

  let fetchData = async () => {
    let res = await  axios.get("http://api.quotable.io/random") 
    console.log(res);
    setQoute(res.data)
  }


  return (
    <>
    <div className='full'>
    <div className="container content my-5">
      <div className="row">
        <div className="col-4">
        <div className="card text-center">
  <div className="card-body">
    <h5 className="card-title">{qoute.author}</h5>
    <p className="card-text">{qoute.content}</p>
<button className="btn btn-primary" onClick={fetchData} >New Qoute</button>
  </div>
   </div>
        </div>
      </div>

    </div>
   </div>
    </>
  );
}

export default App;
