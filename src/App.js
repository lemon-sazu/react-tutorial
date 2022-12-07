import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios'
function App() {

  const [name, setName] = useState('');
  const [predict, setPredict] = useState();
  const handleChange = (event) => {
    setName(event.target.value)
  }

  // useEffect(() => {
  //   getPredict();
  // }, [])

  const getPredict = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPredict(res.data);
      console.log(predict);
    })
  }

  return (
    <div>
      <div className='add_area'>
        <div className="add_area-inputs">
          <input type="text" onChange={handleChange} className='task_input' placeholder='Your Name' />
          <button onClick={getPredict} className="addtask_btn">Submit</button>
        </div>
      </div>
      <div className="content_area">
        <h2>Age Predictor</h2>
        <p><b>Name: </b> {predict?.name} </p>
        <p><b>Age: </b> {predict?.age} </p>
      </div>
    </div >
  );
}



export default App;
