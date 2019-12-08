import React, { Component } from 'react';

import classes from './Project.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

class Project extends Component {


    render () {


        return (
            <Auxiliary>
                <div className={classes.Project}>
                 <h2>PROJECT</h2>                
                </div>                            
            </Auxiliary>
        );
    }
}

export default Project;