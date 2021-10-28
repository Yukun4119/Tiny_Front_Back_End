import React from 'react';
import { BrowserRouter, Route,useLocation, Link} from 'react-router-dom';
import { Button } from 'antd';
const home = (props) => {
    // const location = useLocation();
    // console.log(location.pathname);
    return(
        <div>
            <img src="./1.png"/>
            <Link to="/page2">
                <Button  onClick={() => console.log(props)}type="primary">q1</Button>
            </Link>
            <Button type="primary">q2</Button>
        </div>
    )
};

export default home