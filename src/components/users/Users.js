import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/user.api";
import UserDetails from "../userDetails/UserDetails";
import {Route} from "react-router-dom";

export default function Users(props) {
    const {match:{url}} = props;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}

            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetails {...props}/>
            }
            }/>
        </div>
    );
}