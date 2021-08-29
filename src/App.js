import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import {Link, Route} from "react-router-dom";

function App() {
    return (
        <div>
            <div>
                <Link to={'/users'}>users</Link>
                <Link to={'/posts'}> posts</Link>
            </div>

            <Route path={'/users'} component={Users}/>
            <Route path={'/posts'} component={Posts}/>
        </div>
    )
}

export default App;
