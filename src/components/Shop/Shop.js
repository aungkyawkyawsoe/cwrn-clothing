import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../CollectionsOverview/CollectionsOverview';
import Collection from '../../pages/Collection/Collection';


const Shop = ({ match }) => {    
    return (
        <div className='shop-page'>
           <Route exact path={`${match.path}`} component={ CollectionsOverview } />           
           <Route exact path={`${match.path}/:categoryId`} component={ Collection }/>
        </div>
    )

}

export default Shop;
