import { CardDetailsTypes } from '../stores/CardDetails/Actions';
import { all, takeLatest } from 'redux-saga/effects';

import {
    fetchCardDetails,
    setDebitCardLimit,
    spendingLimitToggle
} from './CardDetailsSaga';



export default function* root() {
    yield all([
            takeLatest(CardDetailsTypes.GET_CARD_DETAILS, fetchCardDetails),
            takeLatest(CardDetailsTypes.SET_DEBITCARD_LIMIT, setDebitCardLimit),
            takeLatest(CardDetailsTypes.SPENDING_LIMIT_TOGGLE, spendingLimitToggle),
           ]);
}
