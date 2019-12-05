import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/actions/shopActions';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer';
import CollecttionPageContainer from '../Collection/CollectionContainer';

class Shop extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props;

        fetchCollectionsStart();
    }

    render() {
        const { match } = this.props;

        return (
            <div className='shop-page'>
                <Route exact
                    path={`${match.path}`}
                    component={CollectionsOverviewContainer}
                />
                <Route exact
                    path={`${match.path}/:categoryId`}
                    component={CollecttionPageContainer} 
               />
            </div>
        )
    }
};

export default connect(null, { fetchCollectionsStart })(Shop);
