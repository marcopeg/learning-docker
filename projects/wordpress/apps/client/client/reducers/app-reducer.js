
import { SET_POSTS } from 'actions/app-actions';

export const INITIAL_STATE = {
    title: 'React Client',
    posts: [],
};

export function appReducer(state = INITIAL_STATE, action) {
    var { type } = action;
    switch (type) {
        case SET_POSTS:
            return {
                ...state,
                posts: action.posts,
            }
        default: return state;
    }
}
