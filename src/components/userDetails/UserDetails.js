import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getUser} from "../../services/user.api";
import UserDetailsDisplay from "../userDetailsDisplay/UserDetailsDisplay";

export default function UserDetails() {
  const {id: userId} = useParams('id');
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(userId).then(value => setUser({...value}));
  }, [userId]);


  return (
    <div>
        <UserDetailsDisplay item={user}/>
    </div>
  );
}