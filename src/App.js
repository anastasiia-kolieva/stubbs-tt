import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import JobFocus from './views/JobFocus';
import SoftSkills from './views/SoftSkills';
import TechnicalSkills from './views/TechnicalSkills';
// import s from './App.module.css';

function App() {
  return (
    <>
      <Navigation/>

      <Suspense>
       <Switch>
         <Route exact path="/job-focus" component={JobFocus}/>
         <Route exact path="/soft-skills" component={SoftSkills}/>
         <Route exact path="/technical-skills" component={TechnicalSkills}/>
       </Switch>
      </Suspense>
   </>
  );
}

export default App;
