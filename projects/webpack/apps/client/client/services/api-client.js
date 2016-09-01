
import request from 'superagent';

export function fetchIndex() {
    return (dispatch, getState) => {
        console.log("FETCH INDEX111");
        request.get('/api/').end((err, res) => {
            console.log("FETCH DONE");
            console.log(err);
            console.log(res);
        })
    }
}
