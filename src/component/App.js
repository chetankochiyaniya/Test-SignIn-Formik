import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import SignIn from './SignIn';


const App = () => {
  return (<>
     <Switch>
     <Route exact path='/' component={SignIn}/>
     <Route exact path='/Test-SignIn-Formik' component={SignIn}/>
        <Route exact path='/home' component={Home}/>
     </Switch>   
     
  </>
      
  )
};

export default App;
