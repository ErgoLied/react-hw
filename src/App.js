import 'logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, getUsers} from "./services/user.api";
import {fetchUsers, pushUser} from "./redux/actions";


function App() {

  //connection between files; info from store
  const state = useSelector(state => {
    const {rootReducer} = state;
    return rootReducer;
  });
  const {users} = state;

  const dispatch = useDispatch();

  useEffect(() => {
    getUsers().then(value => {
      dispatch(fetchUsers(value));
    })
  }, [dispatch])

  const onSubmit = (ev) => {
    ev.preventDefault();
    const name = ev.target.name.value;
    const user = {name};
    addUser(user).then(value => dispatch(pushUser(value)));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name={'name'}/>
        <button>add user</button>
      </form>
      <br/>
      {users.map(value => <div key={value.id}>{value.id} - {value.name}</div>)}
    </div>
  );
}

export default App;
