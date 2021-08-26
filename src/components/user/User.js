// import {Link} from "react-router-dom";
import {useHistory} from "react-router";

export default function User({item}) {
  const history = useHistory();
  const navigate = () => {
    history.push('/users/' + item.id, item);
  }

  return (
    <div>
        {item.name} - <button onClick={navigate}>user details</button>
      {/*<Link to={{pathname: '/users/' + item.id}}>user details</Link>*/}
    </div>
  );
}