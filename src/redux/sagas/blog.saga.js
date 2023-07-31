import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* blogSaga() {
    yield takeEvery ('FETCH_BLOG', fetchBlog);
}

// CREATE
function * addBlog(action) {
    try{
        yield axios.post(`/api/blog`, action.payload);
        yield put({ type: 'FETCH_BLOG'});
        if (action.history) {
            //redirect back to blog list page
            action.history.push('/blogform');
        }
    }catch (e) {
        console.log('Error in Saga CREATE', e);
    }
}

// READ
function* fetchBlog() {
    try {
        const blog = yield axios.get('/api/blog');
        yield put({ type: 'SET_BLOG', payload: blog.data });
    } catch (e) {
        console.log('Error in Saga READ', e);
        alert('Something went wrong in Fetch Blog!');
    }
} 

export default blogSaga