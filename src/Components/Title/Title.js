import React from 'react';
import './Title.css';
import {ExitToApp} from '@material-ui/icons';

const Title = ({logoutHandler}) => {
    return(
        <div className = "title">
            <h2>Your Pictures 📷</h2>
            <ExitToApp title = 'logout' style = {{fontSize : '50px', cursor : 'pointer'}} onClick = {logoutHandler}/>
        </div>
    )
}

export default Title;