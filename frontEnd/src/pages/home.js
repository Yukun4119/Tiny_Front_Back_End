import React from 'react';
import { BrowserRouter, Route,useLocation, Link} from 'react-router-dom';
import { Button } from 'antd';
const home = (props) => {
    // const location = useLocation();
    // console.log(location.pathname);
    let path =`/page2/1`
    return(
        <div>
            <img src="./1.png"/>
            <Link to={path}>
                <Button  onClick={() => console.log(props)} type="primary">I NEED SOMETHING</Button>
            </Link>
            {/* <Button type="primary">q2</Button> */}
        </div>
    )
};

export default home