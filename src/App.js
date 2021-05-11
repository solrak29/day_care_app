import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/login';
import Admin from './pages/admin';
import Client from './pages/client';

function App() {
  return (
    <Router>
      <div class="banner" />
      <Route exact={true} path="/" component={Login}/>
      <Route exact={true} path="/admin" component={Admin}/>
      <Route exact={true} path="/client" component={Client}/>
    </Router>
  );
}

export default App;
