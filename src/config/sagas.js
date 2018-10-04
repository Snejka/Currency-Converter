//1. Swap currency
//2. Base Currency Change
//3. Initial Request
import { takeEvery, select, call, put } from 'redux-saga/effects';

import { 
    SWAP_CURRENCY, 
    CHANGE_BASE_CURENCY, 
    GET_INITIAL_CONVERSION, 
    CONVERSION_SUCCESS, 
    CONVERSION_ERROR 
} from '../actions/currencies'


//Fetch Requests
const getLatestRate = currency => fetch(`http://fixer.handlebarlabs.com/latest?base=${currency}`)

//Worker Saga
function* fetchLatestConversionRates(action) {

    try {
        let currency = (action.currency) ? action.currency 
                                         : yield select( state => state.currencies.baseCurrency);
                                        // select gives us access to redux store !!!

        //call help us to do a Request easy for Testing - returns an Obj
        // takes: finction to call and parameter to be called with
        const response = yield call(getLatestRate, currency);
        const result = yield response.json();

        if (result.error) {
            //put gives us the option to call an action with payload and it's easy for Testing
            yield put({ type: CONVERSION_ERROR, error: result.error });
        } else {
            yield put({ type: CONVERSION_SUCCESS, result });
        }      

    } catch (error) {
        yield put({ type: CONVERSION_ERROR, error: error.message });
    }
}

//Listener Saga
export default function* rootSaga () {
    // Listen for Action and execute a function every time when it is called with acction as param
    yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
    //We can listen for more than one action in same worker and send it to same listener
    yield takeEvery(CHANGE_BASE_CURENCY, fetchLatestConversionRates);
    yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
};