import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
      <Router>
        <div className={'wrap'}>
          <Link to={'/users-page'}>users</Link>
          <Link to={'/posts-page'}>posts</Link>
          <Link to={'/comments-page'}>comments</Link>
        </div>

        <Route path={'/users-page'} component={Users}/>
        <Route path={'/posts-page'} component={Posts}/>
        <Route path={'/comments-page'} component={Comments}/>
      </Router>
  );
}

export default App;
