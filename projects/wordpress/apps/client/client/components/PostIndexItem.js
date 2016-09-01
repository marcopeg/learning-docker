
import React from 'react';

export default class PostIndexItem extends React.Component {

    static propTypes = {
        id: React.PropTypes.number,
        title: React.PropTypes.string,
    }

    render() {
        return (
            <div>
                {this.props.id} -  {this.props.title}
            </div>
        );
    }
}
