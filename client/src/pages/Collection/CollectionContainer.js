import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/selector/shopSelector';
import WithSpinner from '../../components/WithSpinner/WithSpinner';
import Collection from './Collection';


const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollecttionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection);

export default CollecttionPageContainer;
