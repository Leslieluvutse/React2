import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// import Navbar from './Components/Navbar';
// import BlogForm from './Components/BlogForm';
function App() {
  return (
    <div clasName="App">
    <div class="content">
    <Navbar/>
      <Home/>
      </div>
  </div>
  );
}

export default App;
