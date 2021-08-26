import {useParams} from "react-router";
import {useEffect, useState} from "react";
import {getPost} from "../../services/post.api";
import PostDetailsDisplay from "../postDetailsDisplay/PostDetailsDisplay";

export default function PostDetails() {
    const {id: postId} = useParams('id');
    const [post, setPost] = useState({});

    useEffect(() => {
        getPost(postId).then(value => setPost({...value}));
    }, [postId]);

  return (
    <div>
        <PostDetailsDisplay item={post}/>
    </div>
  );
}