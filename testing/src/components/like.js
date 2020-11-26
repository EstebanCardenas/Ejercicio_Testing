import {React, useState} from 'react'
import './like.css'

function Like() {
    const [likes, setLikes] = useState(0)

    return (
        <div>
            <p>Likes: {likes}</p>
            <button 
                id="increment"
                onClick={() => setLikes(likes+1)}
            >
                Like
            </button>
            <button
                id="decrement"
                onClick={() => setLikes(likes-1)}
            >
                {" "}
                Dislike
            </button>
        </div>
    )
}

export default Like