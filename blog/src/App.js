// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogForm from './Components/BlogForm';
// import BlogList from './Components/BlogList';
// import Navbar from './Components/Navbar';
// import BlogForm from './Components/BlogForm';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    <div class="content">
      {/* <Home/> */}
      <Switch>
        <Route exact path= "/">
          <Home/>
          </Route>
          <Route path="/BlogForm">
            <BlogForm/>
            </Route>
            </Switch> 
            </div>
            </div>
             </Router>
            
  );
  }
  export default App;

