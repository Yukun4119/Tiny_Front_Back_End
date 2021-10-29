import React from 'react';
import { Button } from 'antd';
import {useParams, BrowserRouter, Route,useLocation, Link} from 'react-router-dom';
const Page5 = () => {

    let {id} = useParams()
    let path1 =`/answer/${id * 10 + 1}`
    let path2 =`/answer/${id * 10 + 2}`
    return(
        <div>
             <p> page5 - {id}</p>
            <Link to = {path1}>
                <Button  onClick={() => console.log()}type="primary">Rejected because of my race/gender/belief</Button>
            </Link>
            <Link to = {path2}>
                <Button  onClick={() => console.log()}type="primary">Rejected because I can't pay the fee</Button>
            </Link>
        </div>
    )
};

export default Page5