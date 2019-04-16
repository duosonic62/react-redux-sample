import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: null
};

// 非同期処理をまつ
const getItems = (state, action) => {
    return {
        ...state,
        items: action.items
    };
};

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case actionTypes.GET_ITEMS: return getItems(state, action);
        default: return state;
    }
};

export default reducer;