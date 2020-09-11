//rsf- react stateless function
import React from 'react';
import NavBar from './NavBar'
import Home from './Home'
import WorkshopsList from './WorkshopsList'
import { Route, withRouter } from "react-router-dom";
import WorkshopDetails from './WorkshopDetails';

const WorkshopDetailsWithRouter = withRouter(WorkshopDetails)
function App(props) {
    return (
        <div>
            <NavBar />
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/workshops" exact>
                <WorkshopsList />
            </Route>
            <Route path="/workshops/:id"  component={WorkshopDetailsWithRouter}/>
        </div>
    );
}

export default App;