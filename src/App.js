import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './login';
import Admin from './admin';

function App() {
  return (
    <Router>
      <div class="banner">test</div>
      <Route exact={true} path="/" component={Login}/>
      <Route exact={true} path="/admin" component={Admin}/>
    </Router>
  );
}

export default App;
