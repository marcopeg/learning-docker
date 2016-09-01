
import React from 'react';
import { connect } from 'react-redux';

// ReactBoostrap components:
import Grid from 'react-bootstrap/lib/Grid';

import { fetchIndex } from 'services/api-client';

import PostIndexItem from 'components/PostIndexItem';

const STYLES = {
    grid: {
        marginTop: 50,
    },
};

@connect(s => s.app)
export default class App extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        posts: React.PropTypes.array,
    }

    componentWillMount() {
        var { dispatch } = this.props;
        dispatch(fetchIndex())
    }

    render() {

        var index = this.props.posts.map(post => <PostIndexItem {...post} />);

        return (
            <Grid style={STYLES.grid}>
                <h3>{this.props.posts.length} posts found</h3>
                {index}
            </Grid>
        );
    }
}
