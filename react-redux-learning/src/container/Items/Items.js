import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';

import Item from '../../component/Item/Item';

const items = props => {
    // []指定でcoponent did mount
    useEffect(() => {
        props.onGetItems();
        console.log('items');
    }, []);

    let itemList = (
        <div>
            読み込み中
        </div>
    );

    if (props.items) {
        itemList = Object.keys(props.items).map( key =>
            <React.Fragment key={key}>
                <Item 
                    itemId={props.items[key].itemId} 
                    name={props.items[key].name} 
                    description={props.items[key].description} 
                    itemUrl={props.items[key].itemUrl} />
            </React.Fragment>
        );
    }

    return (
        <div>
            {itemList}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        items: state.items.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetItems: () => dispatch(actions.getItems())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(items);