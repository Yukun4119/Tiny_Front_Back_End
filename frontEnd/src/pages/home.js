import React from 'react';
import { BrowserRouter, Route,useLocation, Link} from 'react-router-dom';
import { Button } from 'antd';
const home = (props) => {
    // const location = useLocation();
    // console.log(location.pathname);
    let path =`/page2/1`
    return(
        <div>
            <Link to={path}>
                <Button  onClick={() => console.log(props)} type="primary">Click ME!</Button>
            </Link>
        </div>
    )
};

export default home