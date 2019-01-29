import React from 'react';
import Hero from './components/Hero';
import {Route} from 'react-router-dom';
import Repo from './components/Repo';
import User from './components/User'


const App=()=>{
return(
<React.Fragment>
<Hero/>
<Route exact path='/' component={User}/>
<Route exact path='/repos' component={Repo}/>


</React.Fragment>
)
}

export default App;