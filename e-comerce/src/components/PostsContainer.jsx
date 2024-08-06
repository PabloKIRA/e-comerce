import React, { useEffect, useState } from 'react'
import logo from '../assets/react.svg'


const PostsContainer = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        fetch('./prods.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(posts => {
                setPosts(posts);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            }).finally(()=>setLoading(false));
    }, [])

    return (


        <div>
            <img src='./vite.svg' alt="se ve bien?" />
            {
                posts?.map(post => {
                    return (
                        <p key={post.id}>{post.title}</p>
                    )
                })
            }

        </div>
    )
}

export default PostsContainer