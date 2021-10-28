import React from 'react';
import { Button } from 'antd';
import { BrowserRouter, Route,useLocation, Link} from 'react-router-dom';
const page2 = (props) => {
    return(
        <div>
            <p> page2</p>
            <Link to="/page2/page3">
                <Button  onClick={() => console.log(props)}type="primary">q1</Button>
            </Link>
            <Button type="primary">q2</Button>
        </div>
    )
};

export default page2