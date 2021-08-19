import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api";
import User from "../user/User";

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(({data}) => setUsers([...data]));
    })
  return (
    <div>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        {users.map(value => <User key={value.id} item={value}/>)}
    </div>
  );
}