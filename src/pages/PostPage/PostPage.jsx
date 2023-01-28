import DiscussionArea from "components/DiscussionArea/DiscussionArea";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchComments, fetchOnePost } from "redux/operations";
import { AuthorContainer, BackButton, CommentsContainer, PostPageStyled, TextContainer } from "./PostPage.styled";


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

    // console.log(comments);
    // console.log(post);

    const updateComments = async () => {
        const data = await fetchOnePost(id);
        const comData = await fetchComments(data.kids);
        setPost(data)
        setComments(comData);
    }
    

    return (
        <>
            {!post.title ? <div>Loading...</div> :
                <PostPageStyled>
                    <BackButton to={'/'} >Go Back</BackButton>

                    <h2>{post.title}</h2>
                    <a href={post.url}>{post.url}</a>

                    <TextContainer>
                        <p>Author: {post.by}</p>
                        <p>Post date: {date.join(' ')}</p>
                    </TextContainer>

                    <CommentsContainer>
                        <h3>Comments ({post.kids ? post.kids?.length : 0})</h3>
                        <button type="button" onClick={updateComments}>Update comments</button>
                    </CommentsContainer> 

                    <ul>
                        {comments.map(comment => {
                            const time = new Date(comment.time + 1500000000000);
                            const date = time.toString().split(' ').slice(1, 5);
                            return (
                                <li key={comment.id}>
                                    <AuthorContainer>
                                        <p>Author: {comment.by}</p>
                                        <p>{date.join(' ')}</p>
                                    </AuthorContainer>
                                    <p>{comment.text}</p>
                                    <p>{!(comment.dead || comment.deleted) || <>comment was deleted</>}</p>

                                    <DiscussionArea commentId={comment.id} kids={comment?.kids} />
                            
                                </li>
                            );
                        })}
                    </ul>
                </PostPageStyled>
            }
        </>
    );
}

export default PostPage;