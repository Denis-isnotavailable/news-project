import { useEffect } from "react";
import { useState } from "react";
import { fetchComments } from "redux/operations";


const DiscussionArea = ({kids = []}) => {
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

    console.log(comments);

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
                <button
                    type="button"                    
                >
                    no discussion yet ({kids.length})
                </button>
            }
            {!isDiscussionOpen ||
                <ul>{
                    comments.map(com => {
                        const time = new Date(com.time + 1500000000000);
                        const date = time.toString().split(' ').slice(1, 5);
                        return (
                            <li key={com.id} style={{ paddingLeft: '36px' }}>
                                <div>
                                    <p>Author: {com.by}</p>
                                    <p>{date.join(' ')}</p>
                                </div>
                                <p>{com.text}</p>
                                <p>---------------------------------------------------</p>
                                {!com.kids || <DiscussionArea commentId={com.id} kids={com?.kids}/>}

                            </li>)
                    })
                }</ul>
            }
            
        </>
        
    );
}

export default DiscussionArea;