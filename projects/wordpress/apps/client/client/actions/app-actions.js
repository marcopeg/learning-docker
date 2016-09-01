
export const SET_POSTS = 'setPosts@app';

export function setPosts(posts) {
    return {
        type: SET_POSTS,
        posts,
    };
}
