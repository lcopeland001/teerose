const blogPost = (state = [], action) => {
    if (action.type === 'FETCH_BLOG') {
        return action.payload;
    }
    return state;
}
export default blogPost;

