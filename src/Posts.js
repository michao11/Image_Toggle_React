import { useEffect, useState } from "react";
import Post from "./Post";
import "./App.css"

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let temp = []

        let post1 = {
            title: "Post 1",
            imageURL: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            text: "Pierwszy post",
            NSFW: false
        }

        let post2 = {
            title: "Post 2",
            imageURL: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
            text: "Drugi post",
            NSFW: true
        }

        temp.push(post1)
        temp.push(post2)

        setPosts([...temp])

    }, [])


    return (
        <div>
            {posts.map((post) =>
                <Post post={post}/>
            )}
        </div>
    );
}

export default Posts;
