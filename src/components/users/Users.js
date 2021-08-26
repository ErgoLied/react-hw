import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/user.api";
import UserDetails from "../userDetails/UserDetails";
import {Route} from "react-router-dom";

export default function Users(props) {
    const {match: {url}, history} = props;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]));
    }, []);

    return (
        <div className={'wrap'}>
            <div className={'info-box'}>
                {users.map(value => <User history={history} key={value.id} item={value}/>)}
            </div>

            <Route path={`${url}/:id`} render={(props) => {
                return <UserDetails {...props}/>
            }
            }/>
        </div>
    );
}