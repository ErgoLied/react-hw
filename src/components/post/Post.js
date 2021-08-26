import {Link} from "react-router-dom";

export default function Post({item}) {
  return (
    <div>
        {item.id} {item.title} - <Link to={{pathname: '/posts/' + item.id}}>post details</Link>
    </div>
  );
}