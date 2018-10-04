import { CHANGE_THEME_COLOR } from '../actions/theme';

const initialState = {
    color: '#4f6d7a',
}

export const theme = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME_COLOR:
            return {
                ...state,
                color: action.color,
            };
        default:
            return state;
    }
}