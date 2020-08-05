import React from 'react';
import Content from '../Content/Content';
import { withRouter } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <Content title={props.title} listData={props.listData}/>
        </div>
        )
}
export default withRouter(Home)
