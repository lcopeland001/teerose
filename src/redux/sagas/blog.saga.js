import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects'

// READ
function* fetchBlog() {
    try {
        const blogResponse = yield axios.get('api/blog');
        yield put({ type: 'SET_BLOG', payload: blogResponse.data })
    } catch (error) {
        console.log('Error Fetching Blogs', error);
        alert('Something went wrong!');
    }
} 

function* blogSaga() {
    yield takeLatest('FETCH_BLOG', fetchBlog);
}

export default blogSaga;