import React from 'react';
import { Button } from 'antd';
import { BrowserRouter, Route,useLocation, Link, useParams} from 'react-router-dom';

const Page2 = (props) => {
    let {id} = useParams() 
    return(
        <div>
            <p> page2 - {id}</p>
            <Button  onClick={() => console.log({id})}type="primary">tttttpage2</Button>
            <Link to="/page3/123">
                <Button  onClick={() => console.log(12333)}type="primary">q1</Button>
            </Link>
            <Button type="primary">q2</Button>
        </div>
    )
};

export default Page2