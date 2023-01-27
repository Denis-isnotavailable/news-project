import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchPosts } from "redux/operations";
import { MainPageStyled } from "./MainPage.styled";



const MainPage = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts()); 
    }, [dispatch]);

    // console.log(posts);  

    return (
        <MainPageStyled>
            {
                posts.map(post => {
                    const time = new Date(post.time + 1500000000000);
                    const date = time.toString().split(' ').slice(1, 5);                    
                    
                    return (
                        <NavLink
                            key={post.id}
                            to={`${post.id}`}
                            style={{textDecoration: "none", color: "#000000"}}
                        >
                            <li>
                                <h2>{post.title}</h2>
                                <div>
                                    <p>Author: <span>{post.by}</span></p>
                                    <p>Rating: <span>{post.score}</span></p>
                                    <p>Public date: <span>{date.join(' ')}</span></p>
                                </div>
                            </li> 
                        </NavLink>
                                      
                    )
                })
            }
        </MainPageStyled>
    );
}

export default MainPage;




// fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    //     .then(response => response.json())
    //     .then(data => {
    //         const quontity = data.length < 100 ? data.length : 100;
    //         for (let i = 0; i < quontity; i++) {
    //             fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`)
    //                 .then(response => response.json())
    //                 .then(data => console.log(data))
    //                 .catch(error => console.log(error));                
    //         }
    //         console.log(data)
    //     })
    //     .catch(error => console.log(error));
    
    // fetch("https://hacker-news.firebaseio.com/v0/item/34520461.json?print=pretty")
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));
    
    // fetch("https://hacker-news.firebaseio.com/v0/item/34521193.json?print=pretty")
    //     .then(response => response.json())
    //     .then(data => console.log('kids: ' ,data))
    //     .catch(error => console.log(error));
    
    
    // 34521193
    
    //  https://hacker-news.firebaseio.com/v0/item/34520031.json?print=pretty