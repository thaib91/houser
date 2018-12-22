import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
// import Wizard1 from './component/Wizard/Wizard1';
// import Wizard2 from './component/Wizard/Wizard2';
// import Wizard3 from './component/Wizard/Wizard3';

export default(
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/wizard' component={Wizard}/>
    </Switch>
)