import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Routes
import DashboardRoute from './component/routes/DashboardRoute';

//Views
import Dashboard from './component/views/Dashboard';
import Login from './component/views/Login';
import Register from './component/views/Register';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <DashboardRoute exac path="/" component={Dashboard} />
          <Route exact path="/login" component={Login}/>
          <Route exac path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
