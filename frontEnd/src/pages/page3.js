import React from 'react';
import { Button } from 'antd';
import { BrowserRouter, Route,useLocation, Link} from 'react-router-dom';
const page3 = () => {
    return(
        <div>
             <p> page3</p>
            <Link to="/page2/page3/answer">
                <Button  onClick={() => console.log(123)}type="primary">q1</Button>
            </Link>
        </div>
    )
};

export default page3