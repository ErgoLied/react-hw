import {useEffect, useState} from "react";
import {getPosts} from "../../services/users.api";
import Post from "../post/Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(({data}) => setPosts([...data]));
    })
  return (
    <div>
        {posts.map(value => <Post key={value.id} item={value}/>)}
    </div>
  );
}