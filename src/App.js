import 'logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, getUsers} from "./services/user.api";

function App() {

  //connection between files; info from store
  const state = useSelector(state => state);
  const {users} = state;

  const dispatch = useDispatch();

  useEffect(() => {
    getUsers().then(value => {
      dispatch({type: 'FETCH_USERS', payload: value});
    })
  }, [dispatch])

  const onSubmit = (ev) => {
    ev.preventDefault();
    const name = ev.target.name.value;
    const user = {name};
    console.log(user);
    addUser(user).then(value => dispatch({type: 'PUSH_USER', payload: value}));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name={'name'}/>
        <button>add user</button>
      </form>
      <hr/>
      {users.map(value => <div key={value.id}>{value.id} - {value.name}</div>)}
    </div>
  );
}

export default App;
