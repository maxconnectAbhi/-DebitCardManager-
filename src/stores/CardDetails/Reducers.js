import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { CardDetailsTypes } from './Actions'


export const getCardDetailsLoading = (state) => ({
    ...state,
    getCardDetailsLoader: true
});

export const getCardDetailsSuccess = (state, { payload }) => ({
    ...state,
    cardDetails: payload,
    getCardDetailsLoader: false
});

export const getCardDetailsFailure = (state) => ({
    ...state,
    getCardDetailsLoader: false,
    cardDetails: []
});


export const doNothing = (state) => ({
    ...state
});


export const setCardLimit = (state, { payload }) => ({
    ...state,
    cardLimit: payload
});

export const spendingLimitToggle = (state, { payload }) => ({
    ...state,
    spendingLimitToggle: payload
});

export const reducer = createReducer(INITIAL_STATE, {
    [CardDetailsTypes.GET_CARD_DETAILS_LOADING]    : getCardDetailsLoading,
    [CardDetailsTypes.GET_CARD_DETAILS_SUCCESS]    : getCardDetailsSuccess,
    [CardDetailsTypes.GET_CARD_DETAILS_FAILURE]    : getCardDetailsFailure,
    [CardDetailsTypes.DO_NOTHING]             : doNothing,
    [CardDetailsTypes.SPENDING_LIMIT_TOGGLE]             : spendingLimitToggle,
    [CardDetailsTypes.SET_CARD_LIMIT]             : setCardLimit,

});
