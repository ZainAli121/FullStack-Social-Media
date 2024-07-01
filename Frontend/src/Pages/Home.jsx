import React, {useEffect, useState} from "react";
import Posts from "../components/Posts/Posts";
import api from "../api";

export default function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        api.get('/api/get_posts/')
        .then((response) => {
            setPosts(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, [])
    return (
        <>
        <Posts posts={posts}/>
        </>
    )
}