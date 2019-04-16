import * as actionTypes from './actionTypes';

export const getItems = () => {
    console.log('async start');
    return dispatch => {
        get().then(response => {
            console.log(response);
            dispatch(response);
        });
    };
};

const get = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(responseObject), 2000);
    });
};

const responseObject = {
    type: actionTypes.GET_ITEMS,
    items: [
        {
            itemId: 1,
            name: '小豆コッペ',
            description: '北海道小豆',
            imageUrl: 'assets/items/image/ogura.jpg'
        },
        {
            itemId: 2,
            name: 'いちごコッペ',
            description: 'いちごたっぷり',
            imageUrl: 'assets/items/image/ogura.jpg'
        }
    ]
};
