import './App.css';
import { Button } from 'antd';

const params = {
  "id": "3",
  'q': "q1",
  'a': "a2"
}


const fetchData = async(myID) => {
  const response = await fetch("http://127.0.0.1:8000/hello",{
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      "id":myID
    })
  });
  
  const content = await response.json()
  console.log(content['Answer'])
  // 
};



function App() {
  console.log(fetchData("2"))
  return (
    <div className="App">
      <p>12</p>
      <p>pic</p>
      <>
      <Button type="primary"><img src="./1.png"/></Button>
      </>
      
    </div>
  );
}

export default App;
