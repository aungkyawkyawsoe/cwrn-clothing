import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from '../actions/types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/FirebaseUtils';
import { fetchCollectionsSuccess } from '../actions/shopActions';

export function* fetchCollectionsAsync() {
    yield console.log("I am fired"); 

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );

        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error){
        yield put(fetchCollectionsStart(error.message));
    }   
}

export function* fetchCollectionsStart() { 
    yield takeLatest(
        FETCH_COLLECTIONS_START, 
        fetchCollectionsAsync
    );
}


