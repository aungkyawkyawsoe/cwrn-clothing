import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../CollectionsOverview/CollectionsOverview';
import Collection from '../../pages/Collection/Collection';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/FirebaseUtils';
import { updateCollections } from '../../redux/actions/shopActions';
import WithSpinner from '../WithSpinner/WithSpinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection)

class Shop extends React.Component {  
    
    state = { 
        loading: true
    };

    unsubscribeFromSpanshot = null;
    
    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSpanshot = collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div className='shop-page'>
               <Route exact path={`${match.path}`} render={ props => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/> } />           
               <Route exact path={`${match.path}/:categoryId`}  render={ props => <CollectionPageWithSpinner isLoading={loading} {...props}/> }/>
            </div>
        )
    }    
};


export default connect(null, { updateCollections })(Shop);
