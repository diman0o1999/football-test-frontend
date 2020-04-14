import constants from "../constants";
import {fetchAuthor} from "./authors_api";


export const fetchPosts = async () => {
    const res = await fetch(`${constants.BASE_URL}/posts`)
    if (!res.ok)
        throw new Error('Couldn\'t fetch posts')
    const posts = await res.json()
    for (const post of posts)
        post.author = await fetchAuthor(post.userId)
    return posts
}