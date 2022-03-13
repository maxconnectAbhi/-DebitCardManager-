import { put } from 'redux-saga/effects';
import CardActions from '../stores/CardDetails/Actions';
import { HelperService } from '../utils/HelperService';


export function* fetchCardDetails({}) {
	try {
	} catch (error) {
		yield put(CardActions.getCardDetailsFailure())
		HelperService.showToast({ message: error });
	}
}

export function* setDebitCardLimit({payload}) {
	try {
	  yield put(CardActions.setCardLimit(payload))
     } catch (error) {
	   HelperService.showToast({ message: error });
	}
}

export function* spendingLimitToggle({payload}) {
	try {
	  yield put(CardActions.spendingLimitToggle(payload))
     } catch (error) {
	   HelperService.showToast({ message: error });
	}
}