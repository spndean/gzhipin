import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import LaobanInfo from '../laoban-info';
import DashenInfo from '../dashen-info';



class Main extends Component{
    render(){
        return (
            <div>
                <Switch>
                    <Route path="/laobanInfo" component={LaobanInfo}/>；
                    <Route path="/dashenInfo" component={DashenInfo}/>；
                </Switch>

            </div>
        )
    }
}
export default Main;