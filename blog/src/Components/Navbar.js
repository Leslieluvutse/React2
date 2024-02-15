import { Link } from "react--router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Navbar = () => {
   return(
   <nav class="navbar">
     <h2>Blog Post</h2>
     <div class="links">
   {/* <a href>Home</a> */}
   {/* <a href>New Blog</a> */}
   <Link to="/">Home</Link> 
   <Link to="/create">new blog</Link>
   </div>
</nav>
   );
}
export default Navbar;