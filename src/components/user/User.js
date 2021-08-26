import {Link} from "react-router-dom";

export default function User({item}) {
  return (
    <div>
        {item.name} - <Link to={{pathname: '/users/' + item.id}}>user details</Link>
    </div>
  );
}