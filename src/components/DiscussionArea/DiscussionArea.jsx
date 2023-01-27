import { useEffect } from "react";
import { useState } from "react";
import { fetchComments } from "redux/operations";


const DiscussionArea = ({commentId, kids = []}) => {
    const [comments, setComments] = useState([]);
    const [isDiscussionOpen, setIsDiscussionOpen] = useState(false);

    useEffect(() => {
        const fetchPost = async () => {
            // const data = await fetchOnePost(commentId);
            const comData = await fetchComments(kids);
            // setPost(data)
            setComments(comData);
        }

        fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // console.log(comments);

    return (
        <>

            { kids.length !== 0 ?
                <button
                    type="button"
                    onClick={() => setIsDiscussionOpen(prev => !prev)}
                >
                    open discussion ({kids.length})
                </button>
                :
                <p>no discussion yet</p>
            }
            {!isDiscussionOpen ||
                <ul>{
                    comments.map(com => {
                        return (<li key={com.id}>{ com.text }</li>)
                    })
                }</ul>
            }
            
        </>
        
    );
}

export default DiscussionArea;