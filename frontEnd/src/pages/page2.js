import React from 'react';
import { Button } from 'antd';
import { BrowserRouter, Route,useLocation, Link, useParams} from 'react-router-dom';

const Page2 = (props) => {
    let {id} = useParams() 
    let path1 =`/page3/${id * 10 + 1}`
    return(
        <div>
            <p> page2 - {id}</p>
            <Link to={path1}>
                <Button  onClick={() => console.log()}type="primary">EDUCATION</Button>
            </Link>
            {/* <Button type="primary">q2</Button> */}
        </div>
    )
};

export default Page2