import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* blogSaga() {
    yield takeEvery ('FETCH_BLOG', fetchBlog);
}

// READ
function* fetchBlog() {
    try {
        const blog = yield axios.get('/api/blog');
        yield put({ type: 'SET_BLOG', payload: blog.data });
    } catch (error) {
        console.log('Error Fetching Blogs', error);
        alert('Something went wrong!');
    }
} 

export default blogSaga