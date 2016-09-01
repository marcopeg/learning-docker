
import request from 'superagent';
import { setPosts } from 'actions/app-actions';

export function fetchIndex() {
    return dispatch => {
        request.get('/api/').end((err, res) => {
            if (err) {
                alert('failed to get posts');
                return;
            }
            dispatch(setPosts(res.body));
        });
    }
}
