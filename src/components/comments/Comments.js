import {useEffect, useState} from "react";
import {getComments} from "../../services/users.api";
import Comment from "../comment/Comment";

export default function Comments() {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(({data}) => setComments([...data]));
    })
  return (
    <div>
        {comments.map(value => <Comment key={value.id} item={value}/>)}
    </div>
  );
}