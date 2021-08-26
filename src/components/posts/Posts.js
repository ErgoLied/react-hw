import {useEffect, useState} from "react";
import {getPosts} from "../../services/post.api";
import {Route} from "react-router-dom";
import Post from "../post/Post";
import PostDetails from "../postDetails/PostDetails";

export default function Posts(props) {
    const {match: {url}} = props;
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts().then(value => setPosts([...value]));
    }, []);

    return (
        <div className={'wrap'}>
            <div className={'info-box'}>
                {posts.map(value => <Post key={value.id} item={value}/>)}
            </div>

            <Route path={`${url}/:id`} render={(props) => {
                return <PostDetails {...props}/>
            }
            }/>
        </div>
    );
}