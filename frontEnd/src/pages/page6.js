import React from 'react';
import { Button } from 'antd';
import {useParams, BrowserRouter, Route,useLocation, Link} from 'react-router-dom';
const Page3 = () => {

    let {id} = useParams()
    let path1 =`/answer/${id * 10 + 1}`
    return(
        <div>
             <p> page3 - {id}</p>
            <Link to = {path1}>
                <Button  onClick={() => console.log()}type="primary">Opt 1</Button>
            </Link>
        </div>
    )
};

export default Page3