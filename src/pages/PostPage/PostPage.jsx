import DiscussionArea from "components/DiscussionArea/DiscussionArea";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments, fetchOnePost } from "redux/operations";
import { PostPageStyled } from "./PostPage.styled";


const PostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const time = new Date(post.time + 1500000000000);
    const date = time.toString().split(' ').slice(1, 5);    

    useEffect(() => {
        const fetchPost = async () => {
            const data = await fetchOnePost(id);
            const comData = await fetchComments(data.kids);
            setPost(data)
            setComments(comData);
        }

        fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(comments);
    // console.log(post);
    

    return (
        <PostPageStyled>
            <h2>{post.title}</h2>
            <a href={post.url}>{post.url}</a>
            <p>Post date: {date.join(' ')}</p>
            <p>Author: {post.by}</p>
            <h3>Comments ({post.kids ? post.kids?.length : 0})</h3>            
            <ul>
                {comments.map(comment => {
                    const time = new Date(comment.time + 1500000000000);
                    const date = time.toString().split(' ').slice(1, 5);
                    return (
                        <li key={comment.id}>
                            <div>
                                <p>Author: {comment.by}</p>
                                <p>{date.join(' ')}</p>
                            </div>
                            <p>{comment.text}</p>
                            <p>{ !(comment.dead || comment.deleted) || <>comment was deleted</>  }</p>                            

                            <DiscussionArea commentId={comment.id} kids={comment?.kids} />
                            
                        </li>
                    );
                })}
            </ul>
        </PostPageStyled>
    );
}

export default PostPage;