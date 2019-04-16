import React from 'react';

const item = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>{props.imageUrl}</p>
        </div>
    );
};

export default item;