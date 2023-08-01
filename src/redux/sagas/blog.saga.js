import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* blogSaga() {
    yield takeEvery ('FETCH_BLOG', fetchBlog);
    yield takeEvery ('ADD_BLOG', addBlog);
    yield takeEvery ('EDIT_BLOG', editBlog);
}

// CREATE
function * addBlog(action) {
    try{
        yield axios.post(`/api/blog`, action.payload);
        yield put({ type: 'FETCH_BLOG'});
        if (action.history) {
            //redirect back to blog list page
            navigate('/blog');
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

// UPDATE
function * editBlog(action) {
    try {
        yield axios.put(`/api/blog/${action.payload.id}`, action.payload);
        if (action.history) {
            action.history.goBack();
        }
    }catch (e) {
        console.log('Error in Blog Saga UPDATE', e);
    }
}

export default blogSaga