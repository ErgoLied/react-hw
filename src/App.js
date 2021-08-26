import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>users</Link>
                <Link to={'/posts'}> posts</Link>
            </div>

            <Route path={'/users'} component={Users}/>
            <Route path={'/posts'} component={Posts}/>
        </Router>
    );
}

export default App;
