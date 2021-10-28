import React, { useState } from 'react';
import { Button } from 'antd';
import { BrowserRouter, Route,useLocation, Link} from 'react-router-dom';

const params = {
    "id": "3",
    'q': "q1",
    'a': "a2"
  }

const Answer = (props) => {
    const [res, setRes] = useState(-1);

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
      setRes(content['Answer'])
    };

    fetchData(props.id)
    return(
        <div>
             <p> answer</p>
              <Button onClick = {() => console.log(props.id)}type="primary">q2</Button> 
              <p>{res}</p>
        </div>
    )
};

export default Answer