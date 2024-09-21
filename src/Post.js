import { useState } from "react";

function Post( {post} ) {
    const [NSFW, setNSFW] = useState(post.NSFW);

    const handleChange = () => {
        setNSFW(!NSFW)
    }

    return (
        <div className="App">
            <h1>{post.title}</h1>
            <img onClick={handleChange} src={NSFW ? "https://cdn0.iconfinder.com/data/icons/glyph-set-two/32/glyph-set-two-18-512.png" : post.imageURL} alt="img"></img>
            <p>{post.text}</p>
        </div>
    );
}

export default Post;
